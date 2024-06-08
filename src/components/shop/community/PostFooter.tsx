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
        <div className={'flex space-x-4 mt-4 items-center' + (props.isShared ? '' : ' justify-between') + (props.className ? ' ' + props.className : '')}>
            <div className='flex space-x-2'>
                <div className='flex items-center space-x-2 bg-cardLight12 p-2 rounded-md w-16 justify-center'>
                    <HeartIcon></HeartIcon>
                    <p className='cursor-pointer text-button-2 text-typographySecondary font-artifakt mr-1'>{props.postLikes}</p>
                </div>
                <div className='flex items-center space-x-2 bg-cardLight12 p-2 rounded-md w-16 justify-center'>
                    <MessageSquareIcon></MessageSquareIcon>
                    <p className='cursor-pointer text-button-2 text-typographySecondary font-artifakt mr-1'>{props.postComments}</p>
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

