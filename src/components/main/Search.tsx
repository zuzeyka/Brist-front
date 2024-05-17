import Input from '../ui/SearchInput';
import { HeartIcon, ShoppingCartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Search: React.FC = () => {
    return (
        <div className="flex justify-between items-center max-w-7xl mx-auto py-4 sticky top-0 z-10 space-x-4">
            <div className='flex border border-gray-300 rounded-full p-2 items-center justify-between w-11/12'>
                <Input className="flex-grow mr-4 rounded-full bg-[#333333] max-w-md" placeholder="Пошук" />
                <nav className="flex space-x-4">
                    <Link className="block" to="/catalog">
                        Каталог
                    </Link>
                    <Link className="block" to="/news">
                        Новини
                    </Link>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <div className='bg-gray-200 h-14 w-14 rounded-2xl flex justify-center items-center'>
                    <HeartIcon className="h-6 w-6" />
                </div>
                <div className='bg-gray-200 h-14 w-14 rounded-2xl flex justify-center items-center'>
                    <ShoppingCartIcon className="h-6 w-6" />
                </div>
            </div>
        </div>
    );
};

export default Search;
