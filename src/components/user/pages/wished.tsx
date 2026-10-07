import React, { useMemo, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import Game from "../elements/game";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { ChevronsDown, ChevronsUp, FilterIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export interface GameProps {
    id: string;
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
    const [sort, setSort] = useState("popular");
    const [search, setSearch] = useState("");
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    const genres = useMemo(() => Array.from(new Set(games.flatMap((g) => g.categorys))).sort(), [games]);

    const toggleGenre = (genre: string) => {
        setSelectedGenres((current) => current.includes(genre) ? current.filter((g) => g !== genre) : [...current, genre]);
    };

    const filteredGames = useMemo(() => {
        const filtered = games
            .filter((g) => !search.trim() || g.name.toLowerCase().includes(search.trim().toLowerCase()))
            .filter((g) => selectedGenres.length === 0 || selectedGenres.some((genre) => g.categorys.includes(genre)));

        if (sort === "rated") return [...filtered].sort((a, b) => b.rating - a.rating);
        return filtered;
    }, [games, search, selectedGenres, sort]);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + 2, filteredGames.length));
    };

    const gamesToShow = filteredGames.slice(0, visibleCount);

    return (
        <div className="flex flex-col p-5 rounded-3xl bg-card2">
            <div className="flex gap-5 justify-between w-full text-base max-md:flex-wrap max-md:max-w-full">
                <InputField value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t('user.listPage.searchByGame')} type="text" className="justify-center items-start px-3.5 py-2.5 my-auto rounded-3xl bg-secondary border-none w-96 text-typography placeholder:text-typographySecondary max-md:pr-5" />
                <div className="flex gap-5 justify-between items-center">
                    <div className="relative">
                        <Button type="button" onClick={() => setFiltersOpen(!filtersOpen)} className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondaryHover rounded-3xl text-typography">
                            <FilterIcon className="size-5" /><span>{t('shop.filters.title')}</span>
                        </Button>
                        {filtersOpen && (
                            <div className="absolute right-0 top-full mt-2 w-64 p-4 rounded-2xl bg-card1 shadow-lg z-10 flex flex-col gap-2">
                                {genres.length > 0 ? genres.map((genre) => (
                                    <label key={genre} className="flex items-center gap-2.5 font-artifakt text-sign-2 text-typographySecondary cursor-pointer">
                                        <input type="checkbox" checked={selectedGenres.includes(genre)} onChange={() => toggleGenre(genre)} className="accent-primary size-4" />
                                        {genre}
                                    </label>
                                )) : <p className="font-artifakt text-sign-2 text-typographySecondary">{t('shop.filters.none')}</p>}
                            </div>
                        )}
                    </div>
                    <div className="rounded-lg gap-2.5 my-auto whitespace-nowrap">
                        <div className='flex space-x-2 items-center'>
                            <div className="text-typographySecondary">{t('wishlist.sorting')}</div>
                            <Select value={sort} onValueChange={setSort}>
                                <SelectTrigger className="w-full !bg-transparent border-0 !text-typography !text-button-2 !font-artifakt justify-start space-x-2 p-0" id="sort">
                                    <SelectValue placeholder={t('shop.about.sortPopular')} />
                                </SelectTrigger>
                                <SelectContent className='!bg-card2 !text-typography !font-artifakt'>
                                    <SelectItem value="popular">{t('shop.about.sortPopular')}</SelectItem>
                                    <SelectItem value="rated">{t('user.listPage.sortRated')}</SelectItem>
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
                            post.isOwned ? <Game key={post.id} game={post} /> : null
                        ))}
                    </CollapsibleContent>
                </Collapsible>
                {
                    gamesToShow.map((post) => (
                        <Game key={post.id} game={post} />
                    ))
                }
                {
                    visibleCount < filteredGames.length && (
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
