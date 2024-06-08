import { FilterIcon, LayoutGridIcon, ListIcon, MoreVerticalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Input from '@/components/ui/search-input';
import React from 'react';

interface SearchProps {
    className?: string
    onFilterChange: (isFilter: boolean) => void
    isFilter: boolean
}

const Search: React.FC<SearchProps> = (props) => {
    const handleFilterClick = (islist: boolean) => {
        if (islist) {
            props.onFilterChange(true);
        }
        else {
            props.onFilterChange(false);
        }
    };

    return (
        <div className={"py-4 sticky top-0 z-10 space-x-4" + (props.className ? ' ' + props.className : '')}>
            <div className='flex bg-secondary text-typography rounded-3xl p-2 justify-between'>
                <Input placeholder="Пошук у Бібліотеці" className='flex-grow mr-4 rounded-3xl bg-background40 max-w-md placeholder:text-sign-2 placeholder:text-typographySecondary placeholder:font-artifakt !focus:border-0 border-0' />
                <Button className="flex items-center space-x-2 bg-transparent hover:bg-cardLight12 font-artifakt">
                    <FilterIcon className="w-5 h-5" />
                    <span>Фільтри</span>
                </Button>
                <div className="flex space-x-2 items-center mr-4">
                    <span className="font-semibold text-typographySecondary font-artifakt">Вид:</span>
                    <Button className='bg-transparent hover:bg-transparent text-black p-1' onClick={() => handleFilterClick(true)}>
                        <ListIcon className="w-5 h-5 text-typography  hover:opacity-50" />
                    </Button>
                    <Button className='bg-transparent hover:bg-transparent text-black p-1' onClick={() => handleFilterClick(false)}>
                        <LayoutGridIcon className="w-5 h-5 text-typography hover:opacity-50" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Search;
