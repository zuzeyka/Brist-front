import { cn } from "@/shared/lib/utils";

// Price row from the "Game Card short" component: discount label, final price,
// then the original price struck through.

export const formatPrice = (price: number) =>
    price === 0 ? 'Безкоштовно' : `${price.toLocaleString('uk-UA').replace(/\s/g, ' ')}₴`;

export const discountedPrice = (price: number, discount: number) =>
    Math.floor(price - price * discount / 100);

interface GamePriceProps {
    price: number;
    discount: number;
    size?: 'md' | 'lg';
    // Bold final price, as on the game page's bundle and DLC cards.
    bold?: boolean;
    className?: string;
}

const GamePrice: React.FC<GamePriceProps> = ({ price, discount, size = 'md', bold, className }) => {
    const large = size === 'lg';
    return (
        <div className={cn("flex items-center", large ? "gap-4" : "gap-3", className)}>
            {discount > 0 && (
                <span className={cn(
                    "bg-accent text-background font-artifakt font-bold rounded-[20px] tracking-[-0.01em]",
                    large ? "px-3 py-1 text-sign-2" : "px-2 py-1 text-sign-3",
                )}>
                    -{discount}%
                </span>
            )}
            <div className={cn("flex items-center gap-2 whitespace-nowrap", large ? "text-big-sign" : "text-sign-1 font-artifakt tracking-[-0.01em]")}>
                <span className={cn("text-typography", large && "font-manrope font-bold", bold && "font-bold tracking-normal")}>
                    {formatPrice(discount > 0 ? discountedPrice(price, discount) : price)}
                </span>
                {discount > 0 && (
                    <span className={cn("line-through text-typographySecondary", large && "font-artifakt tracking-[-0.01em]")}>
                        {formatPrice(price)}
                    </span>
                )}
            </div>
        </div>
    );
};

export default GamePrice;
