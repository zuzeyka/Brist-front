import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../main/footer';
import Head from '../main/head';
import CommunityList from './community-list';
import NewsList from './news-list';
import Search from './search';
import ListOfSmallGames from './list-of-small-games';
import { GameInfo } from './small-game';
import { GameGuide, GameInShop, GameNews, GamePosts, Screenshot, User, Video } from '@/shared/lib/interfaces';
import Post from '../shop/community/post';
import Guide from '../shop/community/guide';
import Media from '../shop/community/media';
import AllGames from './all-games';
import { PlusIcon } from 'lucide-react';
import PageGlows from '@/components/ui/page-glows';
import { formatDate } from '../shop/about/review-list';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const glows = [
    { left: 1472, top: 108, large: true },
    { left: 4, top: 1200, large: true },
];

// Scrollable tabs so extra collections overflow sideways instead of wrapping or getting clipped.
const tabsListClass = 'ml-2 bg-transparent max-w-full overflow-x-auto flex-nowrap justify-start [scrollbar-width:none] [&::-webkit-scrollbar]:hidden';
const tabTriggerClass = 'shrink-0 bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=inactive]:text-typographySecondary data-[state=active]:underline !text-heading-2';

const Library: React.FC = () => {
    const { t } = useTranslation();
    // Placeholder — the backend has no collections entity yet (see WORKLOG "Known gaps").
    const collections: string[] = [t('library.myCollection')];
    const [games, setGames] = useState<GameInShop[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [isFilter, setIsFilter] = useState(false);
    const [news, setNews] = useState<GameNews[]>([]);
    const [guides, setGuides] = useState<GameGuide[]>();
    const [posts, setPosts] = useState<GamePosts[]>();
    const [videos, setVideos] = useState<Video[]>();
    const [screenshots, setScreenshots] = useState<Screenshot[]>();
    const [videoUsers, setVideoUsers] = useState<User[]>([]);
    const [screenshotUsers, setScreenshotUsers] = useState<User[]>([]);
    const [guideUsers, setGuideUsers] = useState<User[]>([]);
    const [postUsers, setPostUsers] = useState<User[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                await fetchGames();
                await Promise.all([
                    fetchScreenshots(),
                    fetchGamePosts(),
                    fetchVideo(),
                    fetchGameGuides(),
                    fetchGameNews()
                ]);
            } catch (error) {
                console.log('Fetch data error:', error);
            }
        }

        fetchData();
    }, []);

    const fetchGames = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/GamesInShop');
            if (!response.ok) {
                throw new Error(`Network response was not ok - ${response.status}`);
            }
            const data = await response.json() as GameInShop[];
            setGames(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchScreenshots = async () => {
        try {
            const res = await fetch('http://localhost:5049/api/Screenshot');
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
            const res = await fetch('http://localhost:5049/api/GameNews');
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
            const res = await fetch('http://localhost:5049/api/GamePost');
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
            const res = await fetch('http://localhost:5049/api/Video');
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
            const res = await fetch('http://localhost:5049/api/GameGuide');
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json() as GameGuide[];
            setGuides(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        const fetchUsers = async (info: any[], setState: React.Dispatch<React.SetStateAction<User[]>>) => {
            try {
                const users: User[] = [];
                if (info?.length) {
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
        if (videos) fetchUsers(videos, setVideoUsers);
        if (screenshots) fetchUsers(screenshots, setScreenshotUsers);
        if (guides) fetchUsers(guides, setGuideUsers);
        if (posts) fetchUsers(posts, setPostUsers);
        setLoading(false);
    }, [videos, screenshots, guides, posts, news]);

    const gamesInfo: GameInfo[] = games.map((game: GameInShop) => {
        const { previeImage, name } = game;
        return {
            key: null,
            name,
            image: previeImage,
        };
    });

    const combinedContent = posts && guides && screenshots && videos ? [
        ...posts.map((post, index) => ({ ...post, type: 'post', userData: postUsers[index] })),
        ...guides.map((guide, index) => ({ ...guide, type: 'guide', userData: guideUsers[index] })),
        ...screenshots.map((screenshot, index) => ({ ...screenshot, type: 'screenshot', userData: screenshotUsers[index] })),
        ...videos.map((video, index) => ({ ...video, type: 'video', userData: videoUsers[index] })),
    ] : [];

    const combinedContentJSX: JSX.Element[] = combinedContent
        .map((item, index) => {
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
                isShared: false,
            };

            switch (item.type) {
                case 'post':
                    return <Post {...commonProps} />;
                case 'guide':
                    return <Guide {...commonProps} className='bg-card1' />;
                case 'screenshot':
                case 'video':
                    return <Media {...commonProps} />;
                default:
                    return null;
            }
        }).filter((content): content is JSX.Element => content !== null);

    return (
        <div className="relative bg-background">
            <PageGlows glows={glows} />
            <div className="relative">
                <Head></Head>
                {isLoading ? (
                    <div className='h-screen flex justify-center items-center text-heading-1 text-typography'>{t('common.loading')}</div>
                ) : (
                    <ResizablePanelGroup
                        direction="horizontal"
                        className="flex w-full">
                        <ResizablePanel defaultSize={25}>
                            <ListOfSmallGames games={gamesInfo} />
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={75}>
                            <div className="flex flex-col p-5 text-typography">
                                <Search isFilter={isFilter} onFilterChange={setIsFilter}></Search>
                                {news.length > 0 && <NewsList gameNews={news} games={games}></NewsList>}
                                {combinedContentJSX.length > 0 && <CommunityList comunityContent={combinedContentJSX}></CommunityList>}
                                <Tabs defaultValue="all" className="w-full mt-5">
                                    <div className="flex items-center gap-2">
                                        <TabsList className={tabsListClass}>
                                            <TabsTrigger className={tabTriggerClass} value="all">{t('library.allGames')}</TabsTrigger>
                                            <TabsTrigger className={tabTriggerClass} value="favorites">{t('library.favorites')}</TabsTrigger>
                                            {collections.map((collection) => (
                                                <TabsTrigger className={tabTriggerClass} key={collection} value={collection}>{collection}</TabsTrigger>
                                            ))}
                                        </TabsList>
                                        <button type="button" aria-label={t('library.createCollection')} className="shrink-0 text-typographySecondary hover:text-typography">
                                            <PlusIcon className="size-5" />
                                        </button>
                                    </div>
                                    <TabsContent value="all"><AllGames list={isFilter} games={games}></AllGames></TabsContent>
                                    <TabsContent value="favorites"><AllGames list={isFilter} games={games.slice(0, 5)}></AllGames></TabsContent>
                                    <TabsContent value={collections[0]}><AllGames list={isFilter} games={games.slice(5, 15)}></AllGames></TabsContent>
                                </Tabs>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                )}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Library;
