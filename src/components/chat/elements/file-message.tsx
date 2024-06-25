import { File } from "lucide-react";
import React, { useState } from "react";
import { MessageProps } from "../chat-content";
import { Button } from "@/components/ui/button";

interface FileMessageProps extends MessageProps {
    fileSize: string;
    fileName: string;
}

const FileMessage: React.FC<FileMessageProps> = (props) => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = () => {
        if (props.media) {
            setIsDownloading(true);
            fetch(props.media)
                .then((response) => response.blob())
                .then((blob) => {
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = props.fileName;
                    link.click();

                    setIsDownloading(false);
                })
                .catch((error) => {
                    console.error("Error downloading file:", error);
                    setIsDownloading(false);
                });
        }
    };

    return (
        <div className={"flex gap-3.5" + (props.isMyMessage ? " flex-row-reverse" : "")}>
            <div
                className={
                    "flex gap-4 p-5 rounded-3xl w-1/2" +
                    (props.isMyMessage ? " bg-primary20" : " bg-cardLight25")
                }
            >
                <Button
                    className="flex justify-center items-center p-4 bg-primary hover:bg-primaryHover rounded-full h-full"
                    disabled={isDownloading}
                    onClick={handleDownload}
                >
                    {isDownloading ? (
                        <span className="text-white">Завантаження...</span>
                    ) : (
                        <File className="w-6 aspect-square text-background" />
                    )}
                </Button>
                <div className="flex flex-col flex-1 justify-center py-1.5">
                    <div className="text-sign-2">{props.fileName}</div>
                    <div className="mt-1.5 text-sign-3 text-typographySecondary">{props.fileSize}</div>
                </div>
            </div>
            <div className="self-end mb-2 text-sign-3 text-typographySecondary">
                {props.datetime}
            </div>
        </div>
    );
};

export default FileMessage;
