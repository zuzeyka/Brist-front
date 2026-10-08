import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRightIcon } from '@/components/ui/icons';
import GamePrice, { discountedPrice, formatPrice } from '@/components/main/game-price';
import { primaryButton } from './bundle-list';
import { useCart } from '../cart/card-context';

interface DlcInfo {
    id: string;
    name: string;
    price: number;
    discount?: number;
    previeImage?: string;
}

interface DlcProps {
    className?: string;
    dlc: DlcInfo[];
    // Base game name, to link to "Усі DLC" — omit to hide that link (e.g. on a DLC's own page).
    gameName?: string;
}

// "Інші DLC": one "DLC Card" row per DLC and a button to add them all.
const DlcList: React.FC<DlcProps> = (props) => {
    const { t } = useTranslation();
    const { addToCart } = useCart();
    if (!props.dlc.length) return null;
    const total = props.dlc.reduce((sum, dlc) => sum + discountedPrice(dlc.price, dlc.discount ?? 0), 0);

    const handleAddAllToCart = () => {
        props.dlc.forEach((dlc) => addToCart({
            itemId: dlc.id, itemType: 'dlc',
            gameName: dlc.name, price: dlc.price, discount: dlc.discount,
            gamePictureUrl: dlc.previeImage ?? '',
        }));
    };

    return (
        <section className={'flex flex-col items-end gap-5' + (props.className ? ' ' + props.className : '')}>
            <div className='w-full flex justify-between items-center'>
                <h2 className='font-manrope font-bold text-heading-1 text-typography'>{t('shop.about.otherDlc')}</h2>
                {props.gameName && (
                    <Link to={`/store/${encodeURIComponent(props.gameName)}/dlc`} className='flex items-center font-artifakt font-semibold text-button-2 text-typography hover:text-primaryHover'>
                        {t('shop.about.allDlc')}<ChevronRightIcon />
                    </Link>
                )}
            </div>
            <div className='w-full flex flex-col gap-2'>
                {props.dlc.map((dlc) => (
                    <Link key={dlc.name} to={`/dlc/${encodeURIComponent(dlc.name)}`} className='flex justify-between items-center bg-card1 hover:bg-cardLight12 p-5 rounded-[20px] text-typography transition'>
                        <span className='font-manrope font-bold text-heading-3'>{dlc.name}</span>
                        <GamePrice price={dlc.price} discount={dlc.discount ?? 0} bold />
                    </Link>
                ))}
            </div>
            <div className='flex items-center gap-4'>
                <p className="font-manrope font-bold text-heading-3 text-typography">{formatPrice(total)}</p>
                <button type="button" onClick={handleAddAllToCart} className={primaryButton}>{t('shop.about.addAllDlcToCart')}</button>
            </div>
        </section>
    );
};

export default DlcList;
