import React from 'react';
import { PostProps } from './Post';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

const News: React.FC<PostProps> = (props) => {
    return (
        <div className={'max-w-7xl flex flex-col mt-4' + (props.className ? ' ' + props.className : '')}>
            <img className='w-auto h-auto rounded-t-2xl' src={props.postMediaUrl} alt="Game screenshot"></img>
            <div className='w-auto h-full bg-card1 rounded-b-2xl'>
                <div className='flex flex-col space-y-3 p-4'>
                    <PostHeader postInfo={props.postAuthor} postDate={props.postDate} imgUrl='' isUser={true}></PostHeader>
                    <h2 className='font-bold text-heading-3 text-typography'>{props.postTitle}</h2>
                    <p className='text-typographySecondary text-block-2 font-artifakt'>{props.postText}</p>
                    <PostFooter postLikes={props.postLikes} postComments={props.postComments} isShared={true}></PostFooter>
                </div>
            </div>
        </div>
    );
};

export default News;

