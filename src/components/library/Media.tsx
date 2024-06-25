import React from 'react';
import PostHeader from '../shop/community/post-header';
import PostFooter from '../shop/community/post-footer';

interface MediaProps {
    className?: string;
    gameName: string;
    postTitle?: string;
    postText?: string;
    postDate: string;
    postMediaUrl: string;
    postGameImageUrl: string;
    postAuthor: string;
    postAuthorAvatarUrl?: string;
    postLikes: number;
    postComments: number;
}
const Media: React.FC<MediaProps> = (props) => {
    const extensions = props.postMediaUrl?.split('.').pop()?.slice(0, 3).toLowerCase();
    let media;
    if (extensions === 'jpg' || extensions === 'jpeg' || extensions === 'png') {
        media = <img className='w-full h-auto rounded-md' src={props.postMediaUrl} alt="Game screenshot"></img>;
    } else if (extensions === 'mp4' || extensions === 'web') {
        media = <video className='w-full h-auto rounded-md' src={props.postMediaUrl} controls></video>;
    }

    return (
        <div className={'max-w-7xl my-4 flex flex-col h-full pb-4' + (props.className ? ' ' + props.className : '')}>

            <div className={'w-auto h-full bg-card1 rounded-md'}>
                <div className='flex flex-col h-full p-4'>
                    <PostHeader postInfo={props.gameName} postDate={props.postDate} imgUrl={props.postGameImageUrl} isUser={false}></PostHeader>
                    {media}
                    {props.postTitle ? <h2 className='font-bold mb-2 text-subheading-1 font-artifakt'>{props.postTitle}</h2> : null}
                    {props.postText && props.postText.length > 100 ? <p className='mb-1 font-artifakt text-block-2'>{props.postText.substring(0, 100)}...</p> : <p className='mb-1'>{props.postText}</p>}
                    <PostFooter className='mt-auto' postLikes={props.postLikes} postComments={props.postComments} isShared={false} postDate={props.postDate}></PostFooter>
                </div>
            </div>
        </div>
    );
};

export default Media;
