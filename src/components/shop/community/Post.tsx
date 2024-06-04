import React from 'react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

export interface PostProps {
    gameName?: string;
    postTitle: string;
    postText?: string;
    postDate: string;
    postMediaUrl?: string;
    postAuthor: string;
    postLikes: number;
    postComments: number;
    className?: string;
}
const Post: React.FC<PostProps> = (props) => {
    return (
        <div className={'max-w-7xl space-y-3 p-4 flex bg-gray-100 rounded-2xl flex-col' + (props.className ? ' ' + props.className : '')}>
            <PostHeader postInfo={props.postAuthor} postDate={props.postDate} imgUrl={props.postMediaUrl ? props.postMediaUrl : ''} isUser={true}></PostHeader>
            <div className='pr-4 space-y-3'>
                <b>{props.postTitle}</b>
                <p>{props.postText}</p>
                {props.postMediaUrl ? <img className='w-full h-auto rounded-md' src={props.postMediaUrl} alt="Game screenshot"></img> : null}
            </div>
            <PostFooter postLikes={props.postLikes} postComments={props.postComments} isShared={true}></PostFooter>
        </div>
    );
};

export default Post;

