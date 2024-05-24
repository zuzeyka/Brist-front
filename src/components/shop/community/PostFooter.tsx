import React from 'react';
import { HeartIcon, MessageSquareMoreIcon, Share2Icon } from 'lucide-react';

interface PostFooterProps {
    postLikes: number;
    postComments: number;
    postDate?: string;
    isShared: boolean;
    className?: string;
}

const PostFooter: React.FC<PostFooterProps> = (props) => {
    return (
        <div className={'flex space-x-4 mt-4' + (props.isShared ? '' : ' justify-between') + (props.className ? ' ' + props.className : '')}>
            <div className='flex space-x-2'>
                <div className='flex space-x-2'>
                    <HeartIcon></HeartIcon>
                    <p className='cursor-pointer'>{props.postLikes}</p>
                </div>
                <div className='flex space-x-2'>
                    <MessageSquareMoreIcon></MessageSquareMoreIcon>
                    <p className='cursor-pointer'>{props.postComments}</p>
                </div>
            </div>
            {props.isShared ? (<div className='flex space-x-2'>
                <Share2Icon></Share2Icon>
                <p className='cursor-pointer'>Поділитись</p>
            </div>) : <p>{props.postDate}</p>}
        </div>
    );
};

export default PostFooter;

