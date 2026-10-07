import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import React from "react";
import { useTranslation } from "react-i18next";


const Password: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="flex justify-center bg-card1 rounded-2xl w-full p-4">
            <div className="flex flex-col text-base max-w-[596px]">
                <div className="self-center text-heading-2 font-manrope font-bold">{t('settings.pwd.title')}</div>
                <ul className="justify-center items-start p-2.5 mt-8 w-full leading-7 text-block-2 rounded-3xl bg-cardLight12 max-md:pr-5 max-md:max-w-full">
                    <li className="list-disc ml-6">{t('settings.pwd.ruleNoReuse')}</li>
                    <li className="list-disc ml-6">{t('settings.pwd.ruleLength')}</li>
                    <li className="list-disc ml-6">{t('settings.pwd.ruleLetter')}</li>
                    <li className="list-disc ml-6">{t('settings.pwd.ruleDigit')}</li>
                    <li className="list-disc ml-6">{t('settings.pwd.ruleNoSpaces')}</li>
                </ul>
                <div className="mt-8 w-full font-bold text-sign-2 max-md:max-w-full">
                    {t('settings.pwd.oldPassword')}
                </div>
                <InputField type="password" placeholder={t('settings.delete.passwordPlaceholder')} className="justify-center items-start px-3.5 py-2.5 mt-2 w-full rounded-3xl text-sign-2 placeholder:typographySecondary !bg-background40 border border-secondary max-md:pr-5 max-md:max-w-full" />
                <div className="mt-5 w-full font-bold text-sign-2 max-md:max-w-full">
                    {t('settings.pwd.newPassword')}
                </div>
                <InputField type="password" placeholder={t('settings.pwd.newPasswordPlaceholder')} className="justify-center items-start px-3.5 py-2.5 mt-2 w-full rounded-3xl text-sign-2 placeholder:typographySecondary !bg-background40 border border-secondary max-md:pr-5 max-md:max-w-full" />
                <InputField type="password" placeholder={t('settings.pwd.newPasswordConfirmPlaceholder')} className="justify-center items-start px-3.5 py-2.5 mt-2 w-full rounded-3xl text-sign-2 placeholder:typographySecondary !bg-background40 border border-secondary max-md:pr-5 max-md:max-w-full" />
                <Button className="justify-center items-center self-center px-9 py-3.5 mt-5 w-56 max-w-full text-background whitespace-nowrap rounded-3xl hover:bg-primaryHover !bg-primary max-md:px-5">
                    {t('settings.save')}
                </Button>
            </div>
        </div>
    );
};

export default Password;
