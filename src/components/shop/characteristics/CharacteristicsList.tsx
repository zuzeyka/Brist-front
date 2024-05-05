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
                    <div className='flex flex-col space-y-4'>
                        {characteristic === props.data.characteristics[0] ? <span className='font-semibold'>Мінімальні налаштування</span> : <span className='font-semibold'>Рекомендовані налаштування</span>}
                        <div className='flex flex-col'>
                            <b>Версія системи:</b>
                            <span>{characteristic.system}</span>
                        </div>
                        <div className='flex flex-col'>
                            <b>CPU:</b>
                            <span>{characteristic.processor}</span>
                        </div>
                        <div className='flex flex-col'>
                            <b>Пам’ять:</b>
                            <span>{characteristic.memory}</span>
                        </div>
                        <div className='flex flex-col'>
                            <b>GPU:</b>
                            <span>{characteristic.graphics}</span>
                        </div>
                        <div className='flex flex-col'>
                            <b>Обсяг пам’яті:</b>
                            <span>{characteristic.storage}</span>
                        </div>
                        {characteristic.directX && (
                            <div className='flex flex-col'>
                                <b>DirectX:</b>
                                <span>{characteristic.directX}</span>
                            </div>
                        )}
                        {characteristic.sound && (
                            <div className='flex flex-col'>
                                <b>Звукова карта:</b>
                                <span>{characteristic.sound}</span>
                            </div>
                        )}
                        {characteristic.other && (
                            <div className='flex flex-col'>
                                <b>Додаткові примітки:</b>
                                <span>{characteristic.other}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div >
    );
};

export default CharacteristicsList;
