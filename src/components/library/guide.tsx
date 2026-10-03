import React from 'react';
import PostHeader from '../shop/community/post-header';
import PostFooter from '../shop/community/post-footer';

interface GuideProps {
    className?: string;
    gameName: string;
    postTitle: string;
    postText: string;
    postDate: string;
    postMediaUrl?: string;
    postGameImageUrl: string;
    postAuthor: string;
    postAuthorAvatarUrl?: string;
    postLikes: number;
    postComments: number;
}

const Guide: React.FC<GuideProps> = (props) => {
    const extensions = props.postMediaUrl?.split('.').pop()?.slice(0, 3).toLowerCase();
    let media;
    if (extensions === 'jpg' || extensions === 'jpeg' || extensions === 'png') {
        media = <img className='w-full h-auto rounded-md' src={props.postMediaUrl} alt="Game screenshot"></img>;
    } else if (extensions === 'mp4' || extensions === 'web') {
        media = <video className='w-full h-auto rounded-md' src={props.postMediaUrl} controls></video>;
    }
    return (
        <div className={'max-w-7xl my-4 flex flex-col h-full justify-between pb-4' + (props.className ? ' ' + props.className : '')}>
            <div className='w-auto h-full bg-card1 rounded-md'>
                <div className='flex flex-col p-4 h-full justify-between'>
                    <PostHeader postInfo={props.gameName} postDate={props.postDate} imgUrl={props.postGameImageUrl} isUser={false}></PostHeader>
                    {media}
                    <h2 className='font-bold mt-4 text-subheading-1 font-artifakt'>{props.postTitle}</h2>
                    {props.postText && props.postText.length > 550 ? <p className='mb-1 h-full font-artifakt text-block-2'>{props.postText.substring(0, 550)}...</p> : <p className='mb-1 h-full'>{props.postText}</p>}
                    <PostFooter postLikes={props.postLikes} postComments={props.postComments} isShared={false} postDate={props.postDate}></PostFooter>
                </div>
            </div>
        </div>
    );
};

export default Guide;
