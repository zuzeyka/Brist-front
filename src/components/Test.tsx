import React, { useState, useEffect } from 'react';

interface GameInShop {
  id: string; // Use string if your C# model uses GUIDs
  name: string;
  price: number;
  discount: number;
  previeImage: string;
  dateOfRelease: string; // Assuming a string representation for the date
  developerId: string; 
  publisherId: string;
  urlForContent: string;
  createdAt: string; // Assuming a string representation for the date
}


const Test: React.FC = () => {
  const [games, setGames] = useState<GameInShop[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('/gamesInShop'); // Use the correct URL
        if (!response.ok) {
          throw new Error(`Network response was not ok - ${response.status}`);
        }

        const data = await response.json() as GameInShop[];      
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

  return (
      <>
        <h1>Games</h1>
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <h2>{game.name}</h2>
              <p>Price: {game.price}</p>
              <p>Discount: {game.discount}</p>
            </li>
          ))}
        </ul>
      </>
  )
};

export default Test;
