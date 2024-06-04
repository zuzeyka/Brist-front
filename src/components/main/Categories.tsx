import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { CardProps } from "./SliderCategories";

interface CategoriesProps {
    lable: string;
    cards: CardProps[];
}

const Categories: React.FC<CategoriesProps> = ({ cards, lable }) => {
    return (
        <div className="p-1 my-5">
            <div className="flex justify-between items-center p-2">
                <div className="text-md font-bold">{lable}</div>
                <Link className="flex items-center" to="/below-100"><p>Дивитися більше</p><ChevronRight /></Link>
            </div>
            <div className="flex flex-col items-center w-full space-y-4">
                {cards.slice(0, 3).map((card) => (
                    <Card className="bg-cyan-950 text-white rounded-2xl max-md:ml-0 max-md:w-full w-full">
                        <CardHeader className="p-0">
                            <CardTitle><img className="object-cover rounded-t-2xl w-full h-40" src={card.gamePictureUrl} alt="game image"></img></CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <p>{card.gameName}</p>
                        </CardContent>
                        <CardFooter>
                            {card.discount ? (
                                <div className="flex space-x-2">
                                    <Badge>{card.discount}%</Badge>
                                    <p className="line-through">{card.price}₴</p>
                                    <p>{card.price - card.price * card.discount / 100}₴</p>
                                </div>) : <p>{card.price}</p>}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Categories;
