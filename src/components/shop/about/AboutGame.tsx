import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import DlcList from './DlcList';
import Payment from '../Payment';
import MediaPlayer from './MediaPlayer';
import { ChevronDown, ChevronUp, FuelIcon, Gamepad2Icon, GamepadIcon } from 'lucide-react';
import Avatar from '@/components/ui/avatar/Avatar';
import ReviewList from './ReviewList';
import BundleList from './BundleList';
import { Discussion, GameBundle, GameInShop, User } from '@/shared/lib/interfaces';
import Friends from './Friends';

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
    bundlesContent: GameInShop[];
    DLC: GameInShop[];
    mediaUrl: string[];
    price: number;
    rate: number;
    discount?: number;
    endDate?: string;
    releaseDate: string;
    developer: string;
    publisher: string;
    gameCategorys: string[];
    className?: string;
}

const AboutGame: React.FC<AboutGameProps> = (props) => {
    const [showMore, setShowMore] = useState(false);
    const [isChevronUp, setIsChevronUp] = useState(false);

    const handleButtonClick = () => {
        setShowMore(!showMore);
        setIsChevronUp(!isChevronUp);
    };
    return (
        <div className={'flex justify-between mx-auto py-4' + (props.className ? ' ' + props.className : '')}>
            <div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className="col-span-3">
                        <h1 className="text-heading-1 font-bold mb-4 text-typography">{props.gameName}</h1>
                        <MediaPlayer mediaUrl={props.mediaUrl}></MediaPlayer>
                        <div className="flex space-x-2 mb-2 flex-wrap">
                            {props.gameCategorys.slice(0, 4).map((category) => (
                                <span key={category} className="bg-cardLight25 text-typographySecondary text-sign-3 px-4 py-2 mb-2 rounded-full font-semibold">{category}</span>
                            ))}
                            {props.gameCategorys.length > 4 && (
                                <Button
                                    className="bg-transparent hover:bg-transparent text-black"
                                    onClick={handleButtonClick}
                                >
                                    <span className='bg-cardLight25 text-typographySecondary text-sign-3 font-artifakt px-4 py-2 mb-2 rounded-full font-semibold'>+{props.gameCategorys.length - 4} categories</span>
                                </Button>
                            )}
                        </div>
                        {showMore && (
                            <div className="flex space-x-2 flex-wrap space-x-4">
                                {props.gameCategorys.slice(4).map((category) => (
                                    <span key={category} className="bg-cardLight25 text-typographySecondary text-sign-3 font-artifakt px-4 py-2 mb-2 rounded-full font-semibold">{category}</span>
                                ))}
                            </div>
                        )}
                        <div className='text-typographySecondary text-block-1 font-artifak'>
                            {showMore ? props.gameDescription : props.gameDescription.slice(0, 200) + (props.gameDescription.length > 50 ? '...' : '')}
                        </div>
                        <div className="flex justify-center">
                            <Button
                                className="bg-transparent hover:bg-transparent text-black"
                                onClick={handleButtonClick}
                            >
                                {isChevronUp ? <ChevronUp className='text-typography hover:text-typographySecondary' /> : <ChevronDown className='text-typography hover:text-typographySecondary' />}
                            </Button>
                        </div>
                        {props.bundles ? (
                            <BundleList elements={props.bundlesContent} bundles={props.bundles}></BundleList>
                        ) : null}
                    </div>
                </div>
                {props.DLC ? <DlcList dlc={props.DLC}></DlcList> : null}
                {props.reviews ? <ReviewList userData={props.users} reviewData={props.reviews}></ReviewList> : null}

            </div>
            <div className='flex-1 pl-4'>
                <div className='sticky top-20 z-9'>
                    <Payment gameName={props.gameName} platforms={[<GamepadIcon />, <Gamepad2Icon />, <FuelIcon />]} developer={props.developer} publisher={props.publisher} releaseDate={props.releaseDate} previewUrl={props.previewUrl} price={props.price} discount={props.discount} rate={props.rate} endDate={props.endDate}></Payment>
                    <Friends wishedFriends={props.users} ownedFriends={props.users} />
                </div>
            </div>
        </div>
    );
};

export default AboutGame;
