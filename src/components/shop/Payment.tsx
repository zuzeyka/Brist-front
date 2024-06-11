import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertOctagonIcon, FuelIcon, Gamepad2Icon, GamepadIcon, HeartIcon, ShareIcon, StarIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PaymentProps {
    className?: string;
    previewUrl?: string;
    price: number;
    rate: number;
    endDate?: string;
    releaseDate: string;
    developer: string;
    publisher: string;
    platforms: JSX.Element[];
    discount?: number;
}
const Payment: React.FC<PaymentProps> = (props) => {
    return (
        <div className={'pl-0' + (props.className ? ' ' + props.className : '')}>
            <div className='flex items-center justify-end mb-5'>
                <span className="text-heading-3 text-typography font-bold mr-2">{props.rate}</span>
                <div className="flex space-x-1">
                    {[...Array(Math.round(props.rate))].map((_, i) => (
                        <StarIcon
                            key={i}
                            className={`text-accent w-9 h-9`}
                            fill="currentColor"
                        />
                    ))}
                    {[...Array(5 - Math.round(props.rate))].map((_, i) => (
                        <StarIcon
                            key={5 + i}
                            className={`text-accent w-9 h-9`}
                        />
                    ))}
                </div>
            </div>
            {props.previewUrl && <img src={props.previewUrl} className="w-auto mb-4 rounded-xl" />}
            <div className="flex flex-col justify-between mb-4">
                {props.discount ? (
                    <div className='flex space-x-2 items-center'>
                        <Badge className="text-background bg-accent hover:bg-accentHover font-artifakt">-{props.discount}%</Badge>
                        <p className="line-through text-sign-1 text-typographySecondary font-artifakt">{props.price}₴</p>
                        <p className="text-sign-1 text-typography font-artifakt">{props.price - props.price * props.discount / 100}₴</p>
                    </div>
                ) : (<p className="text-sign-1 font-artifakt text-typography">{props.price}</p>)}
                <span className='text-sign-2 text-typographySecondary'>Знижка діє до {props.endDate}</span>
            </div>
            <Button className='bg-primary hover:bg-primaryHover !text-background rounded-2xl w-full text-button-1 font-artifakt'>У кошик</Button>
            <div className='flex mt-3'>
                <Button className="w-full rounded-2xl bg-secondary hover:bg-secondaryHover text-typography text-button-1 border-0 mr-5 font-artifakt">Додати у кошик</Button>
                <Button className="w-1/4 rounded-2xl bg-secondary hover:bg-secondaryHover text-typography text-button-1 border-0 font-artifakt"><HeartIcon></HeartIcon></Button>
            </div>
            <div className="flex items-center justify-between mt-3">
                <Button className="w-full mb-2 rounded-2xl bg-transparent !text-primary hover:bg-cardLight12 hover:text-primaryHover text-button-1 border-0 mr-5 font-artifakt"><ShareIcon className='mr-2' />Репост</Button>
                <Button className="w-full mb-2 rounded-2xl bg-transparent !text-negative hover:bg-cardLight12 hover:text-negativeHover text-button-1 border-0 font-artifakt"><AlertOctagonIcon className='mr-2' />Поскаржитись</Button>
            </div>
            <div className="mt-4 font-artifakt text-typography">
                <div className="flex justify-between text-sm mb-1">
                    <p className='font-bold text-subheading-2'>Дата виходу</p>
                    <p className='text-block-2'>{props.releaseDate}</p>
                </div>
                <div className="flex justify-between text-sm mb-1">
                    <p className='font-bold text-subheading-2'>Розробник</p>
                    <p className='text-block-2'>{props.developer}</p>
                </div>
                <div className="flex justify-between text-sm mb-1">
                    <p className='font-bold text-subheading-2'>Видавець</p>
                    <p className='text-block-2'>{props.publisher}</p>
                </div>
                <div className="flex justify-between text-sm">
                    <p className='font-bold text-subheading-2'>Платформи</p>
                    <div className='flex'>
                        {props.platforms.map((platform, index) => (
                            <div className='text-block-2' key={index}>
                                {platform}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
