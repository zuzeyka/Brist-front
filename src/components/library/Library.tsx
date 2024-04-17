import { useEffect, useState } from 'react';
import Footer from '../main/Footer';
import Head from '../main/Head';
import Collections from './Collections';
import Community from './Community';
import News from './News';
import Search from './Search';
import ListOfSmallGames from './ListOfSmallGames';
import { GameInfo } from './SmallGame';

interface GameInLibrary {
  id: string; 
  name: string;
  price: number;
  discount: number;
  previeImage: string;
  dateOfRelease: string; 
  developerId: string; 
  publisherId: string;
  urlForContent: string;
  createdAt: string;
}

const Library: React.FC = () => {
  const [games, setGames] = useState<GameInLibrary[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost:5049/api/GamesInShop');
        if (!response.ok) {
          throw new Error(`Network response was not ok - ${response.status}`);
        }

        const data = await response.json() as GameInLibrary[];      
        setGames(data);
      } catch (error) {
        console.error('Error fetching data:', error); 
        setError('There was an error fetching data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const gamesInfo: GameInfo[] = games.map((game: GameInLibrary) => {
  const { previeImage, name } = game;
  return {
    key: null, 
    name,
    image: previeImage,
  };
});
  return (
    <>
      <Head></Head>
      <div className="bg-white flex">
      <ListOfSmallGames games={error ? gamesInfo : []}/>
        <div className="flex flex-col p-5">
          <Search></Search>
          <News></News>
          <Community></Community>
          <Collections></Collections>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Library;
