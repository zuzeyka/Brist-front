import React from 'react';
import PostHeader from '../shop/community/PostHeader';
import PostFooter from '../shop/community/PostFooter';

interface MediaProps {
    className?: string;
    gameName: string;
    postTitle?: string;
    postText?: string;
    postDate: string;
    postMediaUrl: string;
    postGameImageUrl: string;
    postLikes: number;
    postComments: number;
}
const Media: React.FC<MediaProps> = (props) => {
    const renderMediaContent = () => {
        if (props.postMediaUrl) {
            if (props.postMediaUrl.match(/\.(mp4|webm)$/i)) {
                return <video className='w-auto h-96 rounded-md my-4' src={props.postMediaUrl} controls></video>;
            } else {
                return <img className='w-auto h-full rounded-md my-4' src={props.postMediaUrl} alt="Media content"></img>;
            }
        }
        return null;
    };

    return (
        <div className={'max-w-7xl my-4 flex flex-col h-full pb-4' + (props.className ? ' ' + props.className : '')}>
            
            <div className={'w-auto h-full bg-gray-100 rounded-md'}>
                <div className='flex flex-col h-full p-4'>
                    <PostHeader postInfo={props.gameName} postDate={props.postDate} imgUrl={props.postGameImageUrl} isUser={false}></PostHeader>
                    {renderMediaContent()}
                    {props.postTitle ? <h2 className='font-bold mb-2'>{props.postTitle}</h2> : null}
                    {props.postText && props.postText.length > 100 ? <p className='mb-1'>{props.postText.substring(0, 100)}...</p> : <p className='mb-1'>{props.postText}</p>}
                    <PostFooter className='mt-auto' postLikes={props.postLikes} postComments={props.postComments} isShared={false} postDate={props.postDate}></PostFooter>
                </div>
            </div>
        </div>
    );
};

export default Media;
