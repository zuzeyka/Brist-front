import React from 'react';
import { cardClass, PostProps, textClass, titleClass } from './post';
import PostHeader from './post-header';
import PostFooter from './post-footer';

// "Guide Card": 200px-wide cover on the left of the title and text.
const Guide: React.FC<PostProps> = (props) => (
    <article className={cardClass + (props.className ? ' ' + props.className : '')}>
        <PostHeader postInfo={props.postAuthor} postDate={props.postDate} imgUrl={props.postAuthorAvatarUrl ?? ''} isUser={true} />
        <div className='flex gap-5 items-stretch'>
            {props.postMediaUrl && <img className='w-[200px] min-h-[100px] shrink-0 object-cover rounded-[20px]' src={props.postMediaUrl} alt="" />}
            <div className='flex flex-col gap-2 justify-center min-w-0'>
                <h2 className={titleClass}>{props.postTitle}</h2>
                {props.postText && <p className={textClass + ' line-clamp-3'}>{props.postText}</p>}
            </div>
        </div>
        <PostFooter postLikes={props.postLikes} postComments={props.postComments} postDate={props.postDate} isShared={props.isShared ?? true} />
    </article>
);

export default Guide;
