import React from "react";
import { useTranslation } from "react-i18next";

interface GamesProps {
    className?: string;
    gameCount: number;
    dlcCount: number;
    wishesCount: number;
    contentUrl: string[];
}


const Games: React.FC<GamesProps> = (props) => {
    const { t } = useTranslation();
    if (props.contentUrl.length >= 1) {
        return (
            <div className="bg-card2 rounded-2xl w-full p-4">
                <div className="flex flex-col">
                    <h2 className="text-heading-1 font-bold font-manrope">{t('user.showcase.gameCollection')}</h2>
                    <div className="flex gap-4 mt-4">
                        <div className="flex-1 flex flex-col bg-card1 rounded-2xl p-4 text-center">
                            <p className="font-bold text-heading-1 font-manrope">{props.gameCount}</p>
                            <p className="text-sign-1 text-typographySecondary">{t('user.showcase.gamesCount')}</p>
                        </div>
                        <div className="flex-1 flex flex-col bg-card1 rounded-2xl p-4 text-center">
                            <p className="font-bold text-heading-1 font-manrope">{props.dlcCount}</p>
                            <p className="text-sign-1 text-typographySecondary">DLC</p>
                        </div>
                        <div className="flex-1 flex flex-col bg-card1 rounded-2xl p-4 text-center">
                            <p className="font-bold text-heading-1 font-manrope">{props.wishesCount}</p>
                            <p className="text-sign-1 text-typographySecondary">{t('user.showcase.wishedCount')}</p>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                        {props.contentUrl.slice(0, 4).map((url) => (
                            <img
                                key={url}
                                src={url}
                                className="h-32 w-1/4 object-cover rounded-2xl"
                                alt=""
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default Games;
