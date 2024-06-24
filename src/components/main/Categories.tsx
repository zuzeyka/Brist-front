import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
                <div className="text-heading-2 font-bold text-typography font-bold">{lable}</div>
                <Link to="/below-100"><ChevronRight /></Link>
            </div>
            <div className="flex flex-col items-center w-full space-y-4">
                {cards.slice(0, 3).map((card) => (
                    <Link key={card.gamePictureUrl} to={`/store/${encodeURIComponent(card.gameName)}`}>
                        <Card className="bg-card1 text-typography rounded-2xl max-md:ml-0 max-md:w-full w-full">
                            <CardHeader className="p-0">
                                <CardTitle><img className="object-cover rounded-t-2xl w-full h-40" src={card.gamePictureUrl} alt="game image"></img></CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <p className="text-heading-3 font-bold text-typography">{card.gameName}</p>
                            </CardContent>
                            <CardFooter>
                                {card.discount ? (
                                    <div className="flex space-x-2">
                                        <Badge className="text-background bg-accent hover:bg-accentHover font-artifakt">{card.discount}%</Badge>
                                        <p className="line-through text-sign-1 text-typographySecondary font-artifakt">{card.price}₴</p>
                                        <p className="text-sign-1 text-typography font-artifakt">{Math.round(card.price - card.price * card.discount / 100)}₴</p>
                                    </div>) : <p className="text-sign-1 font-artifakt text-typography">{card.price}</p>}
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Categories;
