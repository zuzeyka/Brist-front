import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../main/footer';
import Head from '../main/head';
import MainSearch from '../main/search';
import PageGlows from '@/components/ui/page-glows';
import Filters from '../shop/community/filters';
import Post, { PostProps } from '../shop/community/post';
import Guide from '../shop/community/guide';
import News from '../shop/community/news';
import Media from '../shop/community/media';
import { formatDate } from '../shop/about/review-list';
import { GameGuide, GameNews, GamePosts, Screenshot, User, Video } from '@/shared/lib/interfaces';

const glows = [
    { left: 1472, top: 108, large: true },
    { left: 4, top: 1200, large: true },
];

type Section = 'пости' | 'гайди' | 'новини' | 'скріншоти' | 'відео';

interface FeedItem {
    id: string;
    section: Section;
    createdAt: Date;
    likes: number;
    props: PostProps;
}

const cards: Record<Section, React.FC<PostProps>> = {
    'пости': Post,
    'гайди': Guide,
    'новини': News,
    'скріншоти': Media,
    'відео': Media,
};

const sorters: Record<string, (a: FeedItem, b: FeedItem) => number> = {
    popular: (a, b) => b.likes - a.likes,
    recent: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    old: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
};

const MyFeed: React.FC = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState<GameNews[]>([]);
    const [guides, setGuides] = useState<GameGuide[]>([]);
    const [posts, setPosts] = useState<GamePosts[]>([]);
    const [videos, setVideos] = useState<Video[]>([]);
    const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
    const [newsUsers, setNewsUsers] = useState<User[]>([]);
    const [guideUsers, setGuideUsers] = useState<User[]>([]);
    const [postUsers, setPostUsers] = useState<User[]>([]);
    const [videoUsers, setVideoUsers] = useState<User[]>([]);
    const [screenshotUsers, setScreenshotUsers] = useState<User[]>([]);
    const [sort, setSort] = useState('popular');
    const [section, setSection] = useState('всі');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchJson = async <T,>(path: string): Promise<T> => {
            const res = await fetch('http://localhost:5049/api/' + path);
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json() as Promise<T>;
        };

        const fetchUsers = async (info: { authorId: string }[]): Promise<User[]> =>
            Promise.all(info.map((item) => fetchJson<User>('User/getbyuid/' + item.authorId)));

        async function load() {
            try {
                const [newsData, guidesData, postsData, videosData, screenshotsData] = await Promise.all([
                    fetchJson<GameNews[]>('GameNews'),
                    fetchJson<GameGuide[]>('GameGuide'),
                    fetchJson<GamePosts[]>('GamePost'),
                    fetchJson<Video[]>('Video'),
                    fetchJson<Screenshot[]>('Screenshot'),
                ]);
                setNews(newsData);
                setGuides(guidesData);
                setPosts(postsData);
                setVideos(videosData);
                setScreenshots(screenshotsData);

                const [newsU, guidesU, postsU, videosU, screenshotsU] = await Promise.all([
                    fetchUsers(newsData),
                    fetchUsers(guidesData),
                    fetchUsers(postsData),
                    fetchUsers(videosData),
                    fetchUsers(screenshotsData),
                ]);
                setNewsUsers(newsU);
                setGuideUsers(guidesU);
                setPostUsers(postsU);
                setVideoUsers(videosU);
                setScreenshotUsers(screenshotsU);
            } catch (error) {
                console.log('Fetch feed error:', error);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, []);

    // Users are fetched in the same order as their content.
    const toItems = (itemSection: Section, list: (GamePosts | GameGuide | GameNews | Screenshot | Video)[], users: User[]): FeedItem[] =>
        list.map((item, index) => ({
            id: item.id,
            section: itemSection,
            createdAt: item.createdAt,
            likes: item.likesCount,
            props: {
                postTitle: item.title || '',
                postText: itemSection === 'пости' || itemSection === 'гайди' || itemSection === 'новини' ? (item as GamePosts).content || item.description : item.description,
                postDate: formatDate(item.createdAt),
                postMediaUrl: 'contentUrl' in item ? item.contentUrl : undefined,
                postPosterUrl: (item as Video).previewImage,
                postAuthor: users[index]?.name ?? '',
                postAuthorAvatarUrl: users[index]?.image,
                postLikes: item.likesCount,
                postComments: item.commentsCount ?? 0,
            },
        }));

    const query = search.trim().toLowerCase();
    const feed = [
        ...toItems('новини', news, newsUsers),
        ...toItems('скріншоти', screenshots, screenshotUsers),
        ...toItems('гайди', guides, guideUsers),
        ...toItems('відео', videos, videoUsers),
        ...toItems('пости', posts, postUsers),
    ]
        .filter((item) => section === 'всі' || item.section === section)
        .filter((item) => !query || `${item.props.postTitle} ${item.props.postText ?? ''}`.toLowerCase().includes(query))
        .sort(sorters[sort]);

    return (
        <div className="relative bg-background">
            <PageGlows glows={glows} />
            <div className="relative">
                <Head />
                <MainSearch />
                <div className="max-w-[1464px] mx-auto pt-3 pb-[120px] text-typography">
                    {loading ? (
                        <div className='h-screen flex justify-center items-center text-heading-1'>{t('common.loading')}</div>
                    ) : (
                        <div className='flex flex-col gap-6 pt-8'>
                            <div className='flex items-center gap-4'>
                                <Link to="/library" aria-label={t('library.toLibrary')} className='hover:text-primaryHover'><ArrowLeftIcon className='size-6' /></Link>
                                <h1 className='font-manrope font-bold text-heading-2'>{t('library.myFeed')}</h1>
                            </div>
                            <div className='flex gap-6 items-start'>
                                <div className='w-[1092px] min-w-0 flex flex-col gap-4'>
                                    {feed.map((item) => {
                                        const Card = cards[item.section];
                                        return <Card key={`${item.section}-${item.id}`} {...item.props} />;
                                    })}
                                    {!feed.length && <p className='py-16 text-center font-artifakt text-block-1 text-typographySecondary'>{t('shop.community.nothingYet')}</p>}
                                </div>
                                <aside className='w-[348px] shrink-0 sticky top-6'>
                                    <Filters onCommandChange={setSection} onSelectChange={setSort} onSearchChange={setSearch} />
                                </aside>
                            </div>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MyFeed;
