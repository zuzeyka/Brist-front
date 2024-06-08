import Input from '@/components/ui/search-input';
import { HeartIcon, ShoppingCartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Search: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={"flex justify-between items-center max-w-7xl mx-auto py-4 sticky top-0 z-20 space-x-4" + (className ? ' ' + className : '')}>
            <div className='flex rounded-3xl p-2 bg-secondary items-center justify-between w-11/12'>
                <Input className="flex-grow mr-4 bg-background40 max-w-md placeholder:text-typographySecondary placeholder:font-artifakt border-0" placeholder="Пошук" />
                <nav className="flex space-x-4 mr-4">
                    <Link className="block text-typography font-bold font-artifakt" to="/catalog">
                        Каталог
                    </Link>
                    <Link className="block text-typography font-bold font-artifakt" to="/news">
                        Новини
                    </Link>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <div className='bg-secondary h-14 w-14 rounded-2xl flex justify-center items-center'>
                    <HeartIcon className="h-6 w-6 text-typography" />
                </div>
                <div className='bg-secondary h-14 w-14 rounded-2xl flex justify-center items-center'>
                    <ShoppingCartIcon className="h-6 w-6 text-typography" />
                </div>
            </div>
        </div>
    );
};

export default Search;
