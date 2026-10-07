import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { PlayIcon } from "@/components/ui/icons";
import { cn } from "@/shared/lib/utils";

const PlayableVideo: React.FC<{ src: string; className: string }> = ({ src, className }) => {
    const { t } = useTranslation();
    const [playing, setPlaying] = useState(false);
    if (playing) return <video className={className} src={src} autoPlay controls />;
    return (
        <button type="button" aria-label={t('shop.community.play')} onClick={() => setPlaying(true)} className={cn('relative overflow-hidden bg-black', className)}>
            <video className="size-full object-cover" src={src} poster={src} preload="metadata" muted />
            <span className="absolute inset-0 bg-[hsl(var(--background)/0.4)]" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-[39px] bg-typography text-background">
                <PlayIcon className="size-8" />
            </span>
        </button>
    );
};

const Video: React.FC<{ videosUrl: string[] }> = ({ videosUrl }) => {
    const { t } = useTranslation();
    if (videosUrl.length >= 1) {
        return (
            <div className="bg-card2 rounded-2xl w-full p-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-heading-1 font-bold font-manrope">{t('user.showcase.videosGallery')}</h2>
                    <PlayableVideo className="w-full h-96 rounded-2xl" src={videosUrl[0]} />
                    {videosUrl.length == 2 ? (<PlayableVideo className="w-full h-96 rounded-2xl" src={videosUrl[1]} />) : (
                        <div className="flex space-x-2">
                            {videosUrl.slice(1, 3).map((url) => (
                                <PlayableVideo
                                    key={url}
                                    src={url}
                                    className={"h-32 rounded-2xl" + (videosUrl.length == 3 ? " w-1/2" : " w-1/3")}
                                />
                            ))}
                            {videosUrl.length > 3 ? (<div className="h-32 w-1/3 rounded-2xl bg-cardLight25 flex items-center justify-center text-typographySecondary text-sign-1">+{videosUrl.length - 3}</div>) : null}
                        </div>
                    )}
                </div>
            </div>
        );
    }
};

export default Video;
