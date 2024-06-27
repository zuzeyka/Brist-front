import React, { useState } from "react";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import ChatPreviev, { ChatPrevievProps } from "./elements/chat-previev";

interface UserListProps {
    onSelectChat: (userName: string) => void;
}

const UserList: React.FC<UserListProps> = ({ onSelectChat }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const chats: ChatPrevievProps[] = [];
    const names: string[] = ["frostbyte", "eisera", "arctiq", "coldedge", "brist"];
    for (let i = 0; i < names.length; i++) {
        chats.push({
            className: `user-${i}`,
            text: `message`,
            time: new Date().toLocaleString(),
            avatar: ``,
            name: names[i],
        });
    }

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
        onSelectChat(chats[index].name);
    };

    return (
        <div className="flex flex-col mx-auto h-full w-full">
            <Command className="h-full w-full max-h-full">
                <CommandInput placeholder="Пошук чатів" />
                <CommandList className="h-full w-full max-h-full bg-card2">
                    <CommandEmpty>Нічого не знайдено</CommandEmpty>
                    {chats.map((chat, index) => (
                        <CommandItem
                            key={index}
                            className={`bg-card2 ${index === selectedIndex ? 'bg-primary' : ''}`}
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

