import React from 'react';
import PostHeader from '../shop/community/post-header';
import PostFooter from '../shop/community/post-footer';

export interface СomunityProps {
    className?: string;
    postgameName: string;
    postTitle: string;
    postText: string;
    postDate: string;
    postMediaUrl?: string;
    postGameImageUrl: string;
    postLikes: number;
    postComments: number;
}

const News: React.FC<СomunityProps> = (props) => {
    const extensions = props.postMediaUrl?.split('.').pop()?.slice(0, 3).toLowerCase();
    let media;
    if (extensions === 'jpg' || extensions === 'jpeg' || extensions === 'png') {
        media = <img className='w-full h-auto rounded-md' src={props.postMediaUrl} alt="Game screenshot"></img>;
    } else if (extensions === 'mp4' || extensions === 'web') {
        media = <video className='w-full h-auto rounded-md' src={props.postMediaUrl} controls></video>;
    }
    return (
        <div className={'max-w-7xl my-4 flex flex-col bg-card1' + (props.className ? ' ' + props.className : '')}>
            {props.postMediaUrl ? <img className='w-auto h-40 rounded-t-md object-cover' src={props.postMediaUrl} alt="Game screenshot"></img> : null}
            <div className={'w-auto h-full ' + (props.postMediaUrl ? 'rounded-b-md' : 'rounded-md')}>
                <div className='flex flex-col space-y-3 p-4'>
                    <PostHeader postInfo={props.postgameName} postDate={props.postDate} imgUrl={props.postGameImageUrl} isUser={false}></PostHeader>
                    {media}
                    <h2 className='font-bold text-subheading-1 font-artifakt'>{props.postTitle}</h2>
                    <p className='font-artifakt text-block-2'>{props.postText}</p>
                    <PostFooter postLikes={props.postLikes} postComments={props.postComments} isShared={false} postDate={props.postDate}></PostFooter>
                </div>
            </div>
        </div>
    );
};

export default News;
