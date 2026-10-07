import { useState } from 'react';
import { HeartIcon, ShoppingCartIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Catalog from '../popups/catalog';
import { useAuth } from '@/components/authorization/auth-context';
import { useCart } from '@/components/shop/cart/card-context';
import { SearchIcon } from '@/components/ui/icons';
import { cn } from '@/shared/lib/utils';

const iconButton = 'bg-secondary hover:bg-secondaryHover p-3.5 rounded-[20px] text-typography';

// "Search Panel" from the design.
const Search: React.FC<{ className?: string }> = ({ className }) => {
    const { t } = useTranslation();
    const { isAuthenticated } = useAuth();
    const { cart } = useCart();
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const submitSearch = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/catalog?q=${encodeURIComponent(query)}`);
    };

    return (
        <div className={cn("w-full max-w-[1464px] mx-auto flex gap-2 py-4 z-20", className)}>
            <div className='flex flex-1 items-center justify-between rounded-[20px] bg-secondary py-1 pl-1 pr-[26px]'>
                <form onSubmit={submitSearch} className='flex items-center w-[590px] max-w-full gap-2 rounded-2xl border border-secondary bg-background40 px-4 py-2.5'>
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 min-w-0 bg-transparent font-artifakt text-sign-2 tracking-[-0.01em] text-typography placeholder:text-typographySecondary focus:outline-none"
                        placeholder={t('search.placeholder')}
                    />
                    <button type="submit" aria-label={t('search.searchLabel')}><SearchIcon className="text-typography shrink-0" /></button>
                </form>
                <nav className="flex items-center gap-[26px] font-artifakt font-bold text-sign-2 text-typography">
                    <Dialog>
                        <DialogTrigger className='hover:text-primaryHover'>{t('search.catalog')}</DialogTrigger>
                        <DialogContent className="w-auto">
                            <Catalog />
                        </DialogContent>
                    </Dialog>
                    <Link className="hover:text-primaryHover" to="/news">{t('search.news')}</Link>
                </nav>
            </div>
            <Link to={isAuthenticated ? "/wishlist" : "/login"} className={iconButton} aria-label={t('search.wishlist')}>
                <HeartIcon className="h-6 w-6" />
            </Link>
            <Link to="/card" className={cn(iconButton, 'relative')} aria-label={t('search.cart')}>
                <ShoppingCartIcon className="h-6 w-6" />
                {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-accent text-background text-xs font-bold">
                        {cart.length}
                    </span>
                )}
            </Link>
        </div>
    );
};

export default Search;
