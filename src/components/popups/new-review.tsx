import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { StarFilledIcon, StarOutlineIcon } from "@/components/ui/icons";
import { useAuth } from "../authorization/auth-context";

interface NewReviewProps {
    gameId: string;
    gameName: string;
    onPublished?: () => void;
    onClose?: () => void;
}

const NewReview: React.FC<NewReviewProps> = (props) => {
    const { t } = useTranslation();
    const { userId } = useAuth();
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState("");
    const [disableComments, setDisableComments] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const canPublish = rating > 0 && content.trim().length > 0 && !submitting;

    const handlePublish = async () => {
        if (!userId || !canPublish) return;
        setSubmitting(true);
        try {
            const res = await fetch('http://localhost:5049/api/Discussion', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    authorId: userId,
                    attachedId: props.gameId,
                    content: content.trim(),
                    likesCount: 0,
                    rate: rating,
                }),
            });
            if (res.ok) {
                props.onPublished?.();
                props.onClose?.();
            }
        } catch (error) {
            console.log('Publish review error:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col text-typography">
            <div className="flex flex-col">
                <div className="font-artifakt text-block-2 text-typographySecondary">{t('popups.newReview.yourReviewFor')}</div>
                <div className="mt-1 font-manrope font-bold text-heading-3">{props.gameName}</div>
            </div>
            <div className="mt-6 flex gap-5 max-md:flex-col">
                <div className="flex flex-col flex-1">
                    <div className="flex items-center justify-between">
                        <div className="font-artifakt text-block-1">{t('popups.newReview.yourRating')}</div>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((value) => {
                                const Star = value <= rating ? StarFilledIcon : StarOutlineIcon;
                                return (
                                    <button type="button" key={value} aria-label={t('common.ratingOutOf5', { rate: value })} onClick={() => setRating(value)} className="shrink-0 w-[26px] aspect-square text-accent hover:opacity-70">
                                        <Star />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder={t('popups.newReview.whatDidYouThink')}
                        rows={6}
                        className="mt-4 w-full rounded-2xl bg-secondary p-4 font-artifakt text-block-2 text-typography placeholder:text-typographySecondary resize-none focus:outline-none"
                    />
                    <label className="mt-4 flex items-center gap-2.5 font-artifakt text-block-2 text-typographySecondary cursor-pointer">
                        <input type="checkbox" checked={disableComments} onChange={(e) => setDisableComments(e.target.checked)} className="accent-primary size-4" />
                        {t('popups.newReview.disableComments')}
                    </label>
                </div>
                <div className="flex flex-col w-[260px] shrink-0 max-md:w-full">
                    <div className="font-artifakt text-block-1">{t('popups.newReview.reviewRules')}</div>
                    <div className="mt-3 flex flex-col gap-3 rounded-2xl bg-secondary p-4 font-artifakt text-sign-2 text-typographySecondary">
                        <p className="pb-3 border-b border-cardLight12">{t('popups.newReview.rule1')}</p>
                        <p className="pb-3 border-b border-cardLight12">{t('shop.createPost.rule3')}</p>
                        <p className="pb-3 border-b border-cardLight12">{t('popups.newReview.rule3')}</p>
                        <p>{t('popups.newReview.rule4')}</p>
                    </div>
                </div>
            </div>
            <button
                type="button"
                onClick={handlePublish}
                disabled={!canPublish}
                className="self-center mt-6 px-9 py-3.5 rounded-[20px] bg-primary hover:bg-primaryHover disabled:opacity-50 disabled:pointer-events-none text-background font-artifakt font-semibold text-button-1"
            >
                {t('popups.newReview.publishReview')}
            </button>
        </div>
    );
}

export default NewReview;
