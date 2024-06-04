import React, { useState } from "react";
import { GameProps } from "../Pages/Wished";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Game: React.FC<{ game: GameProps }> = ({ game }) => {
    return (
        <div className="p-2 bg-gray-200 rounded-3xl max-md:max-w-full">
            <div className="flex gap-5 bg-white rounded-3xl p-5 max-md:flex-col max-md:gap-0">
                <img src={game.imageUrl} alt="Game image" className="rounded-3xl w-[32%] max-md:ml-0 max-md:w-full" />
                <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                            <div className="my-auto text-2xl font-medium text-black">
                                {game.name}
                            </div>
                            <div className="flex justify-center items-center p-2.5 w-11 h-11 bg-white rounded-3xl">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/327ae2c464ba56dcf70563f895445d251b3bae2ee7ca88ee4be49540d0e7ea4f?"
                                    className="w-6 aspect-square"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2.5 pr-10 mt-3.5 text-sm text-black max-md:flex-wrap max-md:pr-5">
                            {game.categorys.map((genre) => (
                                <Badge
                                    className="flex justify-center items-center px-5 py-1.5 whitespace-nowrap rounded-3xl bg-stone-300"
                                    key={genre}
                                >
                                    {genre}
                                </Badge>
                            ))}
                        </div>
                        <div className="flex gap-1 justify-between mt-5 w-full max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-2 self-start text-xl font-semibold text-black whitespace-nowrap">
                                <div className="my-auto">{game.rating}</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/06616e951a00e585d9eabb6b42991d47c747b01ce0fbb37aedd98e2c6716989b?"
                                    className="shrink-0 aspect-square w-[30px]"
                                />
                            </div>
                            <div className="flex gap-5">
                                {game.discount ? (
                                    <div className="flex flex-col">
                                        <div className="flex gap-4 whitespace-nowrap">
                                            <div className="justify-center px-4 py-1.5 text-base text-black rounded-3xl bg-stone-300">
                                                -{game.discount ? game.discount : 0}%
                                            </div>
                                            <div className="flex gap-2.5 my-auto text-xl">
                                                <div className="text-black line-through text-opacity-50">{game.price}₴</div>
                                                <div className="text-black">{game.price * (game.discount / 100)}₴</div>
                                            </div>
                                        </div>
                                        {game.discountEnd ? (
                                            <div className="mt-1 text-sm text-black">
                                                Знижка діє до {game.discountEnd}
                                            </div>
                                        ) : null}
                                    </div>
                                ) : (
                                    <div className="flex flex-col">
                                        <div className="flex gap-2.5 my-auto text-xl">
                                            <div className="text-black">{game.price}₴</div>
                                        </div>
                                    </div>
                                )}
                                <Button className="justify-center h-full px-9 py-3.5 text-xl text-white rounded-3xl bg-zinc-800 max-md:px-5">
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
