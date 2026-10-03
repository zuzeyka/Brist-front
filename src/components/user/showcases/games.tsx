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
            <div className="bg-card2 rounded-2xl w-full p-4">
                <div className="flex flex-col">
                    <h2 className="text-heading-1 font-bold font-manrope">Колекція ігор</h2>
                    <div className="flex space-x-2 justify-center">
                        <div className="flex w-1/4 flex-col bg-card1 rounded-2xl p-4 text-center mt-4">
                            <p className="font-bold text-heading-1 font-manrope">{props.gameCount}</p>
                            <p className="text-sign-1 text-typographySecondary">Ігор</p>
                        </div>
                        <div className="flex w-1/4 flex-col bg-card1 rounded-2xl p-4 text-center mt-4">
                            <p className="font-bold text-heading-1 font-manrope">{props.dlcCount}</p>
                            <p className="text-sign-1 text-typographySecondary">DLC</p>
                        </div>
                        <div className="flex w-1/4 flex-col bg-card1 rounded-2xl p-4 text-center mt-4">
                            <p className="font-bold text-heading-1 font-manrope">{props.wishesCount}</p>
                            <p className="text-sign-1 text-typographySecondary">Бажаного</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                        {props.contentUrl.slice(0, 4).map((url) => (
                            <img
                                key={url}
                                src={url}
                                className="h-32 w-1/4 object-cover rounded-2xl"
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
