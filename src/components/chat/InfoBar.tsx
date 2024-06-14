import React from "react";
import { Ban, Bell, File, History, ImagePlus, Mic, UserRoundX, AlertCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "../ui/badge";

interface InfoBarProps {
    avatarUrl?: string;
    username: string;
    photosCount: number;
    filesCount: number;
    voicesCount: number;
    isOnline: boolean;
}

const InfoBar: React.FC<InfoBarProps> = (props) => {
    return (
        <div className="flex flex-col pt-5 pb-6 rounded-3xl bg-card2 h-screen">
            {props.avatarUrl ? (
                <div className="flex overflow-hidden relative flex-col justify-end self-center whitespace-nowrap w-full px-5">
                    <img
                        loading="lazy"
                        srcSet={props.avatarUrl}
                        className="object-cover relative inset-0 size-full w-full h-full rounded-2xl"
                    />
                    <div className="absolute bottom-6 right-12">
                        <div className="relative text-heading-3 font-manrope font-bold leading-6">
                            {props.username}
                        </div>
                        <div className="relative mt-1 text-sign-2 tracking-normal text-accent">
                            {props.isOnline ? "онлайн" : "оффлайн"}
                        </div>
                    </div>
                </div>
            ) : (<div className="px-5">
                <div className="relative text-heading-3 font-manrope font-bold leading-6">
                    {props.username}
                </div>
                <div className="relative mt-1 text-sign-2 tracking-normal text-accent">
                    {props.isOnline ? "онлайн" : "оффлайн"}
                </div>
            </div>)}
            <div className="flex gap-5 justify-between px-5 mt-5 w-full">
                <div className="flex gap-3 tracking-normal whitespace-nowrap">
                    <Bell className="shrink-0 w-6 aspect-square"></Bell>
                    <div className="my-auto text-sign-2">Сповіщення</div>
                </div>
                <Switch></Switch>
            </div>
            <hr className="w-auto border-cardLight25 m-5" />
            <div className="flex gap-3 justify-between px-5 py-2 w-full font-bold whitespace-nowrap rounded-xl">
                <div className="flex gap-3 text-subheading-2">
                    <ImagePlus className="shrink-0 w-6 aspect-square"></ImagePlus>
                    <div className="my-auto">Фото</div>
                </div>
                <Badge className="justify-center px-3 py-1 tracking-normal leading-4 rounded-3xl bg-cardLight25 hover:bg-cardLight12 text-typographySecondary text-sign-3 border-0">{props.photosCount}</Badge>
            </div>
            <div className="flex gap-3 justify-between px-5 py-2 mt-1 w-full font-bold whitespace-nowrap rounded-xl">
                <div className="flex gap-3 text-subheading-2">
                    <File className="shrink-0 w-6 aspect-square"></File>
                    <div className="my-auto">Файли</div>
                </div>
                <Badge className="justify-center px-3 py-1 tracking-normal leading-4 rounded-3xl bg-cardLight25 hover:bg-cardLight12 text-typographySecondary text-sign-3 border-0">{props.filesCount}</Badge>
            </div>
            <div className="flex gap-3 justify-between px-5 py-2 mt-1 font-bold rounded-xl">
                <div className="flex gap-3 text-subheading-2">
                    <Mic className="shrink-0 w-6 aspect-square"></Mic>
                    <div className="my-auto">Голосові повідомлення</div>
                </div>
                <Badge className="justify-center px-3 py-1 tracking-normal leading-4 rounded-3xl bg-cardLight25 hover:bg-cardLight12 text-typographySecondary text-sign-3 border-0">{props.voicesCount}</Badge>
            </div>
            <hr className="w-auto border-cardLight25 m-5" />
            <div className="flex flex-col items-start px-5 w-full font-semibold mb-20">
                <div className="flex gap-2 justify-center">
                    <UserRoundX className="shrink-0 w-6 aspect-square"></UserRoundX>
                    <div className="my-auto text-button-2">Видалити с друзів</div>
                </div>
                <div className="flex gap-2 justify-center mt-5">
                    <History className="shrink-0 w-6 aspect-square"></History>
                    <div className="my-auto text-button-2">Очистити історію</div>
                </div>
                <div className="flex gap-2 justify-center mt-5 whitespace-nowrap">
                    <Ban className="shrink-0 w-6 aspect-square"></Ban>
                    <div className="my-auto text-button-2">Заблокувати</div>
                </div>
                <div className="flex gap-2 justify-center mt-5 whitespace-nowrap">
                    <AlertCircle />
                    <div className="my-auto text-sign-2 text-negative">Поскаржитись</div>
                </div>
            </div>
        </div>
    );
}

export default InfoBar;
