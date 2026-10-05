import { useState } from 'react';
import { ChevronDownIcon, XIcon } from 'lucide-react';
import { Categories } from '@/shared/lib/interfaces';

export const priceTiers = [
    { id: 'free', label: 'Безкоштовно', test: (p: number) => p === 0 },
    { id: '100', label: 'До 100 гривень', test: (p: number) => p <= 100 },
    { id: '300', label: 'До 300 гривень', test: (p: number) => p <= 300 },
    { id: '600', label: 'До 600 гривень', test: (p: number) => p <= 600 },
    { id: '900', label: 'До 900 гривень', test: (p: number) => p <= 900 },
    { id: 'any', label: 'Без обмежень', test: () => true },
];

// Placeholder sections — no backend data for type/features/platform/events yet (see WORKLOG).
const emptySections = ['Тип', 'Особливості', 'Платформа', 'Івенти'];

const FilterSection: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => {
    const [open, setOpen] = useState(!!children);
    return (
        <div className="border-t border-cardLight12 pt-4 first:border-0 first:pt-0">
            <button type="button" onClick={() => setOpen(!open)} className="flex items-center justify-between w-full font-artifakt font-bold text-subheading-1 text-typography">
                {title}<ChevronDownIcon className={'size-5 transition' + (open ? ' rotate-180' : '')} />
            </button>
            {open && <div className="mt-3">{children ?? <p className="font-artifakt text-sign-2 text-typographySecondary">Немає доступних фільтрів</p>}</div>}
        </div>
    );
};

interface FilterSidebarProps {
    genres: Categories[];
    selectedGenres: string[];
    onGenreToggle: (id: string) => void;
    tagSearch: string;
    onTagSearchChange: (value: string) => void;
    priceTier: string;
    onPriceTierChange: (id: string) => void;
    discountOnly: boolean;
    onDiscountOnlyChange: (value: boolean) => void;
    onReset: () => void;
}

// "Фільтри" sidebar from the Category/Wishlist frames — price, discount and genre
// actually filter; type/features/platform/events are presentational (see WORKLOG known gaps).
const FilterSidebar: React.FC<FilterSidebarProps> = (props) => {
    const visibleGenres = props.genres.filter((g) => g.name.toLowerCase().includes(props.tagSearch.trim().toLowerCase()));
    return (
        <aside className="w-[280px] shrink-0 flex flex-col gap-4 bg-card2 rounded-[20px] p-5">
            <div className="flex items-center justify-between">
                <h2 className="font-manrope font-bold text-heading-3">Фільтри</h2>
                <button type="button" onClick={props.onReset} className="font-artifakt font-semibold text-button-2 text-primary hover:text-primaryHover">Скинути</button>
            </div>
            <div className="relative">
                <input
                    value={props.tagSearch}
                    onChange={(e) => props.onTagSearchChange(e.target.value)}
                    placeholder="Пошук тегів..."
                    className="w-full pl-4 pr-9 py-2.5 rounded-[22px] border border-secondary bg-background40 text-sign-2 placeholder:text-typographySecondary focus:outline-none focus:border-primary"
                />
                {props.tagSearch && <button type="button" aria-label="Очистити" onClick={() => props.onTagSearchChange('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-typographySecondary hover:text-typography"><XIcon className="size-4" /></button>}
            </div>
            <FilterSection title="Жанр">
                {visibleGenres.length > 0 && (
                    <div className="flex flex-col gap-2">
                        {visibleGenres.map((g) => (
                            <label key={g.id} className="flex items-center gap-2.5 font-artifakt text-sign-2 text-typographySecondary cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={props.selectedGenres.includes(g.id)}
                                    onChange={() => props.onGenreToggle(g.id)}
                                    className="accent-primary size-4"
                                />
                                {g.name}
                            </label>
                        ))}
                    </div>
                )}
            </FilterSection>
            <FilterSection title="Ціна">
                <div className="flex flex-col gap-2.5">
                    {priceTiers.map((t) => (
                        <label key={t.id} className="flex items-center gap-2.5 font-artifakt text-sign-2 cursor-pointer">
                            <input type="radio" name="price" checked={props.priceTier === t.id} onChange={() => props.onPriceTierChange(t.id)} className="accent-primary size-4" />
                            {t.label}
                        </label>
                    ))}
                    <label className="flex items-center gap-2.5 font-artifakt text-sign-2 cursor-pointer pt-2 border-t border-cardLight12 mt-1">
                        <input type="checkbox" checked={props.discountOnly} onChange={(e) => props.onDiscountOnlyChange(e.target.checked)} className="accent-primary size-4" />
                        Знижки
                    </label>
                </div>
            </FilterSection>
            {emptySections.map((title) => <FilterSection key={title} title={title} />)}
        </aside>
    );
};

export default FilterSidebar;
