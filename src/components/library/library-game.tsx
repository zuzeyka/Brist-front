import { useEffect, useRef, useState } from 'react';
import { ArrowLeftIcon, ChevronRightIcon, InfoIcon, MoreHorizontalIcon, StarIcon } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../main/footer';
import Head from '../main/head';
import ListOfSmallGames from './list-of-small-games';
import { GameInfo } from './small-game';
import PageGlows from '@/components/ui/page-glows';
import Friends from '../shop/about/friends';
import { UserData } from '../shop/about/about-game';
import Post from '../shop/community/post';
import Guide from '../shop/community/guide';
import Media from '../shop/community/media';
import News from '../shop/community/news';
import { formatDate } from '../shop/about/review-list';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { GameGuide, GameInShop, GameNews, GamePosts, Screenshot, User, Video } from '@/shared/lib/interfaces';

const glows = [
    { left: 1472, top: 108, large: true },
    { left: 4, top: 1200, large: true },
];

const secondaryIconButton = 'p-3 rounded-[20px] bg-secondary hover:bg-secondaryHover text-typography';
const toUserData = (users: User[]): UserData[] => users.map((u) => ({ name: u.name, avatarUrl: u.image }));

const LibraryGame: React.FC = () => {
    const { t } = useTranslation();
    const { gameName } = useParams<{ gameName: string }>();
    const [games, setGames] = useState<GameInShop[]>([]);
    const [game, setGame] = useState<GameInShop>();
    const [news, setNews] = useState<GameNews[]>([]);
    const [guides, setGuides] = useState<GameGuide[]>([]);
    const [posts, setPosts] = useState<GamePosts[]>([]);
    const [videos, setVideos] = useState<Video[]>([]);
    const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
    const [guideUsers, setGuideUsers] = useState<User[]>([]);
    const [postUsers, setPostUsers] = useState<User[]>([]);
    const [videoUsers, setVideoUsers] = useState<User[]>([]);
    const [screenshotUsers, setScreenshotUsers] = useState<User[]>([]);
    const [wishedFriends, setWishedFriends] = useState<User[]>([]);
    const [ownedFriends, setOwnedFriends] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const gameIdRef = useRef('');

    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const [gamesRes, gameRes] = await Promise.all([
                    fetch('http://localhost:5049/api/GamesInShop'),
                    fetch('http://localhost:5049/api/GamesInShop/byname/' + encodeURIComponent(gameName ?? '')),
                ]);
                if (gamesRes.ok) setGames(await gamesRes.json() as GameInShop[]);
                if (!gameRes.ok) throw new Error('Network response was not ok');
                const gameData = await gameRes.json() as GameInShop;
                setGame(gameData);
                gameIdRef.current = gameData.id;

                const byGame = (path: string) => fetch('http://localhost:5049/api/' + path + '/bygameid/' + gameData.id);
                const [newsRes, guidesRes, postsRes, videosRes, screenshotsRes, wishedRes, ownedRes] = await Promise.all([
                    byGame('GameNews'), byGame('GameGuide'), byGame('GamePost'), byGame('Video'), byGame('Screenshot'),
                    fetch('http://localhost:5049/api/Friends/wished/bygameid/' + gameData.id),
                    fetch('http://localhost:5049/api/Friends/owned/bygameid/' + gameData.id),
                ]);
                const newsData = newsRes.ok ? await newsRes.json() as GameNews[] : [];
                const guidesData = guidesRes.ok ? await guidesRes.json() as GameGuide[] : [];
                const postsData = postsRes.ok ? await postsRes.json() as GamePosts[] : [];
                const videosData = videosRes.ok ? await videosRes.json() as Video[] : [];
                const screenshotsData = screenshotsRes.ok ? await screenshotsRes.json() as Screenshot[] : [];
                setNews(newsData);
                setGuides(guidesData);
                setPosts(postsData);
                setVideos(videosData);
                setScreenshots(screenshotsData);
                setWishedFriends(wishedRes.ok ? await wishedRes.json() as User[] : []);
                setOwnedFriends(ownedRes.ok ? await ownedRes.json() as User[] : []);

                const fetchUsers = async (info: { authorId: string }[]): Promise<User[]> =>
                    Promise.all(info.map(async (item) => {
                        const r = await fetch('http://localhost:5049/api/User/getbyuid/' + item.authorId, { credentials: 'include' });
                        return r.ok ? await r.json() as User : { name: '' } as User;
                    }));
                const [guidesU, postsU, videosU, screenshotsU] = await Promise.all([
                    fetchUsers(guidesData), fetchUsers(postsData), fetchUsers(videosData), fetchUsers(screenshotsData),
                ]);
                setGuideUsers(guidesU);
                setPostUsers(postsU);
                setVideoUsers(videosU);
                setScreenshotUsers(screenshotsU);
            } catch (error) {
                console.log('Fetch library game error:', error);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [gameName]);

    const gamesInfo: GameInfo[] = games.map((g) => ({ key: null, name: g.name, image: g.previeImage }));

    const combinedContent = [
        ...posts.map((post, index) => ({ ...post, type: 'post' as const, userData: postUsers[index] })),
        ...guides.map((guide, index) => ({ ...guide, type: 'guide' as const, userData: guideUsers[index] })),
        ...screenshots.map((screenshot, index) => ({ ...screenshot, type: 'screenshot' as const, userData: screenshotUsers[index] })),
        ...videos.map((video, index) => ({ ...video, type: 'video' as const, userData: videoUsers[index] })),
    ];

    const communityCards = combinedContent.map((item, index) => {
        const commonProps = {
            key: index,
            postTitle: item.title || t('library.untitled'),
            postText: item.description || '',
            postDate: formatDate(item.createdAt),
            postAuthor: item.userData?.name ?? '',
            postAuthorAvatarUrl: item.userData?.image,
            postMediaUrl: item.contentUrl || '',
            postPosterUrl: item.type === 'video' ? (item as unknown as Video).previewImage : undefined,
            postComments: item.commentsCount ?? 0,
            postLikes: item.likesCount,
        };
        switch (item.type) {
            case 'post': return <Post {...commonProps} />;
            case 'guide': return <Guide {...commonProps} className='bg-card1' />;
            default: return <Media {...commonProps} />;
        }
    });
    const leftColumn = communityCards.filter((_, i) => i % 2 === 0);
    const rightColumn = communityCards.filter((_, i) => i % 2 === 1);
    const latestNews = news[0];

    return (
        <div className="relative bg-background">
            <PageGlows glows={glows} />
            <div className="relative">
                <Head></Head>
                {loading || !game ? (
                    <div className='h-screen flex justify-center items-center text-heading-1 text-typography'>{t('common.loading')}</div>
                ) : (
                    <ResizablePanelGroup direction="horizontal" className="flex w-full">
                        <ResizablePanel defaultSize={25}>
                            <ListOfSmallGames games={gamesInfo} />
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={75}>
                            <div className="flex flex-col text-typography">
                                <img src={game.previeImage} alt="" className="h-[360px] w-full object-cover" />
                                <div className="flex flex-col p-5 gap-6">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4">
                                            <Link to="/library" aria-label={t('library.toLibrary')} className='hover:text-primaryHover'><ArrowLeftIcon className='size-6' /></Link>
                                            <h1 className="font-manrope font-bold text-heading-1">{game.name}</h1>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-6">
                                                <button type="button" className="rounded-full px-[26px] py-3 bg-primary hover:bg-primaryHover text-background font-artifakt font-semibold text-button-1">{t('library.download')}</button>
                                                <div className="flex flex-col font-artifakt text-sign-3 tracking-[-0.01em] text-typographySecondary">
                                                    <span>{t('library.sizeOnDisk')}</span>
                                                    <span className="font-bold text-typography">{game.discount} {t('library.gb')}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <button type="button" aria-label={t('library.favorite')} className={secondaryIconButton}><StarIcon className='size-6' /></button>
                                                <button type="button" aria-label={t('library.information')} className={secondaryIconButton}><InfoIcon className='size-6' /></button>
                                                <button type="button" aria-label={t('shop.about.more')} className={secondaryIconButton}><MoreHorizontalIcon className='size-6' /></button>
                                            </div>
                                        </div>
                                        <nav className="flex gap-8 pt-2 border-t border-cardLight12">
                                            {[t('library.storePage'), 'DLC', t('library.developerPage'), t('shop.tabs.community')].map((label) => (
                                                <Link key={label} to={`/store/${encodeURIComponent(game.name)}`} className="pt-4 font-artifakt font-semibold text-button-1 text-typographySecondary hover:text-typography">{label}</Link>
                                            ))}
                                        </nav>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-[1092px] min-w-0 flex flex-col gap-4">
                                            <h2 className="font-manrope font-bold text-heading-2">{t('library.myReview')}</h2>
                                            <div className="flex items-center justify-center p-10 bg-card1 rounded-[20px]">
                                                <button type="button" className="rounded-full px-8 py-3 bg-primary hover:bg-primaryHover text-background font-artifakt font-semibold text-button-1">{t('shop.about.writeReview')}</button>
                                            </div>
                                        </div>
                                        <aside className="w-[348px] shrink-0 flex flex-col gap-5">
                                            <Friends wishedFriends={toUserData(wishedFriends)} ownedFriends={toUserData(ownedFriends)} />
                                        </aside>
                                    </div>

                                    {latestNews && (
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center justify-between">
                                                <h2 className="text-heading-2 font-bold">{t('library.whatsNew')}</h2>
                                                <span className="flex items-center gap-1 text-button-1 font-artifakt text-typographySecondary">{t('library.allNews')}<ChevronRightIcon className="w-5 h-5" /></span>
                                            </div>
                                            <News
                                                postTitle={latestNews.title}
                                                postText={latestNews.content}
                                                postDate={formatDate(latestNews.createdAt)}
                                                postMediaUrl={latestNews.contentUrl}
                                                postAuthor=""
                                                gameName={game.name}
                                                gameIconUrl={game.previeImage}
                                                postLikes={latestNews.likesCount}
                                                postComments={latestNews.commentsCount ?? 0}
                                            />
                                        </div>
                                    )}

                                    {communityCards.length > 0 && (
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center justify-between">
                                                <h2 className="text-heading-2 font-bold">{t('library.fromCommunity')}</h2>
                                                <Link to="/library/feed" className="flex items-center gap-1 text-button-1 font-artifakt text-typographySecondary hover:text-typography">{t('library.myFeed')}<ChevronRightIcon className="w-5 h-5" /></Link>
                                            </div>
                                            <div className="grid grid-cols-2 gap-6 items-start">
                                                <div className="flex flex-col gap-6">{leftColumn}</div>
                                                <div className="flex flex-col gap-6">{rightColumn}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                )}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default LibraryGame;
