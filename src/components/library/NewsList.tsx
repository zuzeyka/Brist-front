import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GameNews } from "@/shared/lib/interfaces";
import News from "./News";

interface NewsListProps {
    className?: string
    gameNews: GameNews[]
    gameName: string
}


const NewsList: React.FC<NewsListProps> = (props) => {
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
                    {props.gameNews.map((news) => (
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3" key={news.id}>
                            <News className="mx-2" postgameName={props.gameName} postTitle={news.title} postText={news.content} postDate={news.createdAt} postGameImageUrl="https://i.imgur.com/549oAR2.png" postMediaUrl={news.imageUrl} postLikes={0} postComments={0} ></News>
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
