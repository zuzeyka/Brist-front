import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GameInShop, GameNews } from "@/shared/lib/interfaces";
import News from "../shop/community/news";
import { formatDate } from "../shop/about/review-list";

interface NewsListProps {
    className?: string
    gameNews: GameNews[]
    games: GameInShop[]
}

// Library home's "Новини" row: a game-branded preview carousel (date in the footer, no share button).
const NewsList: React.FC<NewsListProps> = (props) => {
    return (
        <>
            <div className={"flex items-center justify-between" + (props.className ? ' ' + props.className : '')}>
                <h2 className="text-heading-2 font-bold px-2">Новини</h2>
                <Button asChild className="bg-transparent hover:bg-transparent text-button-1 font-artifakt p-0 px-2">
                    <Link to="/news">Всі новини<ChevronRightIcon className="w-5 h-5" /></Link>
                </Button>
            </div>
            <Carousel className="w-full" opts={{
                align: "start",
                loop: true,
            }}>
                <CarouselContent className="-ml-1">
                    {props.gameNews.map((news) => {
                        const game = props.games.find((g) => g.id === news.gameId);
                        return (
                            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3" key={news.id}>
                                <News
                                    className="mx-2"
                                    postTitle={news.title}
                                    postText={news.content}
                                    postDate={formatDate(news.createdAt)}
                                    postMediaUrl={news.contentUrl}
                                    postAuthor=""
                                    gameName={game?.name ?? ''}
                                    gameIconUrl={game?.previeImage}
                                    postLikes={news.likesCount}
                                    postComments={news.commentsCount ?? 0}
                                    isShared={false}
                                />
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselNext className='-right-3 text-black'></CarouselNext>
                <CarouselPrevious className='-left-3 text-black'></CarouselPrevious>
            </Carousel>
        </>
    );
};

export default NewsList;
