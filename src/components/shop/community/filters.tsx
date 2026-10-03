import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FiltersProps {
    className?: string;
    onSelectChange: (value: string) => void;
    onCommandChange: (value: string) => void;
    onSearchChange?: (value: string) => void;
}

export const sections = [
    { value: 'всі', label: 'Усі розділи' },
    { value: 'пости', label: 'Форум' },
    { value: 'скріншоти', label: 'Скріншоти' },
    { value: 'відео', label: 'Відео' },
    { value: 'гайди', label: 'Гайди' },
    { value: 'новини', label: 'Новини' },
];

// Sorting, search and section tabs ("Tabs lvl3") in the community sidebar.
const Filters: React.FC<FiltersProps> = ({ className, onSelectChange, onCommandChange, onSearchChange }) => {
    const [sort, setSort] = useState('popular');
    const [section, setSection] = useState('всі');
    const sectionLabel = sections.find((s) => s.value === section)!.label;

    return (
        <div className={"flex flex-col gap-4 p-5 bg-card2 rounded-[20px] font-artifakt text-typography" + (className ? ' ' + className : '')}>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2.5'>
                    <span className="text-block-2 tracking-[-0.01em] text-typographySecondary">Сортування:</span>
                    <Select value={sort} onValueChange={(value) => { setSort(value); onSelectChange(value); }}>
                        <SelectTrigger className="w-auto h-auto p-0 gap-0.5 !bg-transparent border-0 !text-typography !text-button-2 font-semibold" id="sort">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className='!bg-card2 !text-typography !font-artifakt'>
                            <SelectItem value="popular">Популярні</SelectItem>
                            <SelectItem value="recent">Нові</SelectItem>
                            <SelectItem value="old">Старі</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <input
                    type="search"
                    onChange={(e) => onSearchChange?.(e.target.value)}
                    placeholder={`Пошук: ${sectionLabel}`}
                    className='w-full px-4 py-2.5 rounded-[22px] border border-secondary bg-background40 text-sign-2 tracking-[-0.01em] placeholder:text-typographySecondary focus:outline-none focus:border-primary'
                />
            </div>
            <nav className='flex flex-col gap-2'>
                {sections.map(({ value, label }) => (
                    <button
                        type="button"
                        key={value}
                        onClick={() => { setSection(value); onCommandChange(value); }}
                        className={'w-full px-3 py-2 rounded-xl text-left font-bold text-subheading-1 ' + (section === value ? 'bg-cardLight25' : 'hover:bg-cardLight12')}
                    >
                        {label}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default Filters;
