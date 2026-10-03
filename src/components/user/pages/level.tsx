import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useState } from "react";
import LevelIcon from "../elements/level-icon";

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

    const filteredAchievements = props.achievements.filter((achievement) => {
        if (filter === "achieved") {
            return achievement.complitionDate !== undefined;
        } else if (filter === "notAchieved") {
            return achievement.complitionDate === undefined;
        }
        return true;
    });

    if (props.achievements.length >= 1) {
        return (
            <div className="bg-card2 rounded-2xl w-full p-4">
                <div className="flex flex-col space-y-4">
                    <Progress minValue={Math.floor(props.points - (props.points % 100))} maxValue={Math.floor((props.points + 100) - (props.points % 100))} value={props.points} />
                    <div className="flex justify-between">
                        <div className="flex space-x-2 items-center text-typographySecondary">
                            <LevelIcon levelPoints={props.points} />
                            <p className="text-gray-500">{Math.floor(props.points - (props.points % 100))} очок</p>
                        </div>
                        <p>{props.points}</p>
                        <div className="flex space-x-2 items-center text-typographySecondary">
                            <p className="text-gray-500">{Math.floor((props.points + 100) - (props.points % 100))} очок</p>
                            <LevelIcon levelPoints={props.points + 100} />
                        </div>
                    </div>
                    <div className="rounded-lg mb-4">
                        <div className='flex space-x-2 items-center'>
                            <div className="text-typographySecondary">Сортування:</div>
                            <Select onValueChange={(value) => setFilter(value)}>
                                <SelectTrigger className="w-full !bg-transparent border-0 !text-typography !text-button-2 !font-artifakt justify-start space-x-2 p-0" id="sort">
                                    <SelectValue placeholder="Отримані" />
                                </SelectTrigger>
                                <SelectContent className='!bg-card2 !text-typography !font-artifakt w-1/3'>
                                    <SelectItem value="achieved">Отримані</SelectItem>
                                    <SelectItem value="notAchieved">Не отримані</SelectItem>
                                    <SelectItem value="all">Усі</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                        {filteredAchievements.map((achievement, index) => (
                            <div key={index} className="flex space-x-4 items-center bg-card1 rounded-lg p-4">
                                <img src={achievement.imageUrl} alt={achievement.name} className="h-32 w-32 rounded-xl object-cover" />
                                <div className="flex flex-col h-full justify-between w-full">
                                    <div className="flex flex-col space-y-2 text-lg">
                                        <p className="font-bold text-heading-3 font-manrope">{achievement.name}</p>
                                        <p className="text-block-2">{achievement.description}</p>
                                    </div>
                                    <div className="flex justify-between w-full text-typographySecondary text-sign-2">
                                        <p>{achievement.points} очок</p>
                                        {achievement.complitionDate && <p>{achievement.complitionDate}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default Level;
