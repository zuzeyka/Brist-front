import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LayoutGridIcon, ListIcon } from 'lucide-react';
import Head from '../main/head';
import Search from '../main/search';
import Footer from '../main/footer';
import PageGlows from '@/components/ui/page-glows';
import GameCard from '../main/game-card';
import GamePrice from '../main/game-price';
import FilterSidebar, { priceTiers } from './filter-sidebar';
import { Link } from 'react-router-dom';
import { Categories, CategoryForGame, GameInShop } from '@/shared/lib/interfaces';

const glows = [
    { left: 1472, top: 108, large: true },
    { left: 4, top: 1200, large: true },
];

const Category: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [games, setGames] = useState<GameInShop[]>([]);
    const [genres, setGenres] = useState<Categories[]>([]);
    const [categoriesForGame, setCategoriesForGame] = useState<CategoryForGame[]>([]);
    const [loading, setLoading] = useState(true);
    const [isList, setIsList] = useState(false);
    const [tagSearch, setTagSearch] = useState('');
    const [priceTier, setPriceTier] = useState('any');
    const [discountOnly, setDiscountOnly] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState<string[]>(() => {
        const genre = searchParams.get('genre');
        return genre ? [genre] : [];
    });
    const query = searchParams.get('q') ?? '';

    // Re-sync when navigating here with a different ?genre= (e.g. from the
    // catalog popup) — the lazy useState above only captures the very first load.
    useEffect(() => {
        const genre = searchParams.get('genre');
        if (genre) setSelectedGenres([genre]);
    }, [searchParams]);

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
                console.log('Fetch catalog error:', error);
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
        .filter((g) => !query || g.name.toLowerCase().includes(query.toLowerCase()))
        .filter((g) => tier.test(g.price))
        .filter((g) => !discountOnly || g.discount > 0)
        .filter((g) => selectedGenres.length === 0 || selectedGenres.some((id) => genreIdsByGame.get(g.id)?.has(id))),
    [games, query, tier, discountOnly, selectedGenres, genreIdsByGame]);

    return (
        <div className="relative bg-background">
            <PageGlows glows={glows} />
            <div className="relative">
                <Head />
                <Search />
                <div className="max-w-[1464px] mx-auto pb-[120px] text-typography">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2.5">
                            <span className="font-artifakt text-block-2 text-typographySecondary">Сортування:</span>
                            <span className="font-artifakt font-semibold text-button-2">За релевантністю</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-artifakt text-block-2 text-typographySecondary">Вид:</span>
                            <button type="button" aria-label="Сітка" onClick={() => setIsList(false)} className={!isList ? 'text-primary' : 'text-typographySecondary hover:text-typography'}><LayoutGridIcon className="size-5" /></button>
                            <button type="button" aria-label="Список" onClick={() => setIsList(true)} className={isList ? 'text-primary' : 'text-typographySecondary hover:text-typography'}><ListIcon className="size-5" /></button>
                        </div>
                    </div>
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
                        <div className="flex-1 min-w-0">
                            {loading ? (
                                <div className="h-96 flex items-center justify-center text-heading-2 text-typographySecondary">Завантаження...</div>
                            ) : visible.length === 0 ? (
                                <p className="py-16 text-center font-artifakt text-block-1 text-typographySecondary">Нічого не знайдено</p>
                            ) : isList ? (
                                <div className="flex flex-col gap-3">
                                    {visible.map((game) => (
                                        <Link key={game.id} to={`/store/${encodeURIComponent(game.name)}`} className="flex items-center gap-5 bg-card1 hover:brightness-110 transition rounded-[20px] overflow-hidden pr-5">
                                            <img src={game.previeImage} alt="" className="w-[240px] h-[90px] object-cover shrink-0" />
                                            <h2 className="flex-1 font-manrope font-bold text-heading-3">{game.name}</h2>
                                            <GamePrice price={game.price} discount={game.discount} />
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-3 gap-5">
                                    {visible.map((game) => (
                                        <GameCard key={game.id} gameName={game.name} gamePictureUrl={game.previeImage} price={game.price} discount={game.discount} />
                                    ))}
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

export default Category;
