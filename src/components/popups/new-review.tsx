import React, { useState } from "react";
import { XIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { StarFilledIcon, StarOutlineIcon } from "@/components/ui/icons";

// No Figma frame for this flow yet (see PROJECT_STATUS.md) — kept the existing
// light scaffold as-is rather than guess a dark-theme redesign, but replaced the
// dead `cdn.builder.io` placeholder images (broken since this was generated) with
// real, working pieces: a clickable star rating and a close icon.
const NewReview: React.FC = () => {
    const { t } = useTranslation();
    const [rating, setRating] = useState(0);

    return (
        <div className="flex flex-col px-10 py-8 rounded-3xl bg-zinc-100 max-md:px-5">
            <div className="flex gap-5 justify-between text-black max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                    <div className="text-xl max-md:max-w-full">{t('popups.newReview.yourReviewFor')}</div>
                    <div className="mt-1.5 text-2xl font-bold max-md:max-w-full">
                        {t('settings.walletSamplePurchase')}
                    </div>
                </div>
                <button type="button" aria-label={t('popups.newReview.close')} className="shrink-0 self-start text-black hover:opacity-60">
                    <XIcon className="size-6" />
                </button>
            </div>
            <div className="mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow self-stretch max-md:mt-6 max-md:max-w-full">
                            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                <div className="my-auto text-xl text-black">
                                    {t('popups.newReview.yourRating')}
                                </div>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((value) => {
                                        const Star = value <= rating ? StarFilledIcon : StarOutlineIcon;
                                        return (
                                            <button type="button" key={value} aria-label={t('common.ratingOutOf5', { rate: value })} onClick={() => setRating(value)} className="shrink-0 w-[30px] aspect-square text-black hover:opacity-70">
                                                <Star />
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-col items-start p-4 mt-4 rounded-3xl bg-stone-300 max-md:pr-5 max-md:max-w-full">
                                <div className="mt-5 mb-40 text-base text-black max-md:mb-10">
                                    {t('popups.newReview.whatDidYouThink')}
                                </div>
                            </div>
                            <div className="flex gap-2.5 self-start mt-4 text-base text-black">
                                <div className="shrink-0 w-6 h-6 bg-gray-200 rounded-md border border-solid border-neutral-600" />
                                <div className="my-auto">{t('popups.newReview.disableComments')}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-black max-md:mt-6">
                            <div className="text-xl">{t('popups.newReview.reviewRules')}</div>
                            <div className="flex flex-col px-4 pb-5 mt-4 text-base rounded-3xl bg-zinc-300">
                                <div className="justify-center py-4 border-b border-solid border-black border-opacity-40">
                                    {t('popups.newReview.rule1')}
                                </div>
                                <div className="justify-center py-4 border-b border-solid border-black border-opacity-40">
                                    {t('shop.createPost.rule3')}
                                </div>
                                <div className="justify-center py-4 border-b border-solid border-black border-opacity-40">
                                    {t('popups.newReview.rule3')}
                                </div>
                                <div className="mt-4">
                                    {t('popups.newReview.rule4')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-center self-center px-9 py-3.5 mt-8 text-xl text-white rounded-3xl bg-zinc-800 max-md:px-5">
                {t('popups.newReview.publishReview')}
            </div>
        </div>
    );
}

export default NewReview;
