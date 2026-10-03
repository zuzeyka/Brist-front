import { Link } from "react-router-dom";
import { cn } from "@/shared/lib/utils";
import GamePrice from "./game-price";

export interface CardProps {
    gameName: string;
    gamePictureUrl: string;
    price: number;
    discount: number;
}

// "Game Card short" from the design: wide (240px image) or tall (400px image) variants.
const GameCard: React.FC<CardProps & { vertical?: boolean; className?: string }> = ({ gameName, gamePictureUrl, price, discount, vertical, className }) => (
    <Link
        to={`/store/${encodeURIComponent(gameName)}`}
        className={cn("flex flex-col bg-card1 rounded-2xl overflow-hidden text-typography transition hover:brightness-110", className)}
    >
        <img className={cn("w-full object-cover", vertical ? "h-[400px]" : "h-60")} src={gamePictureUrl} alt={gameName} loading="lazy" />
        <div className={cn("flex flex-col gap-3 px-5 pt-4 pb-5", vertical ? "min-h-[120px]" : "min-h-24")}>
            <p className="font-manrope font-bold text-heading-3">{gameName}</p>
            <GamePrice price={price} discount={discount} />
        </div>
    </Link>
);

export default GameCard;
