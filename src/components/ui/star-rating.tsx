import { StarFilledIcon, StarOutlineIcon } from "@/components/ui/icons";
import { useTranslation } from "react-i18next";
import { cn } from "@/shared/lib/utils";

// Five accent-coloured stars; `size` is the icon size in px (24 or 32 in the design).
const StarRating: React.FC<{ rate: number; size?: number; className?: string }> = ({ rate, size = 24, className }) => {
    const { t } = useTranslation();
    const filled = Math.round(Math.min(5, Math.max(0, rate)));
    return (
        <div className={cn("flex gap-2 text-accent", className)} aria-label={t('common.ratingOutOf5', { rate })}>
            {Array.from({ length: 5 }, (_, i) => {
                const Star = i < filled ? StarFilledIcon : StarOutlineIcon;
                return <span key={i} className="shrink-0 [&>svg]:size-full" style={{ width: size, height: size }}><Star /></span>;
            })}
        </div>
    );
};

export default StarRating;
