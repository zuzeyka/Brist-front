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

const chatData: { [key: string]: { messages: MessageProps[], info: { filesCount: number, photosCount: number, voicesCount: number, username: string, isOnline: boolean, avatarUrl: string } } } = {
    frostbyte: {
        messages: [
            {
                fileName: "Slust.tsx",
                fileSize: "5 ZB",
                datetime: new Date().toLocaleString(),
                isMyMessage: true,
                media: "https://i.imgur.com/ufBjnf8.png"
            },
            {
                isMyMessage: true,
                datetime: new Date().toLocaleString(),
                text: "Дивись шо зробив"
            },
            {
                isMyMessage: false,
                datetime: new Date().toLocaleString(),
                text: "Вау, я би користувався цим",
                media: "https://i.imgur.com/7Kd964d.png"
            },

            {
                isMyMessage: true,
                datetime: new Date().toLocaleString(),
                text: "Дякую",
                media: "https://i.imgur.com/Sqw9Z5u.png"
            }
        ],
        info: { filesCount: 1, photosCount: 2, voicesCount: 0, username: "frostbyte", isOnline: true, avatarUrl: "https://i.pravatar.cc/400?user1" }
    },
    eisera: {
        messages: [
            {
                media: "https://i.imgur.com/ufBjnf8.png",
                text: "Дивись яке зображення",
                datetime: new Date().toLocaleString(),
                isMyMessage: true
            },
            {
                isMyMessage: false,
                datetime: new Date().toLocaleString(),
                text: "Супер"
            },
            {
                isMyMessage: false,
                datetime: new Date().toLocaleString(),
                text: "А ось моє зображення",
                media: "https://i.imgur.com/5Hds4bh.png"
            },
            {
                isMyMessage: true,
                datetime: new Date().toLocaleString(),
                text: "Класс"
            }
        ],
        info: { filesCount: 0, photosCount: 2, voicesCount: 0, username: "eisera", isOnline: false, avatarUrl: "https://i.pravatar.cc/400?user2" }
    },
    arctiq: {
        messages: [
            {
                datetime: new Date().toLocaleString(),
                isMyMessage: true,
                text: "Дивись який трек зробив"
            },
            {
                isMyMessage: true,
                datetime: new Date().toLocaleString(),
                media: "https://s.muzrecord.com/files/eternxlkz-slay.mp3"
            },
            {
                datetime: new Date().toLocaleString(),
                isMyMessage: false,
                text: "Воу, тут можно скидувати аудіо?"
            },
            {
                datetime: new Date().toLocaleString(),
                isMyMessage: true,
                text: "Ну звичайно",
                media: "https://i.imgur.com/zBGnWYS.png"
            },
            {
                datetime: new Date().toLocaleString(),
                isMyMessage: false,
                text: "OMG"
            },
            {
                fileName: "my.png",
                fileSize: "15 MB",
                datetime: new Date().toLocaleString(),
                isMyMessage: true,
                media: "https://i.imgur.com/ufBjnf8.png"
            },
            {
                datetime: new Date().toLocaleString(),
                isMyMessage: true,
                text: "Навіть так можно"
            },
            {
                datetime: new Date().toLocaleString(),
                isMyMessage: false,
                text: "Це самий классний чат що я знаю"
            }
        ],
        info: { filesCount: 1, photosCount: 1, voicesCount: 1, username: "arctiq", isOnline: true, avatarUrl: "https://i.pravatar.cc/400?user3" }
    },
    coldedge: {
        messages: [
            {
                datetime: new Date().toLocaleString(),
                isMyMessage: false,
                text: "Го очівки фармити?"
            },
            {
                datetime: new Date().toLocaleString(),
                isMyMessage: true,
                text: "го"
            }
        ],
        info: { filesCount: 0, photosCount: 0, voicesCount: 0, username: "coldedge", isOnline: false, avatarUrl: "https://i.pravatar.cc/400?user4" }
    },
    brist: {
        messages: [
            {
                media: "https://i.imgur.com/QBPxaVk.png",
                text: "лис",
                datetime: new Date().toLocaleString(),
                isMyMessage: false
            },
            {
                isMyMessage: true,
                datetime: new Date().toLocaleString(),
                text: "сам малював?"
            },
            {
                isMyMessage: false,
                datetime: new Date().toLocaleString(),
                text: "так"
            },
            {
                media: "https://i.imgur.com/HpZviAT.png",
                text: "nice",
                datetime: new Date().toLocaleString(),
                isMyMessage: true
            }
        ],
        info: { filesCount: 0, photosCount: 2, voicesCount: 0, username: "brist", isOnline: false, avatarUrl: "https://i.pravatar.cc/400?user5" }
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
