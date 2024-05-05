import React from 'react';
import Avatar from '../../ui/avatar/Avatar';
import { ChevronDown, HeartIcon, MessageSquareIcon, StarIcon } from 'lucide-react';
import { ReviewInfo } from './AboutGame';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

interface ReviewListProps {
    className?: string;
    data: ReviewInfo[];
}

const ReviewList: React.FC<ReviewListProps> = (props) => {
    const [showMore, setShowMore] = React.useState(false);

    const reviews = showMore ? props.data : props.data.slice(0, 4);

    return (
        <div className={"max-w-7xl mx-auto bg-white mb-8" + (props.className ? ' ' + props.className : '')}>
            <div className="flex flex-col">
                <div className='flex items-center justify-between'>
                    <span className='font-semibold'>Рецензії</span>
                    <div className='flex items-center space-x-2'>
                        <span className='text-gray-500'>Сортування:</span>
                        <Select>
                            <SelectTrigger className="w-full" id="sort">
                                <SelectValue placeholder="Найбільш корисні" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="popular">Найбільш корисні</SelectItem>
                                <SelectItem value="recent">Недавні</SelectItem>
                                <SelectItem value="commented">Старі</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {reviews.map((item, index) => (
                        <div key={index} className='bg-gray-100 p-4 rounded-2xl'>
                            <div className="flex items-center">
                                <Avatar alt="User Avatar" src={item.avatarUrl} className='w-10 h-10'></Avatar>
                                <div className="ml-3">
                                    <p className="text-sm font-semibold">{item.userName}</p>
                                    <div className="flex">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                className={`text-yellow-400 w-4 h-4`}
                                            />
                                        ))}
                                        {[...Array(5 - item.rating)].map((_, i) => (
                                            <StarIcon
                                                key={5 + i}
                                                className={`text-gray-400 w-4 h-4`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3">{item.reviewText}</p>
                            <div className="flex justify-between items-center mt-4 font-semibold">
                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center space-x-2">
                                        <HeartIcon className="w-4 h-4" />
                                        <p className="text-sm mr-1">{item.likes}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <MessageSquareIcon className="w-4 h-4" />
                                        <p className="text-sm mr-1">{item.comments}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {props.data.length > 4 && (
                    <div className="flex justify-center mt-4">
                        <Button className="bg-transparent hover:bg-transparent text-black" onClick={() => setShowMore(true)}><ChevronDown /></Button>
                    </div>
                )}

            </div>


        </div>
    );
};

export default ReviewList;

