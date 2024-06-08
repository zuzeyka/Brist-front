import React, { useState } from "react";
import { PostProps } from "../../shop/community/Post";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import Guide from "@/components/shop/community/Guide";

const Guides: React.FC<{ guides: PostProps[] }> = ({ guides }) => {
    const [visibleCount, setVisibleCount] = useState(4);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + 2, guides.length));
    };

    const guidesToShow = guides.slice(0, visibleCount);

    return (
        <div className="flex flex-col p-5 rounded-3xl bg-card2">
            <div className="flex gap-5 justify-between w-full text-base max-md:flex-wrap max-md:max-w-full">
                <InputField placeholder="Пошук за назвою гри" type="text" className="justify-center items-start px-3.5 py-2.5 my-auto rounded-3xl bg-[#C0C0C0] border-none w-96 text-black placeholder:text-black max-md:pr-5" />
                <div className="flex gap-5 justify-between">
                    <div className="flex gap-2.5 my-auto text-black whitespace-nowrap">
                        <div className='flex justify-start items-center space-x-2'>
                            <span className='text-gray-500'>Сортування:</span>
                            <Select onValueChange={() => { }}>
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
            <div className="flex flex-col space-y-5 px-6 py-5 mt-5 text-black bg-gray-200 rounded-3xl max-md:px-5 max-md:max-w-full">
                {guidesToShow.map((post) => (
                    <Guide key={post.postTitle} postAuthor={post.postAuthor} postDate={post.postDate} postTitle={post.postTitle} postText={post.postText} postMediaUrl={post.postMediaUrl} postLikes={post.postLikes} postComments={post.postComments} />
                ))}
                {visibleCount < guides.length && (
                    <Button className="justify-center px-6 py-3 text-white rounded-3xl bg-zinc-800 max-md:px-5" onClick={handleLoadMore}>
                        Показати більше
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Guides;
