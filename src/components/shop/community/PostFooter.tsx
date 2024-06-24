import React from 'react';
import { HeartIcon, MessageSquareIcon, Share2Icon } from 'lucide-react';

interface PostFooterProps {
    postLikes: number;
    postComments: number;
    postDate?: string;
    isShared: boolean;
    className?: string;
}

const PostFooter: React.FC<PostFooterProps> = (props) => {
    return (
        <div className={'flex space-x-4 mt-4 items-center text-typography' + (props.isShared ? '' : ' justify-between') + (props.className ? ' ' + props.className : '')}>
            <div className='flex space-x-2'>
                <div className='flex items-center space-x-2 bg-cardLight12 p-2 rounded-md w-16 justify-center'>
                    <HeartIcon className='shrink-0 p-0.5 text-accent'></HeartIcon>
                    <p className='cursor-pointer text-button-2 text-typographySecondary font-artifakt mr-1'>{props.postLikes >= 1000 ? props.postLikes / 1000 + 'k' : props.postLikes}</p>
                </div>
                <div className='flex items-center space-x-2 bg-cardLight12 p-2 rounded-md w-16 justify-center'>
                    <MessageSquareIcon></MessageSquareIcon>
                    <p className='cursor-pointer text-button-2 text-typographySecondary font-artifakt mr-1'>{props.postComments >= 1000 ? props.postComments / 1000 + 'k' : props.postComments}</p>
                </div>
            </div>
            {props.isShared ? (<div className='flex space-x-2'>
                <Share2Icon></Share2Icon>
                <p className='cursor-pointer'>Поділитись</p>
            </div>) : <p className='text-typographySecondary'>{props.postDate}</p>}
        </div>
    );
};

export default PostFooter;

