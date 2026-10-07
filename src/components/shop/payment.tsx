import React from 'react';
import { AlertOctagonIcon, ShareIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCart } from './cart/card-context';
import GamePrice from '@/components/main/game-price';
import { HeartOutlineIcon } from '@/components/ui/icons';
import { cn } from '@/shared/lib/utils';

interface PaymentProps {
    className?: string;
    gameName: string;
    previewUrl: string;
    price: number;
    rate: number;
    endDate?: string;
    releaseDate: string;
    developer: string;
    publisher: string;
    platforms: JSX.Element[];
    discount?: number;
}

const button = 'rounded-[20px] font-artifakt font-semibold text-button-1';

// Purchase panel in the game page sidebar.
const Payment: React.FC<PaymentProps> = (props) => {
    const { t } = useTranslation();
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            gameName: props.gameName, price: props.price, discount: props.discount, endDate: props.endDate,
            gamePictureUrl: props.previewUrl
        });
    };

    const details = [
        [t('shop.payment.releaseDate'), props.releaseDate],
        [t('shop.payment.developer'), props.developer],
        [t('shop.payment.publisher'), props.publisher],
    ];

    return (
        <div className={cn('flex flex-col gap-5 text-typography', props.className)}>
            <img src={props.previewUrl} alt="" className="h-[145px] w-full object-cover rounded-[20px]" />
            <div className="flex flex-col gap-1">
                <GamePrice price={props.price} discount={props.discount ?? 0} size="lg" />
                {props.discount ? (
                    <span className='font-artifakt text-sign-3 tracking-[-0.01em] text-typographySecondary'>{t('main.discountUntil', { date: props.endDate })}</span>
                ) : null}
            </div>
            <div className="flex flex-col gap-3">
                <button type="button" className={cn(button, 'w-full px-[26px] py-3 bg-primary hover:bg-primaryHover text-background')}>{t('shop.payment.buy')}</button>
                <div className='flex gap-3'>
                    <button type="button" onClick={handleAddToCart} className={cn(button, 'flex-1 px-[26px] py-3 bg-secondary hover:bg-secondaryHover')}>{t('shop.payment.addToCart')}</button>
                    <button type="button" aria-label={t('shop.payment.addToWishlist')} className={cn(button, 'p-3 bg-secondary hover:bg-secondaryHover')}><HeartOutlineIcon /></button>
                </div>
                <div className="flex gap-3">
                    <button type="button" className={cn(button, 'w-[136px] flex items-center justify-center gap-3 py-1.5 text-primary hover:text-primaryHover')}>
                        <ShareIcon className="size-6" />{t('shop.payment.repost')}
                    </button>
                    <button type="button" className={cn(button, 'flex-1 flex items-center justify-center gap-3 py-1.5 text-negative hover:opacity-80')}>
                        <AlertOctagonIcon className="size-6" />{t('shop.payment.report')}
                    </button>
                </div>
            </div>
            <dl className="flex flex-col gap-4 font-artifakt text-sign-2">
                {details.map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center">
                        <dt className='font-bold'>{label}</dt>
                        <dd className='text-block-2 tracking-[-0.01em] text-right'>{value}</dd>
                    </div>
                ))}
                <div className="flex justify-between items-center">
                    <dt className='font-bold'>{t('shop.payment.platforms')}</dt>
                    <dd className='flex gap-3'>{props.platforms.map((platform, index) => <span key={index}>{platform}</span>)}</dd>
                </div>
            </dl>
        </div>
    );
};

export default Payment;
