import { useEffect, useMemo, useState } from 'react';
import Head from '../main/head';
import Search from '../main/search';
import Footer from '../main/footer';
import PageGlows from '@/components/ui/page-glows';
import FilterSidebar, { priceTiers } from './filter-sidebar';
import Game from '../user/elements/game';
import { GameProps } from '../user/pages/wished';
import { Categories, CategoryForGame, GameInShop } from '@/shared/lib/interfaces';

const glows = [
    { left: 1472, top: 108, large: true },
    { left: 4, top: 1200, large: true },
];

const Wishlist: React.FC = () => {
    const [games, setGames] = useState<GameInShop[]>([]);
    const [genres, setGenres] = useState<Categories[]>([]);
    const [categoriesForGame, setCategoriesForGame] = useState<CategoryForGame[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [tagSearch, setTagSearch] = useState('');
    const [priceTier, setPriceTier] = useState('any');
    const [discountOnly, setDiscountOnly] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const [gamesRes, genresRes, categoriesForGameRes] = await Promise.all([
                    fetch('http://localhost:5049/api/GamesInShop'),
                    fetch('http://localhost:5049/api/Categories'),
                    fetch('http://localhost:5049/api/CategoriesForGame'),
                ]);
                if (gamesRes.ok) setGames(await gamesRes.json() as GameInShop[]);
                if (genresRes.ok) setGenres(await genresRes.json() as Categories[]);
                if (categoriesForGameRes.ok) setCategoriesForGame(await categoriesForGameRes.json() as CategoryForGame[]);
            } catch (error) {
                console.log('Fetch wishlist error:', error);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, []);

    const genreIdsByGame = useMemo(() => {
        const map = new Map<string, Set<string>>();
        for (const link of categoriesForGame) {
            if (!map.has(link.gameId)) map.set(link.gameId, new Set());
            map.get(link.gameId)!.add(link.categoryId);
        }
        return map;
    }, [categoriesForGame]);

    const toggleGenre = (id: string) => {
        setSelectedGenres((current) => current.includes(id) ? current.filter((g) => g !== id) : [...current, id]);
    };

    const tier = priceTiers.find((t) => t.id === priceTier)!;
    const visible = useMemo(() => games
        .filter((g) => !search || g.name.toLowerCase().includes(search.trim().toLowerCase()))
        .filter((g) => tier.test(g.price))
        .filter((g) => !discountOnly || g.discount > 0)
        .filter((g) => selectedGenres.length === 0 || selectedGenres.some((id) => genreIdsByGame.get(g.id)?.has(id)))
        .sort((a, b) => (b.discount ?? 0) - (a.discount ?? 0)),
    [games, search, tier, discountOnly, selectedGenres, genreIdsByGame]);

    const wishedGames: GameProps[] = visible.map((game) => ({
        name: game.name,
        imageUrl: game.previeImage,
        rating: 4.5,
        price: game.price,
        discount: game.discount,
        discountEnd: game.discountFinish ? new Date(game.discountFinish).toLocaleDateString('uk-UA') : undefined,
        isOwned: false,
        categorys: genres.slice(0, 5).map((g) => g.name),
    }));

    return (
        <div className="relative bg-background">
            <PageGlows glows={glows} />
            <div className="relative">
                <Head />
                <Search />
                <div className="max-w-[1464px] mx-auto pb-[120px] text-typography">
                    <h1 className="font-manrope font-bold text-heading-1 mb-6">Мій список бажаного</h1>
                    <div className="flex gap-6 items-start">
                        <FilterSidebar
                            genres={genres}
                            selectedGenres={selectedGenres}
                            onGenreToggle={toggleGenre}
                            tagSearch={tagSearch}
                            onTagSearchChange={setTagSearch}
                            priceTier={priceTier}
                            onPriceTierChange={setPriceTier}
                            discountOnly={discountOnly}
                            onDiscountOnlyChange={setDiscountOnly}
                            onReset={() => { setPriceTier('any'); setDiscountOnly(false); setTagSearch(''); setSelectedGenres([]); }}
                        />
                        <div className="flex-1 min-w-0 flex flex-col gap-5">
                            <div className="flex items-center justify-between">
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Пошук у Бажаному..."
                                    className="flex-1 max-w-md px-4 py-2.5 rounded-[22px] border border-secondary bg-background40 text-sign-2 placeholder:text-typographySecondary focus:outline-none focus:border-primary"
                                />
                                <div className="flex items-center gap-2.5">
                                    <span className="font-artifakt text-block-2 text-typographySecondary">Сортування:</span>
                                    <span className="font-artifakt font-semibold text-button-2">Спочатку знижки</span>
                                </div>
                            </div>
                            {loading ? (
                                <div className="h-96 flex items-center justify-center text-heading-2 text-typographySecondary">Завантаження...</div>
                            ) : wishedGames.length === 0 ? (
                                <p className="py-16 text-center font-artifakt text-block-1 text-typographySecondary">Нічого не знайдено</p>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    {wishedGames.map((game) => <Game key={game.name} game={game} />)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Wishlist;
