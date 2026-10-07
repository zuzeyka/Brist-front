import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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

const useChatData = (): { [key: string]: { messages: MessageProps[], info: { filesCount: number, photosCount: number, voicesCount: number, username: string, isOnline: boolean, avatarUrl: string } } } => {
    const { t } = useTranslation();
    return {
        MrsZubarikessa: {
            messages: [
                {
                    fileName: "Slust.tsx",
                    fileSize: "5 ZB",
                    datetime: "10:30",
                    isMyMessage: true,
                    media: "https://i.imgur.com/ufBjnf8.png"
                },
                {
                    isMyMessage: true,
                    datetime: "10:30",
                    text: t('chat.mock.mz1')
                },
                {
                    isMyMessage: false,
                    datetime: "10:30",
                    text: t('chat.mock.mz2'),
                    media: "https://i.imgur.com/7Kd964d.png"
                },

                {
                    isMyMessage: true,
                    datetime: "10:30",
                    text: t('chat.mock.mz3'),
                    media: "https://i.imgur.com/Sqw9Z5u.png"
                }
            ],
            info: { filesCount: 1, photosCount: 2, voicesCount: 0, username: "MrsZubarikessa", isOnline: true, avatarUrl: "https://i.pravatar.cc/400?user1" }
        },
        FirePhoenix: {
            messages: [
                {
                    media: "https://i.imgur.com/ufBjnf8.png",
                    text: t('chat.mock.fp1'),
                    datetime: "10:30",
                    isMyMessage: true
                },
                {
                    isMyMessage: false,
                    datetime: "10:30",
                    text: t('chat.mock.fp2')
                },
                {
                    isMyMessage: false,
                    datetime: "10:30",
                    text: t('chat.mock.fp3'),
                    media: "https://i.imgur.com/5Hds4bh.png"
                },
                {
                    isMyMessage: true,
                    datetime: "10:30",
                    text: t('chat.mock.fp4')
                }
            ],
            info: { filesCount: 0, photosCount: 2, voicesCount: 0, username: "FirePhoenix", isOnline: false, avatarUrl: "https://i.pravatar.cc/400?user2" }
        },
        DragonSlayer: {
            messages: [
                {
                    datetime: "10:30",
                    isMyMessage: true,
                    text: t('chat.mock.ds1')
                },
                {
                    isMyMessage: true,
                    datetime: "10:30",
                    media: "https://s.muzrecord.com/files/eternxlkz-slay.mp3"
                },
                {
                    datetime: "10:30",
                    isMyMessage: false,
                    text: t('chat.mock.ds2')
                },
                {
                    datetime: "10:30",
                    isMyMessage: true,
                    text: t('chat.mock.ds3'),
                    media: "https://i.imgur.com/zBGnWYS.png"
                },
                {
                    datetime: "10:30",
                    isMyMessage: false,
                    text: "OMG"
                },
                {
                    fileName: "my.png",
                    fileSize: "15 MB",
                    datetime: "10:30",
                    isMyMessage: true,
                    media: "https://i.imgur.com/ufBjnf8.png"
                },
                {
                    datetime: "10:30",
                    isMyMessage: true,
                    text: t('chat.mock.ds4')
                },
                {
                    datetime: "10:30",
                    isMyMessage: false,
                    text: t('chat.mock.ds5')
                }
            ],
            info: { filesCount: 1, photosCount: 1, voicesCount: 1, username: "DragonSlayer", isOnline: true, avatarUrl: "https://i.pravatar.cc/400?user3" }
        },
        TitanCrusher: {
            messages: [
                {
                    datetime: "10:30",
                    isMyMessage: false,
                    text: t('chat.mock.tc1')
                },
                {
                    datetime: "10:30",
                    isMyMessage: true,
                    text: t('chat.mock.tc2')
                }
            ],
            info: { filesCount: 0, photosCount: 0, voicesCount: 0, username: "TitanCrusher", isOnline: false, avatarUrl: "https://i.pravatar.cc/400?user4" }
        },
        BlazingArrow: {
            messages: [
                {
                    media: "https://i.imgur.com/QBPxaVk.png",
                    text: t('chat.mock.ba1'),
                    datetime: "10:30",
                    isMyMessage: false
                },
                {
                    isMyMessage: true,
                    datetime: "10:30",
                    text: t('chat.mock.ba2')
                },
                {
                    isMyMessage: false,
                    datetime: "10:30",
                    text: t('chat.mock.ba3')
                },
                {
                    media: "https://i.imgur.com/HpZviAT.png",
                    text: "nice",
                    datetime: "10:30",
                    isMyMessage: true
                }
            ],
            info: { filesCount: 0, photosCount: 2, voicesCount: 0, username: "BlazingArrow", isOnline: false, avatarUrl: "https://i.pravatar.cc/400?user5" }
        }
    };
};

const Chat: React.FC = () => {
    const { t } = useTranslation();
    const chatData = useChatData();
    const { userName } = useParams<{ userName: string }>();
    const [selectedChat, setSelectedChat] = useState(userName || "MrsZubarikessa");

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
                            <div>{t('chat.notFound')}</div>
                        )}
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={25}>
                    <div className="h-full p-6">
                        {selectedChatData ? (
                            <InfoBar {...selectedChatData.info} />
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
