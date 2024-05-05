import React from 'react';
import { DlcInfo } from './AboutGame';
import { ChevronRightIcon } from 'lucide-react';

interface DlcProps {
    className?: string;
    dlc: DlcInfo[];
}

const DlcList: React.FC<DlcProps> = (props) => {
    return (
        <div className={"max-w-7xl mx-auto bg-white mb-8" + (props.className ? ' ' + props.className : '')}>
            <div className='flex justify-between'>
                <span className='font-semibold'>DLC</span>
                <div className='flex'>
                    <span className='font-semibold'>Усі DLC</span>
                    <ChevronRightIcon></ChevronRightIcon>
                </div>
            </div>
            {props.dlc.map((dlc) => (
                <div key={dlc.name} className='flex justify-between bg-gray-100 p-4 rounded-xl my-2 font-semibold'>
                    <span>{dlc.name}</span>
                    <div className='flex'>
                        {dlc.discount ? (
                            <div>
                                <span className='bg-gray-200 px-2 py-1 rounded-full text-xs mr-2'>-{dlc.discount}%</span>
                                <span className="font-bold mr-2">{dlc.price - dlc.price * dlc.discount / 100}₴</span>
                                <span className='text-gray-500 ml-2 line-through'>{dlc.price}₴</span>
                            </div>
                        ) : (<span>{dlc.price}₴</span>)}

                    </div>
                </div>
            ))}
        </div>
    );
};

export default DlcList;
