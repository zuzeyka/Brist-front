import Input from '@/components/ui/search-input';
import { HeartIcon, ShoppingCartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Catalog from '../popups/Catalog';
import { useAuth } from '@/components/authorization/auth-context';

const Search: React.FC<{ className?: string }> = ({ className }) => {
    const { isAuthenticated } = useAuth();
    return (
        <div className={"flex justify-between items-center max-w-7xl mx-auto py-4 sticky top-0 z-20 space-x-4" + (className ? ' ' + className : '')}>
            <div className='flex rounded-3xl p-2 bg-secondary items-center justify-between w-11/12'>
                <Input className="flex-grow mr-4 bg-background40 max-w-md placeholder:text-typographySecondary placeholder:font-artifakt border-0" placeholder="Пошук" />
                <nav className="flex space-x-4 justify-center items-center mr-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className='block bg-transparent hover:bg-transparent border-0 p-0 text-typography font-bold font-artifakt' variant="outline">Каталог</Button>
                        </DialogTrigger>
                        <DialogContent className="w-auto">
                            <Catalog />
                        </DialogContent>
                    </Dialog>
                    <Link className="text-typography font-bold" to="/news">
                        Новини
                    </Link>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <Link to={isAuthenticated ? "/wishlist" : "/login"} className='bg-secondary h-14 w-14 rounded-2xl flex justify-center items-center'>
                    <HeartIcon className="h-6 w-6 text-typography" />
                </Link>
                <Link to="/card" className='bg-secondary h-14 w-14 rounded-2xl flex justify-center items-center'>
                    <ShoppingCartIcon className="h-6 w-6 text-typography" />
                </Link>
            </div>
        </div>
    );
};

export default Search;
