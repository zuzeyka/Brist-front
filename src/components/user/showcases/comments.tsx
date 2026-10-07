import React from "react";
import { useTranslation } from "react-i18next";
import PostHeader from "../../shop/community/post-header";
import Input from "@/components/ui/search-input";

interface CommentsProps {
    userName: string;
    userAvatar: string;
    text: string;
    date: string;
}


const Comments: React.FC<{ comment: CommentsProps[] }> = ({ comment }) => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
                <h2 className="text-heading-1 font-bold font-manrope">{t('user.showcase.comments')}</h2>
                <p className="text-typographySecondary text-sign-2 font-bold px-5 bg-card3 flex justify-center items-center rounded-3xl">{comment.length}</p>
            </div>
            <Input className="w-full bg-secondary placeholder:text-typographySecondary" placeholder={t('user.showcase.yourComment')}></Input>
            {comment.map((c, index) => (
                <div key={c.userName + index} className="flex flex-col space-y-4 bg-card1 rounded-2xl p-4">
                    <PostHeader
                        postInfo={c.userName}
                        postDate={c.date}
                        imgUrl={c.userAvatar}
                        isUser={true}
                    />
                    <p className="text-typographySecondary text-block-2">{c.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Comments;
