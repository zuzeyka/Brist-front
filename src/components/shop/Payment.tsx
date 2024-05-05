import React from 'react';
import { Button } from '../ui/Button';
import { AlertOctagonIcon, FuelIcon, Gamepad2Icon, GamepadIcon, HeartIcon, ShareIcon, StarIcon } from 'lucide-react';

interface PaymentProps {
    className?: string;
    previewUrl?: string;
    price: number;
    discount?: number;
}
const Payment: React.FC<PaymentProps> = (props) => {
    return (
        <div className={'pl-0' + " " + props.className}>
            <div className='flex items-center justify-end mb-4'>
                <span className="text-3xl mr-2">4.1</span>
                <div className="flex">
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-yellow-400 w-5 h-5" />
                    <StarIcon className="text-gray-300 w-5 h-5" />
                </div>
            </div>
            {props.previewUrl && <img src={props.previewUrl} className="w-auto mb-4 rounded-xl" />}
            <div className="flex flex-col justify-between mb-4">
                {props.discount ? (
                    <div className="flex items-center">
                        <span className='bg-gray-200 px-2 py-1 rounded-full text-xs mr-2'>-{props.discount}%</span>
                        <span className="font-bold mr-2">{props.price - props.price * props.discount / 100}₴</span>
                        <span className='text-gray-500 ml-2 line-through'>{props.price}₴</span>
                    </div>
                ) : (<span>{props.price}₴</span>)}
                <div className="text-xs text-gray-500">Знижка до 30.02.2023 10:00</div>
            </div>
            <Button className="w-full bg-[#333333] text-white rounded-2xl">Купити</Button>
            <div className='flex mt-3'>
                <Button className="w-full rounded-2xl bg-gray-100 text-black border border-black mr-5">Додати у кошик</Button>
                <Button className="w-full rounded-2xl bg-gray-100 text-black border border-black"><HeartIcon></HeartIcon></Button>
            </div>
            <div className="flex items-center justify-between mt-3">
                <Button className="w-full mb-2 rounded-2xl bg-gray-100 text-black border border-black mr-5"><ShareIcon className='mr-2' />Репост</Button>
                <Button className="w-full mb-2 rounded-2xl bg-gray-100 text-black border border-black"><AlertOctagonIcon className='mr-2' />Поскаржитись</Button>
            </div>
            <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                    <span>Дата виходу</span>
                    <b>21.02.2023</b>
                </div>
                <div className="flex justify-between text-sm mb-1">
                    <span>Розробник</span>
                    <b>Rozumnichki Team</b>
                </div>
                <div className="flex justify-between text-sm mb-1">
                    <span>Видавець</span>
                    <b>Zubarik Inc</b>
                </div>
                <div className="flex justify-between text-sm">
                    <span>Платформи</span>
                    <div className='flex'>
                        <GamepadIcon />
                        <Gamepad2Icon />
                        <FuelIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
