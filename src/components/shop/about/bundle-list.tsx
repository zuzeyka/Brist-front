import React from 'react';
import { useTranslation } from 'react-i18next';
import { GameBundle } from '@/shared/lib/interfaces';
import GamePrice from '@/components/main/game-price';

export interface BundleItem {
    name: string;
    isBaseGame?: boolean;
}

interface BundleProps {
    className?: string
    bundles: GameBundle[]
    // Contents of each bundle, in the same order as `bundles`.
    contents: BundleItem[][]
    discountEnd: (date?: Date) => string | undefined
}

export const primaryButton = 'bg-primary hover:bg-primaryHover text-background rounded-[20px] px-[26px] py-3 font-artifakt font-semibold text-button-1 whitespace-nowrap';

// "Bundle Card" list from the game page.
const BundleList: React.FC<BundleProps> = (props) => {
    const { t } = useTranslation();
    if (!props.bundles.length) return null;
    return (
        <section className={'flex flex-col gap-5' + (props.className ? ' ' + props.className : '')}>
            <h2 className='font-manrope font-bold text-heading-1 text-typography'>{t('shop.about.bundles')}</h2>
            <div className='flex flex-col gap-2'>
                {props.bundles.map((bundle, index) => {
                    const end = bundle.discount ? props.discountEnd(bundle.discountFinish) : undefined;
                    return (
                        <div key={bundle.name} className="flex flex-col items-end gap-5 bg-card1 p-5 rounded-[20px] text-typography">
                            <h3 className='w-full font-manrope font-bold text-heading-2'>{bundle.name}</h3>
                            <div className='w-full flex flex-col gap-3 bg-card2 rounded-[20px] px-4 pt-3 pb-4 font-artifakt text-block-1 tracking-[-0.01em]'>
                                {bundle.description && <p>{bundle.description}</p>}
                                <div>
                                    <p className='text-typographySecondary'>{t('shop.about.contents')}</p>
                                    <ul className='list-disc ms-[30px]'>
                                        {(props.contents[index] ?? []).map((item) => (
                                            <li key={item.name}>
                                                {item.name}
                                                {item.isBaseGame && <span className='text-typographySecondary'> ({t('shop.dlc.baseGame').toLowerCase()})</span>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='flex items-center gap-[18px]'>
                                <div className='flex flex-col items-end gap-1'>
                                    <GamePrice price={bundle.price} discount={bundle.discount} bold />
                                    {end && <p className='font-artifakt text-sign-3 tracking-[-0.01em] text-typographySecondary'>{t('main.discountUntil', { date: end })}</p>}
                                </div>
                                <button type="button" className={primaryButton}>{t('shop.toCart')}</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default BundleList;
