import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../main/footer';
import Head from '../main/head';
import Search from '../main/search';
import PageSwitcher from './page-switcher';
import AboutGame from './about/about-game';
import Characteristics from './characteristics/characteristics';
import Community from './community/community';
import { Developer, Discussion, GameGroup, DlcInShop, GameBundle, GameGuide, GameInShop, GameNews, GamePosts, Publisher, Screenshot, SystemRequirement, User, Video } from '@/shared/lib/interfaces';
import { BundleItem } from './about/bundle-list';
import PageGlows from '@/components/ui/page-glows';

const glows = [
    { left: 4, top: 817, large: true },
    { left: 1472, top: 108, large: true },
    { left: 1016, top: 2327, large: true },
];

const Store: React.FC = () => {
    const { t } = useTranslation();
    const [game, setGame] = useState<GameInShop>();
    const [gameDLC, setDLC] = useState<GameInShop[]>([]);
    const [reviews, setReviews] = useState<Discussion[]>([]);
    const [publisher, setPublisher] = useState<Publisher>();
    const [news, setNews] = useState<GameNews[]>([]);
    const [guides, setGuides] = useState<GameGuide[]>([]);
    const [posts, setPosts] = useState<GamePosts[]>([]);
    const [videos, setVideos] = useState<Video[]>([]);
    const [developer, setDeveloper] = useState<Developer>();
    const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
    const [minrequirements, setMinRequirements] = useState<SystemRequirement[]>([]);
    const [maxrequirements, setMaxRequirements] = useState<SystemRequirement[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [bundles, setBundles] = useState<GameBundle[]>([]);
    const [reviewUsers, setReviewUsers] = useState<User[]>([]);
    const [videoUsers, setVideoUsers] = useState<User[]>([]);
    const [screenshotUsers, setScreenshotUsers] = useState<User[]>([]);
    const [guideUsers, setGuideUsers] = useState<User[]>([]);
    const [postUsers, setPostUsers] = useState<User[]>([]);
    const [newsUsers, setNewsUsers] = useState<User[]>([]);
    const [bundleContents, setBundleContents] = useState<BundleItem[][]>([]);
    const [wishedFriends, setWishedFriends] = useState<User[]>([]);
    const [group, setGroup] = useState<GameGroup>();
    const [ownedFriends, setOwnedFriends] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const gameRate = reviews.length > 0 ? Math.round(reviews.map(review => review.rate).reduce((a, b) => a + b, 0) / reviews.length) : 0;
    const gameIdRef = useRef<string>('');
    let developerId: string;
    let publisherId: string;

    useEffect(() => {
        async function fetchData() {
            try {
                await fetchGames();
                await Promise.all([
                    fetchDLC(),
                    fetchReviews(),
                    fetchPublishers(),
                    fetchDevelopers(),
                    fetchScreenshots(),
                    fetchCategories(),
                    fetchBundles(),
                    fetchRequirements(),
                    fetchGamePosts(),
                    fetchVideo(),
                    fetchGameGuides(),
                    fetchGameNews(),
                    fetchFriends(),
                    fetchGroup()
                ]);
                setLoading(false);
            } catch (error) {
                console.log('Fetch data error:', error);
            }
        }

        fetchData();
    }, []);

    const fetchGames = async () => {
        try {
            const res = await fetch('http://localhost:5049/api/GamesInShop/byname/' + window.location.pathname.split('/')[2]);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json() as GameInShop;
            setGame(data);
            gameIdRef.current = data.id;
            publisherId = data.publisherId;
            developerId = data.developerId;
        } catch (error) {
            console.log('Fetch games error:', error);
        }
    };

    const fetchRequirements = async () => {
        try {
            const resmax = await fetch('http://localhost:5049/api/MaximumSystemRequirements/bygameid/' + gameIdRef.current);
            const resmin = await fetch('http://localhost:5049/api/MinimalSystemRequirements/bygameid/' + gameIdRef.current);
            if (!resmax.ok || !resmin.ok) {
                throw new Error('Network response was not ok');
            }
            const maxdata = await resmax.json() as SystemRequirement;
            const mindata = await resmin.json() as SystemRequirement;
            setMinRequirements([mindata]);
            setMaxRequirements([maxdata]);
        } catch (error) {
            console.log('Fetch games error:', error);
        }
    };

    const fetchDLC = async () => {
        try {
            const res = await fetch('http://localhost:5049/api/DLCInShop/bygameid/' + gameIdRef.current);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json() as GameInShop[];
            setDLC(data);
        } catch (error) {
            console.log('Fetch dlc error:', error);
        }
    };

    const fetchPublishers = async () => {
        try {
            const res = await fetch('http://localhost:5049/api/Publisher/' + publisherId);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json() as Publisher;
            setPublisher(data);
        } catch (error) {
            console.log('Fetch publishers error:', error);
        }
    };

    const fetchDevelopers = async () => {
        try {
            const res = await fetch('http://localhost:5049/api/Developer/' + developerId);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json() as Developer;
            setDeveloper(data);
        } catch (error) {
            console.log('Fetch developers error:', error);
        }
    };

    const fetchScreenshots = async () => {
        try {
            const res = await fetch('http://localhost:5049/api/Screenshot/bygameid/' + gameIdRef.current);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json() as Screenshot[];
            setScreenshots(data);
        } catch (error) {
            console.log('Fetch screenshots error:', error);
        }
    };

    const fetchGameNews = async () => {
        try {
            const res = await fetch('http://localhost:5049/api/GameNews/bygameid/' + gameIdRef.current);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json() as GameNews[];
            setNews(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchGamePosts = async () => {
        try {
            const res = await fetch('http://localhost:5049/api/GamePost/bygameid/' + gameIdRef.current);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json() as GamePosts[];
            setPosts(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchVideo = async () => {
        try {
            const res = await fetch('http://localhost:5049/api/Video/bygameid/' + gameIdRef.current);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json() as Video[];
            setVideos(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchGameGuides = async () => {
        try {
            const res = await fetch('http://localhost:5049/api/GameGuide/bygameid/' + gameIdRef.current);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json() as GameGuide[];
            setGuides(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const res = await fetch('http://localhost:5049/api/CategoriesForGame/bygameid/' + gameIdRef.current);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            const ids = data.map((x: any) => x.categoryId);
            const res1 = await fetch('http://localhost:5049/api/Categories/getall', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ids)
            });
            const data1 = await res1.json();
            setCategories(data1.map((x: any) => x.name));
        } catch (error) {
            console.log('Fetch categories error:', error);
        }
    };

    const fetchReviews = async () => {
        try {
            const reviewres = await fetch('http://localhost:5049/api/Discussion/byattachedid/' + gameIdRef.current);
            if (!reviewres.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await reviewres.json() as Discussion[];
            setReviews(data);
        } catch (error) {
            console.log('Fetch reviews error:', error);
        }
    };

    const fetchBundles = async () => {
        try {
            const res = await fetch('http://localhost:5049/api/GameBundleCollection/bygameid/' + gameIdRef.current);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            const bundleIds = data.map((x: any) => x.bundleId);
            const gamesIds = data.map((x: any) => x.gameId);
            const dlcIds = data.map((x: any) => x.dlcId);
            const bundleRes = await fetch('http://localhost:5049/api/GameBundle/getall', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bundleIds)
            });
            const gamesRes = await fetch('http://localhost:5049/api/GamesInShop/getall', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(gamesIds)
            });
            const dlcsRes = await fetch('http://localhost:5049/api/DLCInShop/getall', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dlcIds)
            });
            const bundleData = await bundleRes.json() as (GameBundle & { id: string })[];
            const gameData = await gamesRes.json() as GameInShop[];
            const dlcData = await dlcsRes.json() as DlcInShop[];
            setBundles(bundleData);
            // Each collection row links a bundle to a game and/or a DLC.
            setBundleContents(bundleData.map((bundle) => {
                const rows = data.filter((x: any) => x.bundleId === bundle.id);
                const items: BundleItem[] = [];
                for (const row of rows) {
                    const game = gameData.find((g) => g.id === row.gameId);
                    if (game && !items.some((i) => i.name === game.name)) items.push({ name: game.name, isBaseGame: true });
                    const dlc = dlcData.find((d) => d.id === row.dlcId);
                    if (dlc) items.push({ name: dlc.name });
                }
                return items;
            }));
        } catch (error) {
            console.log('Fetch bundles error:', error);
        }
    };

    const fetchGroup = async () => {
        try {
            const res = await fetch('http://localhost:5049/api/GameGroup/bygameid/' + gameIdRef.current);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            setGroup(await res.json() as GameGroup);
        } catch (error) {
            console.log('Fetch group error:', error);
        }
    };

    const fetchFriends = async () => {
        try {
            const [wished, owned] = await Promise.all([
                fetch('http://localhost:5049/api/Friends/wished/bygameid/' + gameIdRef.current),
                fetch('http://localhost:5049/api/Friends/owned/bygameid/' + gameIdRef.current),
            ]);
            if (!wished.ok || !owned.ok) {
                throw new Error('Network response was not ok');
            }
            setWishedFriends(await wished.json() as User[]);
            setOwnedFriends(await owned.json() as User[]);
        } catch (error) {
            console.log('Fetch friends error:', error);
        }
    };

    useEffect(() => {
        const fetchUsers = async (info: any[], setState: React.Dispatch<React.SetStateAction<User[]>>) => {
            try {
                const users: User[] = [];
                if (info) {
                    await Promise.all(info.map(async (inf) => {
                        const userres = await fetch('http://localhost:5049/api/User/getbyuid/' + inf.authorId, { credentials: 'include' });
                        if (!userres.ok) {
                            throw new Error('Network response was not ok');
                        }
                        const data = await userres.json() as User;
                        users.push(data);
                    }));
                }
                setState(users);
            } catch (error) {
                console.log('Fetch users error:', error);
            }
        }

        fetchUsers(reviews, setReviewUsers);
        fetchUsers(videos, setVideoUsers);
        fetchUsers(screenshots, setScreenshotUsers);
        fetchUsers(guides, setGuideUsers);
        fetchUsers(posts, setPostUsers);
        fetchUsers(news, setNewsUsers);
    }, [reviews, videos, screenshots, guides, posts, news]);

    const getPostDate = (data: Date) => {
        const date = new Date(data);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }
    const getDiscountEnd = (data?: Date) => {
        if (!data) return undefined;
        const date = new Date(data);
        return `${getPostDate(data)} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    }
    const pages = [
        {
            title: t('shop.tabs.about'),
            content: (
                <AboutGame
                    gameId={game ? game.id : ''}
                    releaseDate={game && game.dateOfRelease ? getPostDate(game.dateOfRelease) : 'No release date'}
                    reviews={reviews ? reviews : []}
                    users={reviewUsers ? reviewUsers : []}
                    bundles={bundles}
                    bundleContents={bundleContents}
                    wishedFriends={wishedFriends}
                    ownedFriends={ownedFriends}
                    discountEnd={getDiscountEnd}
                    publisher={publisher ? publisher.name : t('shop.unknown')}
                    developer={developer ? developer.name : t('shop.unknown')}
                    previewUrl={game && game.previeImage ? game.previeImage : ""}
                    DLC={gameDLC ? gameDLC : []}
                    price={game ? game.price : 0}
                    discount={game ? game.discount : 0}
                    gameName={game ? game.name : t('shop.unknown')}
                    gameDescription={game && game.description ? game.description : t('shop.unknown')}
                    gameCategorys={categories ? categories : [t('shop.noCategories')]}
                    mediaUrl={screenshots.map(x => x.contentUrl)}
                    rate={gameRate}
                    endDate={getDiscountEnd(game?.discountFinish)}
                />
            )
        },
        {
            title: t('shop.tabs.characteristics'),
            content: (
                <Characteristics
                    gameId={game ? game.id : ''}
                    gameName={game ? game.name : t('shop.unknown')}
                    wishedFriends={wishedFriends}
                    ownedFriends={ownedFriends}
                    maxOs={maxrequirements}
                    minOs={minrequirements}
                    previewUrl={game && game.previeImage ? game.previeImage : ""}
                    price={game ? game.price : 0}
                    discount={game ? game.discount : 0}
                    rate={gameRate}
                    endDate={getDiscountEnd(game?.discountFinish)}
                    releaseDate={game && game.dateOfRelease ? getPostDate(game.dateOfRelease) : 'No release date'}
                    publisher={publisher ? publisher.name : t('shop.unknown')}
                    developer={developer ? developer.name : t('shop.unknown')}
                />
            )
        },
        { title: t('shop.tabs.community'), content: <Community gameId={game?.id ?? ''} gameGroupId={group?.id ?? ''} onPostCreated={() => Promise.all([fetchGamePosts(), fetchScreenshots(), fetchVideo(), fetchGameGuides()])} gameName={game ? game.name : t('shop.unknown')} subscribersCount={group?.subscribersCount ?? 0} onlineCount={group?.onlineCount ?? 0} postsUserData={postUsers ? postUsers : []} screenshotsUserData={screenshotUsers ? screenshotUsers : []} videosUserData={videoUsers ? videoUsers : []} guidesUserData={guideUsers ? guideUsers : []} newsUserData={newsUsers ? newsUsers : []} posts={posts ? posts : []} screenshots={screenshots ? screenshots : []} videos={videos ? videos : []} guides={guides ? guides : []} news={news ? news : []} /> }
    ];

    const [content, setContent] = useState<React.ReactNode>(null);

    const handleMoveContentToParent = useCallback((node: React.ReactNode) => {
        setContent(node);
    }, []);
    return (
        <div className="relative bg-background">
            <PageGlows glows={glows} />
            <div className="relative">
            <Head />
            <Search />
            <div className="max-w-[1464px] mx-auto pt-3 pb-[120px] text-typography">
                {loading ? (
                    <div className='h-screen flex justify-center items-center text-heading-1'>Loading...</div>
                ) : (
                    <PageSwitcher onMoveContentToParent={handleMoveContentToParent} pages={pages} />
                )}
                {content}
            </div>
            <Footer />
            </div>
        </div>
    );
};

export default Store;
