import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import React from "react";

interface DeleteProps {
    nick: string;
    passwordHash: string;
}

const Delete: React.FC<DeleteProps> = (props) => {
    return (
        <div className="flex justify-center bg-card1 rounded-2xl w-full p-4">
            <div className="flex flex-col text-base max-w-[596px]">
                <div className="self-center text-heading-2 font-manrope font-bold">
                    Видалення акаунта
                </div>
                <div className="justify-center p-3.5 mt-8 w-full leading-7 rounded-3xl bg-red-400 bg-opacity-30 max-md:max-w-full">
                    Натисніть <span className="font-semibold text-negative">видалити мій акаунт</span>,
                    щоб розпочати процес остаточного видалення вашого акаунта Brist, включно
                    з усією особистою інформацією та купленим контентом. Після видалення
                    вашого акаунта Brist баланс вашого гаманця також буде безповоротно
                    видалено.
                </div>
                <div className="mt-8 w-full font-bold text-sign-2 max-md:max-w-full">Нікнейм</div>
                <InputField placeholder="Ваш нікнейм" className="justify-center items-start px-3.5 py-2.5 mt-2 w-full rounded-3xl text-sign-2 placeholder:typographySecondary !bg-background40 border-1 border-secondary max-md:pr-5 max-md:max-w-full" />
                <div className="mt-5 w-full font-bold text-sign-2 max-md:max-w-full">Пароль</div>
                <InputField placeholder="Ваш поточний пароль" className="justify-center items-start px-3.5 py-2.5 mt-2 w-full rounded-3xl text-sign-2 placeholder:typographySecondary !bg-background40 border-1 border-secondary max-md:pr-5 max-md:max-w-full" />
                <InputField placeholder="Повторіть пароль" className="justify-center items-start px-3.5 py-2.5 mt-2 w-full rounded-3xl text-sign-2 placeholder:typographySecondary !bg-background40 border-1 border-secondary max-md:pr-5 max-md:max-w-full" />
                <Button className="justify-center self-center px-8 py-3.5 mt-5 text-background hover:bg-negativeHover rounded-3xl bg-negative max-md:px-5">
                    Видалити мій акаунт
                </Button>
            </div>
        </div>
    );
};

export default Delete;
