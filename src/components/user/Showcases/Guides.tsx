import Guide from "../../shop/community/Guide";
import React from "react";

interface Guide {
    gameName: string;
    title: string;
    text: string;
    rating: number;
    date: string;
    likes: number;
    comments: number;
    gamePictureUrl: string;
    guidePictureUrl: string;
}

const Guides: React.FC<{guides: Guide[]}> = ({guides}) => {
    if (guides.length >= 1) {
    return (
        <div className="bg-gray-200 rounded-2xl w-full p-4">
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Галерея гайдів</h2>
                    {guides.slice(0, 2).map((guide, index) => (
                        <div className={index && guides.length - 2 > 0 ? "flex space-x-4" : ""}>
                            <Guide className={index && guides.length - 2 > 0 ? "flex-1 mt-0 mb-0" : ""} postLikes={guide.likes} postComments={guide.comments} postTitle={guide.title} postText={guide.text} postDate={guide.date} postMediaUrl={guide.guidePictureUrl} postAuthor={guide.gameName}></Guide>
                            {index && guides.length - 2 > 0 ? <div className="w-1/6 rounded-md bg-gray-400 flex items-center justify-center text-white text-3xl">+{guides.length - 2}</div> : null}
                        </div>
                    ))}
                </div>
        </div>
    );
}
};

export default Guides;
