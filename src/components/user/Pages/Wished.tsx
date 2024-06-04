import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import Game from "../Elements/Game";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { ChevronsUpDown } from "lucide-react";

export interface GameProps {
    name: string;
    imageUrl: string;
    rating: number;
    price: number;
    discount?: number;
    discountEnd?: string;
    isOwned?: boolean;
    categorys: string[];
}

const Wished: React.FC<{ games: GameProps[] }> = ({ games }) => {
    const [visibleCount, setVisibleCount] = useState(4);
    const [isOpen, setIsOpen] = React.useState(false);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + 2, games.length));
    };

    const gamesToShow = games.slice(0, visibleCount);

    return (
        <div className="flex flex-col p-5 rounded-3xl bg-zinc-300">
            <div className="flex gap-5 justify-between w-full text-base max-md:flex-wrap max-md:max-w-full">
                <InputField placeholder="Пошук за назвою гри" type="text" className="justify-center items-start px-3.5 py-2.5 my-auto rounded-3xl bg-[#C0C0C0] border-none w-96 text-black placeholder:text-black max-md:pr-5" />
                <div className="flex gap-5 justify-between">
                    <div className="flex gap-2.5 my-auto text-black whitespace-nowrap">
                        <div className='flex justify-start items-center space-x-2'>
                            <span className='text-gray-500'>Сортування:</span>
                            <Select onValueChange={() => { }}>
                                <SelectTrigger className="w-32" id="sort">
                                    <SelectValue placeholder="Знижки" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="sales">Знижки</SelectItem>
                                    <SelectItem value="date">Дата додавання</SelectItem>
                                    <SelectItem value="rating">Рейтинг</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-5 text-black bg-gray-200 rounded-3xl max-md:px-5 max-md:max-w-full">
                <Collapsible className={isOpen ? "mb-12" : ""} open={isOpen}
                    onOpenChange={setIsOpen}>
                    <div className="flex items-center space-x-4 px-4">
                        <h4 className="text-sm font-semibold">
                            Спільні
                        </h4>
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm" className="w-9 p-0 shadow-none hover:bg-transparent text-gray-900">
                                <ChevronsUpDown className="h-4 w-4" />
                                <span className="sr-only">Toggle</span>
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                        {gamesToShow.map((post) => (
                            post.isOwned ? <Game game={post} /> : null
                        ))}
                    </CollapsibleContent>
                </Collapsible>
                {gamesToShow.map((post) => (
                    <Game game={post} />
                ))}
                {visibleCount < games.length && (
                    <Button className="justify-center px-6 py-3 text-white rounded-3xl bg-zinc-800 max-md:px-5" onClick={handleLoadMore}>
                        Показати більше
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Wished;
