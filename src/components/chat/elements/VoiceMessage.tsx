import React, { useRef, useState, useEffect } from "react";
import { MessageProps } from "../ChatContent";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface VoiceMessageProps extends MessageProps {
    media: string;
}

const VoiceMessage: React.FC<VoiceMessageProps> = (props) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleSliderChange = (value: number[]) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value[0];
            setCurrentTime(value[0]);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.onloadedmetadata = () => {
                setDuration(audioRef.current?.duration || 0);
            };
        }
    }, []);

    return (
        <div className={"flex gap-3.5" + (props.isMyMessage ? " flex-row-reverse" : "")}>
            <div
                className={
                    "flex gap-4 p-5 rounded-3xl w-1/2" +
                    (props.isMyMessage ? " bg-primary20" : " bg-cardLight25")
                }
            >
                <Button
                    onClick={togglePlayPause}
                    className="flex justify-center items-center p-4 bg-primary hover:bg-primaryHover rounded-full h-full shrink-0"
                >
                    {isPlaying ? (
                        <Pause className="w-6 aspect-square text-background" />
                    ) : (
                        <Play className="w-6 aspect-square text-background" />
                    )}
                </Button>
                <div className="flex flex-col flex-1 justify-center py-1.5 min-w-0">
                    <Slider
                        className="w-full"
                        value={[currentTime]}
                        max={duration}
                        onValueChange={(value) => handleSliderChange(value)}
                    />
                    <div className="mt-1.5 text-sign-3 text-typographySecondary">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                </div>
                <audio
                    ref={audioRef}
                    src={props.media}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                />
            </div>

            <div className="self-end mb-2 text-sign-3 text-typographySecondary">
                {props.datetime}
            </div>
        </div>
    );
}

export default VoiceMessage;
