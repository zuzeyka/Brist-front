import React from 'react';
import PostHeader from '../shop/community/PostHeader';
import PostFooter from '../shop/community/PostFooter';

interface PostProps {
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

const Post: React.FC<PostProps> = (props) => {
    return (
        <div className={'max-w-7xl my-4 flex flex-col h-full pb-4' + (props.className ? ' ' + props.className : '')}>
            <div className='w-auto h-full bg-card1 rounded-md' >
                <div className='flex flex-col p-4 h-full'>
                    <PostHeader postInfo={props.gameName} postDate={props.postDate} imgUrl={props.postGameImageUrl} isUser={false}></PostHeader>
                    {props.postMediaUrl ? <img className='w-auto h-auto mt-4 rounded-md object-cover' src={props.postMediaUrl} alt="Game screenshot"></img> : null}
                    <h2 className='font-bold mt-4 text-subheading-1 font-artifakt'>{props.postTitle}</h2>
                    {props.postText && props.postText.length > 330 ? <p className='mb-1 h-full font-artifakt text-block-2'>{props.postText.substring(0, 330)}...</p> : <p className='mb-1 h-full'>{props.postText}</p>}
                    <PostFooter postLikes={props.postLikes} postComments={props.postComments} isShared={false} postDate={props.postDate}></PostFooter>
                </div>
            </div>
        </div>
    );
};

export default Post;
