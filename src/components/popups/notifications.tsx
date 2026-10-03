import { BadgePercent, Check, UsersRound, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";
import Avatar from "@/components/ui/avatar/avatar";
import { Button } from "@/components/ui/button";

const Notifications: React.FC = () => {
    return (
        <div className="flex flex-col p-5 mx-auto w-full bg-card2 rounded-3xl max-w-[480px] text-typography text-sign-3">
            <div className="flex gap-4 justify-between">
                <div className="my-auto text-heading-2 font-medium text-typography font-manrope">
                    Сповіщення
                </div>
            </div>
            <div className="flex flex-col items-start p-3 mt-4 w-full rounded-3xl bg-card1">
                <div className="flex gap-5 justify-between text-typographySecondary w-full">
                    <div className="flex gap-1.5">
                        <BadgePercent></BadgePercent>
                        <div className="my-auto">Знижки на Бажане</div>
                    </div>
                    <div className="my-auto">22.10.2022</div>
                </div>
                <div className="mt-3.5 font-bold text-subheading-2">Название игры</div>
                <div className="flex gap-1.5 items-center mt-3 whitespace-nowrap">
                    <Badge className="justify-center font-bold px-3 py-1.5 text-sign-4 text-background rounded-3xl bg-accent">
                        -40%
                    </Badge>
                    <div className="my-auto text-typographySecondary text-sign-2 line-through">
                        365₴
                    </div>
                    <div className="my-auto text-sign-2">100₴</div>
                </div>
            </div>
            <div className="flex flex-col p-3 mt-2 w-full rounded-3xl bg-card1">
                <div className="flex gap-5 justify-between w-full whitespace-nowrap text-typographySecondary">
                    <div className="flex gap-3">
                        <UsersRound></UsersRound>
                        <div className="my-auto">Друзі</div>
                    </div>
                    <div className="my-auto">22.10.2022</div>
                </div>
                <div className="flex gap-3.5 mt-3.5 text-base">
                    <Avatar src="" alt="avatar" className="shrink-0 rounded-full bg-typographySecondary h-[45px] w-[45px]" />
                    <div className="flex flex-col flex-1 justify-between">
                        <div className="font-bold text-subheading-2">Юзернейм</div>
                        <div className="mt-2 text-sign-2">Новий запит на дружбу</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-3 mt-2 w-full rounded-3xl bg-card1">
                <div className="flex gap-5 justify-between w-full text-typographySecondary whitespace-nowrap">
                    <div className="flex gap-3">
                        <UsersRound></UsersRound>
                        <div className="my-auto">Друзі</div>
                    </div>
                    <div className="my-auto">22.10.2022</div>
                </div>
                <div className="flex gap-3.5 mt-3.5 text-base">
                    <Avatar src="" alt="avatar" className="shrink-0 rounded-full bg-typographySecondary h-[45px] w-[45px]" />
                    <div className="flex flex-col flex-1 justify-between">
                        <div className="font-bold text-subheading-2">Юзернейм</div>
                        <div className="flex items-center">
                            <Check className="h-4"></Check>
                            <div className="mt-2 text-sign-2 text-positive">Ваш запит на дружбу прийнято</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-3 mt-2 w-full text-base rounded-3xl bg-card1">
                <div className="flex gap-5 justify-between w-full text-typographySecondary">
                    <div className="flex gap-1.5">
                        <BadgePercent></BadgePercent>
                        <div className="my-auto">Великий розпродаж</div>
                    </div>
                    <div className="my-auto">22.10.2022</div>
                </div>
                <div className="mt-3.5 font-bold text-subheading-2">Зимовий розпродаж 2024</div>
                <div className="mt-1 text-block-2">Знижки на ігри до 80% до 22.10.2022 </div>
            </div>
            <div className="flex flex-col p-3 mt-2 w-full rounded-3xl bg-card1">
                <div className="flex gap-5 justify-between w-full whitespace-nowrap text-typographySecondary">
                    <div className="flex gap-3">
                        <UsersRound></UsersRound>
                        <div className="my-auto">Друзі</div>
                    </div>
                    <div className="my-auto">22.10.2022</div>
                </div>
                <div className="flex gap-3.5 mt-3.5 text-base">
                    <Avatar src="" alt="avatar" className="shrink-0 rounded-full bg-typographySecondary h-[45px] w-[45px]" />
                    <div className="flex flex-col flex-1 justify-between">
                        <div className="font-bold text-subheading-2">Юзернейм</div>
                        <div className="flex items-center">
                            <X className="h-4"></X>
                            <div className="mt-2 text-sign-2 text-negative">Ваш запит на дружбу відхилено</div>
                        </div>
                    </div>
                </div>
            </div>
            <Button className="justify-center self-center px-7 py-2.5 mt-4 text-button-2 text-primary font-semibold hover:text-primaryHover rounded-3xl bg-transparent hover:bg-cardLight25">
                Очистити усі
            </Button>
        </div>
    );
}

export default Notifications;
