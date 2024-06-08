import React from "react";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import ChatPreviev, { ChatPrevievProps } from "./elements/ChatPreviev";


const UserList: React.FC = () => {
    const chats: ChatPrevievProps[] = [];
    for (let i = 0; i < 10; i++) {
        chats.push({
            className: `user-${i}`,
            text: `Text from user-${i}`,
            time: `Time from user-${i}`,
            avatar: ``,
            name: `User-${i}`,
        });
    }
    return (
        <div className="flex flex-col mx-auto h-full w-full">
            <Command className="h-full w-full max-h-full">
                <CommandInput placeholder="Пошук чатів" />
                <CommandList className="h-full w-full max-h-full bg-card2">
                    <CommandEmpty>Нічого не знайдено</CommandEmpty>
                    {chats.map((chat, index) => (
                        <CommandItem
                            key={index}
                            className="bg-card2"
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
