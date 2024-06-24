import React, { useState } from 'react';
import Filters from './Filters';
import { Button } from '@/components/ui/button';
import { BellPlusIcon, CircleEllipsisIcon, PlusIcon } from 'lucide-react';
import News from './News';
import Guide from './Guide';
import Post from './Post';
import Media from './Media';
import CreatePost from './CreatePost';
import GameStats from './GameStats';
import { GameGuide, GameNews, GamePosts, Screenshot, User, Video } from '@/shared/lib/interfaces';

interface CommunityContent {
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

const Community: React.FC<CommunityContent> = ({ posts, guides, news, screenshots, videos, postsUserData, guidesUserData, newsUserData, screenshotsUserData, videosUserData }) => {
    const [PostComponent, setActiveComponent] = useState(false);
    const [selectedSort, setSelectedSort] = useState<string>('popular');
    const [selectedCommand, setSelectedCommand] = useState<string>('всі');

    const handleButtonClick = () => {
        setActiveComponent(!PostComponent);
    };

    const getPostDate = (data: Date) => {
        const date = new Date(data);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`
    }

    const combinedContent = [
        ...posts.map((post, index) => ({ ...post, type: 'post', userData: postsUserData[index] })),
        ...guides.map((guide, index) => ({ ...guide, type: 'guide', userData: guidesUserData[index] })),
        ...news.map((newsItem, index) => ({ ...newsItem, type: 'news', userData: newsUserData[index] })),
        ...screenshots.map((screenshot, index) => ({ ...screenshot, type: 'screenshot', userData: screenshotsUserData[index] })),
        ...videos.map((video, index) => ({ ...video, type: 'video', userData: videosUserData[index] })),
    ];

    if (selectedSort === 'recent') {
        combinedContent.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (selectedSort === 'rated') {
        combinedContent.sort((a, b) => b.likesCount - a.likesCount);
    } else if (selectedSort === 'old') {
        combinedContent.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }

    if (PostComponent) {
        return (
            <div className='max-w-7xl mx-auto py-4'>
                <CreatePost gameName='Якась гра, яка дуже всім сподобається' cancel={handleButtonClick} />
            </div>
        );
    }
    else {
        return (
            <div className='max-w-7xl mx-auto py-4'>
                <div className="col-span-2 flex justify-between">
                    <div className='flex flex-col mr-4 w-full'>
                        <GameStats gameName='Якась гра, яка дуже всім сподобається' subscribersCount={1000} onlineCount={500}></GameStats>

                        {selectedCommand === "всі" && combinedContent.map((item, index) => {
                            switch (item.type) {
                                case 'post':
                                    return (
                                        <Post
                                            key={index}
                                            gameName='Якась гра, яка дуже всім сподобається'
                                            postTitle={item.title || 'Без назви'}
                                            postText={item.description || ''}
                                            postDate={getPostDate(item.createdAt)}
                                            postAuthor={item.userData.name}
                                            postAuthorAvatarUrl={item.userData.image ? item.userData.image : ''}
                                            postComments={Math.floor(Math.random() * 100)}
                                            postLikes={item.likesCount}
                                            postMediaUrl={item.contentUrl}
                                        />
                                    );
                                case 'guide':
                                    return (
                                        <Guide
                                            key={index}
                                            className='bg-card1 mb-4'
                                            gameName='Якась гра, яка дуже всім сподобається'
                                            postTitle={item.title || 'Без назви'}
                                            postText={item.description || ''}
                                            postDate={getPostDate(item.createdAt)}
                                            postAuthor={item.userData.name}
                                            postAuthorAvatarUrl={item.userData.image ? item.userData.image : ''}
                                            postComments={Math.floor(Math.random() * 100)}
                                            postLikes={item.likesCount}
                                            postMediaUrl={item.contentUrl}
                                        />
                                    );
                                case 'news':
                                    return (
                                        <News
                                            key={index}
                                            gameName='Якась гра, яка дуже всім сподобається'
                                            postTitle={item.title || 'Без назви'}
                                            postText={item.description || ''}
                                            postDate={getPostDate(item.createdAt)}
                                            postAuthor={item.userData.name}
                                            postAuthorAvatarUrl={item.userData.image ? item.userData.image : ''}
                                            postComments={Math.floor(Math.random() * 100)}
                                            postLikes={item.likesCount}
                                            postMediaUrl={item.contentUrl}
                                        />
                                    );
                                case 'screenshot':
                                    return (
                                        <Media
                                            key={index}
                                            gameName='Якась гра, яка дуже всім сподобається'
                                            postTitle={item.title ? item.title : 'Без назви'}
                                            postText={item.description ? item.description : ""}
                                            postDate={getPostDate(item.createdAt)}
                                            postAuthor={item.userData.name}
                                            postAuthorAvatarUrl={item.userData.image ? item.userData.image : ''}
                                            postComments={Math.floor(Math.random() * 100)}
                                            postLikes={item.likesCount}
                                            postMediaUrl={item.contentUrl ? item.contentUrl : ''}
                                        />
                                    );
                                case 'video':
                                    return (
                                        <Media
                                            key={index}
                                            gameName='Якась гра, яка дуже всім сподобається'
                                            postTitle={item.title ? item.title : 'Без назви'}
                                            postText={item.description ? item.description : ""}
                                            postDate={getPostDate(item.createdAt)}
                                            postAuthor={item.userData.name}
                                            postAuthorAvatarUrl={item.userData.image ? item.userData.image : ''}
                                            postComments={Math.floor(Math.random() * 100)}
                                            postLikes={item.likesCount}
                                            postMediaUrl={item.contentUrl ? item.contentUrl : ''}
                                        />
                                    );
                                default:
                                    return null;
                            }
                        })}

                        {selectedCommand === 'новини' && (news.map((item, index) =>
                            <News key={index} gameName='Якась гра, яка дуже всім сподобається' postTitle={item.title} postText={item.content} postDate={getPostDate(item.createdAt)} postAuthor={newsUserData[index].name} postAuthorAvatarUrl={newsUserData[index].image ? newsUserData[index].image : ''} postComments={Math.floor(Math.random() * 100)} postLikes={item.likesCount} postMediaUrl={item.contentUrl}></News>
                        ))}
                        {selectedCommand === 'гайди' && (guides.map((guide, index) =>
                            <Guide key={index} className='bg-card1 mb-4' gameName='Якась гра, яка дуже всім сподобається' postTitle={guide.title} postText={guide.content} postDate={getPostDate(guide.createdAt)} postAuthor={guidesUserData[index].name} postAuthorAvatarUrl={guidesUserData[index].image ? guidesUserData[index].image : ''} postComments={Math.floor(Math.random() * 100)} postLikes={guide.likesCount} postMediaUrl={guide.contentUrl}></Guide>
                        ))}
                        {selectedCommand === "пости" && (posts.map((post, index) =>
                            <Post key={index} gameName='Якась гра, яка дуже всім сподобається' postTitle={post.title} postText={post.content} postDate={getPostDate(post.createdAt)} postAuthorAvatarUrl={postsUserData[index].image ? postsUserData[index].image : ''} postAuthor={postsUserData[index].name} postComments={Math.floor(Math.random() * 100)} postLikes={post.likesCount}></Post>
                        ))}
                        {selectedCommand === "відео" && (videos.map((video, index) =>
                            <Media key={index} gameName='Якась гра, яка дуже всім сподобається' postTitle={video.title ? video.title : 'Без назви'} postText={video.description ? video.description : ""} postDate={getPostDate(video.createdAt)} postAuthor={videosUserData[index].name} postAuthorAvatarUrl={videosUserData[index].image ? videosUserData[index].image : ''} postComments={Math.floor(Math.random() * 100)} postLikes={video.likesCount} postMediaUrl={video.contentUrl ? video.contentUrl : ''}></Media>
                        ))}
                        {selectedCommand === "скріншоти" && (screenshots.map((screenshot, index) =>
                            <Media key={index} gameName='Якась гра, яка дуже всім сподобається' postTitle={screenshot.title ? screenshot.title : 'Без назви'} postText={screenshot.description ? screenshot.description : ""} postDate={getPostDate(screenshot.createdAt)} postAuthor={screenshotsUserData[index].name} postAuthorAvatarUrl={screenshotsUserData[index].image ? screenshotsUserData[index].image : ''} postComments={Math.floor(Math.random() * 100)} postLikes={screenshot.likesCount} postMediaUrl={screenshot.contentUrl ? screenshot.contentUrl : ''}></Media>
                        ))}
                    </div>
                    <div className='flex flex-col mt-2'>
                        <div className='sticky top-24 z-9'>
                            <div className="flex justify-between items-center mb-4 space-x-4">
                                <Button className="w-full rounded-2xl bg-primary hover:bg-primaryHover !text-background text-button-1 border-0 font-artifakt" onClick={handleButtonClick}>
                                    <PlusIcon />
                                    <p>Створити пост</p>
                                </Button>
                                <div className="flex space-x-2">
                                    <Button className="bg-secondary hover:bg-secondaryHover text-typography text-button-1 border-0 font-artifakt p-2 rounded-2xl">
                                        <BellPlusIcon className="text-black" />
                                    </Button>
                                    <Button className="bg-secondary hover:bg-secondaryHover text-typography text-button-1 border-0 font-artifakt p-2 rounded-2xl">
                                        <CircleEllipsisIcon className="text-black" />
                                    </Button>
                                </div>
                            </div>
                            <Filters onCommandChange={setSelectedCommand} onSelectChange={setSelectedSort}></Filters>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default Community;
