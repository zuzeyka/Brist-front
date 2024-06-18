import { useEffect, useMemo, useState } from 'react';
import Footer from '../main/Footer';
import Head from '../main/Head';
import Search from '../main/Search';
import PageSwitcher from './PageSwitcher';
import AboutGame from './about/AboutGame';
import Characteristics from './characteristics/Characteristics';
import Community from './community/Community';
import { Developer, GameInShop, Publisher, Screenshot } from '@/shared/lib/interfaces';

const Store: React.FC = () => {
    const [game, setGame] = useState<GameInShop>();
    const [publisher, setPublisher] = useState<Publisher>();
    const [developer, setDeveloper] = useState<Developer>();
    const [screenshot, setScreenshot] = useState<Screenshot>();

    useEffect(() => {
        async function fetchGames() {
            try {
                const res = await fetch('http://localhost:5049/api/GamesInShop/29cf5a78-1903-11ef-9b97-005056a292a5');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json() as GameInShop;
                console.log(data);
                setGame(data);
            } catch (error) {
                console.log('Fetch games error:', error);
            }
        }

        async function fetchPublishers() {
            try {
                const res = await fetch('http://localhost:5049/api/Publisher/d9860f2b-1902-11ef-9b97-005056a292a5');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json() as Publisher;
                setPublisher(data);
            } catch (error) {
                console.log('Fetch publishers error:', error);
            }
        }

        async function fetchDevelopers() {
            try {
                const res = await fetch('http://localhost:5049/api/Developer/aad186f1-1902-11ef-9b97-005056a292a5');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json() as Developer;
                setDeveloper(data);
            } catch (error) {
                console.log('Fetch developers error:', error);
            }
        }

        async function fetchScreenshots() {
            try {
                const res = await fetch('http://localhost:5049/api/Screenshot/bygameid/29cf5a78-1903-11ef-9b97-005056a292a5');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json() as Screenshot;
                setScreenshot(data);
            } catch (error) {
                console.log('Fetch screenshots error:', error);
            }
        }

        fetchGames();
        fetchPublishers();
        fetchDevelopers();
        fetchScreenshots();
    }, []);

    const pages = [
        {
            title: 'Про ігру',
            content: (
                <AboutGame
                    releaseDate='01.01.2023'
                    publisher={publisher ? publisher.name : 'Невідомо'}
                    developer={developer ? developer.name : 'Невідомо'}
                    price={game ? game.price : 0}
                    discount={game ? game.discount : 0}
                    gameName={game ? game.name : 'Невідомо'}
                    gameDescription={game && game.description ? game.description : 'Невідомо'}
                    gameCategorys={['шутер', 'екшн', 'виживання', 'наукова фантастика', 'відкритий світ', 'многокористувацька']}
                    rate={4.4}
                    endDate={game && game.discountFinish ? game.discountFinish.toLocaleString() : 'No end date'}
                />
            )
        },
        {
            title: 'Характеристики',
            content: (
                <Characteristics
                    gameName='Якась гра, яка дуже всім сподобається'
                    price={1000}
                    discount={50}
                    rate={4.4}
                    endDate='01.01.2023'
                    releaseDate='01.01.2023'
                    publisher={publisher ? publisher.name : 'Невідомо'}
                    developer={developer ? developer.name : 'Невідомо'}
                />
            )
        },
        { title: 'Спільнота', content: <Community /> }
    ];

    const [content, setContent] = useState<React.ReactNode>(null);

    const handleMoveContentToParent = (node: React.ReactNode) => {
        setContent(node);
    };

    return (
        <>
            <Head />
            <Search />
            <div className="max-w-7xl mx-auto bg-background text-typography">
                <PageSwitcher onMoveContentToParent={handleMoveContentToParent} pages={pages} />
                {content}
            </div>
            <Footer />
        </>
    );
};

export default Store;
