import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { CardProps } from "./SliderCategories";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


interface DealProps extends CardProps {
    aboutGame: string;
    discountEnd?: string;
}

const TopDeals: React.FC<{ games: DealProps[] }> = ({ games }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentMedia, setCurrentImage] = useState(
        games[activeIndex] && games[activeIndex].gamePictureUrl
    );
    return (
        <div className="flex overflow-hidden relative flex-col items-center min-h-[520px] max-md:px-5">
            <div className="w-full">
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
                                {games[activeIndex].discount ? (
                                    <div className="flex space-x-2">
                                        <Badge>{games[activeIndex].discount}%</Badge>
                                        <p className="line-through text-cyan-100">{games[activeIndex].price}₴</p>
                                        <p className="text-sky-50">{games[activeIndex].price - games[activeIndex].price * games[activeIndex].discount / 100}₴</p>
                                    </div>) : <p>{games[activeIndex].price}</p>}
                                {games[activeIndex].discountEnd ? (
                                    <div className="mt-1 text-sm text-white">
                                        Знижка діє до {games[activeIndex].discountEnd}
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex flex-col text-right max-md:max-w-full">
                                <div className="text-2xl font-bold leading-7 text-sky-50 max-md:max-w-full">
                                    {games[activeIndex].gameName}
                                </div>
                                <div className="mt-3.5 text-base tracking-normal leading-6 text-white max-md:max-w-full">
                                    {games[activeIndex].aboutGame}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel className="w-full max-w-7xl mx-auto mt-5" opts={{
                align: "start",
                loop: true,
            }}>
                <CarouselContent className="-ml-1">
                    {games.map((game, index) => (
                        <CarouselItem className="pl-2 md:basis-1/2 lg:basis-1/5" key={game.gamePictureUrl}>
                            {game.gamePictureUrl.match(/\.(jpg|jpeg|png)$/i) ? (
                                <img className='h-36 w-64 rounded-xl' src={game.gamePictureUrl} alt="Game screenshot" />
                            ) : (
                                <video className='h-36 w-64 rounded-xl' src={game.gamePictureUrl} controls></video>
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