import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GameInShop, GameNews } from "@/shared/lib/interfaces";
import News from "./news";

interface NewsListProps {
    className?: string
    gameNews: GameNews[]
    gameInfo: GameInShop[]
}


const NewsList: React.FC<NewsListProps> = (props) => {
    const getPostDate = (data: Date) => {
        const date = new Date(data);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }
    return (
        <>
            <div className={"flex items-center justify-between" + (props.className ? ' ' + props.className : '')}>
                <h2 className="text-heading-2 font-bold px-2">Новини</h2>
                <Button className="bg-transparent hover:bg-transparent text-button-1 font-artifakt p-0 px-2">Всі новини<ChevronRightIcon className="w-5 h-5" /></Button>
            </div>
            <Carousel className="w-full" opts={{
                align: "start",
                loop: true,
            }}>
                <CarouselContent className="-ml-1">
                    {props.gameNews.map((news, index) => (
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3" key={news.id}>
                            <News className="mx-2" postgameName={props.gameInfo[index].name} postTitle={news.title} postText={news.content} postDate={getPostDate(news.createdAt)} postGameImageUrl={props.gameInfo[index].previeImage} postMediaUrl={news.contentUrl} postLikes={news.likesCount} postComments={news.likesCount} ></News>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className='-right-3 text-black'></CarouselNext>
                <CarouselPrevious className='-left-3 text-black'></CarouselPrevious>
            </Carousel>
        </>
    );
};

export default NewsList;
