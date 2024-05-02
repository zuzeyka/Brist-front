import React from 'react';
import { PostProps } from './Post';
import { HeartIcon, MessageSquareMoreIcon, Share2Icon } from 'lucide-react';

interface PostFooterProps {
    data: PostProps;
    className?: string;
}

const PostFooter: React.FC<PostFooterProps> = (props) => {
    return (
        <div className='flex space-x-4 my-4'>
            <div className='flex space-x-2'>
                <HeartIcon></HeartIcon>
                <p className='cursor-pointer'>{props.data.postLikes}</p>
            </div>
            <div className='flex space-x-2'>
                <MessageSquareMoreIcon></MessageSquareMoreIcon>
                <p className='cursor-pointer'>{props.data.postComments}</p>
            </div>
            <div className='flex space-x-2'>
                <Share2Icon></Share2Icon>
                <p className='cursor-pointer'>Поділитись</p>
            </div>
        </div>
    );
};

export default PostFooter;

