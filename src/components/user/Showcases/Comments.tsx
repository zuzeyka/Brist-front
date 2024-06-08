import React from "react";
import PostHeader from "../../shop/community/PostHeader";
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
            <Input className="w-full bg-[#333333]" placeholder="Написати коментар"></Input>
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
