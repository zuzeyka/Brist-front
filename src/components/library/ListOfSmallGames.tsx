import { FilterIcon } from 'lucide-react';
import SmallGame, { GameInfo } from './SmallGame';

interface GamesProps {
    games: GameInfo[]
}

const ListOfSmallGames: React.FC<GamesProps> = ({ games }) => {
    return (
        <>
            <aside className="w-2/6 h-auto bg-gray-100 p-5">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="text-lg font-semibold">Усі ігри</h2>
                    <FilterIcon className="w-5 h-5" />
                </div>
                {games.length ? (<div className="flex flex-col space-y-5">
                    {games.map((game, index) => (
                        <SmallGame key={index} name={game.name} image={game.image} />
                    ))}
                </div>) : <p>Немає ігор</p>}
            </aside>
        </>
    );
};


export default ListOfSmallGames;
