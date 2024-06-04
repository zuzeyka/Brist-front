import Input from '@/components/ui/search-input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';

interface FiltersProps {
    className?: string;
}
const Filters: React.FC<FiltersProps> = (props) => {
    return (
        <>
            <div className={"bg-gray-200 p-4 rounded-lg shadow max-w-sm" + (props.className ? ' ' + props.className : '')}>
                <div className="rounded-lg mb-4">
                    <div className='flex space-x-2 items-center'>
                        <div className="text-gray-500">Сортування:</div>
                        <Select>
                            <SelectTrigger className="w-full" id="sort">
                                <SelectValue placeholder="Популярні" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="popular">Популярні</SelectItem>
                                <SelectItem value="recent">Недавні</SelectItem>
                                <SelectItem value="commented">Найбільш коментовані</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Input className="mt-2 bg-[#333333] text-black" placeholder="Пошук: Новини" />
                </div>
                <div>
                    <h3 className="font-bold mb-2">Усі розділи</h3>
                    <ul className="space-y-1">
                        <li>Форум</li>
                        <li>Скріншоти</li>
                        <li>Відео</li>
                        <li>Творчі роботи</li>
                        <li>Гайди</li>
                        <li>Новини</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Filters;

