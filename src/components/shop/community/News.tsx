import React from 'react';

interface NewsProps {
    gameName: string;
    className?: string;
}
const News: React.FC<NewsProps> = (props) => {
    return (
        <div className={'max-w-7xl mx-auto py-10 px-4' + props.className}>

        </div>
    );
};

export default News;

