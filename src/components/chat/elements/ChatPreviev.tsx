import Avatar from "@/components/ui/avatar/Avatar";
import React from "react";

export interface ChatPrevievProps {
    className?: string;
    text?: string;
    time?: string;
    avatar?: string;
    name: string;
}
const ChatPreviev: React.FC<ChatPrevievProps> = (props) => {
    return (
        <div className="flex flex-col mx-auto h-full w-full">
            <div className="flex gap-3 mt-5">
                <Avatar
                    src={props.avatar}
                    alt="User avatar"
                    className="shrink-0 self-start w-11 aspect-square"
                />
                <div className="flex flex-col flex-1 justify-center">
                    <div className="flex gap-1.5 justify-between">
                        <div className="text-typography font-bold">{props.name}</div>
                        <div className="my-auto text-xs text-typographySecondary tracking-normal leading-4">
                            {props.time}
                        </div>
                    </div>
                    <div className="flex gap-1.5 mt-1.5 leading-[120%]">
                        <div className="flex-1 my-auto text-xs tracking-normal text-typographySecondary text-ellipsis">
                            {props.text}
                        </div>
                        <div className="justify-center items-center px-1.5 py-0.5 w-5 h-5 text-xs tracking-normal whitespace-nowrap bg-rose-400 rounded-3xl text-typographySecondary">
                            2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatPreviev;
