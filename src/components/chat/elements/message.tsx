import React from "react";
import { MessageProps } from "../chat-content";

const Message: React.FC<MessageProps> = (props) => {
    return (
        <div className={"flex gap-3.5" + (props.isMyMessage ? " flex-row-reverse" : "")}>
            <div className={"flex flex-col justify-center py-1.5" + (props.media ? " w-1/2" : "")}>
                {props.media ? (
                    <img
                        loading="lazy"
                        src={props.media}
                        className={"object-cover relative inset-0 w-full h-full" + (props.text ? " rounded-t-2xl" : " rounded-2xl")}
                    />
                ) : null}
                {props.text ? (
                    <div className={"text-block-2 p-2 rounded-b-2xl" + (props.isMyMessage ? " bg-primary20" : " bg-cardLight25") + (props.media ? " rounded-b-2xl" : " rounded-2xl")}>{props.text}</div>
                ) : null}
            </div>
            <div className="self-end text-sign-3 mb-2 text-typographySecondary">
                {props.datetime}
            </div>
        </div>
    );
}

export default Message;