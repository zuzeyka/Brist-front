import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DlcList from './dlc-list';
import Payment from '../payment';
import MediaPlayer from './media-player';
import ReviewList from './review-list';
import BundleList, { BundleItem } from './bundle-list';
import { Discussion, GameBundle, GameInShop, User } from '@/shared/lib/interfaces';
import Friends from './friends';
import StarRating from '@/components/ui/star-rating';
import { ChevronDownIcon, MacOsIcon, TagExpandIcon, WindowsIcon } from '@/components/ui/icons';
import { cn } from '@/shared/lib/utils';

export interface UserData {
    name: string;
    avatarUrl?: string;
}
interface AboutGameProps {
    gameName: string;
    gameDescription: string;
    previewUrl: string;
    reviews: Discussion[];
    users: User[];
    bundles: GameBundle[];
    bundleContents: BundleItem[][];
    DLC: GameInShop[];
    wishedFriends: User[];
    ownedFriends: User[];
    mediaUrl: string[];
    price: number;
    rate: number;
    discount?: number;
    endDate?: string;
    releaseDate: string;
    developer: string;
    publisher: string;
    gameCategorys: string[];
    discountEnd: (date?: Date) => string | undefined;
    className?: string;
}

const VISIBLE_TAGS = 7;
const tag = 'flex items-center rounded-[20px] bg-cardLight25 font-artifakt font-bold text-sign-3 tracking-[-0.01em] text-typographySecondary';

const toUserData = (users: User[]): UserData[] => users.map((u) => ({ name: u.name, avatarUrl: u.image }));

// Title row with rating, then the main column (media, tags, description, bundles,
// DLC, reviews) next to a sticky 348px purchase sidebar.
export const GameTitle: React.FC<{ name: string; rate: number }> = ({ name, rate }) => (
    <div className="flex items-center justify-between text-typography">
        <h1 className="font-manrope font-bold text-heading-1">{name}</h1>
        <div className="flex items-center gap-[15px]">
            <span className="font-manrope font-bold text-heading-2">{rate.toFixed(1)}</span>
            <StarRating rate={rate} size={32} />
        </div>
    </div>
);

const AboutGame: React.FC<AboutGameProps> = (props) => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);
    const tags = expanded ? props.gameCategorys : props.gameCategorys.slice(0, VISIBLE_TAGS);

    return (
        <div className={cn('flex flex-col gap-6 pt-8', props.className)}>
            <GameTitle name={props.gameName} rate={props.rate} />
            <div className='flex gap-6 items-start'>
                <div className='w-[1092px] min-w-0 flex flex-col'>
                    <MediaPlayer mediaUrl={props.mediaUrl.length ? props.mediaUrl : [props.previewUrl]} />
                    <div className="flex flex-wrap gap-2 mt-6">
                        {tags.map((category) => (
                            <span key={category} className={cn(tag, 'px-3 py-1')}>{category}</span>
                        ))}
                        {props.gameCategorys.length > VISIBLE_TAGS && (
                            <button type="button" aria-label={t('shop.about.allTags')} onClick={() => setExpanded(!expanded)} className={cn(tag, 'px-2 py-1 text-typography')}>
                                <TagExpandIcon className={cn('size-4 transition', expanded && 'rotate-180')} />
                            </button>
                        )}
                    </div>
                    <div className="flex flex-col items-center gap-1 mt-6">
                        <p className={cn('font-artifakt text-block-1 tracking-[-0.01em] text-typography', !expanded && 'line-clamp-3')}>
                            {props.gameDescription}
                        </p>
                        <button type="button" aria-label={expanded ? t('shop.about.collapse') : t('shop.about.expand')} onClick={() => setExpanded(!expanded)} className="text-typography hover:text-primaryHover">
                            <ChevronDownIcon className={cn('size-10 transition', expanded && 'rotate-180')} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-8 mt-9">
                        <BundleList bundles={props.bundles} contents={props.bundleContents} discountEnd={props.discountEnd} />
                        <DlcList dlc={props.DLC} gameName={props.gameName} />
                        <ReviewList userData={props.users} reviewData={props.reviews} />
                    </div>
                </div>
                <aside className='w-[348px] shrink-0 sticky top-6 flex flex-col gap-8'>
                    <Payment
                        gameName={props.gameName}
                        platforms={[<WindowsIcon />, <MacOsIcon />]}
                        developer={props.developer}
                        publisher={props.publisher}
                        releaseDate={props.releaseDate}
                        previewUrl={props.previewUrl}
                        price={props.price}
                        discount={props.discount}
                        rate={props.rate}
                        endDate={props.endDate}
                    />
                    <Friends wishedFriends={toUserData(props.wishedFriends)} ownedFriends={toUserData(props.ownedFriends)} />
                </aside>
            </div>
        </div>
    );
};

export default AboutGame;
