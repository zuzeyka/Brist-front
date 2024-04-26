import React from 'react';
import Filters from './Filters';
import { Button } from '@/components/ui/Button';
import { CircleEllipsisIcon, PlusIcon } from 'lucide-react';

interface CommunityProps {
    gameName: string;
    className?: string;
}
const Community: React.FC<CommunityProps> = (props) => {
    return (
        <div className={'max-w-7xl mx-auto py-10 px-4' + props.className}>
            <div className="col-span-2">
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <h1 className="text-3xl font-bold mb-4 text-black">{props.gameName}</h1>
                        <div className='flex space-x-2'>
                            <span><b>3421</b> підписників</span>
                            <div className='flex space-x-2'><b>121</b> <div className='w-4 h-4 bg-green-500 rounded-full mt-1'></div></div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-4 space-x-4">
                        <Button className="bg-black text-white py-2 px-4 rounded">Створити пост</Button>
                        <div className="flex space-x-2">
                            <Button className="bg-gray-300 p-2 rounded-full">
                                <PlusIcon className="text-black" />
                            </Button>
                            <Button className="bg-gray-300 p-2 rounded-full">
                                <CircleEllipsisIcon className="text-black" />
                            </Button>
                        </div>
                    </div>
                </div>
                <Filters></Filters>
            </div>
        </div>
    );
};

export default Community;

