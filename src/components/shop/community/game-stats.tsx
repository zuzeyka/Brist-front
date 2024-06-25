import React from "react";

interface GameStatsProps {
    gameName: string;
    subscribersCount: number;
    onlineCount: number;
    mini?: boolean;
}

const GameStats: React.FC<GameStatsProps> = (props) => {
    return (
        <div className='flex flex-col text-typography font-artifakt text-sign-2'>
            <h1 className={'font-bold mb-4' + (props.mini ? ' text-subheading-2' : ' text-heading-1')}>{props.gameName}</h1>
            <div className='flex space-x-2 items-center'>
                <p className='text-typography text-sign-2 font-bold'><b>{props.subscribersCount} </b><span className='text-typographySecondary'>підписників</span></p>
                <div className={'flex items-center' + (props.mini ? '  text-sign-3' : ' text-sign-2')}>
                    <p className="font-bold"></p>{props.onlineCount}
                    <div className={'bg-accent rounded-full mx-2 shrink-0 my-auto' + (props.mini ? ' w-2 h-2' : ' w-4 h-4')} />
                </div>
            </div>
        </div>
    );
}

export default GameStats;