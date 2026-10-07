import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import Game from "../elements/game";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { ChevronsDown, ChevronsUp, FilterIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
    const [visibleCount, setVisibleCount] = useState(4);
    const [isOpen, setIsOpen] = React.useState(false);
    const [, setFilter] = useState("all");

    const handleLoadMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + 2, games.length));
    };

    const gamesToShow = games.slice(0, visibleCount);

    return (
        <div className="flex flex-col p-5 rounded-3xl bg-card2">
            <div className="flex gap-5 justify-between w-full text-base max-md:flex-wrap max-md:max-w-full">
                <InputField placeholder={t('user.listPage.searchByGame')} type="text" className="justify-center items-start px-3.5 py-2.5 my-auto rounded-3xl bg-secondary border-none w-96 text-typography placeholder:text-typographySecondary max-md:pr-5" />
                <div className="flex gap-5 justify-between items-center">
                    <Button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondaryHover rounded-3xl text-typography">
                        <FilterIcon className="size-5" /><span>{t('shop.filters.title')}</span>
                    </Button>
                    <div className="rounded-lg gap-2.5 my-auto whitespace-nowrap">
                        <div className='flex space-x-2 items-center'>
                            <div className="text-typographySecondary">{t('wishlist.sorting')}</div>
                            <Select onValueChange={(value) => setFilter(value)}>
                                <SelectTrigger className="w-full !bg-transparent border-0 !text-typography !text-button-2 !font-artifakt justify-start space-x-2 p-0" id="sort">
                                    <SelectValue placeholder={t('shop.about.sortPopular')} />
                                </SelectTrigger>
                                <SelectContent className='!bg-card2 !text-typography !font-artifakt'>
                                    <SelectItem value="popular">{t('shop.about.sortPopular')}</SelectItem>
                                    <SelectItem value="recent">{t('shop.about.sortNew')}</SelectItem>
                                    <SelectItem value="rated">{t('user.listPage.sortRated')}</SelectItem>
                                    <SelectItem value="commented">{t('user.listPage.sortCommented')}</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-5 text-typography bg-card2 rounded-3xl max-md:px-5 max-md:max-w-full">
                <Collapsible className={isOpen ? "mb-12" : ""} open={isOpen}
                    onOpenChange={setIsOpen}>
                    <CollapsibleTrigger className="pl-14" asChild>
                        <Button variant="ghost" size="sm" className="w-9 shadow-none hover:bg-transparent text-typography text-sign-1">
                            <h4 className="text-sm font-semibold flex space-x-4">
                                <p>{t('user.listPage.shared')}</p>
                                {isOpen ? <ChevronsDown className="h-4 w-4" /> : <ChevronsUp className="h-4 w-4" />}
                            </h4>

                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        {gamesToShow.map((post) => (
                            post.isOwned ? <Game game={post} /> : null
                        ))}
                    </CollapsibleContent>
                </Collapsible>
                {
                    gamesToShow.map((post) => (
                        <Game game={post} />
                    ))
                }
                {
                    visibleCount < games.length && (
                        <Button className="justify-center px-6 py-3 !text-background text-button-1 rounded-3xl bg-primary hover:bg-primaryHover max-md:px-5" onClick={handleLoadMore}>
                            {t('shop.about.showMore')}
                        </Button>
                    )
                }
            </div >
        </div >
    );
};

export default Wished;
