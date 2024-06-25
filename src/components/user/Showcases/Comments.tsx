import React from "react";
import PostHeader from "../../shop/community/post-header";
import Input from "@/components/ui/search-input";

interface CommentsProps {
    userName: string;
    userAvatar: string;
    text: string;
    date: string;
}


const Comments: React.FC<{ comment: CommentsProps[] }> = ({ comment }) => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
                <h2 className="text-heading-1 font-bold font-manrope">Галерея гайдів</h2>
                <p className="text-typographySecondary text-sign-2 font-bold px-5 bg-card3 flex justify-center items-center rounded-3xl">{comment.length}</p>
            </div>
            <Input className="w-full bg-secondary placeholder:text-typographySecondary" placeholder="Написати коментар"></Input>
            {comment.map((comment) => (
                <div className="flex flex-col space-y-4 bg-card1 rounded-2xl p-4">
                    <PostHeader
                        postInfo={comment.userName}
                        postDate={comment.date}
                        imgUrl={comment.userAvatar}
                        isUser={true}
                    />
                    <p className="text-typographySecondary text-block-2">{comment.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Comments;
