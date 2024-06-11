import React from 'react';
import { DlcInfo } from './AboutGame';
import { ChevronRightIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface DlcProps {
    className?: string;
    dlc: DlcInfo[];
}

const DlcList: React.FC<DlcProps> = (props) => {
    const sumOfAllDLC = props.dlc.reduce((sum, dlc: DlcInfo) => sum + (dlc.price * (dlc.discount ? 1 - dlc.discount / 100 : 1)), 0);
    return (
        <div className={"max-w-7xl mx-auto bg-background mb-8" + (props.className ? ' ' + props.className : '')}>
            <div className='flex justify-between items-center'>
                <span className='text-heading-1 font-bold text-typography'>DLC</span>
                <div className='flex text-button-2 text-typography'>
                    <span className='font-semibold'>Усі DLC</span>
                    <ChevronRightIcon></ChevronRightIcon>
                </div>
            </div>
            {props.dlc.map((dlc) => (
                <div key={dlc.name} className='flex justify-between bg-card1 p-4 rounded-xl my-2 font-semibold'>
                    <span>{dlc.name}</span>
                    <div className='flex'>
                        {dlc.discount ? (
                            <div className='flex space-x-2'>
                                <Badge className="text-background bg-accent hover:bg-accentHover font-artifakt">-{dlc.discount}%</Badge>
                                <p className="line-through text-sign-1 text-typographySecondary font-artifakt">{dlc.price}₴</p>
                                <p className="text-sign-1 text-typography font-artifakt">{dlc.price - dlc.price * dlc.discount / 100}₴</p>
                            </div>
                        ) : (<p className="text-sign-1 font-artifakt text-typography">{dlc.price}</p>)}

                    </div>
                </div>
            ))}
            <div className='flex justify-end space-x-4 items-center mt-4'>
                <p className="text-sign-1 font-artifakt text-typography">{sumOfAllDLC}₴</p>
                <Button className='bg-primary hover:bg-primaryHover !text-background rounded-3xl text-button-1 font-artifakt'>У кошик</Button>
            </div>
        </div>
    );
};

export default DlcList;
