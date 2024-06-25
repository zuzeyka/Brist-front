import { ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface CommunityListProps {
    className?: string;
    comunityContent: JSX.Element[];
}

const CommunityList: React.FC<CommunityListProps> = (props) => {
    return (
        <>
            <div className={"flex items-center justify-between" + (props.className ? ' ' + props.className : '')}>
                <h2 className="text-heading-2 font-bold px-2">Цікаве від Спільноти</h2>
                <Button className="bg-transparent hover:bg-transparent text-button-1 font-artifakt p-0 px-2">Моя стрічка<ChevronRightIcon className="w-5 h-5" /></Button>
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
