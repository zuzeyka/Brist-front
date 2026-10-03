import Categories from "./categories";
import Footer from "./footer";
import Head from "./head";
import Search from "./search";
import TopDeals from "./top-deals";
import SliderCategories from "./slider-categories";
import { useEffect, useState } from "react";
import { GameInShopModel } from "@/shared/lib/interfaces";
import { discountedPrice } from "./game-price";

// Soft teal glows behind the content, positioned relative to the page centre
// as in the 1920px design.
const glows = [
    // `bleed` is how far the blur extends past the shape in each SVG.
    { src: '/src/assets/svg/glow.svg', bleed: 500, left: -45, top: 400 },
    { src: '/src/assets/svg/glow.svg', bleed: 500, left: 1591, top: 1098 },
    { src: '/src/assets/svg/glow.svg', bleed: 500, left: 352, top: 1699 },
    { src: '/src/assets/svg/glow-large.svg', bleed: 600, left: 20, top: 3116 },
    { src: '/src/assets/svg/glow-large.svg', bleed: 600, left: 1404, top: 3316 },
];

const formatDate = (value?: Date) => {
    if (!value) return undefined;
    const d = new Date(value);
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const Main: React.FC = () => {
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
        <div className="relative bg-background overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                {glows.map((glow, i) => (
                    <img key={i} src={glow.src} alt="" className="absolute max-w-none"
                        style={{ left: `calc(50% - 960px + ${glow.left - glow.bleed}px)`, top: glow.top - glow.bleed }} />
                ))}
            </div>
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
                            <SliderCategories vertical={false} lable="Особливі пропозиції" cards={specialOffers.map(toCard)} />
                            <SliderCategories vertical={true} lable="Рекомендовані вам" cards={recommended.map(toCard)} />
                            <SliderCategories vertical={true} lable="До 100₴" cards={under100.map(toCard)} />
                            <div className="grid grid-cols-3 gap-6">
                                <Categories lable="Хіти продажу" cards={bestSellers.map(toCard)} />
                                <Categories lable="Нові релізи" cards={newestReleases.map(toCard)} />
                                <Categories lable="Безкоштовні" cards={freeGames.map(toCard)} />
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
