import React from 'react';
import PostHeader from './post-header';
import PostFooter from './post-footer';

export interface PostProps {
    gameName?: string;
    postTitle: string;
    postText?: string;
    postDate: string;
    postMediaUrl?: string;
    // Still frame shown over a video until it plays.
    postPosterUrl?: string;
    postAuthor: string;
    postAuthorAvatarUrl?: string;
    postLikes: number;
    postComments: number;
    className?: string;
}

export const isVideoUrl = (url?: string) => !!url && /\.(mp4|webm)(\?|$)/i.test(url);
export const isImageUrl = (url?: string) => !!url && /\.(jpe?g|png|webp|gif)(\?|$)/i.test(url);

export const cardClass = 'flex flex-col gap-6 p-6 bg-card1 rounded-[20px] text-typography';
export const titleClass = 'font-manrope font-bold text-heading-3';
export const textClass = 'font-artifakt text-block-2 tracking-[-0.01em] whitespace-pre-line';

// "Discussion Card": title and text, with an optional 480px image underneath.
const Post: React.FC<PostProps> = (props) => (
    <article className={cardClass + (props.className ? ' ' + props.className : '')}>
        <div className='flex flex-col gap-4'>
            <PostHeader postInfo={props.postAuthor} postDate={props.postDate} imgUrl={props.postAuthorAvatarUrl ?? ''} isUser={true} />
            <div className='flex flex-col gap-3'>
                <h2 className={titleClass}>{props.postTitle}</h2>
                {props.postText && <p className={textClass}>{props.postText}</p>}
                {isImageUrl(props.postMediaUrl) && <img className='w-full h-[480px] object-cover rounded-2xl' src={props.postMediaUrl} alt="" />}
                {isVideoUrl(props.postMediaUrl) && <video className='w-full h-[480px] rounded-2xl bg-black' src={props.postMediaUrl} poster={props.postPosterUrl} controls />}
            </div>
        </div>
        <PostFooter postLikes={props.postLikes} postComments={props.postComments} isShared={true} />
    </article>
);

export default Post;
