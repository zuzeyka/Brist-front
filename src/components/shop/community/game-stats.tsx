import React from "react";
import { useTranslation } from "react-i18next";

interface GameStatsProps {
    gameName: string;
    subscribersCount: number;
    onlineCount: number;
    mini?: boolean;
}

const formatNumber = (n: number) => n.toLocaleString('uk-UA');

// Community title with subscriber and online counts.
const GameStats: React.FC<GameStatsProps> = (props) => {
    const { t } = useTranslation();
    return (
    <div className={'flex flex-col text-typography' + (props.mini ? ' gap-1' : ' gap-3')}>
        <h1 className={'font-manrope font-bold' + (props.mini ? ' text-subheading-2' : ' text-heading-1')}>{props.gameName}</h1>
        <div className={'flex font-artifakt tracking-[-0.01em]' + (props.mini ? ' gap-4 text-sign-3' : ' gap-8 text-sign-2')}>
            <p className='flex gap-2'><b>{formatNumber(props.subscribersCount)}</b><span className='opacity-60'>{t('shop.community.subscribers')}</span></p>
            <p className='flex items-center gap-2'><b>{formatNumber(props.onlineCount)}</b><span className='size-2 rounded-full bg-accent' aria-label={t('user.online')} /></p>
        </div>
    </div>
    );
};

export default GameStats;
