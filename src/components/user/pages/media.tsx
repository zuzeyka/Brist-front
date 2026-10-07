import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { PostProps } from "@/components/shop/community/post";
import { PlusIcon } from "lucide-react";
import { useTranslation } from "react-i18next";


const Media: React.FC<{ media: PostProps[] }> = ({ media }) => {
    const { t } = useTranslation();
    const [, setFilter] = useState("all");
    const [visibleCount, setVisibleCount] = useState(9);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + 3, media.length));
    };

    const mediaContent = media.slice(0, visibleCount).map((post) => {
        const fileExtension = post.postMediaUrl && post.postMediaUrl.split('.').pop();
        const isVideo = fileExtension === 'mp4' || fileExtension === 'webm';

        return (
            <div key={post.postTitle} className="relative aspect-square">
                {isVideo ? (
                    <video className="h-full w-full object-cover rounded-2xl" src={post.postMediaUrl} poster={post.postMediaUrl} controls />
                ) : (
                    <img className="h-full w-full object-cover rounded-2xl" src={post.postMediaUrl} alt="" />
                )}
            </div>
        );
    });

    return (
        <div className="flex flex-col p-5 rounded-3xl bg-card2 space-y-5">
            <div className="flex gap-5 justify-between w-full text-base max-md:flex-wrap max-md:max-w-full">
                <InputField placeholder={t('user.listPage.searchByGame')} type="text" className="justify-center items-start px-3.5 py-2.5 my-auto rounded-3xl bg-secondary border-none w-96 text-typography placeholder:text-typographySecondary max-md:pr-5" />
                <div className="flex gap-5 justify-between">
                    <div className="rounded-lg gap-2.5 my-auto whitespace-nowrap">
                        <div className='flex space-x-2 items-center'>
                            <div className="text-typographySecondary">{t('wishlist.sorting')}</div>
                            <Select onValueChange={(value) => setFilter(value)}>
                                <SelectTrigger className="w-full !bg-transparent border-0 !text-typography !text-button-2 !font-artifakt justify-start space-x-2 p-0" id="sort">
                                    <SelectValue placeholder={t('shop.community.sortPopular')} />
                                </SelectTrigger>
                                <SelectContent className='!bg-card2 !text-typography !font-artifakt'>
                                    <SelectItem value="popular">{t('shop.community.sortPopular')}</SelectItem>
                                    <SelectItem value="recent">{t('shop.about.sortNew')}</SelectItem>
                                    <SelectItem value="rated">{t('user.listPage.sortRated')}</SelectItem>
                                    <SelectItem value="commented">{t('user.listPage.sortCommented')}</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <Button className="justify-center px-4 py-2 text-card1 bg-primary hover:bg-primaryHover rounded-3xl max-md:px-5 space-x-2">
                        <PlusIcon />
                        <p>{t('shop.community.createPost')}</p>
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {mediaContent}
            </div>
            {visibleCount < media.length && (
                <div className="flex justify-center pt-5">
                    <Button
                        onClick={handleLoadMore}
                        className="justify-center px-6 py-3 rounded-3xl text-card1 bg-primary hover:bg-primaryHover max-md:px-5"
                    >
                        {t('user.listPage.loadMore')}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Media;
