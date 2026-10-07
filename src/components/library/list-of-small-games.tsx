import { FilterIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SmallGame, { GameInfo } from './small-game';

interface GamesProps {
    games: GameInfo[]
}

const ListOfSmallGames: React.FC<GamesProps> = ({ games }) => {
    const { t } = useTranslation();
    return (
        <>
            <aside className="w-full h-full bg-card2 p-5 text-typography">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="text-heading-3 font-bold">{t('library.allGames')}</h2>
                    <FilterIcon className="w-5 h-5" />
                </div>
                {games.length ? (<div className="flex flex-col space-y-5 font-artifakt text-subheading-2">
                    {games.map((game, index) => (
                        <SmallGame key={index} name={game.name} image={game.image} />
                    ))}
                </div>) : <p className='text-typography text-subheading-2 font-artifakt'>{t('library.noGames')}</p>}
            </aside>
        </>
    );
};


export default ListOfSmallGames;
