import { FilterIcon, LayoutGridIcon, ListIcon, MoreVerticalIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import Input from '../ui/SearchInput';

const Search: React.FC = () => {
    return (
        <div className="flex justify-between items-center mb-6">
            <Input placeholder="Пошук у Бібліотеці" />
            <Button className="flex items-center space-x-2">
                <FilterIcon className="w-5 h-5" />
                <span>Фільтри</span>
            </Button>
            <div className="flex space-x-2">
                <Button variant="ghost">
                    <ListIcon className="w-5 h-5" />
                </Button>
                <Button variant="ghost">
                    <LayoutGridIcon className="w-5 h-5" />
                </Button>
                <Button variant="ghost">
                    <MoreVerticalIcon className="w-5 h-5" />
                </Button>
            </div>
        </div>
    );
};

export default Search;
