import React from 'react';
import { PostProps } from './Post';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

const Media: React.FC<PostProps> = (props) => {
    const extensions = props.postMediaUrl?.split('.').pop()?.toLowerCase();
    let media;
    if (extensions === 'jpg' || extensions === 'jpeg' || extensions === 'png') {
        media = <img className='w-full h-auto rounded-md' src={props.postMediaUrl} alt="Game screenshot"></img>;
    } else if (extensions === 'mp4' || extensions === 'webm') {
        media = <video className='w-full h-auto rounded-md' src={props.postMediaUrl} controls></video>;
    }

    return (
        <div className={'max-w-7xl space-y-3 p-4 flex bg-card2 rounded-2xl flex-col my-4' + (props.className ? ' ' + props.className : '')}>
            <PostHeader postInfo={props.postAuthor} postDate={props.postDate} imgUrl='' isUser={true}></PostHeader>
            <div className='pr-4 space-y-3'>
                {media}
                {props.postText ? <p className='text-typographySecondary text-block-2 font-artifakt'>{props.postText}</p>
                    : null}
            </div>
            <PostFooter postLikes={props.postLikes} postComments={props.postComments} isShared={true}></PostFooter>
        </div>
    );
};

export default Media;

