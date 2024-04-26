import React from 'react';

interface PostProps {
    gameName: string;
    className?: string;
}
const Post: React.FC<PostProps> = (props) => {
    return (
        <div className={'max-w-7xl mx-auto py-10 px-4' + props.className}>

        </div>
    );
};

export default Post;

