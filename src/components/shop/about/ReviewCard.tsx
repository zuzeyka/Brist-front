import React from 'react';
import Avatar from '../../ui/avatar/Avatar';
import { HeartIcon, StarIcon } from 'lucide-react';

interface ReviewCardProps {
    className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = (props) => {
    return (
        <div className={'max-w-sm p-4 bg-white rounded-lg shadow-md ' + (props.className || '')}>
            <div className="flex items-center">
                <Avatar alt="User Avatar" src=""></Avatar>
                <div className="ml-3">
                    <p className="text-sm font-semibold">Пирожек</p>
                    <div className="flex">
                        <StarIcon className="text-yellow-400 w-4 h-4" />
                        <StarIcon className="text-yellow-400 w-4 h-4" />
                        <StarIcon className="text-yellow-400 w-4 h-4" />
                        <StarIcon className="text-gray-300 w-4 h-4" />
                        <StarIcon className="text-gray-300 w-4 h-4" />
                    </div>
                </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">Дуже захоплююча та цікава гра, дуже рекомендую ознайомитись з нею!!</p>
            <div className="flex justify-between items-center mt-4">
                <p className="text-xs text-gray-500">21.02.2023</p>
                <div className="flex items-center">
                    <p className="text-sm mr-1">2.5k</p>
                    <HeartIcon className="text-gray-500 w-4 h-4" />
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
