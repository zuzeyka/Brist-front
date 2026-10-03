import { HeartIcon, ShoppingCartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Catalog from '../popups/catalog';
import { useAuth } from '@/components/authorization/auth-context';
import { SearchIcon } from '@/components/ui/icons';
import { cn } from '@/shared/lib/utils';

const iconButton = 'bg-secondary hover:bg-secondaryHover p-3.5 rounded-[20px] text-typography';

// "Search Panel" from the design.
const Search: React.FC<{ className?: string }> = ({ className }) => {
    const { isAuthenticated } = useAuth();
    return (
        <div className={cn("w-full max-w-[1464px] mx-auto flex gap-2 py-4 z-20", className)}>
            <div className='flex flex-1 items-center justify-between rounded-[20px] bg-secondary py-1 pl-1 pr-[26px]'>
                <label className='flex items-center w-[590px] max-w-full gap-2 rounded-2xl border border-secondary bg-background40 px-4 py-2.5'>
                    <input
                        className="flex-1 min-w-0 bg-transparent font-artifakt text-sign-2 tracking-[-0.01em] text-typography placeholder:text-typographySecondary focus:outline-none"
                        placeholder="Пошук у Крамниці..."
                    />
                    <SearchIcon className="text-typography shrink-0" />
                </label>
                <nav className="flex items-center gap-[26px] font-artifakt font-bold text-sign-2 text-typography">
                    <Dialog>
                        <DialogTrigger className='hover:text-primaryHover'>Каталог</DialogTrigger>
                        <DialogContent className="w-auto">
                            <Catalog />
                        </DialogContent>
                    </Dialog>
                    <Link className="hover:text-primaryHover" to="/news">Новини</Link>
                </nav>
            </div>
            <Link to={isAuthenticated ? "/wishlist" : "/login"} className={iconButton} aria-label="Бажане">
                <HeartIcon className="h-6 w-6" />
            </Link>
            <Link to="/card" className={iconButton} aria-label="Кошик">
                <ShoppingCartIcon className="h-6 w-6" />
            </Link>
        </div>
    );
};

export default Search;
