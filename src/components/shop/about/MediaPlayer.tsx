import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/Carousel';
import React, { useState } from 'react';

interface MediaPlayerProps {
    className?: string
    mediaUrl: string[]
}

const MediaPlayer: React.FC<MediaPlayerProps> = (props) => {
    const [currentMedia, setCurrentImage] = useState(props.mediaUrl[0]);

    const isVideo = currentMedia.match(/\.(mp4|webm)$/i);

    return (
        <div className={'max-w-7xl my-4 flex flex-col' + (props.className ? ' ' + props.className : '')}>
            {isVideo ? (
                <video
                    className="mb-4 h-96 w-full rounded-2xl"
                    height="100"
                    src={currentMedia}
                    controls
                />
            ) : (
                <img
                    alt="Current game content"
                    className="mb-4 h-96 w-full object-cover rounded-2xl"
                    height="100"
                    src={currentMedia}
                    style={{
                        aspectRatio: '100/100',
                        objectFit: 'cover',
                    }}
                />
            )}
            <Carousel className="w-full" opts={{
                align: "start",
                loop: true,
            }}>
                <CarouselContent className="-ml-1">
                    {props.mediaUrl.map((url) => (
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/4" key={url}>
                            {url.match(/\.(jpg|jpeg|png)$/i) ? (
                                <img className='h-36 w-64 rounded-xl' src={url} alt="Game screenshot" />
                            ) : (
                                <video className='h-36 w-64 rounded-xl' src={url} controls></video>
                            )}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className='right-0 text-black' onClickCapture={() => setCurrentImage(props.mediaUrl[(props.mediaUrl.indexOf(currentMedia) + 1) % props.mediaUrl.length])}></CarouselNext>
                <CarouselPrevious className='left-0 text-black' onClickCapture={() => setCurrentImage(props.mediaUrl[(props.mediaUrl.indexOf(currentMedia) - 1 + props.mediaUrl.length) % props.mediaUrl.length])}></CarouselPrevious>
            </Carousel>
        </div>
    );
};

export default MediaPlayer;

