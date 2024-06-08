import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import Input from '@/components/ui/search-input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';

interface FiltersProps {
    className?: string;
}
const Filters: React.FC<FiltersProps> = (props) => {
    return (
        <>
            <div className={"bg-card2 p-4 rounded-lg shadow max-w-sm font-artifakt" + (props.className ? ' ' + props.className : '')}>
                <div className="rounded-lg mb-4">
                    <div className='flex space-x-2 items-center'>
                        <div className="text-typographySecondary">Сортування:</div>
                        <Select>
                            <SelectTrigger className="w-full !bg-transparent border-0 !text-typography !text-button-2 !font-artifakt justify-start space-x-2 p-0" id="sort">
                                <SelectValue placeholder="Спочатку популярні" />
                            </SelectTrigger>
                            <SelectContent className='!bg-card2 !text-typography !font-artifakt'>
                                <SelectItem value="popular">Спочатку популярні</SelectItem>
                                <SelectItem value="recent">Спочатку нові</SelectItem>
                                <SelectItem value="rated">За оцінкою</SelectItem>
                                <SelectItem value="commented">За кількістю коментарів</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Command className="h-full w-full max-h-full">
                    <CommandInput className='!text-typography !font-artifakt' placeholder="Пошук чатів" />
                    <CommandList className="h-full w-full max-h-full bg-card2 text-typography">
                        <CommandEmpty>Нічого не знайдено</CommandEmpty>
                        <CommandItem className='hover:bg-cardLight12 hover:text-typographySecondary'>Усі розділи</CommandItem>
                        <CommandItem className='hover:bg-cardLight12 hover:text-typographySecondary'>Форум</CommandItem>
                        <CommandItem className='hover:bg-cardLight12 hover:text-typographySecondary'>Скріншоти</CommandItem>
                        <CommandItem className='hover:bg-cardLight12 hover:text-typographySecondary'>Відео</CommandItem>
                        <CommandItem className='hover:bg-cardLight12 hover:text-typographySecondary'>Творчі роботи</CommandItem>
                        <CommandItem className='hover:bg-cardLight12 hover:text-typographySecondary'>Гайди</CommandItem>
                        <CommandItem className='hover:bg-cardLight12 hover:text-typographySecondary'>Новини</CommandItem>
                    </CommandList>
                </Command>
            </div>
        </>
    );
};

export default Filters;

