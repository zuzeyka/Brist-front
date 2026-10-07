import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRightIcon } from "@/components/ui/icons";
import GameCard, { CardProps } from "./game-card";

export type { CardProps };

interface CategoriesProps {
    lable: string;
    cards: CardProps[];
    vertical: boolean;
}

const SliderCategories: React.FC<CategoriesProps> = ({ cards, lable, vertical }) => {
    const { t } = useTranslation();
    return (
        <section className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h2 className="font-manrope font-bold text-heading-1 text-typography">{lable}</h2>
                <Link className="text-typography hover:text-primaryHover" to="/catalog" aria-label={t('common.viewMore')}>
                    <ChevronRightIcon />
                </Link>
            </div>

            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-6">
                    {cards.map((card) => (
                        <CarouselItem className={"pl-6 md:basis-1/2" + (vertical ? " lg:basis-1/4" : " lg:basis-1/3")} key={card.gameName}>
                            <GameCard {...card} vertical={vertical} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext />
                <CarouselPrevious />
            </Carousel>
        </section>
    );
}

export default SliderCategories;
