import React from 'react';
import { Characteristics, CharacteristicsOS } from './Characteristics';


interface CharacteristicsListProps {
    className?: string;
    data: CharacteristicsOS;
}


const CharacteristicsList: React.FC<CharacteristicsListProps> = (props) => {
    return (
        <div className={"flex flex-col my-4" + (props.className ? ' ' + props.className : '')}>
            <div className='flex justify-between'>
                {props.data.characteristics.map((characteristic: Characteristics) => (
                    <div className='flex flex-col space-y-4 text-typography'>
                        {characteristic === props.data.characteristics[0] ? <span className='font-bold text-heading-2'>Мінімальні налаштування</span> : <span className='font-bold text-heading-2'>Рекомендовані налаштування</span>}
                        <div className='flex flex-col'>
                            <b>Версія системи:</b>
                            <span className='text-typographySecondary'>{characteristic.system}</span>
                        </div>
                        <div className='flex flex-col'>
                            <b>CPU:</b>
                            <span className='text-typographySecondary'>{characteristic.processor}</span>
                        </div>
                        <div className='flex flex-col'>
                            <b>Пам’ять:</b>
                            <span className='text-typographySecondary'>{characteristic.memory}</span>
                        </div>
                        <div className='flex flex-col'>
                            <b>GPU:</b>
                            <span className='text-typographySecondary'>{characteristic.graphics}</span>
                        </div>
                        <div className='flex flex-col'>
                            <b>Обсяг пам’яті:</b>
                            <span className='text-typographySecondary'>{characteristic.storage}</span>
                        </div>
                        {characteristic.directX && (
                            <div className='flex flex-col'>
                                <b>DirectX:</b>
                                <span className='text-typographySecondary'>{characteristic.directX}</span>
                            </div>
                        )}
                        {characteristic.sound && (
                            <div className='flex flex-col'>
                                <b>Звукова карта:</b>
                                <span className='text-typographySecondary'>{characteristic.sound}</span>
                            </div>
                        )}
                        {characteristic.other && (
                            <div className='flex flex-col'>
                                <b>Додаткові примітки:</b>
                                <span className='text-typographySecondary'>{characteristic.other}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div >
    );
};

export default CharacteristicsList;
