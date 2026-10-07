import PostFooter from "@/components/shop/community/post-footer";
import { MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import StarRating from "@/components/ui/star-rating";

interface Review {
    gameName: string;
    text: string;
    rating: number;
    date: string;
    likes: number;
    comments: number;
    gamePictureUrl: string;
}

const Reviews: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
    const { t } = useTranslation();
    if (reviews.length >= 1) {
        return (
            <div className="bg-card2 rounded-2xl w-full p-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-heading-1 font-bold font-manrope">{t('user.showcase.reviewsGallery')}</h2>
                    {reviews.slice(0, 2).map((review, index) => {
                        const withOverflow = index === 1 && reviews.length > 2;
                        return (
                            <div key={review.gameName + index} className={withOverflow ? "flex space-x-4" : ""}>
                                <div className={withOverflow ? "flex-1" : ""}>
                                    <img className="w-full h-40 object-cover rounded-t-2xl" src={review.gamePictureUrl} alt="" />
                                    <div className="bg-card1 rounded-b-2xl p-4 flex flex-col space-y-2">
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-col space-y-2">
                                                <p className="font-bold text-heading-2 font-manrope">{review.gameName}</p>
                                                <StarRating rate={review.rating} size={16} />
                                            </div>
                                            <button type="button" aria-label={t('shop.about.more')} className="text-typography hover:text-primaryHover"><MoreHorizontalIcon className="size-6" /></button>
                                        </div>
                                        <p className="text-block-2">{review.text}</p>
                                        <PostFooter postLikes={review.likes} postComments={review.comments} isShared={true} showDate={true} postDate={review.date}></PostFooter>
                                    </div>
                                </div>
                                {withOverflow && <div className="w-1/6 rounded-2xl bg-cardLight25 flex items-center justify-center text-typographySecondary text-sign-1">+{reviews.length - 2}</div>}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default Reviews;
