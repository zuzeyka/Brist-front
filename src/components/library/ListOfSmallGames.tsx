import SmallGame, { GameInfo } from './SmallGame';

interface GamesProps {
    games: GameInfo[]
}

const ListOfSmallGames: React.FC<GamesProps> = ({ games }) => {
    return (
        <>
            <aside className="w-64 h-screen bg-gray-100 p-5">
                <div className="flex flex-col space-y-5">
                    <h2 className="text-lg font-semibold">Усі ігри</h2>
                    {games.map((game, index) => (
                        <SmallGame key={index} name={game.name} image={game.image} />
                    ))}
                </div>
            </aside>
        </>
    );
};


export default ListOfSmallGames;
