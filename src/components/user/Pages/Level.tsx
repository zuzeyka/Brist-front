import { Progress } from "@/components/ui/Progress";
import React from "react";

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
    
    if (props.achievements.length >= 1) {
        return (
            <div className="bg-gray-200 rounded-2xl w-full p-4">
                <div className="flex flex-col">
                    <div className="flex flex-col space-y-4">
                        <Progress minValue={Math.floor(props.points - (props.points % 100))} maxValue={Math.floor((props.points + 100) - (props.points % 100))} value={props.points}></Progress>
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
                        
                    </div>
                        
                </div>
            </div>
        );
    }
};

export default Level;
