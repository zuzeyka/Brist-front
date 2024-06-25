import { useState, useEffect, useRef } from "react";
import { CardProps } from "./slider-categories";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

interface DealProps extends CardProps {
    aboutGame: string;
    discountEnd?: string;
}

const TopDeals: React.FC<{ games: DealProps[] }> = ({ games }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const currentGame = games[activeIndex];
    const [currentMedia, setCurrentMedia] = useState(currentGame.gamePictureUrl);

    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    useEffect(() => {
        setCurrentMedia(games[activeIndex].gamePictureUrl);
    }, [activeIndex, games]);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % games.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [games.length]);
    return (
        <div className="flex overflow-hidden relative flex-col items-center min-h-[520px] max-md:px-5">
            <Link className="w-full" to={`/store/${encodeURIComponent(currentGame.gameName)}`}>
                <img
                    alt="Current game content"
                    className="object-cover relative inset-0 size-full h-96 p-0"
                    loading="lazy"
                    height="100"
                    src={currentMedia}
                    style={{
                        aspectRatio: '100/100',
                        objectFit: 'cover',
                    }}
                />
                <div className="max-w-7xl mx-auto absolute z-10 inset-44">
                    <div className="flex flex-col w-full max-w-screen-2xl max-md:flex-wrap max-md:max-w-full">
                        <div className="flex gap-5 justify-between self-center mt-24 w-full max-w-[1464px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col my-auto">
                                {currentGame?.discount ? (
                                    <div className="flex space-x-2">
                                        <Badge className="px-4 text-background bg-accent border-0 hover:bg-accentHover">-{currentGame.discount}%</Badge>
                                        <p className="line-through text-heading-1 text-typographySecondary">{currentGame.price}₴</p>
                                        <p className="text-heading-1 text-typography">{Math.round(currentGame.price - currentGame.price * currentGame.discount / 100)}₴</p>
                                    </div>) : <p>{currentGame?.price}</p>}
                                {currentGame?.discountEnd ? (
                                    <div className="mt-1 text-sign-2 text-typographySecondary">
                                        Знижка діє до {currentGame.discountEnd}
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex flex-col text-right max-md:max-w-full">
                                <div className="text-heading-2 text-typography font-bold max-md:max-w-full">
                                    {currentGame?.gameName}
                                </div>
                                <div className="mt-3.5 text-block-2 tracking-normal text-typography max-md:max-w-full">
                                    {currentGame?.aboutGame}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Carousel plugins={[plugin.current]} className="w-full max-w-7xl mx-auto mt-5" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-1">
                    {games.map((game, index) => (
                        <CarouselItem className="pl-2 md:basis-1/2 lg:basis-1/5" key={game.gamePictureUrl} onChange={() => setActiveIndex(index)}>
                            {game.gamePictureUrl.match(/\.(mp4|webm)$/i) ? (
                                <video className='h-36 w-64 rounded-xl' src={game.gamePictureUrl} controls></video>
                            ) : (
                                <img className='h-36 w-64 rounded-xl' src={game.gamePictureUrl} alt="Game screenshot" />
                            )}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className='right-0 text-black absolute -inset-y-56' onClickCapture={() => setActiveIndex((activeIndex + 1) % games.length)}></CarouselNext>
                <CarouselPrevious className='left-0 text-black absolute -inset-y-56' onClickCapture={() => setActiveIndex((activeIndex - 1 + games.length) % games.length)}></CarouselPrevious>
            </Carousel>
        </div>
    );
}

export default TopDeals;
