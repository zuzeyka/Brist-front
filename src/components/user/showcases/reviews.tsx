import PostFooter from "@/components/shop/community/post-footer";
import { CircleEllipsisIcon, StarIcon } from "lucide-react";
import React from "react";

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
    if (reviews.length >= 1) {
        return (
            <div className="bg-card2 rounded-2xl w-full p-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-heading-1 font-bold font-manrope">Галерея рецензій</h2>
                    {reviews.slice(0, 2).map((review, index) => (
                        <div className={index && reviews.length - 2 > 0 ? "flex space-x-4" : ""}>
                            <div key={index} className={index && reviews.length - 2 > 0 ? "flex-1" : ""}>
                                <img className="w-full h-40 object-cover rounded-t-2xl" src={review.gamePictureUrl} alt="Game   screenshot"></img>
                                <div className="bg-card1 rounded-b-2xl p-4 flex flex-col space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col space-y-2">
                                            <p className="font-bold text-heading-2 font-manrope">{review.gameName}</p>
                                            <div className="flex space-x-1">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <StarIcon
                                                        key={i}
                                                        className={`text-accent w-4 h-4`}
                                                        fill="currentColor"
                                                    />
                                                ))}
                                                {[...Array(5 - review.rating)].map((_, i) => (
                                                    <StarIcon
                                                        key={5 + i}
                                                        className={`text-accent w-4 h-4`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <CircleEllipsisIcon></CircleEllipsisIcon>
                                    </div>
                                    <p className="text-block-2">{review.text}</p>
                                    <PostFooter postLikes={review.likes} postComments={review.comments} isShared={false} postDate={review.date}></PostFooter>
                                </div>
                            </div>
                            {index && reviews.length - 2 > 0 ? <div className="w-1/6 rounded-2xl bg-cardLight25 flex items-center justify-center text-typographySecondary text-sign-1">+{reviews.length - 2}</div> : null}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default Reviews;
