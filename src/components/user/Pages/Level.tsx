import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useState } from "react";

interface Achievement {
    name: string;
    description: string;
    points: number;
    imageUrl: string;
    complitionDate?: string;
}

interface LevelProps {
    points: number;
    achievements: Achievement[];
}

const Level: React.FC<LevelProps> = (props) => {
    const [filter, setFilter] = useState("all");
    const [visibleCount, setVisibleCount] = useState(4);

    const filteredAchievements = props.achievements.filter((achievement) => {
        if (filter === "achieved") {
            return achievement.complitionDate !== undefined;
        } else if (filter === "notAchieved") {
            return achievement.complitionDate === undefined;
        }
        return true;
    });

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 2);
    };

    if (props.achievements.length >= 1) {
        return (
            <div className="bg-gray-200 rounded-2xl w-full p-4">
                <div className="flex flex-col space-y-4">
                    <Progress minValue={Math.floor(props.points - (props.points % 100))} maxValue={Math.floor((props.points + 100) - (props.points % 100))} value={props.points} />
                    <div className="flex justify-between">
                        <div className="flex space-x-2 items-center">
                            <p className="bg-[#333333] text-white rounded-full h-8 w-8 text-center p-1">{Math.floor(props.points / 100)}</p>
                            <p className="text-gray-500">{Math.floor(props.points - (props.points % 100))} очок</p>
                        </div>
                        <p>{props.points}</p>
                        <div className="flex space-x-2 items-center">
                            <p className="text-gray-500">{Math.floor((props.points + 100) - (props.points % 100))} очок</p>
                            <p className="bg-[#333333] text-white rounded-full h-8 w-8 text-center p-1">{Math.floor((props.points + 100) / 100)}</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center space-x-2'>
                        <span className='text-gray-500'>Сортування:</span>
                        <Select onValueChange={(value) => setFilter(value)}>
                            <SelectTrigger className="w-1/5" id="sort">
                                <SelectValue placeholder="Отримані" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="achieved">Отримані</SelectItem>
                                <SelectItem value="notAchieved">Не отримані</SelectItem>
                                <SelectItem value="all">Усі</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                        {filteredAchievements.slice(0, visibleCount).map((achievement, index) => (
                            <div key={index} className="flex space-x-4 items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                                <img src={achievement.imageUrl} alt={achievement.name} className="h-32 w-32 rounded-xl" />
                                <div className="flex flex-col h-full justify-between w-full">
                                    <div className="flex flex-col space-y-2 text-lg">
                                        <p className="font-bold">{achievement.name}</p>
                                        <p className="font-semibold">{achievement.description}</p>
                                    </div>
                                    <div className="flex justify-between w-full">
                                        <p className="text-gray-500">{achievement.points} очок</p>
                                        {achievement.complitionDate && <p className="text-gray-500">{achievement.complitionDate}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {visibleCount < filteredAchievements.length && (
                        <button className="mt-4 px-4 py-2 justify-center px-6 py-3 text-white rounded-3xl bg-zinc-800 max-md:px-5" onClick={handleLoadMore}>
                            Показати більше
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return null;
};

export default Level;
