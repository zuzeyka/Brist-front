import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertOctagonIcon, HeartIcon, ShareIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCart } from './cart/card-context';
import { useWishlist } from './wishlist-context';
import GamePrice from '@/components/main/game-price';
import { HeartOutlineIcon } from '@/components/ui/icons';
import { cn } from '@/shared/lib/utils';

interface PaymentProps {
    className?: string;
    gameId: string;
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
    // Payment is shared by the main game page and the DLC page — gameId holds
    // whichever one is actually being sold, and this says which.
    itemType?: 'game' | 'dlc';
}

const button = 'rounded-[20px] font-artifakt font-semibold text-button-1';

// Purchase panel in the game page sidebar.
const Payment: React.FC<PaymentProps> = (props) => {
    const { t } = useTranslation();
    const { addToCart } = useCart();
    const { isWished, toggleWishlist } = useWishlist();
    const navigate = useNavigate();
    const wished = isWished(props.gameId);
    const itemType = props.itemType ?? 'game';
    const [buying, setBuying] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleAddToCart = () => {
        addToCart({
            itemId: props.gameId, itemType,
            gameName: props.gameName, price: props.price, discount: props.discount, endDate: props.endDate,
            gamePictureUrl: props.previewUrl
        });
    };

    const handleBuyNow = async () => {
        setErrorMsg('');
        setBuying(true);
        try {
            const res = await fetch('http://localhost:5049/api/Purchase/checkout', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([{ itemId: props.gameId, itemType }]),
            });

            if (res.status === 402) {
                setErrorMsg(t('cart.insufficientFunds'));
                return;
            }
            if (res.status === 409) {
                setErrorMsg(t('cart.alreadyOwned'));
                return;
            }
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            navigate('/library');
        } catch (error) {
            console.error('Buy now error:', error);
            setErrorMsg(t('cart.checkoutError'));
        } finally {
            setBuying(false);
        }
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
            {errorMsg && <div className='font-artifakt text-sign-2 text-negative'>{errorMsg}</div>}
            <div className="flex flex-col gap-3">
                <button type="button" disabled={buying} onClick={handleBuyNow} className={cn(button, 'w-full px-[26px] py-3 bg-primary hover:bg-primaryHover text-background')}>{buying ? t('cart.processing') : t('shop.payment.buy')}</button>
                <div className='flex gap-3'>
                    <button type="button" onClick={handleAddToCart} className={cn(button, 'flex-1 px-[26px] py-3 bg-secondary hover:bg-secondaryHover')}>{t('shop.payment.addToCart')}</button>
                    <button type="button" onClick={() => toggleWishlist(props.gameId)} aria-label={t(wished ? 'shop.payment.removeFromWishlist' : 'shop.payment.addToWishlist')} className={cn(button, 'p-3 bg-secondary hover:bg-secondaryHover', wished && 'text-accent')}>
                        {wished ? <HeartIcon fill="currentColor" /> : <HeartOutlineIcon />}
                    </button>
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
