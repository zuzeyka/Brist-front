import React from 'react';
import { PostProps } from './Post';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

const Guide: React.FC<PostProps> = (props) => {
    return (
        <div className={'max-w-7xl space-y-3 p-4 flex bg-card1 rounded-2xl flex-col my-4' + (props.className ? ' ' + props.className : '')}>
            <PostHeader postInfo={props.postAuthor} postDate={props.postDate} imgUrl='' isUser={true}></PostHeader>
            <div className='flex'>
                <img className='w-32 h-32 rounded-md mr-4 object-cover' src={props.postMediaUrl} alt="Game screenshot"></img>
                <div className='flex flex-col justify-between'>
                    <h2 className='font-bold text-heading-2 font-manrope'>{props.postTitle}</h2>
                    <p className='text-typographySecondary text-block-2 font-artifakt'>{props.postText}</p>
                </div>
            </div>
            <PostFooter postLikes={props.postLikes} postComments={props.postComments} isShared={true}></PostFooter>
        </div>
    );
};

export default Guide;