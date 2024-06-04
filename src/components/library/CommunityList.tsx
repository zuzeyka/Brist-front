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
                <h2 className="text-xl font-bold">Цікаве від Спільноти</h2>
                <Button className="bg-transparent hover:bg-transparent text-black">Моя стрічка<ChevronRightIcon className="w-5 h-5" /></Button>
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
                <CarouselNext className='right-0 text-black'></CarouselNext>
                <CarouselPrevious className='left-0 text-black'></CarouselPrevious>
            </Carousel>
        </>
    );
};

export default CommunityList;
