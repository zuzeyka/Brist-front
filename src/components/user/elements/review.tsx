import React from "react";
import { CircleEllipsisIcon, StarIcon } from "lucide-react";
import { ReviewProps } from "../user-menu";
import PostFooter from "@/components/shop/community/post-footer";


const Review: React.FC<{ info: ReviewProps }> = ({ info }) => {
    return (
        <div className="flex flex-col bg-card1 rounded-2xl text-typography max-md:max-w-full">
            <img
                loading="lazy"
                src={info.gamePictureUrl}
                alt="Game image"
                className="shrink-0 self-start w-full h-36 object-cover aspect-square rounded-t-2xl"
            />
            <div className="p-5">
                <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col space-y-2">
                        <div className="text-heading-2 font-manrope font-bold">{info.gameName}</div>
                        <div className="flex space-x-1">
                            {[...Array(Math.round(info.rating))].map((_, i) => (
                                <StarIcon
                                    key={i}
                                    className={`text-accent w-5 h-5`}
                                    fill="currentColor"
                                />
                            ))}
                            {[...Array(5 - Math.round(info.rating))].map((_, i) => (
                                <StarIcon
                                    key={5 + i}
                                    className={`text-accent w-5 h-5`}
                                />
                            ))}
                        </div>
                    </div>
                    <CircleEllipsisIcon></CircleEllipsisIcon>
                </div>
                <div className="mt-2 text-block-2 max-md:max-w-full">
                    {info.reviewText}
                </div>
                <PostFooter postLikes={info.likes} postComments={info.comments} isShared={false} postDate={info.date}></PostFooter>
            </div>
        </div>
    );
}

export default Review;
