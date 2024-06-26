import React, { useState } from 'react';
import Avatar from '@/components/ui/avatar/avatar';
import { ChevronDown, HeartIcon, MessageSquareIcon, StarIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Discussion, User } from '@/shared/lib/interfaces';

interface ReviewListProps {
    className?: string;
    userData: User[];
    reviewData: Discussion[];
}


const ReviewList: React.FC<ReviewListProps> = (props) => {
    const [showMore, setShowMore] = React.useState(false);
    const [selectedSort, setSelectedSort] = useState<string>('popular');
    const reviews = showMore ? props.userData : props.userData.slice(0, 4);

    if (selectedSort === 'rate') {
        props.reviewData.sort((a, b) => b.likesCount - a.likesCount);
    } else if (selectedSort === 'new') {
        props.reviewData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (selectedSort === 'old') {
        props.reviewData.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    } else if (selectedSort === 'positive') {
        props.reviewData.sort((a, b) => b.rate - a.rate);
    } else if (selectedSort === 'negative') {
        props.reviewData.sort((a, b) => a.rate - b.rate);
    }

    const getPostDate = (index: number) => {
        const date = new Date(props.reviewData[index].createdAt);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return <p className="text-sign-2 text-typography font-artifakt">{`${day}.${month}.${year}`}</p>;
    }

    return (
        <div className={"max-w-7xl mx-auto bg-background mb-8" + (props.className ? ' ' + props.className : '')}>
            <div className="flex flex-col space-y-4">
                <div className='flex items-center justify-between'>
                    <span className='text-heading-1 font-bold text-typography'>Рецензії</span>
                    <Button className='bg-primary hover:bg-primaryHover !text-background rounded-3xl text-button-1 font-artifakt'>Написати рецензію</Button>
                </div>
                <div className='flex items-center space-x-2'>
                    <span className='text-block-2 font-artifakt text-typographySecondary'>Сортування:</span>
                    <Select onValueChange={setSelectedSort}>
                        <SelectTrigger className="w-1/4 !bg-transparent border-0 !text-typography !text-button-2 !font-artifakt justify-start space-x-2" id="sort">
                            <SelectValue placeholder="За оцінкою" />
                        </SelectTrigger>
                        <SelectContent className='!bg-card2 !text-typography !font-artifakt'>
                            <SelectItem value="rate">За оцінкою</SelectItem>
                            <SelectItem value="new">Спочатку нові</SelectItem>
                            <SelectItem value="old">Спочатку старі</SelectItem>
                            <SelectItem value="positive">Спочатку позитивні</SelectItem>
                            <SelectItem value="negative">Спочатку негативні</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {reviews.map((item, index) => (
                        <div key={index} className='bg-card1 p-4 rounded-2xl'>
                            <div className="flex items-center">
                                <Avatar alt="User Avatar" src={item.image} className='w-10 h-10'></Avatar>
                                <div className="ml-3">
                                    <p className="text-typography text-subheading-1 font-artifakt font-bold">{item.name}</p>
                                    <div className="flex space-x-1">
                                        {[...Array(props.reviewData[index].rate)].map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                className={`text-accent w-4 h-4`}
                                                fill="currentColor"
                                            />
                                        ))}
                                        {[...Array(5 - props.reviewData[index].rate)].map((_, i) => (
                                            <StarIcon
                                                key={5 + i}
                                                className={`text-accent w-4 h-4`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-typography font-artifakt text-block-1">{props.reviewData[index].content}</p>
                            <div className="flex justify-between items-center mt-4 font-semibold">
                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center space-x-2 bg-cardLight12 p-2 rounded-md w-16 justify-center">
                                        <HeartIcon className="shrink-0 p-0.5 text-accent" />
                                        <p className="text-button-2 text-typographySecondary font-artifakt mr-1">{props.reviewData[index].likesCount >= 1000 ? props.reviewData[index].likesCount / 1000 + 'k' : props.reviewData[index].likesCount}</p>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-cardLight12 p-2 rounded-md w-16 justify-center">
                                        <MessageSquareIcon className="shrink-0 p-0.5" />
                                        <p className="text-button-2 text-typographySecondary font-artifakt mr-1">{Math.floor(Math.random() * 100)}</p>
                                    </div>
                                </div>
                                {getPostDate(index)}
                            </div>
                        </div>
                    ))}
                </div>
                {props.userData.length > 4 && (
                    <div className="flex justify-center mt-4">
                        <Button className="bg-transparent hover:bg-transparent text-black" onClick={() => setShowMore(true)}><ChevronDown className='text-typography' /></Button>
                    </div>
                )}

            </div>


        </div>
    );
};

export default ReviewList;

