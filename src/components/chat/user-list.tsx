import React from "react";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { useTranslation } from "react-i18next";
import ChatPreviev from "./elements/chat-previev";

export interface ChatSummary {
    chatId: string;
    otherUserId: string;
    otherUserName: string;
    otherUserAvatar?: string;
}

interface UserListProps {
    chats: ChatSummary[];
    selectedChatId: string | null;
    onSelectChat: (chatId: string) => void;
}

const UserList: React.FC<UserListProps> = ({ chats, selectedChatId, onSelectChat }) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col mx-auto h-full w-full">
            <Command className="h-full w-full max-h-full">
                <CommandInput placeholder={t('chat.searchChats')} />
                <CommandList className="h-full w-full max-h-full bg-card2">
                    <CommandEmpty>{t('settings.nothingFound')}</CommandEmpty>
                    {chats.map((chat) => (
                        <CommandItem
                            key={chat.chatId}
                            className={`bg-card2 ${chat.chatId === selectedChatId ? '!bg-cardLight25' : ''}`}
                            onSelect={() => onSelectChat(chat.chatId)}
                        >
                            <ChatPreviev name={chat.otherUserName} avatar={chat.otherUserAvatar} />
                        </CommandItem>
                    ))}
                </CommandList>
            </Command>
        </div>
    );
}

export default UserList;
