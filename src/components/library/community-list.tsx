import { ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface CommunityListProps {
    className?: string;
    comunityContent: JSX.Element[];
}

const CommunityList: React.FC<CommunityListProps> = (props) => {
    const { t } = useTranslation();
    return (
        <>
            <div className={"flex items-center justify-between" + (props.className ? ' ' + props.className : '')}>
                <h2 className="text-heading-2 font-bold px-2">{t('library.fromCommunity')}</h2>
                <Button asChild className="bg-transparent hover:bg-transparent text-button-1 font-artifakt p-0 px-2">
                    <Link to="/library/feed">{t('library.myFeed')}<ChevronRightIcon className="w-5 h-5" /></Link>
                </Button>
            </div>
            <Carousel className="w-full" opts={{
                align: "start",
                loop: true,
            }}>
                <CarouselContent className="-ml-1">
                    {props.comunityContent.map((posts) => (
                        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                            {posts}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className='-right-3 text-black'></CarouselNext>
                <CarouselPrevious className='-left-3 text-black'></CarouselPrevious>
            </Carousel>
        </>
    );
};

export default CommunityList;
