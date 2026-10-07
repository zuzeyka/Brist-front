import React from "react";
import { useTranslation } from "react-i18next";
import { InputField } from "@/components/ui/input-field";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

const NewCollection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-card2 rounded-lg p-8 max-w-md mx-auto shadow-lg w-[400px] rounded-2xl">
            <div className="flex justify-between items-start">
                <h2 className="text-heading-2 font-manrope font-bold">
                    {t('popups.newCollection.title')}
                </h2>
                <button className="text-button-1 leading-none">×</button>
            </div>
            <form className="mt-4">
                <div className="flex flex-col space-y-4">
                    <div>
                        <span className="text-sign-2 font-bold">{t('popups.newCollection.nameLabel')}</span>
                        <InputField placeholder={t('popups.newCollection.namePlaceholder')} type="text" className="rounded-full text-sign-2" />
                    </div>
                    <div>
                        <span className="text-sign-2 font-bold">{t('popups.newCollection.addGames')}</span>
                        <InputField placeholder={t('popups.newCollection.searchGamesPlaceholder')} type="password" className="rounded-full" />
                    </div>
                    <div className="flex flex-col">
                        <span>{t('popups.newCollection.addLater')}</span>
                        <Badge className="w-2/6 font-bold text-sign-2 text-typographySecondary bg-cardLight25">{t('popups.notif.gameNamePlaceholder')}</Badge>
                    </div>
                    <Button className="mt-4 rounded-full text-background">{t('header.login')}</Button>
                </div>
            </form>
        </div>
    );
}

export default NewCollection;
