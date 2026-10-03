import React, { useState } from 'react';
import Filters from './filters';
import { BellPlusIcon, MoreHorizontalIcon, PlusIcon } from 'lucide-react';
import News from './news';
import Guide from './guide';
import Post, { PostProps } from './post';
import Media from './media';
import CreatePost from './create-post';
import GameStats from './game-stats';
import PostPage, { OpenPost } from './post-page';
import { GameGuide, GameNews, GamePosts, Screenshot, User, Video } from '@/shared/lib/interfaces';
import { formatDate } from '../about/review-list';

interface CommunityContent {
    gameName: string;
    subscribersCount: number;
    onlineCount: number;
    posts: GamePosts[];
    postsUserData: User[];
    guides: GameGuide[];
    guidesUserData: User[];
    news: GameNews[];
    newsUserData: User[];
    screenshots: Screenshot[];
    screenshotsUserData: User[];
    videos: Video[];
    videosUserData: User[];
}

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

const secondaryIconButton = 'p-3 rounded-[20px] bg-secondary hover:bg-secondaryHover text-typography';

const Community: React.FC<CommunityContent> = (props) => {
    const [creating, setCreating] = useState(false);
    const [sort, setSort] = useState('popular');
    const [section, setSection] = useState('всі');
    const [search, setSearch] = useState('');
    const [openPost, setOpenPost] = useState<OpenPost>();

    // Users are fetched in the same order as their content.
    const toItems = (section: Section, list: (GamePosts | GameGuide | GameNews | Screenshot | Video)[], users: User[]): FeedItem[] =>
        list.map((item, index) => ({
            id: item.id,
            section,
            createdAt: item.createdAt,
            likes: item.likesCount,
            props: {
                postTitle: item.title || '',
                postText: section === 'пости' || section === 'гайди' || section === 'новини' ? (item as GamePosts).content || item.description : item.description,
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
    const allItems = [
        ...toItems('новини', props.news, props.newsUserData),
        ...toItems('скріншоти', props.screenshots, props.screenshotsUserData),
        ...toItems('гайди', props.guides, props.guidesUserData),
        ...toItems('відео', props.videos, props.videosUserData),
        ...toItems('пости', props.posts, props.postsUserData),
    ];
    const feed = allItems
        .filter((item) => section === 'всі' || item.section === section)
        .filter((item) => !query || `${item.props.postTitle} ${item.props.postText ?? ''}`.toLowerCase().includes(query))
        .sort(sorters[sort]);

    if (openPost) {
        // Other posts from the same section, most popular first.
        const current = [...feed, ...allItems].find((item) => item.id === openPost.id);
        const others = allItems
            .filter((item) => item.id !== openPost.id && (!current || item.section === current.section))
            .sort(sorters.popular)
            .slice(0, 5);
        return (
            <PostPage
                post={openPost}
                others={others}
                gameName={props.gameName}
                subscribersCount={props.subscribersCount}
                onlineCount={props.onlineCount}
                onBack={() => setOpenPost(undefined)}
                onOpen={setOpenPost}
                onCreate={() => { setOpenPost(undefined); setCreating(true); }}
            />
        );
    }

    if (creating) {
        return (
            <div className='py-4'>
                <CreatePost gameName={props.gameName} cancel={() => setCreating(false)} />
            </div>
        );
    }

    return (
        <div className='flex flex-col gap-6 pt-8'>
            <div className='flex items-center justify-between'>
                <GameStats gameName={props.gameName} subscribersCount={props.subscribersCount} onlineCount={props.onlineCount} />
                <div className='w-[348px] flex gap-3'>
                    <button type="button" onClick={() => setCreating(true)} className='flex-1 flex items-center justify-center gap-3 pl-4 pr-[26px] py-3 rounded-[20px] bg-primary hover:bg-primaryHover text-background font-artifakt font-semibold text-button-1'>
                        <PlusIcon className='size-6' />Створити пост
                    </button>
                    <button type="button" aria-label="Підписатися на сповіщення" className={secondaryIconButton}><BellPlusIcon className='size-6' /></button>
                    <button type="button" aria-label="Більше" className={secondaryIconButton}><MoreHorizontalIcon className='size-6' /></button>
                </div>
            </div>
            <div className='flex gap-6 items-start'>
                <div className='w-[1092px] min-w-0 flex flex-col gap-4'>
                    {feed.map((item) => {
                        const Card = cards[item.section];
                        return (
                            <div
                                key={`${item.section}-${item.id}`}
                                role="link"
                                tabIndex={0}
                                className='cursor-pointer rounded-[20px] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary'
                                onClick={() => setOpenPost(item)}
                                onKeyDown={(e) => { if (e.key === 'Enter') setOpenPost(item); }}
                            >
                                <Card {...item.props} />
                            </div>
                        );
                    })}
                    {!feed.length && <p className='py-16 text-center font-artifakt text-block-1 text-typographySecondary'>Тут поки нічого немає</p>}
                </div>
                <aside className='w-[348px] shrink-0 sticky top-6'>
                    <Filters onCommandChange={setSection} onSelectChange={setSort} onSearchChange={setSearch} />
                </aside>
            </div>
        </div>
    );
};

export default Community;
