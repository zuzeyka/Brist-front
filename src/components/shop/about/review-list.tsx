import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from '@/components/ui/avatar/avatar';
import { MoreHorizontalIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Discussion, User } from '@/shared/lib/interfaces';
import StarRating from '@/components/ui/star-rating';
import { ChevronDownIcon, CommentIcon, HeartOutlineIcon } from '@/components/ui/icons';
import NewReview from '@/components/popups/new-review';

interface ReviewListProps {
    className?: string;
    userData: User[];
    reviewData: Discussion[];
    gameId: string;
    gameName: string;
    onReviewPublished?: () => void;
}

const sorters: Record<string, (a: Discussion, b: Discussion) => number> = {
    popular: (a, b) => b.likesCount - a.likesCount,
    new: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    old: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    positive: (a, b) => b.rate - a.rate,
    negative: (a, b) => a.rate - b.rate,
};

export const formatCount = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k` : `${n}`;

export const formatDate = (value: Date | string) => {
    const date = new Date(value);
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
};

const chip = 'flex items-center gap-2 rounded-lg bg-cardLight12 px-2 py-1 font-artifakt font-semibold text-button-2 text-typographySecondary';

const ReviewCard: React.FC<{ review: Discussion; user?: User }> = ({ review, user }) => {
    const { t } = useTranslation();
    return (
    <article className='flex flex-col gap-[30px] bg-card1 p-5 rounded-[20px] text-typography'>
        <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
                <Avatar alt="" src={user?.image} name={user?.name} className='size-14' />
                <div className="flex flex-col gap-3">
                    <p className="font-artifakt font-bold text-subheading-1">{user?.name ?? t('shop.about.player')}</p>
                    <StarRating rate={review.rate} />
                </div>
            </div>
            <button type="button" aria-label={t('shop.about.more')} className="text-typography hover:text-primaryHover">
                <MoreHorizontalIcon className="size-6" />
            </button>
        </div>
        <p className="font-artifakt text-block-1 tracking-[-0.01em]">{review.content}</p>
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
                <span className={chip}><HeartOutlineIcon className="text-accent" />{formatCount(review.likesCount)}</span>
                <span className={chip}><CommentIcon />{formatCount(review.likesCount)}</span>
            </div>
            <p className="font-artifakt text-sign-2 tracking-[-0.01em] text-typographySecondary">{formatDate(review.createdAt)}</p>
        </div>
    </article>
    );
};

const ReviewList: React.FC<ReviewListProps> = (props) => {
    const { t } = useTranslation();
    const [showMore, setShowMore] = useState(false);
    const [selectedSort, setSelectedSort] = useState<string>('popular');
    const [writeOpen, setWriteOpen] = useState(false);

    // Users are fetched in the same order as the reviews.
    const reviews = props.reviewData
        .map((review, index) => ({ review, user: props.userData[index] }))
        .sort((a, b) => sorters[selectedSort](a.review, b.review));
    const visible = showMore ? reviews : reviews.slice(0, 4);
    // Two masonry columns, filled alternately like the design.
    const columns = [visible.filter((_, i) => i % 2 === 0), visible.filter((_, i) => i % 2 === 1)];

    return (
        <section className={"flex flex-col items-center gap-5" + (props.className ? ' ' + props.className : '')}>
            <div className='w-full flex items-center justify-between'>
                <h2 className='font-manrope font-bold text-heading-1 text-typography'>{t('shop.about.reviews')}</h2>
                <Dialog open={writeOpen} onOpenChange={setWriteOpen}>
                    <DialogTrigger asChild>
                        <button type="button" className='h-10 px-5 rounded-[20px] bg-primary hover:bg-primaryHover text-background font-artifakt font-semibold text-button-2'>
                            {t('shop.about.writeReview')}
                        </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[720px] !bg-card2">
                        <NewReview
                            gameId={props.gameId}
                            gameName={props.gameName}
                            onPublished={props.onReviewPublished}
                            onClose={() => setWriteOpen(false)}
                        />
                    </DialogContent>
                </Dialog>
            </div>
            <div className='w-full flex flex-col gap-3'>
                <div className='flex items-center gap-2.5'>
                    <span className='font-artifakt text-block-2 tracking-[-0.01em] text-typographySecondary'>{t('wishlist.sorting')}</span>
                    <Select value={selectedSort} onValueChange={setSelectedSort}>
                        <SelectTrigger className="w-auto h-auto p-0 gap-0.5 !bg-transparent border-0 !text-typography !text-button-2 !font-artifakt font-semibold" id="sort">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className='!bg-card2 !text-typography !font-artifakt'>
                            <SelectItem value="popular">{t('shop.about.sortPopular')}</SelectItem>
                            <SelectItem value="new">{t('shop.about.sortNew')}</SelectItem>
                            <SelectItem value="old">{t('shop.about.sortOld')}</SelectItem>
                            <SelectItem value="positive">{t('shop.about.sortPositive')}</SelectItem>
                            <SelectItem value="negative">{t('shop.about.sortNegative')}</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-2 gap-4 items-start">
                    {columns.map((column, c) => (
                        <div key={c} className="flex flex-col gap-4">
                            {column.map(({ review, user }) => <ReviewCard key={review.id} review={review} user={user} />)}
                        </div>
                    ))}
                </div>
            </div>
            {!showMore && reviews.length > 4 && (
                <button type="button" aria-label={t('shop.about.showMore')} onClick={() => setShowMore(true)} className="text-typography hover:text-primaryHover">
                    <ChevronDownIcon className="size-10" />
                </button>
            )}
        </section>
    );
};

export default ReviewList;
