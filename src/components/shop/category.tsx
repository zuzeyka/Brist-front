import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LayoutGridIcon, ListIcon, ChevronDownIcon } from 'lucide-react';
import Head from '../main/head';
import Search from '../main/search';
import Footer from '../main/footer';
import PageGlows from '@/components/ui/page-glows';
import GameCard from '../main/game-card';
import GamePrice, { discountedPrice } from '../main/game-price';
import FilterSidebar, { priceTiers } from './filter-sidebar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';
import { Categories, CategoryForGame, GameEvent, GameEventForGame, GameInShop } from '@/shared/lib/interfaces';

const glows = [
    { left: 1472, top: 108, large: true },
    { left: 4, top: 1200, large: true },
];

const sortOptions: { id: string; label: string; compare?: (a: GameInShop, b: GameInShop) => number }[] = [
    { id: 'relevance', label: 'За релевантністю' },
    { id: 'price-asc', label: 'Спочатку дешевші', compare: (a, b) => discountedPrice(a.price, a.discount) - discountedPrice(b.price, b.discount) },
    { id: 'price-desc', label: 'Спочатку дорожчі', compare: (a, b) => discountedPrice(b.price, b.discount) - discountedPrice(a.price, a.discount) },
    { id: 'discount', label: 'За розміром знижки', compare: (a, b) => b.discount - a.discount },
    { id: 'newest', label: 'Спочатку новіші', compare: (a, b) => new Date(b.dateOfRelease).getTime() - new Date(a.dateOfRelease).getTime() },
    { id: 'name', label: 'За назвою (А-Я)', compare: (a, b) => a.name.localeCompare(b.name, 'uk') },
];

const Category: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [games, setGames] = useState<GameInShop[]>([]);
    const [genres, setGenres] = useState<Categories[]>([]);
    const [categoriesForGame, setCategoriesForGame] = useState<CategoryForGame[]>([]);
    const [events, setEvents] = useState<GameEvent[]>([]);
    const [eventsForGame, setEventsForGame] = useState<GameEventForGame[]>([]);
    const [loading, setLoading] = useState(true);
    const [isList, setIsList] = useState(false);
    const [tagSearch, setTagSearch] = useState('');
    const [priceTier, setPriceTier] = useState('any');
    const [discountOnly, setDiscountOnly] = useState(false);
    const [sortId, setSortId] = useState('relevance');
    const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
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
                const [gamesRes, genresRes, categoriesForGameRes, eventsRes, eventsForGameRes] = await Promise.all([
                    fetch('http://localhost:5049/api/GamesInShop'),
                    fetch('http://localhost:5049/api/Categories'),
                    fetch('http://localhost:5049/api/CategoriesForGame'),
                    fetch('http://localhost:5049/api/GameEvent'),
                    fetch('http://localhost:5049/api/GameEventForGame'),
                ]);
                if (gamesRes.ok) setGames(await gamesRes.json() as GameInShop[]);
                if (genresRes.ok) setGenres(await genresRes.json() as Categories[]);
                if (categoriesForGameRes.ok) setCategoriesForGame(await categoriesForGameRes.json() as CategoryForGame[]);
                if (eventsRes.ok) setEvents(await eventsRes.json() as GameEvent[]);
                if (eventsForGameRes.ok) setEventsForGame(await eventsForGameRes.json() as GameEventForGame[]);
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

    const eventIdsByGame = useMemo(() => {
        const map = new Map<string, Set<string>>();
        for (const link of eventsForGame) {
            if (!map.has(link.gameId)) map.set(link.gameId, new Set());
            map.get(link.gameId)!.add(link.eventId);
        }
        return map;
    }, [eventsForGame]);

    const toggleEvent = (id: string) => {
        setSelectedEvents((current) => current.includes(id) ? current.filter((e) => e !== id) : [...current, id]);
    };

    const tier = priceTiers.find((t) => t.id === priceTier)!;
    const sort = sortOptions.find((s) => s.id === sortId)!;
    const visible = useMemo(() => {
        const filtered = games
            .filter((g) => !query || g.name.toLowerCase().includes(query.toLowerCase()))
            .filter((g) => tier.test(g.price))
            .filter((g) => !discountOnly || g.discount > 0)
            .filter((g) => selectedGenres.length === 0 || selectedGenres.some((id) => genreIdsByGame.get(g.id)?.has(id)))
            .filter((g) => selectedEvents.length === 0 || selectedEvents.some((id) => eventIdsByGame.get(g.id)?.has(id)));
        return sort.compare ? [...filtered].sort(sort.compare) : filtered;
    }, [games, query, tier, discountOnly, selectedGenres, genreIdsByGame, selectedEvents, eventIdsByGame, sort]);

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
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1 font-artifakt font-semibold text-button-2 hover:text-primaryHover">
                                    {sort.label}<ChevronDownIcon className="size-4" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-card2 text-typography">
                                    {sortOptions.map((option) => (
                                        <DropdownMenuItem
                                            key={option.id}
                                            onClick={() => setSortId(option.id)}
                                            className={'font-artifakt text-sign-2 cursor-pointer focus:bg-cardLight12 focus:text-typography' + (option.id === sortId ? ' text-primary' : '')}
                                        >
                                            {option.label}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
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
                            events={events}
                            selectedEvents={selectedEvents}
                            onEventToggle={toggleEvent}
                            tagSearch={tagSearch}
                            onTagSearchChange={setTagSearch}
                            priceTier={priceTier}
                            onPriceTierChange={setPriceTier}
                            discountOnly={discountOnly}
                            onDiscountOnlyChange={setDiscountOnly}
                            onReset={() => { setPriceTier('any'); setDiscountOnly(false); setTagSearch(''); setSelectedGenres([]); setSelectedEvents([]); }}
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
