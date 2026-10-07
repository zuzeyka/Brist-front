import React, { useState } from "react";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { useTranslation } from "react-i18next";
import ChatPreviev, { ChatPrevievProps } from "./elements/chat-previev";

interface UserListProps {
    onSelectChat: (userName: string) => void;
}

const UserList: React.FC<UserListProps> = ({ onSelectChat }) => {
    const { t } = useTranslation();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const chats: ChatPrevievProps[] = [
        { name: 'MrsZubarikessa', text: t('chat.preview.msg1'), time: t('chat.preview.date'), unreadCount: 2 },
        { name: 'FirePhoenix', text: t('chat.preview.msg2'), time: t('chat.preview.date') },
        { name: 'DragonSlayer', text: t('chat.preview.msg3'), time: t('chat.preview.date') },
        { name: 'TitanCrusher', text: t('chat.preview.msg4'), time: t('chat.preview.date') },
        { name: 'BlazingArrow', text: t('chat.preview.noMessages'), time: '' },
        { name: 'sinichka_bez_egg', text: t('chat.preview.msg5'), time: t('chat.preview.date'), unreadCount: 2 },
        { name: 'SilentAssassin', text: t('chat.preview.msg6'), time: t('chat.preview.date'), unreadCount: 2 },
        { name: 'LunarMage', text: t('chat.preview.noMessages'), time: '' },
        { name: 'TitanCrusher', text: t('chat.preview.msg7'), time: t('chat.preview.date'), unreadCount: 2 },
    ];

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
        onSelectChat(chats[index].name);
    };

    return (
        <div className="flex flex-col mx-auto h-full w-full">
            <Command className="h-full w-full max-h-full">
                <CommandInput placeholder={t('chat.searchChats')} />
                <CommandList className="h-full w-full max-h-full bg-card2">
                    <CommandEmpty>{t('settings.nothingFound')}</CommandEmpty>
                    {chats.map((chat, index) => (
                        <CommandItem
                            key={index}
                            className={`bg-card2 ${index === selectedIndex ? '!bg-cardLight25' : ''}`}
                            onSelect={() => handleSelect(index)}
                        >
                            <ChatPreviev {...chat}></ChatPreviev>
                        </CommandItem>
                    ))}
                </CommandList>
            </Command>
        </div>
    );
}

export default UserList;

