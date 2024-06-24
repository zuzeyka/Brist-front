import { useCallback, useEffect, useState } from 'react';
import Footer from '../main/Footer';
import Head from '../main/Head';
import Search from '../main/Search';
import PageSwitcher from './PageSwitcher';
import AboutGame from './about/AboutGame';
import Characteristics from './characteristics/Characteristics';
import Community from './community/Community';
import { Developer, Discussion, GameBundle, GameGuide, GameInShop, GameNews, GamePosts, Publisher, Screenshot, SystemRequirement, User, Video } from '@/shared/lib/interfaces';

const Store: React.FC = () => {
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
    const [budlesElements, setBundlesElements] = useState<GameInShop[]>([]);
    const [loading, setLoading] = useState(true);
    const gameRate = Math.round(reviews.map(review => review.rate).reduce((a, b) => a + b, 0) / reviews.length);
    let gameId: string;
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
                    fetchGameNews()
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
            gameId = data.id;
            publisherId = data.publisherId;
            developerId = data.developerId;
        } catch (error) {
            console.log('Fetch games error:', error);
        }
    };

    const fetchRequirements = async () => {
        try {
            const resmax = await fetch('http://localhost:5049/api/MaximumSystemRequirements/bygameid/' + gameId);
            const resmin = await fetch('http://localhost:5049/api/MinimalSystemRequirements/bygameid/' + gameId);
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
            const res = await fetch('http://localhost:5049/api/DLCInShop/bygameid/' + gameId);
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
            const res = await fetch('http://localhost:5049/api/Screenshot/bygameid/' + gameId);
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
            const res = await fetch('http://localhost:5049/api/GameNews/bygameid/' + gameId);
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
            const res = await fetch('http://localhost:5049/api/GamePost/bygameid/' + gameId);
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
            const res = await fetch('http://localhost:5049/api/Video/bygameid/' + gameId);
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
            const res = await fetch('http://localhost:5049/api/GameGuide/bygameid/' + gameId);
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
            const res = await fetch('http://localhost:5049/api/CategoriesForGame/bygameid/' + gameId);
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
            const reviewres = await fetch('http://localhost:5049/api/Discussion/byattachedid/' + gameId);
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
            const res = await fetch('http://localhost:5049/api/GameBundleCollection/bygameid/' + gameId);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            const bundleIds = data.map((x: any) => x.bundleId);
            const gamesIds = data.map((x: any) => x.gameId);
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
            const bundleData = await bundleRes.json() as GameBundle[];
            const gameData = await gamesRes.json() as GameInShop[];
            setBundles(bundleData);
            setBundlesElements(gameData);
        } catch (error) {
            console.log('Fetch bundles error:', error);
        }
    };

    useEffect(() => {
        const fetchUsers = async (info: any[], setState: React.Dispatch<React.SetStateAction<User[]>>) => {
            try {
                const users: User[] = [];
                if (info) {
                    await Promise.all(info.map(async (inf) => {
                        const userres = await fetch('http://localhost:5049/api/User/getbyuid/' + inf.authorId);
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
    }, [reviews]);

    const pages = [
        {
            title: 'Про ігру',
            content: (
                <AboutGame
                    releaseDate='01.01.2023'
                    reviews={reviews ? reviews : []}
                    users={reviewUsers ? reviewUsers : []}
                    bundles={bundles ? bundles : []}
                    bundlesContent={budlesElements ? budlesElements : []}
                    publisher={publisher ? publisher.name : 'Невідомо'}
                    developer={developer ? developer.name : 'Невідомо'}
                    previewUrl={screenshots && screenshots[0] ? screenshots[0].contentUrl : ""}
                    DLC={gameDLC ? gameDLC : []}
                    price={game ? game.price : 0}
                    discount={game ? game.discount : 0}
                    gameName={game ? game.name : 'Невідомо'}
                    gameDescription={game && game.description ? game.description : 'Невідомо'}
                    gameCategorys={categories ? categories : ['Немає категорій']}
                    mediaUrl={screenshots.map(x => x.contentUrl)}
                    rate={gameRate}
                    endDate={game && game.discountFinish ? game.discountFinish.toLocaleString() : 'No end date'}
                />
            )
        },
        {
            title: 'Характеристики',
            content: (
                <Characteristics
                    gameName='Якась гра, яка дуже всім сподобається'
                    users={reviewUsers ? reviewUsers : []}
                    maxOs={maxrequirements ? maxrequirements : []}
                    minOs={minrequirements ? minrequirements : []}
                    price={1000}
                    discount={50}
                    rate={gameRate}
                    endDate='01.01.2023'
                    releaseDate='01.01.2023'
                    publisher={publisher ? publisher.name : 'Невідомо'}
                    developer={developer ? developer.name : 'Невідомо'}
                />
            )
        },
        { title: 'Спільнота', content: <Community postsUserData={postUsers ? postUsers : []} screenshotsUserData={screenshotUsers ? screenshotUsers : []} videosUserData={videoUsers ? videoUsers : []} guidesUserData={guideUsers ? guideUsers : []} newsUserData={newsUsers ? newsUsers : []} posts={posts ? posts : []} screenshots={screenshots ? screenshots : []} videos={videos ? videos : []} guides={guides ? guides : []} news={news ? news : []} /> }
    ];

    const [content, setContent] = useState<React.ReactNode>(null);

    const handleMoveContentToParent = useCallback((node: React.ReactNode) => {
        setContent(node);
    }, []);
    return (
        <>
            <Head />
            <Search />
            <div className="max-w-7xl mx-auto bg-background text-typography">
                {loading ? (
                    <div className='h-screen flex justify-center items-center text-heading-1'>Loading...</div>
                ) : (
                    <PageSwitcher onMoveContentToParent={handleMoveContentToParent} pages={pages} />
                )}
                {content}
            </div>
            <Footer />
        </>
    );
};

export default Store;
