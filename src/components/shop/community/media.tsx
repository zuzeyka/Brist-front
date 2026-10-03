import React, { useState } from 'react';
import { cardClass, isVideoUrl, PostProps, textClass } from './post';
import PostHeader from './post-header';
import PostFooter from './post-footer';
import { PlayIcon } from '@/components/ui/icons';

// "Screenshot Card" / "Video Card": 480px media with the caption under it.
// Videos show their poster with a play button until clicked.
const Media: React.FC<PostProps> = (props) => {
    const [playing, setPlaying] = useState(false);
    const video = isVideoUrl(props.postMediaUrl);

    return (
        <article className={cardClass + (props.className ? ' ' + props.className : '')}>
            <div className='flex flex-col gap-4'>
                <PostHeader postInfo={props.postAuthor} postDate={props.postDate} imgUrl={props.postAuthorAvatarUrl ?? ''} isUser={true} />
                <div className='flex flex-col gap-3'>
                    {video && playing && (
                        <video className='w-full h-[480px] rounded-2xl bg-black' src={props.postMediaUrl} poster={props.postPosterUrl} controls autoPlay />
                    )}
                    {video && !playing && (
                        <button type="button" aria-label="Відтворити" onClick={() => setPlaying(true)} className='relative w-full h-[480px] rounded-2xl overflow-hidden bg-black'>
                            {props.postPosterUrl
                                ? <img className='size-full object-cover' src={props.postPosterUrl} alt="" />
                                : <video className='size-full object-cover' src={props.postMediaUrl} preload="metadata" muted />}
                            <span className='absolute inset-0 bg-[hsl(var(--background)/0.4)]' />
                            <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-[39px] bg-typography text-background'>
                                <PlayIcon className='size-8' />
                            </span>
                        </button>
                    )}
                    {!video && props.postMediaUrl && <img className='w-full h-[480px] object-cover rounded-2xl' src={props.postMediaUrl} alt="" />}
                    {props.postText && <p className={textClass}>{props.postText}</p>}
                </div>
            </div>
            <PostFooter postLikes={props.postLikes} postComments={props.postComments} isShared={true} />
        </article>
    );
};

export default Media;
