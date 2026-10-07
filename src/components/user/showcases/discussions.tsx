import Post, { PostProps } from "../../shop/community/post";
import React from "react";
import { useTranslation } from "react-i18next";

const Discussions: React.FC<{ discussions: PostProps[] }> = ({ discussions }) => {
    const { t } = useTranslation();
    if (discussions.length >= 1) {
        return (
            <div className="bg-card2 rounded-2xl w-full p-4">
                <div className="flex flex-col">
                    <h2 className="text-heading-1 font-bold font-manrope">{t('user.showcase.discussionsGallery')}</h2>
                    {discussions.slice(0, 2).map((discussion, index) => {
                        const withOverflow = index === 1 && discussions.length > 2;
                        return (
                            <div key={discussion.postTitle + index} className={withOverflow ? "flex space-x-4" : ""}>
                                <Post className={withOverflow ? "flex-1 mt-0 mb-0" : ""} {...discussion} />
                                {withOverflow && <div className="w-1/6 rounded-2xl bg-cardLight25 flex items-center justify-center text-typographySecondary text-sign-1">+{discussions.length - 2}</div>}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default Discussions;
