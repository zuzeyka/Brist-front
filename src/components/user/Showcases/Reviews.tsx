import { CircleEllipsisIcon, HeartIcon, MessageSquareIcon, StarIcon } from "lucide-react";
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

const Reviews: React.FC<{reviews: Review[]}> = ({reviews}) => {
    if (reviews.length >= 1) {
    return (
        <div className="bg-gray-200 rounded-2xl w-full p-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-lg font-semibold">Галерея рецензій</h2>
                    {reviews.slice(0, 2).map((review, index) => (
                        <div className={index && reviews.length - 2 > 0 ? "flex space-x-4" : ""}>
                            <div key={index} className={index && reviews.length - 2 > 0 ? "flex-1" : ""}>
                                <img className="w-full h-40 object-cover rounded-t-2xl" src={review.gamePictureUrl} alt="Game   screenshot"></img>
                                <div className="bg-white rounded-b-2xl p-4 flex flex-col space-y-2">
                                    <div className="flex justify-between items-center">
                                    <div className="flex flex-col space-y-2">
                                        <p>{review.gameName}</p>
                                        <div className="flex space-x-1">
                                            {[...Array(review.rating)].map((_, index) => (
                                                <StarIcon key={index} className="h-4 w-4 text-yellow-400"></StarIcon>
                                            ))}
                                            {[...Array(5 - review.rating)].map((_, index) => (
                                                <StarIcon key={index} className="h-4 w-4 text-gray-400"></StarIcon>
                                            ))}
                                        </div>
                                    </div>
                                    <CircleEllipsisIcon></CircleEllipsisIcon>
                                </div>
                                <div>{review.text}</div>
                                <div className="flex justify-between">
                                    <div className="flex space-x-2 items-center">
                                        <HeartIcon className="w-4 h-4" />
                                        <p>{review.likes}</p>
                                        <MessageSquareIcon className="w-4 h-4" />
                                        <p>{review.comments}</p>
                                    </div>
                                    <div>
                                        <p>{review.date}</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {index && reviews.length - 2 > 0 ? <div className="w-1/6 rounded-2xl bg-gray-400 flex items-center justify-center text-white text-3xl">+{reviews.length - 2}</div> : null}
                        </div>
                    ))}
                </div>
        </div>
    );
}
};

export default Reviews;
