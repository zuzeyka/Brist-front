import React from 'react';
import { GameBundle } from './AboutGame';
import { Button } from '@/components/ui/button';

interface BundleProps {
    className?: string
    bundles: GameBundle[]
}

const BundleList: React.FC<BundleProps> = (props) => {
    return (
        <div>
            <span className='font-semibold'>Комплекти:</span>
            {props.bundles.map((bundle) => (
                <div key={bundle.name} className="flex flex-col space-x-2 bg-gray-100 text-gray-700 px-4 py-3 my-4 rounded-2xl font-semibold">
                    <div className='mb-2'>{bundle.name}</div>
                    <div className='flex flex-col bg-gray-200 rounded-2xl px-2'>
                        {bundle.description}
                        <span className='font-semibold text-gray-400 mt-2'>Вміст:</span>
                        <ul className='list-disc list-inside mb-2'>
                            {bundle.elements.map((element) => (
                                <li key={element}>{element}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex justify-end space-x-4 mt-2 items-center'>

                        {bundle.discount ? (
                            <div className="flex flex-col items-end">
                                <div>
                                    <span className='bg-gray-200 px-2 py-1 rounded-full text-xs mr-2'>-{bundle.discount}%</span>
                                    <span className="font-bold text-black mr-2">{bundle.price - bundle.price * bundle.discount / 100}₴</span>
                                    <span className="line-through text-gray-500">{bundle.price}₴</span>
                                </div>
                                <span className='text-gray-500 text-xs'>Знижка діє до 30.02.2023 10:00</span>
                            </div>
                        ) : (
                            <span className="font-bold text-black">{bundle.price}₴</span>
                        )}
                        <Button className='bg-[#333333] hover:bg-transparent text-white rounded-2xl'>У кошик</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BundleList;
