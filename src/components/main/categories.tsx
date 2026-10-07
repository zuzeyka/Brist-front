import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRightIcon } from "@/components/ui/icons";
import GameCard, { CardProps } from "./game-card";

interface CategoriesProps {
    lable: string;
    cards: CardProps[];
}

const Categories: React.FC<CategoriesProps> = ({ cards, lable }) => {
    const { t } = useTranslation();
    return (
        <section className="flex flex-col gap-6 min-w-0">
            <div className="flex justify-between items-center">
                <h2 className="font-manrope font-bold text-heading-2 text-typography">{lable}</h2>
                <Link className="text-typography hover:text-primaryHover" to="/catalog" aria-label={t('common.viewMore')}>
                    <ChevronRightIcon />
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                {cards.slice(0, 3).map((card) => (
                    <GameCard key={card.gameName} {...card} />
                ))}
            </div>
        </section>
    );
}

export default Categories;
