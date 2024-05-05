import React from 'react';
import { PostProps } from './Post';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

const Guide: React.FC<PostProps> = (props) => {
    return (
        <div className={'max-w-7xl space-y-3 p-4 flex bg-gray-100 rounded-md flex-col my-4' + " " + props.className}>
            <PostHeader data={{ ...props }}></PostHeader>
            <div className='flex'>
                <img className='w-32 h-32 rounded-md mr-4' src={props.postMediaUrl} alt="Game screenshot"></img>
                <div className='flex flex-col justify-between'>
                    <b>{props.postTitle}</b>
                    <p>{props.postText}</p>
                </div>
            </div>
            <PostFooter data={{ ...props }}></PostFooter>
        </div>
    );
};

export default Guide;