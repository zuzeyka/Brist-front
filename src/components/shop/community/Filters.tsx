import Input from '@/components/ui/SearchInput';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import React from 'react';

interface FiltersProps {
    className?: string;
}
const Filters: React.FC<FiltersProps> = (props) => {
    return (
        <>
            <div className={"bg-white p-4 rounded-lg shadow max-w-sm" + props.className}>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <Select>
                        <SelectTrigger className="w-full" id="sort">
                            <SelectValue placeholder="Сортування: Популярні" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="popular">Популярні</SelectItem>
                            <SelectItem value="recent">Недавні</SelectItem>
                            <SelectItem value="commented">Найбільш коментовані</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input className="mt-2" placeholder="Пошук: Новини" />
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

