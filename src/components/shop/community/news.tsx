import React from 'react';
import { PostProps, textClass, titleClass } from './post';
import PostFooter from './post-footer';
import PostHeader from './post-header';

// "News Card": 280px banner on top, then the usual header, title and text.
const News: React.FC<PostProps> = (props) => (
    <article className={'flex flex-col bg-card1 rounded-[20px] overflow-hidden text-typography' + (props.className ? ' ' + props.className : '')}>
        {props.postMediaUrl && <img className='w-full h-[280px] object-cover' src={props.postMediaUrl} alt="" />}
        <div className='flex flex-col gap-6 px-6 pt-4 pb-6'>
            <div className='flex flex-col gap-4'>
                <PostHeader postInfo={props.postAuthor} postDate={props.postDate} imgUrl={props.postAuthorAvatarUrl ?? ''} isUser={true} />
                <div className='flex flex-col gap-3'>
                    <h2 className={titleClass}>{props.postTitle}</h2>
                    {props.postText && <p className={textClass}>{props.postText}</p>}
                </div>
            </div>
            <PostFooter postLikes={props.postLikes} postComments={props.postComments} isShared={true} />
        </div>
    </article>
);

export default News;
