import Avatar from "@/components/ui/avatar/avatar";
import React from "react";

export interface ChatPrevievProps {
    className?: string;
    text?: string;
    time?: string;
    avatar?: string;
    name: string;
    unreadCount?: number;
}
const ChatPreviev: React.FC<ChatPrevievProps> = (props) => {
    return (
        <div className="flex flex-col mx-auto h-full w-full">
            <div className="flex gap-3">
                <Avatar
                    src={props.avatar}
                    alt="User avatar"
                    className="shrink-0 self-start w-11 aspect-square"
                />
                <div className="flex flex-col flex-1 justify-center min-w-0">
                    <div className="flex gap-1.5 justify-between">
                        <div className="text-subheading-2 font-bold">{props.name}</div>
                        <div className="my-auto text-sign-4 text-typographySecondary tracking-normal leading-4">
                            {props.time}
                        </div>
                    </div>
                    <div className="flex gap-1.5 mt-1.5 items-center leading-[120%]">
                        <div className="flex-1 min-w-0 my-auto text-sign-4 tracking-normal text-typographySecondary truncate">
                            {props.text}
                        </div>
                        {!!props.unreadCount && (
                            <span className="shrink-0 flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-accent text-background text-sign-4 font-bold">
                                {props.unreadCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatPreviev;
