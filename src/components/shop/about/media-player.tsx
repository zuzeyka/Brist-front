import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/icons';
import { cn } from '@/shared/lib/utils';

interface MediaPlayerProps {
    className?: string
    mediaUrl: string[]
}

const isVideo = (url: string) => /\.(mp4|webm)$/i.test(url);

// Large viewer with a strip of 180×88 thumbnails and a scroll indicator under it.
const MediaPlayer: React.FC<MediaPlayerProps> = (props) => {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);
    const [scroll, setScroll] = useState({ left: 0, ratio: 1 });
    const strip = useRef<HTMLDivElement>(null);
    const media = props.mediaUrl;
    const currentMedia = media[current] ?? '';

    const updateScroll = () => {
        const el = strip.current;
        if (!el) return;
        const ratio = el.scrollWidth ? el.clientWidth / el.scrollWidth : 1;
        setScroll({ left: el.scrollWidth ? el.scrollLeft / el.scrollWidth : 0, ratio });
    };

    useEffect(updateScroll, [media.length]);

    const select = (index: number) => {
        const next = (index + media.length) % media.length;
        setCurrent(next);
        strip.current?.children[next]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    };

    const arrow = "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 size-6 rounded-[20px] bg-typography text-background hover:bg-typographySecondary";

    return (
        <div className={cn('flex flex-col', props.className)}>
            {isVideo(currentMedia) ? (
                <video className="h-[433px] w-full rounded-[20px] bg-black" src={currentMedia} controls />
            ) : (
                <img alt="" className="h-[433px] w-full object-cover rounded-[20px]" src={currentMedia} />
            )}
            {media.length > 1 && (
                <>
                    <div className="relative mt-3">
                        <div ref={strip} onScroll={updateScroll} className="flex gap-3 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {media.map((url, index) => (
                                <button
                                    type="button"
                                    key={url + index}
                                    onClick={() => select(index)}
                                    className="relative shrink-0 w-[180px] h-[88px] rounded-lg overflow-hidden"
                                >
                                    {isVideo(url)
                                        ? <video className="size-full object-cover" src={url} muted />
                                        : <img className="size-full object-cover" src={url} alt="" />}
                                    {index !== current && <span className="absolute inset-0 bg-black/60 hover:bg-black/30 transition" />}
                                </button>
                            ))}
                        </div>
                        <button type="button" aria-label={t('shop.about.previous')} className={cn(arrow, "left-0")} onClick={() => select(current - 1)}>
                            <ChevronLeftIcon />
                        </button>
                        <button type="button" aria-label={t('shop.about.next')} className={cn(arrow, "left-full")} onClick={() => select(current + 1)}>
                            <ChevronRightIcon />
                        </button>
                    </div>
                    <div className="relative mt-2 h-2 rounded-[20px] bg-cardLight25">
                        <div
                            className="absolute top-0.5 h-1 rounded-[20px] bg-background"
                            style={{ left: `calc(3px + ${scroll.left * 100}%)`, width: `calc(${scroll.ratio * 100}% - 6px)` }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default MediaPlayer;
