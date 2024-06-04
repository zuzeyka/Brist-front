import React, { useState } from "react";
import { CircleEllipsisIcon, HeartIcon, MessageSquareMoreIcon, StarIcon } from "lucide-react";
import { ReviewProps } from "../UserMenu";


const Review: React.FC<{ info: ReviewProps }> = ({ info }) => {
    return (
        <div className="flex flex-col bg-white rounded-2xl max-md:max-w-full">
            <img
                loading="lazy"
                src={info.gamePictureUrl}
                alt="Game image"
                className="shrink-0 self-start w-full h-36 object-cover aspect-square rounded-t-2xl"
            />
            <div className="p-5">
                <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col">
                        <div className="text-xl font-medium text-black">{info.gameName}</div>
                        <div className="flex">
                            {[...Array(info.rating)].map((_, i) => (
                                <StarIcon
                                    key={i}
                                    className={`text-yellow-400 w-4 h-4`}
                                />
                            ))}
                            {[...Array(5 - info.rating)].map((_, i) => (
                                <StarIcon
                                    key={5 + i}
                                    className={`text-gray-400 w-4 h-4`}
                                />
                            ))}
                        </div>
                    </div>
                    <CircleEllipsisIcon></CircleEllipsisIcon>
                </div>
                <div className="mt-6 text-base text-black text-ellipsis max-md:max-w-full">
                    {info.reviewText}
                </div>
                <div className="flex gap-5 justify-between mt-6 w-full text-base text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                        <div className="flex gap-1.5">
                            <HeartIcon></HeartIcon>
                            <div className="my-auto">10к</div>
                        </div>
                        <div className="flex gap-1.5 self-start">
                            <MessageSquareMoreIcon></MessageSquareMoreIcon>
                            <div className="my-auto">584</div>
                        </div>
                    </div>
                    <div className="my-auto">{info.date}</div>
                </div>
            </div>
        </div>
    );
}

export default Review;
