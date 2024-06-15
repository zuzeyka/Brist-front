import Categories from "./Categories";
import Footer from "./Footer";
import Head from "./Head";
import Search from "./Search";
import TopDeals from "./TopDeals";
import SliderCategories from "./SliderCategories";
import { useEffect, useState } from "react";
import { GameInShopModel } from "@/shared/lib/interfaces";

const Main: React.FC = () => {
    const [games, setGames] = useState<GameInShopModel[]>([]);
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('http://localhost:5049/api/GamesInShop');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const gamesData: GameInShopModel[] = await response.json();
                setGames(gamesData);
                console.log('Games:', gamesData);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchGames();
    }, []);

    const randomGames = games.sort(() => 0.5 - Math.random()).slice(0, 6);
    const gamesWithPriceLessThanOrEqualTo100 = games.filter(game => game.price <= 100);
    const freeGames = games.filter(game => game.price === 0);
    const newestReleaseGames = games.sort((a, b) => new Date(b.dateOfRelease).getTime() - new Date(a.dateOfRelease).getTime());
    const gamesWithDiscount = games.filter(game => game.discount > 0);
    const ForYouGames = getRandomSubset([
        ...randomGames,
        ...gamesWithPriceLessThanOrEqualTo100,
        ...freeGames,
        ...newestReleaseGames,
        ...gamesWithDiscount,
    ], 6);

    function getRandomSubset(array: GameInShopModel[], size: number) {
        return array.sort(() => 0.5 - Math.random()).slice(0, size);
    }

    const mapToRequiredProps = (game: GameInShopModel) => ({
        aboutGame: game.description || "No description available",
        discountEnd: game.discountFinish ? new Date(game.discountFinish).toLocaleDateString() : "No end date",
        gameName: game.name || "Unknown Game",
        gamePictureUrl: game.previeImage || "",
        price: game.price,
        discount: game.discount || 0,
    });

    const filterValidGames = (games: GameInShopModel[]) => games.filter(game => game.name && game.previeImage);

    return (
        <div className="bg-background">
            <Head></Head>
            <Search></Search>
            <TopDeals games={filterValidGames(randomGames).map(mapToRequiredProps)}></TopDeals>
            <SliderCategories vertical={false} lable="Особливі пропозиціі" cards={filterValidGames(gamesWithDiscount).map(mapToRequiredProps)}></SliderCategories>
            <SliderCategories vertical={true} lable="До 100₴" cards={filterValidGames(gamesWithPriceLessThanOrEqualTo100).map(mapToRequiredProps)}></SliderCategories>
            <SliderCategories vertical={true} lable="Рекомендовані вам" cards={filterValidGames(ForYouGames).map(mapToRequiredProps)}></SliderCategories>
            <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto bg-background">
                <Categories lable="Хіти продажу" cards={filterValidGames(randomGames).map(mapToRequiredProps)}></Categories>
                <Categories lable="Нові релізи" cards={filterValidGames(newestReleaseGames).map(mapToRequiredProps)}></Categories>
                <Categories lable="Безкоштовні пропозиціі" cards={filterValidGames(freeGames).map(mapToRequiredProps)}></Categories>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
