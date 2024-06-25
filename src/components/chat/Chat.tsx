import React, { useState } from "react";
import Head from "../main/head";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import UserList from "./user-list";
import ChatContent, { MessageProps } from "./chat-content";
import InfoBar from "./info-bar";
import { useParams } from "react-router-dom";

// Пример данных для различных чатов
const chatData: { [key: string]: { messages: MessageProps[], info: { filesCount: number, photosCount: number, voicesCount: number, username: string, isOnline: boolean, avatarUrl: string } } } = {
    user1: {
        messages: [
            {
                fileName: "test1.tsx",
                fileSize: "100 MB",
                datetime: new Date().toLocaleString(),
                isMyMessage: true,
                media: "https://i.imgur.com/ufBjnf8.png"
            },
            {
                isMyMessage: false,
                datetime: new Date().toLocaleString(),
                media: "https://s.muzrecord.com/files/eternxlkz-slay.mp3"
            }
        ],
        info: { filesCount: 2, photosCount: 1, voicesCount: 3, username: "User 1", isOnline: true, avatarUrl: "https://i.pravatar.cc/400?user1" }
    },
    user2: {
        messages: [
            {
                fileName: "test2.tsx",
                fileSize: "150 MB",
                datetime: new Date().toLocaleString(),
                isMyMessage: true,
                media: "https://i.imgur.com/ufBjnf8.png"
            },
            {
                isMyMessage: true,
                datetime: new Date().toLocaleString(),
                media: "https://s.muzrecord.com/files/eternxlkz-slay.mp3"
            }
        ],
        info: { filesCount: 4, photosCount: 2, voicesCount: 5, username: "User 2", isOnline: false, avatarUrl: "https://i.pravatar.cc/400?user2" }
    }
};

const Chat: React.FC = () => {
    const { userName } = useParams<{ userName: string }>();
    const [selectedChat, setSelectedChat] = useState(userName || "user1");

    const handleSelectChat = (newUserName: string) => {
        setSelectedChat(newUserName);
    };

    const selectedChatData = chatData[selectedChat];

    return (
        <div className="h-screen w-screen grid grid-rows-[auto_1fr]">
            <Head />
            <ResizablePanelGroup
                direction="horizontal"
                className="flex h-full w-full"
            >
                <ResizablePanel className="p-5 bg-card2" defaultSize={25}>
                    <UserList onSelectChat={handleSelectChat} />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                    <div className="flex flex-col justify-end h-full bg-blobs px-6">
                        {selectedChatData ? (
                            <ChatContent messages={selectedChatData.messages} />
                        ) : (
                            <div>Чат не найден</div>
                        )}
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={25}>
                    <div className="h-full p-6">
                        {selectedChatData ? (
                            <InfoBar {...selectedChatData.info} />
                        ) : (
                            <div>Информация о чате не найдена</div>
                        )}
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}

export default Chat;
