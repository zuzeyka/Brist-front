import React from "react";
import SendMenu from "./elements/SendMenu";
import { ScrollArea } from "@/components/ui/scroll-area";
import FileMessage from "./elements/FileMessage";
import VoiceMessage from "./elements/VoiceMessage";
import Message from "./elements/Message";

export interface MessageProps {
    datetime: string;
    text?: string;
    media?: string;
    isMyMessage: boolean;
    fileName?: string;
    fileSize?: string;
}

interface ChatContentProps {
    messages: MessageProps[];
}

const getFileExtension = (url: string | undefined): string => {
    if (!url) return '';
    const parts = url.split('.');
    return parts[parts.length - 1];
};

const renderMessage = (message: MessageProps, index: number) => {
    const extension = getFileExtension(message.media);

    if (message.fileName && message.fileSize) {
        return <FileMessage key={index} {...message} />;
    } else if (['mp3', 'wav', 'ogg'].includes(extension)) {
        return <VoiceMessage key={index} {...message} />;
    } else if (message.text) {
        return <Message key={index} {...message} />;
    } else {
        return null;
    }
};

const ChatContent: React.FC<ChatContentProps> = ({ messages }) => {
    return (
        <div className="flex flex-col pb-5 mx-auto w-full h-full">
            <div className="h-[94%]">
                <ScrollArea className="h-full w-full rounded-md border-0">
                    <div className="flex flex-col space-y-3 px-5 ">
                        {messages.map(renderMessage)}
                    </div>
                </ScrollArea>
            </div>
            <div className="sticky bottom-0 px-5 ">
                <SendMenu />
            </div>
        </div>
    );
};

export default ChatContent;
