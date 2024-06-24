import { SystemRequirement } from '@/shared/lib/interfaces';
import React from 'react';


interface CharacteristicsListProps {
    className?: string;
    data: SystemRequirement[];
}


const CharacteristicsList: React.FC<CharacteristicsListProps> = (props) => {
    return (
        <div className={"flex flex-col my-4" + (props.className ? ' ' + props.className : '')}>
            <div className='flex justify-between'>
                {props.data.map((characteristic: SystemRequirement) => (
                    <div key={characteristic.id} className='flex flex-col space-y-4 text-typography'>
                        {characteristic === props.data[0] ? <span className='font-bold text-heading-2'>Рекомендовані налаштування</span> : <span className='font-bold text-heading-2'>Мінімальні налаштування</span>}
                        <div className='flex flex-col'>
                            <b>Версія системи:</b>
                            <span className='text-typographySecondary'>{characteristic.os}</span>
                        </div>
                        <div className='flex flex-col'>
                            <b>CPU:</b>
                            <span className='text-typographySecondary'>{characteristic.processor}</span>
                        </div>
                        <div className='flex flex-col'>
                            <b>Пам’ять:</b>
                            <span className='text-typographySecondary'>{characteristic.ram}</span>
                        </div>
                        <div className='flex flex-col'>
                            <b>GPU:</b>
                            <span className='text-typographySecondary'>{characteristic.video}</span>
                        </div>
                        <div className='flex flex-col'>
                            <b>Обсяг пам’яті:</b>
                            <span className='text-typographySecondary'>{characteristic.freeDiskSpace}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default CharacteristicsList;
