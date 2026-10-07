import Categories from "./categories";
import Footer from "./footer";
import Head from "./head";
import Search from "./search";
import TopDeals from "./top-deals";
import SliderCategories from "./slider-categories";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GameInShopModel } from "@/shared/lib/interfaces";
import { discountedPrice } from "./game-price";
import PageGlows, { Glow } from "@/components/ui/page-glows";

const glows: Glow[] = [
    { left: -45, top: 400 },
    { left: 1591, top: 1098 },
    { left: 352, top: 1699 },
    { left: 20, top: 3116, large: true },
    { left: 1404, top: 3316, large: true },
];

const formatDate = (value?: Date) => {
    if (!value) return undefined;
    const d = new Date(value);
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const Main: React.FC = () => {
    const { t } = useTranslation();
    const [games, setGames] = useState<GameInShopModel[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('http://localhost:5049/api/GamesInShop');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const gamesData: GameInShopModel[] = await response.json();
                setGames(gamesData.filter(game => game.name && game.previeImage));
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchGames();
    }, []);

    const finalPrice = (game: GameInShopModel) => discountedPrice(game.price, game.discount);

    // Sections are picked by simple rules over the catalogue; anything not
    // claimed by a rule fills the curated rows in catalogue order.
    const topDeals = games.filter(game => game.discount > 0 && finalPrice(game) > 0);
    const under100 = games.filter(game => finalPrice(game) > 0 && finalPrice(game) <= 100);
    const freeGames = games.filter(game => finalPrice(game) === 0);
    const newestReleases = [...games]
        .filter(game => !under100.includes(game) && !freeGames.includes(game))
        .sort((a, b) => new Date(b.dateOfRelease).getTime() - new Date(a.dateOfRelease).getTime())
        .slice(0, 3);
    const rest = games.filter(game => ![...under100, ...freeGames, ...newestReleases].includes(game) && game !== topDeals[0]);
    const specialOffers = rest.slice(0, 3);
    const recommended = rest.slice(3, 7);
    const bestSellers = rest.slice(7, 10);

    const toCard = (game: GameInShopModel) => ({
        aboutGame: game.description || "",
        discountEnd: formatDate(game.discountFinish),
        gameName: game.name || "",
        gamePictureUrl: game.previeImage || "",
        price: game.price,
        discount: game.discount || 0,
    });

    return (
        <div className="relative bg-background">
            <PageGlows glows={glows} />
            <div className="relative">
                <Head />
                {loading ? (
                    <>
                        <Search />
                        <div className='h-screen flex justify-center items-center text-heading-1'>Loading...</div>
                    </>
                ) : (
                    <>
                        <div className="relative">
                            <Search className="absolute inset-x-0 top-0" />
                            <TopDeals games={topDeals.map(toCard)} />
                        </div>
                        <div className="max-w-[1464px] mx-auto mt-16 pb-[200px] flex flex-col gap-16">
                            <SliderCategories vertical={false} lable={t('main.specialOffers')} cards={specialOffers.map(toCard)} />
                            <SliderCategories vertical={true} lable={t('main.recommended')} cards={recommended.map(toCard)} />
                            <SliderCategories vertical={true} lable={t('main.under100')} cards={under100.map(toCard)} />
                            <div className="grid grid-cols-3 gap-6">
                                <Categories lable={t('main.bestSellers')} cards={bestSellers.map(toCard)} />
                                <Categories lable={t('main.newestReleases')} cards={newestReleases.map(toCard)} />
                                <Categories lable={t('main.free')} cards={freeGames.map(toCard)} />
                            </div>
                        </div>
                    </>
                )}
                <Footer />
            </div>
        </div>
    );
};

export default Main;
