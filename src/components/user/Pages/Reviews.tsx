import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import Review from "../elements/review";
import { ReviewProps } from "../user-menu";
import { PlusIcon } from "lucide-react";

const Reviews: React.FC<{ reviewInfo: ReviewProps[] }> = ({ reviewInfo }) => {
    const [, setFilter] = useState("all");
    const [visibleCount, setVisibleCount] = useState(4);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + 2, reviewInfo.length));
    };

    const reviewsToShow = reviewInfo.slice(0, visibleCount);

    return (
        <div className="flex flex-col p-5 rounded-3xl bg-card2">
            <div className="flex gap-5 justify-between w-full text-base max-md:flex-wrap max-md:max-w-full">
                <InputField placeholder="Пошук за назвою гри" type="text" className="justify-center items-start px-3.5 py-2.5 my-auto rounded-3xl bg-secondary border-none w-96 text-typography placeholder:text-typographySecondary max-md:pr-5" />
                <div className="flex gap-5 justify-between">
                    <div className="rounded-lg gap-2.5 my-auto whitespace-nowrap">
                        <div className='flex space-x-2 items-center'>
                            <div className="text-typographySecondary">Сортування:</div>
                            <Select onValueChange={(value) => setFilter(value)}>
                                <SelectTrigger className="w-full !bg-transparent border-0 !text-typography !text-button-2 !font-artifakt justify-start space-x-2 p-0" id="sort">
                                    <SelectValue placeholder="Спочатку популярні" />
                                </SelectTrigger>
                                <SelectContent className='!bg-card2 !text-typography !font-artifakt'>
                                    <SelectItem value="popular">Спочатку популярні</SelectItem>
                                    <SelectItem value="recent">Спочатку нові</SelectItem>
                                    <SelectItem value="rated">За оцінкою</SelectItem>
                                    <SelectItem value="commented">За кількістю коментарів</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <Button className="justify-center px-4 py-2 text-card1 bg-primary hover:bg-primaryHover rounded-3xl max-md:px-5 space-x-2">
                        <PlusIcon />
                        <p>Створити пост</p>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col space-y-3 mt-5 text-black bg-card2 rounded-3xl max-md:px-5 max-md:max-w-full">
                {reviewsToShow.map((post) => (
                    <Review key={post.reviewText} info={post} />
                ))}
                {visibleCount < reviewInfo.length && (
                    <Button className="justify-center px-6 py-3 text-background text-button-1 rounded-3xl bg-primary hover:bg-primaryHover max-md:px-5" onClick={handleLoadMore}>
                        Показати більше
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Reviews;
