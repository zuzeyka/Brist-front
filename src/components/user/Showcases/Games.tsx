import React from "react";

interface GamesProps {
    className?: string;
    gameCount: number;
    dlcCount: number;
    wishesCount: number;
    contentUrl: string[];
}


const Games: React.FC<GamesProps> = (props) => {
    if (props.contentUrl.length >= 1) {
        return (
            <div className="bg-gray-200 rounded-2xl w-full p-4">
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Галерея значків</h2>
                    <div className="flex space-x-2 justify-center">
                        <div className="flex w-1/4 flex-col bg-white rounded-2xl p-4 text-center mt-4">
                            <p className="font-semibold text-lg">{props.gameCount}</p>
                            <p>Ігор</p>
                        </div>
                        <div className="flex w-1/4 flex-col bg-white rounded-2xl p-4 text-center mt-4">
                            <p className="font-semibold text-lg">{props.dlcCount}</p>
                            <p>DLC</p>
                        </div>
                        <div className="flex w-1/4 flex-col bg-white rounded-2xl p-4 text-center mt-4">
                            <p className="font-semibold text-lg">{props.wishesCount}</p>
                            <p>Бажаного</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                        {props.contentUrl.slice(0, 4).map((url) => (
                            <img
                                key={url}
                                src={url}
                                className="h-20 w-1/4 object-cover rounded-2xl"
                                alt="game"
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default Games;
