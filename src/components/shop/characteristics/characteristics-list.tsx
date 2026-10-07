import { SystemRequirement } from '@/shared/lib/interfaces';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface CharacteristicsListProps {
    className?: string;
    title: string;
    data?: SystemRequirement;
}

// One column of system requirements.
const CharacteristicsList: React.FC<CharacteristicsListProps> = ({ className, title, data }) => {
    const { t } = useTranslation();
    if (!data) return null;
    const rows = [
        [t('shop.characteristics.osVersion'), data.os],
        ['CPU', data.processor],
        [t('shop.characteristics.memory'), data.ram],
        ['GPU', data.video],
        [t('shop.characteristics.diskSpace'), data.freeDiskSpace],
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
