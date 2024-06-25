import React from "react";
import { GameProps } from "../pages/wished";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeartIcon, StarIcon } from "lucide-react";

const Game: React.FC<{ game: GameProps }> = ({ game }) => {
    return (
        <div className="p-2 bg-card2 rounded-3xl max-md:max-w-full">
            <div className="flex gap-5 bg-card1 rounded-3xl p-5 max-md:flex-col max-md:gap-0">
                <img src={game.imageUrl} alt="Game image" className="rounded-3xl w-[32%] max-md:ml-0 max-md:w-full" />
                <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                            <div className="my-auto text-heading-2 font-bold text-typography">
                                {game.name}
                            </div>
                            <div className="flex justify-center items-center p-2.5 w-11 h-11 bg-secondaryHover rounded-3xl">
                                <HeartIcon className="w-5 h-5 text-accent" fill="currentColor"></HeartIcon>
                            </div>
                        </div>
                        <div className="flex gap-2.5 pr-10 mt-3.5 text-sm text-black max-md:flex-wrap max-md:pr-5">
                            {game.categorys.slice(0, 5).map((genre) => (
                                <Badge
                                    className="flex justify-center items-center px-5 py-1.5 whitespace-nowrap rounded-3xl bg-cardLight25 text-sign-3 font-bold text-typographySecondary border-0 hover:border-0"
                                    key={genre}
                                >
                                    {genre}
                                </Badge>
                            ))}
                            {game.categorys.length > 5 && (
                                <div className="text-sign-3 font-bold text-typographySecondary">
                                    +{game.categorys.length - 5} more
                                </div>
                            )}
                        </div>
                        <div className="flex gap-1 justify-between mt-5 w-full max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-2 self-start text-xl font-semibold whitespace-nowrap justify-center items-center">
                                <div className="my-auto text-subtitle-3 font-bold">{game.rating}</div>
                                <StarIcon className="w-5 h-5 text-accent" fill="currentColor" />
                            </div>
                            <div className="flex gap-5">
                                <div className="flex flex-col justify-center">
                                    {game.discount ? (
                                        <div className='flex space-x-2 items-center'>
                                            <Badge className="text-background bg-accent hover:bg-accentHover font-artifakt">-{game.discount}%</Badge>
                                            <p className="line-through text-sign-1 text-typographySecondary font-artifakt">{game.price}₴</p>
                                            <p className="text-sign-1 text-typography font-artifakt">{game.price - game.price * game.discount / 100}₴</p>
                                        </div>
                                    ) : (<p className="text-sign-1 font-artifakt text-typography">{game.price}</p>)}
                                    {game.discount && <span className="text-sign-2 text-typographySecondary">Знижка діє до {game.discountEnd}</span>}
                                </div>
                                <Button className="justify-center h-full px-9 py-3.5 text-button-1 text-background rounded-3xl bg-primary hover:bg-primaryHover max-md:px-5">
                                    У кошик
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;
