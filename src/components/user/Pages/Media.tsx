import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { PostProps } from "@/components/shop/community/Post";


const Media: React.FC<{ media: PostProps[] }> = ({ media }) => {
    const [filter, setFilter] = useState("all");
    const [visibleCount, setVisibleCount] = useState(9);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + 3, media.length));
    };

    const mediaContent = media.slice(0, visibleCount).map((post) => {
        const fileExtension = post.postMediaUrl && post.postMediaUrl.split('.').pop();
        const isVideo = fileExtension === 'mp4' || fileExtension === 'webm';

        return (
            <div key={post.postTitle} className="relative">
                {isVideo ? (
                    <video className="h-full w-full object-cover rounded-2xl" src={post.postMediaUrl} controls />
                ) : (
                    <img className="h-full w-full object-cover rounded-2xl" src={post.postMediaUrl} alt="Media" />
                )}
            </div>
        );
    });

    return (
        <div className="flex flex-col p-5 rounded-3xl bg-zinc-300">
            <div className="flex gap-5 justify-between w-full text-base max-md:flex-wrap max-md:max-w-full">
                <InputField placeholder="Пошук за назвою гри" type="text" className="justify-center items-start px-3.5 py-2.5 my-auto rounded-3xl bg-[#C0C0C0] border-none w-96 text-black placeholder:text-black max-md:pr-5" />
                <div className="flex gap-5 justify-between">
                    <div className="flex gap-2.5 my-auto text-black whitespace-nowrap">
                        <div className='flex justify-start items-center space-x-2'>
                            <span className='text-gray-500'>Сортування:</span>
                            <Select onValueChange={(value) => setFilter(value)}>
                                <SelectTrigger className="w-32" id="sort">
                                    <SelectValue placeholder="Найновіші" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">Найновіші</SelectItem>
                                    <SelectItem value="oldest">Найстаріші</SelectItem>
                                    <SelectItem value="popular">Найпопулярніші</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <Button className="justify-center px-6 py-3 text-white rounded-3xl bg-zinc-800 max-md:px-5">
                        Нова публікація
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 p-5 rounded-3xl bg-zinc-300">
                {mediaContent}
                {visibleCount < media.length && (
                    <div className="flex pt-5">
                        <Button
                            onClick={handleLoadMore}
                            className="justify-center px-6 py-3 text-white rounded-3xl bg-zinc-800 max-md:px-5"
                        >
                            Завантажити ще
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Media;
