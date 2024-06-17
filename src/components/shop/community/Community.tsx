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

const Community: React.FC = () => {
    const [PostComponent, setActiveComponent] = useState(false);
    const handleButtonClick = () => {
        setActiveComponent(!PostComponent);
    };
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
                    <div className='flex flex-col mr-4'>
                        <GameStats gameName='Якась гра, яка дуже всім сподобається' subscribersCount={1000} onlineCount={500}></GameStats>

                        <News className='mt-4' gameName='Якась гра, яка дуже всім сподобається' postTitle='Интересный заголовок новости' postText='Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis.' postDate='25.02.2024' postAuthor='Автор' postComments={54} postLikes={12} postMediaUrl='https://i.imgur.com/ufBjnf8.png'></News>
                        <Guide className='bg-card1 mb-4' gameName='Якась гра, яка дуже всім сподобається' postTitle='Интересный заголовок гайда' postText='Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis.' postDate='25.02.2024' postAuthor='Автор' postComments={54} postLikes={12} postMediaUrl='https://i.imgur.com/5Hds4bh.png'></Guide>
                        <Post gameName='Якась гра, яка дуже всім сподобається' postTitle='Интересный заголовок поста' postText='Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis.' postDate='25.02.2024' postAuthor='Автор' postComments={54} postLikes={12}></Post>
                        <Media gameName='Якась гра, яка дуже всім сподобається' postTitle='Интересный заголовок' postText='Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis.' postDate='25.02.2024' postAuthor='Автор' postComments={54} postLikes={12} postMediaUrl='https://i.imgur.com/XrUH10g.mp4'></Media>
                        <Post gameName='Якась гра, яка дуже всім сподобається' postTitle='Интересный заголовок поста' postText='Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis.' postDate='25.02.2024' postAuthor='Автор' postComments={54} postLikes={12} postMediaUrl='https://i.imgur.com/oh4wspW.png'></Post>
                        <Media gameName='Якась гра, яка дуже всім сподобається' postTitle='Интересный заголовок' postText='Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis.' postDate='25.02.2024' postAuthor='Автор' postComments={54} postLikes={12} postMediaUrl='https://i.imgur.com/hNIw75C.png'></Media>
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
                            <Filters></Filters>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

};

export default Community;

