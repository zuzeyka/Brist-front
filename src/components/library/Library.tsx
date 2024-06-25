import { useEffect, useState } from 'react';
import Footer from '../main/footer';
import Head from '../main/head';
import CommunityList from './community-list';
import NewsList from './news-list';
import Search from './search';
import ListOfSmallGames from './list-of-small-games';
import { GameInfo } from './small-game';
import { GameGuide, GameInShop, GameNews, GamePosts, Screenshot, User, Video } from '@/shared/lib/interfaces';
import Post from './post';
import Guide from './guide';
import Media from './media';
import AllGames from './all-games';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const collections: string[] = ['Test collection 1', 'Test collection 2', 'Test collection 3'];

const Library: React.FC = () => {
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
            console.log("screenshots", data);
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
            console.log("news", data);
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
            console.log("posts", data);
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
            console.log("videos", data);
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
            console.log("guides", data);
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
        if (videos) fetchUsers(videos, setVideoUsers);
        if (screenshots) fetchUsers(screenshots, setScreenshotUsers);
        if (guides) fetchUsers(guides, setGuideUsers);
        if (posts) fetchUsers(posts, setPostUsers);
        setLoading(false);
    }, [videos, screenshots, guides, posts]);

    const gamesInfo: GameInfo[] = games.map((game: GameInShop) => {
        const { previeImage, name } = game;
        return {
            key: null,
            name,
            image: previeImage,
        };
    });

    const getPostDate = (data: Date) => {
        const date = new Date(data);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }

    const combinedContent = posts && guides && screenshots && videos && screenshotUsers.length && videoUsers.length && postUsers.length && guideUsers.length && [
        ...posts.map((post, index) => ({ ...post, type: 'post', userData: postUsers[index] })),
        ...guides.map((guide, index) => ({ ...guide, type: 'guide', userData: guideUsers[index] })),
        ...screenshots.map((screenshot, index) => ({ ...screenshot, type: 'screenshot', userData: screenshotUsers[index] })),
        ...videos.map((video, index) => ({ ...video, type: 'video', userData: videoUsers[index] })),
    ];

    const users = [...postUsers, ...guideUsers, ...screenshotUsers, ...videoUsers];

    const combinedContentJSX: JSX.Element[] = combinedContent && games
        ? combinedContent.map((item, index) => {
            const commonProps = {
                key: index,
                gameName: users[index].name,
                postTitle: item.title || 'Без назви',
                postText: item.description || '',
                postDate: getPostDate(item.createdAt),
                postAuthor: item.userData.name,
                postGameImageUrl: item.contentUrl || '',
                postAuthorAvatarUrl: item.userData.image || '',
                postComments: 0,
                postLikes: item.likesCount,
                postMediaUrl: item.contentUrl || ''
            };

            switch (item.type) {
                case 'post':
                    return <Post {...commonProps} />;
                case 'guide':
                    return <Guide {...commonProps} className='bg-card1 mb-4' />;
                case 'screenshot':
                case 'video':
                    return <Media {...commonProps} />;
                default:
                    return null;
            }
        }).filter((content): content is JSX.Element => content !== null) : [];

    return (
        <>
            <Head></Head>
            {isLoading && !screenshotUsers && !videoUsers && !postUsers && !guideUsers ? (
                <div className='h-screen flex justify-center items-center text-heading-1'>Loading...</div>
            ) : (
                <div className="bg-background flex">
                    <ResizablePanelGroup
                        direction="horizontal"
                        className="flex h-full w-full">
                        <ResizablePanel defaultSize={25}>
                            <ListOfSmallGames games={!isLoading ? gamesInfo : []} />
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={75}>
                            <div className="flex flex-col p-5 text-typography">
                                <Search isFilter={isFilter} onFilterChange={setIsFilter}></Search>
                                <NewsList gameInfo={games} gameNews={news ? news : []}></NewsList>
                                <CommunityList comunityContent={combinedContentJSX}></CommunityList>
                                <Tabs defaultValue="all" className="w-full mt-5">
                                    <TabsList className='ml-2 bg-transparent'>
                                        <TabsTrigger className='bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=inactive]:text-typographySecondary data-[state=active]:underline !text-heading-2' value="all">All games</TabsTrigger>
                                        <TabsTrigger className='data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=inactive]:text-typographySecondary data-[state=active]:underline !text-heading-2 ' value="favorites">Favorites</TabsTrigger>
                                        {collections.map((collection) => (
                                            <TabsTrigger className='data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=inactive]:text-typographySecondary data-[state=active]:underline !text-heading-2' key={collection} value={collection}>{collection}</TabsTrigger>
                                        ))}
                                    </TabsList>
                                    <TabsContent value="all"><AllGames list={isFilter} games={!isLoading ? games : []}></AllGames></TabsContent>
                                    <TabsContent value="favorites"><AllGames list={isFilter} games={!isLoading ? games.slice(0, 5) : []}></AllGames></TabsContent>
                                    <TabsContent value={collections[0]}><AllGames list={isFilter} games={!isLoading ? games.slice(5, 15) : []}></AllGames></TabsContent>
                                    <TabsContent value={collections[1]}><AllGames list={isFilter} games={!isLoading ? games.slice(2, 7) : []}></AllGames></TabsContent>
                                    <TabsContent value={collections[2]}><AllGames list={isFilter} games={!isLoading ? games.slice(5, 10) : []}></AllGames></TabsContent>
                                </Tabs>

                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>)}
            <Footer></Footer>
        </>
    );
};

export default Library;
