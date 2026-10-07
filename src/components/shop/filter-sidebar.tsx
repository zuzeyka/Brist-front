import { useState } from 'react';
import { ChevronDownIcon, XIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Categories, GameEvent } from '@/shared/lib/interfaces';

// `label` holds a translation key (not display text) — the array is a shared
// module-level constant used by category.tsx/wishlist.tsx for `.test()`/`.id`
// filtering, and resolved to display text only here via t() where it's rendered.
export const priceTiers = [
    { id: 'free', label: 'shop.filters.priceFree', test: (p: number) => p === 0 },
    { id: '100', label: 'shop.filters.priceUnder100', test: (p: number) => p <= 100 },
    { id: '300', label: 'shop.filters.priceUnder300', test: (p: number) => p <= 300 },
    { id: '600', label: 'shop.filters.priceUnder600', test: (p: number) => p <= 600 },
    { id: '900', label: 'shop.filters.priceUnder900', test: (p: number) => p <= 900 },
    { id: 'any', label: 'shop.filters.priceAny', test: () => true },
];

const FilterSection: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(!!children);
    return (
        <div className="border-t border-cardLight12 pt-4 first:border-0 first:pt-0">
            <button type="button" onClick={() => setOpen(!open)} className="flex items-center justify-between w-full font-artifakt font-bold text-subheading-1 text-typography">
                {title}<ChevronDownIcon className={'size-5 transition' + (open ? ' rotate-180' : '')} />
            </button>
            {open && <div className="mt-3">{children ?? <p className="font-artifakt text-sign-2 text-typographySecondary">{t('shop.filters.none')}</p>}</div>}
        </div>
    );
};

// Genre/Platform/Type/Feature are all the same Categories + join-table shape,
// distinguished only by `kind` — one checkbox-list renderer covers all four.
const TagCheckboxList: React.FC<{ items: { id: string; name: string }[]; selected: string[]; onToggle: (id: string) => void }> = ({ items, selected, onToggle }) => (
    items.length > 0 ? (
        <div className="flex flex-col gap-2">
            {items.map((item) => (
                <label key={item.id} className="flex items-center gap-2.5 font-artifakt text-sign-2 text-typographySecondary cursor-pointer">
                    <input
                        type="checkbox"
                        checked={selected.includes(item.id)}
                        onChange={() => onToggle(item.id)}
                        className="accent-primary size-4"
                    />
                    {item.name}
                </label>
            ))}
        </div>
    ) : null
);

interface FilterSidebarProps {
    genres: Categories[];
    selectedGenres: string[];
    onGenreToggle: (id: string) => void;
    events: GameEvent[];
    selectedEvents: string[];
    onEventToggle: (id: string) => void;
    tagSearch: string;
    onTagSearchChange: (value: string) => void;
    priceTier: string;
    onPriceTierChange: (id: string) => void;
    discountOnly: boolean;
    onDiscountOnlyChange: (value: boolean) => void;
    onReset: () => void;
}

// "Фільтри" sidebar from the Category/Wishlist frames.
const FilterSidebar: React.FC<FilterSidebarProps> = (props) => {
    const { t } = useTranslation();
    const search = props.tagSearch.trim().toLowerCase();
    const byKind = (kind: string) => props.genres
        .filter((g) => (g.kind ?? 'genre') === kind)
        .filter((g) => g.name.toLowerCase().includes(search));
    const visibleEvents = props.events.filter((e) => e.name.toLowerCase().includes(search));

    return (
        <aside className="w-[280px] shrink-0 flex flex-col gap-4 bg-card2 rounded-[20px] p-5">
            <div className="flex items-center justify-between">
                <h2 className="font-manrope font-bold text-heading-3">{t('shop.filters.title')}</h2>
                <button type="button" onClick={props.onReset} className="font-artifakt font-semibold text-button-2 text-primary hover:text-primaryHover">{t('shop.filters.reset')}</button>
            </div>
            <div className="relative">
                <input
                    value={props.tagSearch}
                    onChange={(e) => props.onTagSearchChange(e.target.value)}
                    placeholder={t('shop.filters.searchTags')}
                    className="w-full pl-4 pr-9 py-2.5 rounded-[22px] border border-secondary bg-background40 text-sign-2 placeholder:text-typographySecondary focus:outline-none focus:border-primary"
                />
                {props.tagSearch && <button type="button" aria-label={t('shop.filters.clear')} onClick={() => props.onTagSearchChange('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-typographySecondary hover:text-typography"><XIcon className="size-4" /></button>}
            </div>
            <FilterSection title={t('shop.filters.genre')}>
                <TagCheckboxList items={byKind('genre')} selected={props.selectedGenres} onToggle={props.onGenreToggle} />
            </FilterSection>
            <FilterSection title={t('shop.filters.price')}>
                <div className="flex flex-col gap-2.5">
                    {priceTiers.map((tier) => (
                        <label key={tier.id} className="flex items-center gap-2.5 font-artifakt text-sign-2 cursor-pointer">
                            <input type="radio" name="price" checked={props.priceTier === tier.id} onChange={() => props.onPriceTierChange(tier.id)} className="accent-primary size-4" />
                            {t(tier.label)}
                        </label>
                    ))}
                    <label className="flex items-center gap-2.5 font-artifakt text-sign-2 cursor-pointer pt-2 border-t border-cardLight12 mt-1">
                        <input type="checkbox" checked={props.discountOnly} onChange={(e) => props.onDiscountOnlyChange(e.target.checked)} className="accent-primary size-4" />
                        {t('shop.filters.discounts')}
                    </label>
                </div>
            </FilterSection>
            <FilterSection title={t('shop.filters.type')}>
                <TagCheckboxList items={byKind('type')} selected={props.selectedGenres} onToggle={props.onGenreToggle} />
            </FilterSection>
            <FilterSection title={t('shop.filters.features')}>
                <TagCheckboxList items={byKind('feature')} selected={props.selectedGenres} onToggle={props.onGenreToggle} />
            </FilterSection>
            <FilterSection title={t('shop.filters.platform')}>
                <TagCheckboxList items={byKind('platform')} selected={props.selectedGenres} onToggle={props.onGenreToggle} />
            </FilterSection>
            <FilterSection title={t('shop.filters.events')}>
                <TagCheckboxList items={visibleEvents} selected={props.selectedEvents} onToggle={props.onEventToggle} />
            </FilterSection>
        </aside>
    );
};

export default FilterSidebar;
