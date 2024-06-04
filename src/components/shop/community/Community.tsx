import React from 'react';
import Filters from './Filters';
import { Button } from '@/components/ui/button';
import { BellPlusIcon, CircleEllipsisIcon } from 'lucide-react';
import News from './News';
import Guide from './Guide';
import Post from './Post';
import Media from './Media';

interface CommunityProps {
    gameName: string;
    className?: string;
}
const Community: React.FC<CommunityProps> = (props) => {
    return (
        <div className={'max-w-7xl mx-auto py-4' + (props.className ? ' ' + props.className : '')}>
            <div className="col-span-2 flex justify-between">
                <div className='flex flex-col mr-4'>
                    <div className='flex flex-col'>
                        <h1 className="text-3xl font-bold mb-4 text-black">{props.gameName}</h1>
                        <div className='flex space-x-2'>
                            <span><b>3421</b> підписників</span>
                            <div className='flex space-x-2'><b>121</b> <div className='w-4 h-4 bg-green-500 rounded-full mt-1'></div></div>
                        </div>
                    </div>

                    <News gameName={props.gameName} postTitle='Интересный заголовок новости' postText='Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis.' postDate='25.02.2024' postAuthor='Автор' postComments={54} postLikes={12} postMediaUrl='https://i.imgur.com/ufBjnf8.png'></News>
                    <Guide gameName={props.gameName} postTitle='Интересный заголовок гайда' postText='Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis.' postDate='25.02.2024' postAuthor='Автор' postComments={54} postLikes={12} postMediaUrl='https://i.imgur.com/5Hds4bh.png'></Guide>
                    <Post gameName={props.gameName} postTitle='Интересный заголовок поста' postText='Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis.' postDate='25.02.2024' postAuthor='Автор' postComments={54} postLikes={12}></Post>
                    <Media gameName={props.gameName} postTitle='Интересный заголовок' postText='Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis.' postDate='25.02.2024' postAuthor='Автор' postComments={54} postLikes={12} postMediaUrl='https://i.imgur.com/XrUH10g.mp4'></Media>
                    <Post gameName={props.gameName} postTitle='Интересный заголовок поста' postText='Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis.' postDate='25.02.2024' postAuthor='Автор' postComments={54} postLikes={12} postMediaUrl='https://i.imgur.com/oh4wspW.png'></Post>
                    <Media gameName={props.gameName} postTitle='Интересный заголовок' postText='Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis.' postDate='25.02.2024' postAuthor='Автор' postComments={54} postLikes={12} postMediaUrl='https://i.imgur.com/hNIw75C.png'></Media>
                </div>
                <div className='flex flex-col mt-2'>
                    <div className='sticky top-24 z-9'>
                        <div className="flex justify-between items-center mb-4 space-x-4">
                            <Button className="bg-[#333333] text-white py-2 px-4 rounded-3xl">Створити пост</Button>
                            <div className="flex space-x-2">
                                <Button className="bg-gray-300 p-2 rounded-2xl">
                                    <BellPlusIcon className="text-black" />
                                </Button>
                                <Button className="bg-gray-300 p-2 rounded-2xl">
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
};

export default Community;

