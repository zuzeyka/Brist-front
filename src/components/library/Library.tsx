import { useEffect, useState } from 'react';
import Footer from '../main/Footer';
import Head from '../main/Head';
import Collections from './Collections';
import CommunityList from './CommunityList';
import NewsList from './NewsList';
import Search from './Search';
import ListOfSmallGames from './ListOfSmallGames';
import { GameInfo } from './SmallGame';
import { GameGuide, GameInShop, GameNews, GamePosts, Screenshot } from '@/shared/lib/interfaces';
import Post from './Post';
import Guide from './Guide';
import Media from './Media';
import AllGames from './AllGames';

interface LibraryData {
    gamesGuides: GameGuide[];
    gamesNews: GameNews[];
    gamesPosts: GamePosts[];
    gamesMedia: Screenshot[];
    games: GameInShop[];
}

const Library: React.FC = () => {
    const [games, setGames] = useState<GameInShop[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isFilter, setIsFilter] = useState(false);

    const handleFilterChange = (value: boolean) => {
        setIsFilter(value);
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await fetch('http://localhost:5049/api/GamesInShop');
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
    const gamesInfo: GameInfo[] = games.map((game: GameInShop) => {
        const { previeImage, name } = game;
        return {
            key: null,
            name,
            image: previeImage,
        };
    });
    const data: LibraryData = {
        gamesGuides: [{ id: '5', title: 'Test guide', createdAt: '2022-01-01', description: 'Test description', imageUrl: "https://i.imgur.com/ufBjnf8.png", likesCount: 5, discussionId: '2', gameId: '2', authorId: '2', gameGroupId: '2', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nostrum repudiandae ab, eum aut harum? Ipsum sed voluptate architecto iusto est debitis harum error assumenda eaque impedit, doloremque necessitatibus alias, soluta voluptas dolore magnam nesciunt exercitationem. Autem, facilis fugit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nostrum repudiandae ab, eum aut harum? Ipsum sed voluptate architecto iusto est debitis harum error assumenda eaque impedit, doloremque necessitatibus alias, soluta voluptas dolore magnam nesciunt exercitationem. Autem, facilis fugit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nostrum repudiandae ab, eum aut harum? Ipsum sed voluptate architecto iusto est debitis harum error assumenda eaque impedit, doloremque necessitatibus alias, soluta voluptas dolore magnam nesciunt exercitationem. Autem, facilis fugit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nostrum repudiandae ab, eum aut harum? Ipsum sed voluptate architecto iusto est debitis harum error assumenda eaque impedit, doloremque necessitatibus alias, soluta voluptas dolore magnam nesciunt exercitationem. Autem, facilis fugit.' }],
        gamesNews: [
            { id: '1', title: 'Test news', createdAt: '2022-01-01', likesCount: 10, discussionId: '1', gameId: '1', authorId: '1', gameGroupId: '1', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nostrum repudiandae ab, eum aut harum? Ipsum sed voluptate architecto iusto est debitis harum error assumenda eaque impedit, doloremque necessitatibus alias, soluta voluptas dolore magnam nesciunt exercitationem. Autem, facilis fugit.', imageUrl: "https://i.imgur.com/ufBjnf8.png" },
            { id: '11', title: 'Test news', createdAt: '2022-01-01', likesCount: 20, discussionId: '1', gameId: '1', authorId: '1', gameGroupId: '1', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nostrum repudiandae ab, eum aut harum? Ipsum sed voluptate architecto iusto est debitis harum error assumenda eaque impedit, doloremque necessitatibus alias, soluta voluptas dolore magnam nesciunt exercitationem. Autem, facilis fugit.', imageUrl: "https://i.imgur.com/ufBjnf8.png" },
            { id: '12', title: 'Test news', createdAt: '2022-01-01', likesCount: 30, discussionId: '1', gameId: '1', authorId: '1', gameGroupId: '1', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nostrum repudiandae ab, eum aut harum? Ipsum sed voluptate architecto iusto est debitis harum error assumenda eaque impedit, doloremque necessitatibus alias, soluta voluptas dolore magnam nesciunt exercitationem. Autem, facilis fugit.', imageUrl: "https://i.imgur.com/ufBjnf8.png" },
            { id: '13', title: 'Test news', createdAt: '2022-01-01', likesCount: 40, discussionId: '1', gameId: '1', authorId: '1', gameGroupId: '1', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nostrum repudiandae ab, eum aut harum? Ipsum sed voluptate architecto iusto est debitis harum error assumenda eaque impedit, doloremque necessitatibus alias, soluta voluptas dolore magnam nesciunt exercitationem. Autem, facilis fugit.', imageUrl: "https://i.imgur.com/ufBjnf8.png" },
            { id: '14', title: 'Test news', createdAt: '2022-01-01', likesCount: 10, discussionId: '1', gameId: '1', authorId: '1', gameGroupId: '1', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nostrum repudiandae ab, eum aut harum? Ipsum sed voluptate architecto iusto est debitis harum error assumenda eaque impedit, doloremque necessitatibus alias, soluta voluptas dolore magnam nesciunt exercitationem. Autem, facilis fugit.', imageUrl: "https://i.imgur.com/ufBjnf8.png" },

        ],
        gamesPosts: [{ id: '7', title: 'Test post', createdAt: '2022-01-01', description: 'Test description', imageUrl: "https://i.imgur.com/ufBjnf8.png", likesCount: 5, discussionId: '2', gameId: '2', authorId: '2', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nostrum repudiandae ab, eum aut harum? Ipsum sed voluptate architecto iusto est debitis harum error assumenda eaque impedit, doloremque necessitatibus alias, soluta voluptas dolore magnam nesciunt exercitationem. Autem, facilis fugit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nostrum repudiandae ab, eum aut harum? Ipsum sed voluptate architecto iusto est debitis harum error assumenda eaque impedit, doloremque necessitatibus alias, soluta voluptas dolore magnam nesciunt exercitationem. Autem, facilis fugit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nostrum repudiandae ab, eum aut harum? Ipsum sed voluptate architecto iusto est debitis harum error assumenda eaque impedit, doloremque necessitatibus alias, soluta voluptas dolore magnam nesciunt exercitationem. Autem, facilis fugit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nostrum repudiandae ab, eum aut harum? Ipsum sed voluptate architecto iusto est debitis harum error assumenda eaque impedit, doloremque necessitatibus alias, soluta voluptas dolore magnam nesciunt exercitationem. Autem, facilis fugit.', gameTopicId: '2' }],
        gamesMedia: [{ id: '9', title: 'Test media', createdAt: '2022-01-01', description: 'Test description description description description description description description description description description  description description', screenshotUrl: "https://i.imgur.com/ufBjnf8.png", likesCount: 5, discussionId: '2', gameId: '2', authorId: '2' }, { id: '10', title: 'Test media', createdAt: '2022-01-01', description: 'Test description description description description description description description description description description  description description', screenshotUrl: "https://i.imgur.com/XrUH10g.mp4", likesCount: 5, discussionId: '2', gameId: '2', authorId: '2' }],
        games: []
    }
    const posts: JSX.Element[] = [];
    data.gamesPosts.forEach((post) => {
        posts.push(
            <Post className='mx-2'
                gameName='test'
                postTitle={post.title}
                postText={post.content}
                postDate={post.createdAt}
                postComments={0}
                postLikes={post.likesCount}
                postGameImageUrl={post.imageUrl ? post.imageUrl : ''}
                postMediaUrl="https://i.imgur.com/ufBjnf8.png"
            >
            </Post>
        );
    });
    data.gamesGuides.forEach((post) => {
        posts.push(
            <Guide className='mx-2'
                gameName='test'
                postTitle={post.title}
                postText={post.content}
                postDate={post.createdAt}
                postComments={0}
                postLikes={post.likesCount}
                postGameImageUrl={post.imageUrl ? post.imageUrl : ''}
                postMediaUrl="https://i.imgur.com/ufBjnf8.png"
            >
            </Guide>
        );
    });
    data.gamesMedia.forEach((post) => {
        posts.push(
            <Media className='mx-2'
                gameName='test'
                postTitle={post.title}
                postText={post.description ? post.description : ''}
                postDate={post.createdAt}
                postComments={0}
                postLikes={post.likesCount}
                postGameImageUrl={"https://i.imgur.com/ufBjnf8.png"}
                postMediaUrl={post.screenshotUrl}
            >
            </Media>
        );
    });
    return (
        <>
            <Head></Head>
            <div className="bg-white flex">
                <ListOfSmallGames games={error ? gamesInfo : [{ key: null, name: 'Test game', image: '' }]} />
                <div className="flex flex-col p-5 max-w-7xl mx-auto py-4">
                    <Search isFilter={isFilter} onFilterChange={handleFilterChange}></Search>
                    <NewsList gameName='test' gameNews={data.gamesNews ? data.gamesNews : []}></NewsList>
                    <CommunityList comunityContent={posts}></CommunityList>
                    <Collections collectionsNames={['Test collection 1', 'Test collection 2', 'Test collection 3']}></Collections>
                    <AllGames list={isFilter} gameImages={['https://i.imgur.com/ufBjnf8.png', 'https://i.imgur.com/ufBjnf8.png', 'https://i.imgur.com/ufBjnf8.png']} gameNames={['Test game 1', 'Test game 2', 'Test game 3']} gameSizes={['10mb', '20mb', '30mb']}></AllGames>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Library;
