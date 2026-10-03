import { SystemRequirement } from '@/shared/lib/interfaces';
import React from 'react';

interface CharacteristicsListProps {
    className?: string;
    title: string;
    data?: SystemRequirement;
}

// One column of system requirements.
const CharacteristicsList: React.FC<CharacteristicsListProps> = ({ className, title, data }) => {
    if (!data) return null;
    const rows = [
        ['Версія системи', data.os],
        ['CPU', data.processor],
        ['Пам’ять', data.ram],
        ['GPU', data.video],
        ['Обсяг пам’яті', data.freeDiskSpace],
    ];
    return (
        <div className={"flex flex-col gap-5 text-typography" + (className ? ' ' + className : '')}>
            <h2 className='font-manrope font-bold text-heading-2'>{title}</h2>
            <dl className='flex flex-col gap-4 font-artifakt'>
                {rows.map(([label, value]) => (
                    <div key={label}>
                        <dt className='font-bold text-subheading-1'>{label}:</dt>
                        <dd className='text-block-1 tracking-[-0.01em]'>{value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};

export default CharacteristicsList;
