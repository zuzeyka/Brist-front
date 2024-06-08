import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface CardProps {
    gameName: string;
    gamePictureUrl: string;
    price: number;
    discount?: number;
}

interface CategoriesProps {
    lable: string;
    cards: CardProps[];
    vertical: boolean;
}

const SliderCategories: React.FC<CategoriesProps> = ({ cards, lable, vertical }) => {
    return (
        <div className="max-w-7xl mx-auto bg-background my-5">
            <div className="flex justify-between items-center p-2">
                <div className="text-heading-1 font-bold text-typography">{lable}</div>
                <Link className="flex items-center text-typography text-subheading-2" to="/below-100"><p>Дивитися більше</p><ChevronRight /></Link>
            </div>

            <Carousel className="w-full" opts={{
                align: "start",
                loop: true,
            }}>
                <CarouselContent className="-ml-1">
                    {cards.map((card) => (
                        <CarouselItem className={"pl-1 md:basis-1/2" + (vertical ? " lg:basis-1/4" : " lg:basis-1/3")} key={card.gamePictureUrl}>
                            <div className="p-1">
                                <Card className="bg-card1 text-typography rounded-2xl max-md:ml-0 max-md:w-full">
                                    <CardHeader className="p-0">
                                        <CardTitle><img className={"object-cover rounded-t-2xl w-full" + (vertical ? " h-72" : " h-40")} src={card.gamePictureUrl} alt="game image"></img></CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-4 font-bold text-heading-3">
                                        <p>{card.gameName}</p>
                                    </CardContent>
                                    <CardFooter>
                                        {card.discount ? (
                                            <div className="flex space-x-2">
                                                <Badge className="text-background bg-accent hover:bg-accentHover font-artifakt">-{card.discount}%</Badge>
                                                <p className="line-through text-sign-1 text-typographySecondary font-artifakt">{card.price}₴</p>
                                                <p className="text-sign-1 text-typography font-artifakt">{card.price - card.price * card.discount / 100}₴</p>
                                            </div>) : <p className="text-sign-1 font-artifakt text-typography">{card.price}</p>}
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext></CarouselNext>
                <CarouselPrevious></CarouselPrevious>
            </Carousel>
        </div>
    );
}

export default SliderCategories;
