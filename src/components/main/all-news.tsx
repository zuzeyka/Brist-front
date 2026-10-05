import { useEffect, useMemo, useState } from 'react';
import Head from './head';
import Search from './search';
import Footer from './footer';
import PageGlows from '@/components/ui/page-glows';
import News from '../shop/community/news';
import { formatDate } from '../shop/about/review-list';
import { GameInShop, GameNews } from '@/shared/lib/interfaces';

const glows = [
    { left: 1472, top: 108, large: true },
    { left: 4, top: 1200, large: true },
];

// Standalone "Новини" page — a cross-game feed, since no dedicated page existed
// for the top-nav "Новини" link (it only ever opened per-game or Library-home
// news carousels before).
const AllNews: React.FC = () => {
    const [news, setNews] = useState<GameNews[]>([]);
    const [games, setGames] = useState<GameInShop[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const [newsRes, gamesRes] = await Promise.all([
                    fetch('http://localhost:5049/api/GameNews'),
                    fetch('http://localhost:5049/api/GamesInShop'),
                ]);
                if (newsRes.ok) setNews(await newsRes.json() as GameNews[]);
                if (gamesRes.ok) setGames(await gamesRes.json() as GameInShop[]);
            } catch (error) {
                console.log('Fetch news error:', error);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, []);

    const sorted = useMemo(
        () => [...news].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
        [news],
    );

    return (
        <div className="relative bg-background">
            <PageGlows glows={glows} />
            <div className="relative">
                <Head />
                <Search />
                <div className="max-w-[1464px] mx-auto pb-[120px] text-typography">
                    <h1 className="text-heading-1 font-manrope font-bold mb-6 px-2">Новини</h1>
                    {loading ? (
                        <p className="px-2 text-typographySecondary">Завантаження...</p>
                    ) : sorted.length === 0 ? (
                        <p className="px-2 text-typographySecondary">Новин поки немає.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sorted.map((item) => {
                                const game = games.find((g) => g.id === item.gameId);
                                return (
                                    <News
                                        key={item.id}
                                        postTitle={item.title}
                                        postText={item.content}
                                        postDate={formatDate(item.createdAt)}
                                        postMediaUrl={item.contentUrl}
                                        postAuthor=""
                                        gameName={game?.name ?? ''}
                                        gameIconUrl={game?.previeImage}
                                        postLikes={item.likesCount}
                                        postComments={item.commentsCount ?? 0}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default AllNews;
