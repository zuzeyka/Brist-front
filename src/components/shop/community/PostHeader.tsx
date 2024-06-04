import React from 'react';
import Avatar from '@/components/ui/avatar/Avatar';
import { CircleEllipsisIcon } from 'lucide-react';
import { useAuth } from '@/components/authorization/AuthContext';

interface PostHeaderProps {
    postInfo: string;
    postDate: string;
    imgUrl: string;
    isUser: boolean;
    className?: string;
}

const PostHeader: React.FC<PostHeaderProps> = (props) => {
    const isAuthenticated = useAuth();
    return props.isUser ? (
        <div className={'flex items-center justify-between' + (props.className ? ' ' + props.className : '')}>
            <div className='flex items-center space-x-4'>
                <div className='flex space-x-4 items-center bg-gray-300 p-4 pl-0 rounded-full h-1'>
                    <Avatar src={props.imgUrl} alt={props.isUser ? 'User avatar' : 'Game image'} className='w-7 h-7'></Avatar>
                    <p className='text-xs tracking-widest'>{props.postInfo}</p>
                </div>
                {isAuthenticated.isAuthenticated ? <p>{props.postDate}</p> : null}
            </div>
            {isAuthenticated.isAuthenticated ? <CircleEllipsisIcon></CircleEllipsisIcon> : <p>{props.postDate}</p>}
        </div>
    ) : (
        <div className={'flex items-center justify-between' + (props.className ? ' ' + props.className : '')}>
            <div className='flex space-x-4 items-center bg-gray-200 p-4 pl-0 rounded-full h-1'>
                <Avatar src={props.imgUrl} alt={props.isUser ? 'User avatar' : 'Game image'} className='w-7 h-7'></Avatar>
                <p className='text-xs tracking-widest'>{props.postInfo}</p>
            </div>
            <CircleEllipsisIcon></CircleEllipsisIcon>
        </div>
    )
};

export default PostHeader;

