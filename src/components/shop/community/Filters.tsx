import React, { useState } from 'react';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FiltersProps {
    className?: string;
    onSelectChange: (value: string) => void;
    onCommandChange: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ className, onSelectChange, onCommandChange }) => {
    const [, setSelectedSort] = useState<string>('popular');
    const [selectedCommand, setSelectedCommand] = useState<string>('всі');

    const handleSelectChange = (value: string) => {
        setSelectedSort(value);
        onSelectChange(value);
    };

    const handleCommandChange = (value: string) => {
        setSelectedCommand(value);
        onCommandChange(value);
    };

    return (
        <>
            <div className={"bg-card2 p-4 rounded-lg shadow max-w-sm font-artifakt" + (className ? ' ' + className : '')}>
                <div className="rounded-lg mb-4">
                    <div className='flex space-x-2 items-center'>
                        <div className="text-typographySecondary">Сортування:</div>
                        <Select onValueChange={handleSelectChange}>
                            <SelectTrigger className="w-full !bg-transparent border-0 !text-typography !text-button-2 !font-artifakt justify-start space-x-2 p-0" id="sort">
                                <SelectValue placeholder="Нові" />
                            </SelectTrigger>
                            <SelectContent className='!bg-card2 !text-typography !font-artifakt'>
                                <SelectItem value="recent">Нові</SelectItem>
                                <SelectItem value="old">Старі</SelectItem>
                                <SelectItem value="rated">За оцінкою</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Command className="h-full w-full max-h-full">
                    <CommandInput className='!text-typography !font-artifakt' placeholder="Пошук" />
                    <CommandList className="h-full w-full max-h-full bg-card2 text-typography">
                        <CommandEmpty>Нічого не знайдено</CommandEmpty>
                        {['всі', 'пости', 'скріншоти', 'відео', 'гайди', 'новини'].map(value => (
                            <CommandItem
                                key={value}
                                value={value}
                                onSelect={() => handleCommandChange(value)}
                                className={`hover:text-typographySecondary ${selectedCommand === value ? '!bg-cardLight25' : ''}`}
                            >
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </CommandItem>
                        ))}
                    </CommandList>
                </Command>
            </div>
        </>
    );
};

export default Filters;
