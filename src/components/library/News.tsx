import React from 'react';
import PostHeader from '../shop/community/PostHeader';
import PostFooter from '../shop/community/PostFooter';

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
    return (
        <div className={'max-w-7xl my-4 flex flex-col' + (props.className ? ' ' + props.className : '')}>
            {props.postMediaUrl ? <img className='w-auto h-40 rounded-t-md' src={props.postMediaUrl} alt="Game screenshot"></img> : null}
            <div className={'w-auto h-full bg-gray-100 ' + (props.postMediaUrl ? 'rounded-b-md' : 'rounded-md')}>
                <div className='flex flex-col space-y-3 p-4'>
                    <PostHeader postInfo={props.postgameName} postDate={props.postDate} imgUrl={props.postGameImageUrl} isUser={false}></PostHeader>
                    <h2 className='font-bold'>{props.postTitle}</h2>
                    <p>{props.postText}</p>
                    <PostFooter postLikes={props.postLikes} postComments={props.postComments} isShared={false}></PostFooter>
                </div>
            </div>
        </div>
    );
};

export default News;
