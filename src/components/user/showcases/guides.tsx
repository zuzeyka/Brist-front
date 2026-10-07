import Guide from "../../shop/community/guide";
import React from "react";
import { useTranslation } from "react-i18next";

interface GuideEntry {
    gameName: string;
    title: string;
    text: string;
    date: string;
    likes: number;
    comments: number;
    guidePictureUrl: string;
}

const Guides: React.FC<{ guides: GuideEntry[] }> = ({ guides }) => {
    const { t } = useTranslation();
    if (guides.length >= 1) {
        return (
            <div className="bg-card2 rounded-2xl w-full p-4">
                <div className="flex flex-col">
                    <h2 className="text-heading-1 font-bold font-manrope">{t('user.showcase.guidesGallery')}</h2>
                    {guides.slice(0, 2).map((guide, index) => {
                        const withOverflow = index === 1 && guides.length > 2;
                        return (
                            <div key={guide.title + index} className={withOverflow ? "flex space-x-4" : ""}>
                                <Guide className={withOverflow ? "flex-1 mt-0 mb-0" : ""} postLikes={guide.likes} postComments={guide.comments} postTitle={guide.title} postText={guide.text} postDate={guide.date} postMediaUrl={guide.guidePictureUrl} postAuthor={guide.gameName}></Guide>
                                {withOverflow && <div className="w-1/6 rounded-2xl bg-cardLight25 flex items-center justify-center text-typographySecondary text-sign-1">+{guides.length - 2}</div>}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default Guides;
