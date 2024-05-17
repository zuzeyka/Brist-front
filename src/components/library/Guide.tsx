import React from 'react';
import PostHeader from '../shop/community/PostHeader';
import PostFooter from '../shop/community/PostFooter';

interface GuideProps {
    className?: string;
    gameName: string;
    postTitle: string;
    postText: string;
    postDate: string;
    postMediaUrl?: string;
    postGameImageUrl: string;
    postLikes: number;
    postComments: number;
}

const Guide: React.FC<GuideProps> = (props) => {
    return (
        <div className={'max-w-7xl my-4 flex flex-col h-full justify-between pb-4' + (props.className ? ' ' + props.className : '')}>
            <div className='w-auto h-full bg-gray-100 rounded-md'>
                <div className='flex flex-col p-4 h-full justify-between'>
                    <PostHeader postInfo={props.gameName} postDate={props.postDate} imgUrl={props.postGameImageUrl} isUser={false}></PostHeader>
                    {props.postMediaUrl ? <img className='w-auto h-32 mt-4 rounded-md' src={props.postMediaUrl} alt="Game screenshot"></img> : null}
                    <h2 className='font-bold mt-4'>{props.postTitle}</h2>
                    {props.postText && props.postText.length > 550 ? <p className='mb-1 h-full'>{props.postText.substring(0, 550)}...</p> : <p className='mb-1 h-full'>{props.postText}</p>}
                    <PostFooter postLikes={props.postLikes} postComments={props.postComments} isShared={false} postDate={props.postDate}></PostFooter>
                </div>
            </div>
        </div>
    );
};

export default Guide;
