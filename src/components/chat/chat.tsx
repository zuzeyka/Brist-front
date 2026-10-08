import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Head from "../main/head";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import UserList, { ChatSummary } from "./user-list";
import ChatContent, { MessageProps } from "./chat-content";
import InfoBar from "./info-bar";
import { useParams } from "react-router-dom";
import { useAuth, useRequireAuth } from "../authorization/auth-context";

interface ChatDto {
    id: string;
    firstUser: string;
    secondUser: string;
    createdAt?: string;
}

interface MessageDto {
    id: string;
    chatId: string;
    senderId: string;
    content?: string;
    createdAt?: string;
}

interface UserDto {
    id: string;
    name: string;
    image?: string;
}

const formatTime = (value?: string) => {
    if (!value) return '';
    const date = new Date(value);
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

const Chat: React.FC = () => {
    const { t } = useTranslation();
    const ready = useRequireAuth();
    const { userId } = useAuth();
    const { userName } = useParams<{ userName: string }>();
    const [chats, setChats] = useState<ChatSummary[]>([]);
    const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
    const [messages, setMessages] = useState<MessageProps[]>([]);

    // Loads the caller's real chats and, if the route names a specific user,
    // either selects the existing conversation with them or creates a new one.
    useEffect(() => {
        if (!userId) return;
        let cancelled = false;

        async function load() {
            try {
                const chatsRes = await fetch(`http://localhost:5049/api/Chat/byuserid/${userId}`, { credentials: 'include' });
                const chatRows = chatsRes.ok ? await chatsRes.json() as ChatDto[] : [];

                const summaries = await Promise.all(chatRows.map(async (c): Promise<ChatSummary> => {
                    const otherUserId = c.firstUser === userId ? c.secondUser : c.firstUser;
                    const r = await fetch(`http://localhost:5049/api/User/getbyuid/${otherUserId}`, { credentials: 'include' });
                    const u = r.ok ? await r.json() as UserDto : undefined;
                    return { chatId: c.id, otherUserId, otherUserName: u?.name ?? '', otherUserAvatar: u?.image };
                }));

                let finalChats = summaries;
                let initialSelected = summaries[0]?.chatId ?? null;

                if (userName) {
                    const existing = summaries.find((s) => s.otherUserName === userName);
                    if (existing) {
                        initialSelected = existing.chatId;
                    } else {
                        const usersRes = await fetch('http://localhost:5049/api/User', { credentials: 'include' });
                        const users = usersRes.ok ? await usersRes.json() as UserDto[] : [];
                        const target = users.find((u) => u.name === userName);
                        if (target && target.id !== userId) {
                            const createRes = await fetch('http://localhost:5049/api/Chat', {
                                method: 'POST',
                                credentials: 'include',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ firstUser: userId, secondUser: target.id }),
                            });
                            if (createRes.ok) {
                                const created = await createRes.json() as ChatDto;
                                const newSummary: ChatSummary = {
                                    chatId: created.id, otherUserId: target.id,
                                    otherUserName: target.name, otherUserAvatar: target.image,
                                };
                                finalChats = [newSummary, ...summaries];
                                initialSelected = created.id;
                            }
                        }
                    }
                }

                if (!cancelled) {
                    setChats(finalChats);
                    setSelectedChatId(initialSelected);
                }
            } catch (error) {
                console.log('Fetch chats error:', error);
            }
        }

        load();
        return () => { cancelled = true; };
    }, [userId, userName]);

    // Polls rather than pushing over a socket — simplest way to surface the
    // other participant's replies without building real-time infrastructure.
    useEffect(() => {
        if (!selectedChatId) {
            setMessages([]);
            return;
        }
        let cancelled = false;

        async function loadMessages() {
            try {
                const res = await fetch(`http://localhost:5049/api/Message/bychat/${selectedChatId}`, { credentials: 'include' });
                if (!res.ok) return;
                const rows = await res.json() as MessageDto[];
                if (cancelled) return;
                setMessages(rows.map((m) => ({
                    datetime: formatTime(m.createdAt),
                    text: m.content,
                    isMyMessage: m.senderId === userId,
                })));
            } catch (error) {
                console.log('Fetch messages error:', error);
            }
        }

        loadMessages();
        const interval = setInterval(loadMessages, 3000);
        return () => { cancelled = true; clearInterval(interval); };
    }, [selectedChatId, userId]);

    const handleSend = async (text: string) => {
        if (!selectedChatId || !userId) return;
        try {
            const res = await fetch('http://localhost:5049/api/Message', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chatId: selectedChatId, senderId: userId, content: text }),
            });
            if (!res.ok) throw new Error('Network response was not ok');
            const created = await res.json() as MessageDto;
            setMessages((prev) => [...prev, {
                datetime: formatTime(created.createdAt),
                text: created.content,
                isMyMessage: true,
            }]);
        } catch (error) {
            console.log('Send message error:', error);
        }
    };

    const selectedChat = chats.find((c) => c.chatId === selectedChatId);

    if (!ready) return null;

    return (
        <div className="h-screen w-screen grid grid-rows-[auto_1fr]">
            <Head />
            <ResizablePanelGroup
                direction="horizontal"
                className="flex h-full w-full"
            >
                <ResizablePanel className="p-5 bg-card2" defaultSize={25}>
                    <UserList chats={chats} selectedChatId={selectedChatId} onSelectChat={setSelectedChatId} />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                    <div className="flex flex-col justify-end h-full bg-blobs px-6">
                        {selectedChat ? (
                            <ChatContent messages={messages} onSend={handleSend} />
                        ) : (
                            <div>{t('chat.notFound')}</div>
                        )}
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={25}>
                    <div className="h-full p-6">
                        {selectedChat ? (
                            <InfoBar
                                username={selectedChat.otherUserName}
                                avatarUrl={selectedChat.otherUserAvatar}
                                filesCount={0}
                                photosCount={0}
                                voicesCount={0}
                                isOnline={false}
                            />
                        ) : (
                            <div>{t('chat.infoNotFound')}</div>
                        )}
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}

export default Chat;
