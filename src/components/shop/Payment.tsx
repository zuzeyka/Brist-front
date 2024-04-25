import React from 'react';
import { Button } from '../ui/Button';
import { DownloadIcon, HeartIcon, ShareIcon, StarIcon } from 'lucide-react';

interface PaymentProps {
    className?: string;
}
const Payment: React.FC<PaymentProps> = (props) => {
    return (
        <>
            <div>
                <div className={'flex items-center mb-4' + (props.className || '')}>
                    <span className="text-3xl font-bold mr-2">4.1</span>
                    <div className="flex">
                        <StarIcon className="text-yellow-400 w-5 h-5" />
                        <StarIcon className="text-yellow-400 w-5 h-5" />
                        <StarIcon className="text-yellow-400 w-5 h-5" />
                        <StarIcon className="text-yellow-400 w-5 h-5" />
                        <StarIcon className="text-gray-300 w-5 h-5" />
                    </div>
                </div>
                <div className="flex justify-between items-center bg-gray-200 p-4 mb-4">
                    <div className="text-lg">
                        <span className="line-through text-gray-500 mr-2">365€</span>
                        <span className="font-bold">100€</span>
                    </div>
                    <div className="text-sm">Знижка до 30.02.2023 10:00</div>
                </div>
                <Button className="w-full mb-2 bg-black text-white">Купити</Button>
                <Button className="w-full mb-2">Додати у кошик</Button>
                <Button className="w-full">Додати у Wish list</Button>
                <div className="flex items-center justify-between mt-4">
                    <ShareIcon className="text-gray-600 w-6 h-6" />
                    <HeartIcon className="text-gray-600 w-6 h-6" />
                    <DownloadIcon className="text-gray-600 w-6 h-6" />
                </div>
                <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                        <span>Дата виходу</span>
                        <span>21.02.2023</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                        <span>Розробник</span>
                        <span>Rozumnichki Team</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                        <span>Видавець</span>
                        <span>Zubarik Inc</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span>Платформи</span>
                        <span>▦ ▦ ▦</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;
