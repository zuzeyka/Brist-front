import React from 'react';
import { PostProps } from './Post';
import Avatar from '@/components/ui/avatar/Avatar';
import { CircleEllipsisIcon } from 'lucide-react';

interface PostHeaderProps {
    data: PostProps;
    className?: string;
}

const PostHeader: React.FC<PostHeaderProps> = (props) => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
                <div className='flex space-x-4 items-center bg-gray-200 p-4 rounded-full h-1'>
                    <Avatar src='' alt='Avatar' className='w-1 h-1'></Avatar>
                    <p className='text-xs tracking-widest'>{props.data.postAuthor}</p>
                </div>
                <p>{props.data.postDate}</p>
            </div>
            <CircleEllipsisIcon></CircleEllipsisIcon>
        </div>
    );
};

export default PostHeader;

