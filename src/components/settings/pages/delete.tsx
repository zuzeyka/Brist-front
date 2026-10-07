import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import React from "react";
import { Trans, useTranslation } from "react-i18next";


const Delete: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="flex justify-center bg-card1 rounded-2xl w-full p-4">
            <div className="flex flex-col text-base max-w-[596px]">
                <div className="self-center text-heading-2 font-manrope font-bold">
                    {t('settings.deleteAccount')}
                </div>
                <div className="justify-center p-3.5 mt-8 w-full leading-7 rounded-3xl bg-red-400 bg-opacity-30 max-md:max-w-full">
                    <Trans i18nKey="settings.delete.warning" components={{ bold: <span className="font-semibold text-negative" /> }} />
                </div>
                <div className="mt-8 w-full font-bold text-sign-2 max-md:max-w-full">{t('settings.nickname')}</div>
                <InputField placeholder={t('settings.delete.nicknamePlaceholder')} className="justify-center items-start px-3.5 py-2.5 mt-2 w-full rounded-3xl text-sign-2 placeholder:typographySecondary !bg-background40 border border-secondary max-md:pr-5 max-md:max-w-full" />
                <div className="mt-5 w-full font-bold text-sign-2 max-md:max-w-full">{t('settings.password')}</div>
                <InputField placeholder={t('settings.delete.passwordPlaceholder')} className="justify-center items-start px-3.5 py-2.5 mt-2 w-full rounded-3xl text-sign-2 placeholder:typographySecondary !bg-background40 border border-secondary max-md:pr-5 max-md:max-w-full" />
                <InputField placeholder={t('settings.delete.passwordConfirmPlaceholder')} className="justify-center items-start px-3.5 py-2.5 mt-2 w-full rounded-3xl text-sign-2 placeholder:typographySecondary !bg-background40 border border-secondary max-md:pr-5 max-md:max-w-full" />
                <Button className="justify-center self-center px-8 py-3.5 mt-5 text-background hover:bg-negativeHover rounded-3xl bg-negative max-md:px-5">
                    {t('settings.delete.button')}
                </Button>
            </div>
        </div>
    );
};

export default Delete;
