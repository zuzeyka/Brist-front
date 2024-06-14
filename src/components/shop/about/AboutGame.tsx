import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import DlcList from './DlcList';
import Payment from '../Payment';
import MediaPlayer from './MediaPlayer';
import { ChevronDown, ChevronUp, FuelIcon, Gamepad2Icon, GamepadIcon } from 'lucide-react';
import Avatar from '@/components/ui/avatar/Avatar';
import ReviewList from './ReviewList';
import BundleList from './BundleList';

export interface DlcInfo {
    name: string;
    price: number;
    discount?: number;
}
export interface UserData {
    name: string;
    avatarUrl?: string;
}
interface AboutGameProps {
    gameName: string;
    gameDescription: string;
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
export interface ReviewInfo {
    userName: string;
    avatarUrl?: string;
    date: string;
    reviewText: string;
    rating: number;
    likes: number;
    comments: number;
}
export interface GameBundle {
    name: string;
    price: number;
    discount?: number;
    endDate?: string;
    description: string;
    elements: string[];
}
const AboutGame: React.FC<AboutGameProps> = (props) => {
    const [showMore, setShowMore] = useState(false);
    const [isChevronUp, setIsChevronUp] = useState(false);
    const friends: UserData[] = [
        {
            name: 'Юзернейм',
        },
        {
            name: 'Довгий Юзернейм',
        }
    ]
    const bundles: GameBundle[] = [
        {
            name: 'Якась гра, яка дуже всім сподобається: Deluxe Full Edition Plus',
            price: 1000,
            discount: 50,
            endDate: '30.02.2023 10:00',
            description: 'Lorem ipsum dolor sit amet consectetur. Ornare vulputate in pharetra pretium tempus fames tempus. Integer nisl elementum quis facilisis quis quis duis orci nec. Lobortis venenatis ut purus elementum volutpat. Aliquet.',
            elements: ['Назва гри (базова гра)', 'Крутий контент', 'Дуже корисний контент', 'Якийсь цікавий контент']
        },
        {
            name: 'Якась гра, яка дуже всім сподобається: Bundle',
            price: 500,
            discount: 0,
            description: 'Lorem ipsum dolor sit amet consectetur. Ornare vulputate in pharetra pretium tempus fames tempus. Integer nisl elementum quis facilisis quis quis duis orci nec. Lobortis venenatis ut purus elementum volutpat. Aliquet.',
            elements: ['Назва гри (базова гра)', 'Крутий контент']
        }
    ]
    const DLCs: DlcInfo[] = [
        {
            name: 'Назва гри: DLC 1',
            price: 1000,
            discount: 70
        },
        {
            name: 'Назва гри: DLC 2',
            price: 600,
            discount: 30
        },
        {
            name: 'Назва гри: DLC 3',
            price: 300,
            discount: 0
        },
        {
            name: 'Назва гри: DLC 4',
            price: 700,
            discount: 20
        },
        {
            name: 'Назва гри: DLC 5',
            price: 500,
            discount: 0
        }
    ]
    const reviews: ReviewInfo[] = [
        {
            userName: 'Юзернейм',
            date: '01.01.2022',
            reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur ultricies, nisl nisl aliquam nisl, eget consectetur nisl nisl aliquam nisl.',
            rating: 5,
            likes: 10,
            comments: 4
        },
        {
            userName: 'Довгий Юзернейм',
            date: '01.01.2022',
            reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur ultricies, nisl nisl aliquam nisl, eget consectetur nisl nisl aliquam nisl.',
            rating: 4,
            likes: 22,
            comments: 1
        },
        {
            userName: 'Юзернейм',
            date: '01.01.2022',
            reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur ultricies, nisl nisl aliquam nisl, eget consectetur nisl nisl aliquam nisl.',
            rating: 2,
            likes: 130,
            comments: 88
        },
        {
            userName: 'Довгий Юзернейм',
            date: '01.01.2022',
            reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur ultricies, nisl nisl aliquam nisl, eget consectetur nisl nisl aliquam nisl.',
            rating: 3,
            likes: 10,
            comments: 5
        },
        {
            userName: 'Юзернейм',
            date: '01.01.2022',
            reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur ultricies, nisl nisl aliquam nisl, eget consectetur nisl nisl aliquam nisl.',
            rating: 1,
            likes: 0,
            comments: 2
        },
        {
            userName: 'Довгий Юзернейм',
            date: '01.01.2022',
            reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur ultricies, nisl nisl aliquam nisl, eget consectetur nisl nisl aliquam nisl.',
            rating: 4,
            likes: 35,
            comments: 15
        }
    ]

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
                        <MediaPlayer mediaUrl={['https://i.imgur.com/ufBjnf8.png', 'https://i.imgur.com/5Hds4bh.png', 'https://i.imgur.com/oh4wspW.png', 'https://i.imgur.com/NvDm7W1.png', 'https://i.imgur.com/hNIw75C.png']}></MediaPlayer>
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
                        {bundles ? (
                            <BundleList bundles={bundles}></BundleList>
                        ) : null}
                    </div>
                </div>
                {DLCs ? <DlcList dlc={DLCs}></DlcList> : null}
                {reviews ? <ReviewList data={reviews}></ReviewList> : null}

            </div>
            <div className='flex-1 pl-4'>
                <div className='sticky top-20 z-9'>
                    <Payment gameName={props.gameName} platforms={[<GamepadIcon />, <Gamepad2Icon />, <FuelIcon />]} developer={props.developer} publisher={props.publisher} releaseDate={props.releaseDate} previewUrl={'https://i.imgur.com/hNIw75C.png'} price={props.price} discount={props.discount} rate={props.rate} endDate={props.endDate}></Payment>
                    <div className='bg-card1 p-4 mt-4 rounded-2xl font-artifakt text-typography'>
                        <span className='font-semibold text-typography'>Друзів бажають цю гру: {friends.length}</span>
                        {friends.map((friend, index) => (
                            <div key={index} className='flex items-center my-2 space-x-2 bg-card2 rounded-2xl'>
                                <Avatar src={friend.avatarUrl} alt='Avatar' className='w-8 h-8'></Avatar>
                                <span className='font-bold text-sign-2'>{friend.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className='bg-card1 p-4 mt-4 rounded-2xl font-artifakt text-typography'>
                        <span className='font-semibold text-typography'>Друзів мають цю гру: {friends.length}</span>
                        {friends.map((friend, index) => (
                            <div key={index} className='flex items-center my-2 space-x-2 bg-card2 rounded-2xl'>
                                <Avatar src={friend.avatarUrl} alt='Avatar' className='w-8 h-8'></Avatar>
                                <span className='font-bold text-sign-2'>{friend.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutGame;
