import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CardProps } from "./slider-categories";
import GamePrice from "./game-price";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import { cn } from "@/shared/lib/utils";

interface DealProps extends CardProps {
    aboutGame: string;
    discountEnd?: string;
}

const AUTOPLAY_MS = 4000;

const TopDeals: React.FC<{ games: DealProps[]; className?: string }> = ({ games, className }) => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const deals = games.slice(0, 10);
    const currentGame = deals[activeIndex];

    useEffect(() => {
        if (paused || deals.length < 2) return;
        const interval = setInterval(() => setActiveIndex((i) => (i + 1) % deals.length), AUTOPLAY_MS);
        return () => clearInterval(interval);
    }, [paused, deals.length]);

    if (!currentGame) return null;

    const go = (step: number) => {
        setPaused(true);
        setActiveIndex((i) => (i + step + deals.length) % deals.length);
    };

    const arrowClass = "absolute top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-[20px] bg-typography text-background hover:bg-typographySecondary";

    return (
        <div className={className}>
            <div className="relative h-[520px] overflow-hidden">
                <Link to={`/store/${encodeURIComponent(currentGame.gameName)}`} className="absolute inset-0">
                    <img alt={currentGame.gameName} className="absolute inset-0 size-full object-cover" src={currentGame.gamePictureUrl} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[22.6%] to-[hsl(var(--background)/0.9)]" />
                    <div className="absolute inset-x-0 bottom-14 mx-auto max-w-[1464px] flex items-center justify-between gap-10">
                        <div className="flex flex-col items-end gap-2">
                            <GamePrice price={currentGame.price} discount={currentGame.discount} size="lg" />
                            {currentGame.discount > 0 && currentGame.discountEnd && (
                                <p className="font-artifakt text-sign-2 tracking-[-0.01em] text-typographySecondary">
                                    {t('main.discountUntil', { date: currentGame.discountEnd })}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col items-end gap-3.5 text-right">
                            <p className="font-manrope font-bold text-heading-2 text-typography">{currentGame.gameName}</p>
                            <p className="w-[472px] font-artifakt text-block-2 tracking-[-0.01em] text-typography line-clamp-3">{currentGame.aboutGame}</p>
                        </div>
                    </div>
                </Link>
                <div className="absolute inset-0 mx-auto max-w-[1464px] pointer-events-none">
                    <button type="button" aria-label={t('main.prevGame')} className={cn(arrowClass, "-left-9 pointer-events-auto")} onClick={() => go(-1)}>
                        <ChevronLeftIcon />
                    </button>
                    <button type="button" aria-label={t('main.nextGame')} className={cn(arrowClass, "-right-9 pointer-events-auto")} onClick={() => go(1)}>
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
            <div className="mx-auto mt-5 max-w-[1464px] flex gap-2">
                {deals.map((game, index) => (
                    <button
                        type="button"
                        key={game.gameName}
                        aria-label={game.gameName}
                        onClick={() => { setPaused(true); setActiveIndex(index); }}
                        className="relative flex-1 min-w-0 h-[68px] rounded-xl overflow-hidden"
                    >
                        <img className="absolute inset-0 size-full object-cover" src={game.gamePictureUrl} alt="" />
                        {index !== activeIndex && <div className="absolute inset-0 bg-[hsl(var(--background)/0.5)] hover:bg-[hsl(var(--background)/0.2)] transition" />}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TopDeals;
