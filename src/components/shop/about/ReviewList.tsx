import React from 'react';
import Avatar from '@/components/ui/avatar/Avatar';
import { ChevronDown, HeartIcon, MessageSquareIcon, StarIcon } from 'lucide-react';
import { ReviewInfo } from './AboutGame';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface ReviewListProps {
    className?: string;
    data: ReviewInfo[];
}

const ReviewList: React.FC<ReviewListProps> = (props) => {
    const [showMore, setShowMore] = React.useState(false);

    const reviews = showMore ? props.data : props.data.slice(0, 4);

    return (
        <div className={"max-w-7xl mx-auto bg-background mb-8" + (props.className ? ' ' + props.className : '')}>
            <div className="flex flex-col space-y-4">
                <div className='flex items-center justify-between'>
                    <span className='text-heading-1 font-bold text-typography'>Рецензії</span>
                    <Button className='bg-primary hover:bg-primaryHover !text-background rounded-3xl text-button-1 font-artifakt'>Написати рецензію</Button>
                </div>
                <div className='flex items-center space-x-2'>
                    <span className='text-block-2 font-artifakt text-typographySecondary'>Сортування:</span>
                    <Select>
                        <SelectTrigger className="w-1/4 !bg-transparent border-0 !text-typography !text-button-2 !font-artifakt justify-start space-x-2" id="sort">
                            <SelectValue placeholder="Спочатку популярні" />
                        </SelectTrigger>
                        <SelectContent className='!bg-card2 !text-typography !font-artifakt'>
                            <SelectItem value="popular">Спочатку популярні</SelectItem>
                            <SelectItem value="rate">За оцінкою</SelectItem>
                            <SelectItem value="commented">За кількістю коментарів</SelectItem>
                            <SelectItem value="new">Спочатку нові</SelectItem>
                            <SelectItem value="positive">Спочатку позитивні</SelectItem>
                            <SelectItem value="negative">Спочатку негативні</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {reviews.map((item, index) => (
                        <div key={index} className='bg-card1 p-4 rounded-2xl'>
                            <div className="flex items-center">
                                <Avatar alt="User Avatar" src={item.avatarUrl} className='w-10 h-10'></Avatar>
                                <div className="ml-3">
                                    <p className="text-typography text-subheading-1 font-artifakt font-bold">{item.userName}</p>
                                    <div className="flex space-x-1">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                className={`text-accent w-4 h-4`}
                                                fill="currentColor"
                                            />
                                        ))}
                                        {[...Array(5 - item.rating)].map((_, i) => (
                                            <StarIcon
                                                key={5 + i}
                                                className={`text-accent w-4 h-4`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-typography font-artifakt text-block-1">{item.reviewText}</p>
                            <div className="flex justify-between items-center mt-4 font-semibold">
                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center space-x-2 bg-cardLight12 p-2 rounded-md w-16 justify-center">
                                        <HeartIcon className="w-4 h-4 text-accent" />
                                        <p className="text-button-2 text-typographySecondary font-artifakt mr-1">{item.likes}</p>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-cardLight12 p-2 rounded-md w-16 justify-center">
                                        <MessageSquareIcon className="w-4 h-4" />
                                        <p className="text-button-2 text-typographySecondary font-artifakt mr-1">{item.comments}</p>
                                    </div>
                                </div>
                                <p className="text-sign-2 text-typography font-artifakt">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {props.data.length > 4 && (
                    <div className="flex justify-center mt-4">
                        <Button className="bg-transparent hover:bg-transparent text-black" onClick={() => setShowMore(true)}><ChevronDown className='text-typography' /></Button>
                    </div>
                )}

            </div>


        </div>
    );
};

export default ReviewList;

