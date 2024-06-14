import { useEffect, useState } from "react";


// HERE
export interface GameInShop {
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

export interface Developer {
    id: string;
    name: string;
    subscribersCount: number;
    urlForNewsPage: string;
    description: string;
    avatar: string;
    backgroundImage?: string;
    createdAt: string;
}

export interface Categories {
    id: string;
    name: string;
    description: string;
    createdAt: string;
}

export interface CategoryByAuthor {
    id: string;
    name: string;
    description: string;
    image: string;
    createdAt: string;
}

export interface CategoryByUser {
    id: string;
    name: string;
    description: string;
    createdAt: string;
}

export interface CategoryForGame {
    id: string;
    gameId: string;
    categoryId: string;
    createdAt: string;
}

export interface Developer {
    id: string;
    name: string;
    subscribersCount: number;
    urlForNewsPage: string;
    description: string;
    avatar: string;
    backgroundImage?: string;
    createdAt: string;
}

export interface Publisher {
    id: string;
    subscribersCount: number;
    name: string;
    description: string;
    avatar: string;
    backgroundImage: string;
    urlForNewsPage: string;
    createdAt: string;
}

export interface Chat {
    id: string;
    firstUser: string;
    secondUser: string;
    createdAt: string;
}

export interface GameComment {
    id: string;
    gamePostId: string;
    content: string;
    authorId: string;
    createdAt: string;
}

export interface GameGroup {
    id: string;
    gameId: string;
    createdAt: string;
}

export interface GameGuide {
    id: string;
    title: string;
    description?: string;
    likesCount: number;
    discussionId: string;
    imageUrl?: string;
    gameId: string;
    authorId: string;
    gameGroupId: string;
    content: string;
    createdAt: string;
}

export interface GameNews {
    id: string;
    title: string;
    description?: string;
    likesCount: number;
    discussionId: string;
    imageUrl?: string;
    gameId: string;
    authorId: string;
    gameGroupId: string;
    content: string;
    createdAt: string;
}

export interface GamePosts {
    id: string;
    title: string;
    description?: string;
    likesCount: number;
    discussionId: string;
    imageUrl?: string;
    gameId: string;
    gameTopicId: string;
    authorId: string;
    content: string;
    createdAt: string;
}

export interface GameTopic {
    id: string;
    attachedId: string;
    name: string;
    description: string;
    createdAt: string;
}

export interface GroupComment {
    id: string;
    groupId: string;
    content: string;
    userId: string;
    createdAt: string;
}

export interface Group {
    id: string;
    attachedId: string;
    name: string;
    description: string;
    createdAt: string;
}

export interface Post {
    id: string;
    title: string;
    description?: string;
    likesCount: number;
    discussionId: string;
    imageUrl?: string;
    gameId: string;
    authorId: string;
    content: string;
    createdAt: string;
}

export interface Topic {
    id: string;
    attachedId: string;
    name: string;
    description: string;
    authorId: string;
    postId: string;
    createdAt: string;
}

export interface LanguageInGame {
    id: string;
    gameId: string;
    languageId: string;
    createdAt: string;
}

export interface Language {
    id: string;
    name: string;
    createdAt: string;
}

export interface Friends {
    id: string;
    userId: string;
    friendId: string;
    createdAt: string;
}

export interface OwnedGame {
    id: string;
    ownedGameId: string;
    userId: string;
    createdAt: string;
}

export interface Screenshot {
    id: string;
    title?: string;
    description?: string;
    likesCount: number;
    gameId: string;
    authorId: string;
    screenshotUrl: string;
    createdAt: string;
}

export interface UserCategory {
    id: string;
    userId: string;
    ownedGameId: string;
    categoryId: string;
    createdAt: string;
}

export interface UserComment {
    id: string;
    userId: string;
    authorId: string;
    content: string;
    createdAt: string;
}

export interface User {
    id: string;
    name: string;
    passwordSalt: string;
    salt: string;
    email: string;
    phone: string;
    createdAt: string;
}

export interface Video {
    id: string;
    title?: string;
    description?: string;
    likesCount: number;
    gameId: string;
    authorId: string;
    videoUrl: string;
    createdAt: string;
}

export interface WishedGame {
    id: string;
    ownedGameId: string;
    userId: string;
    createdAt: string;
}

export interface MaximumSystemRequirement {
    id: string;
    gameId: string;
    OS: string;
    processor: string;
    RAM: string;
    video: string;
    freeDiskSpace: string;
    createdAt: string;
}

export interface MinimalSystemRequirement {
    id: string;
    gameId: string;
    OS: string;
    processor: string;
    RAM: string;
    video: string;
    freeDiskSpace: string;
    createdAt: string;
}

export interface DLCInShop {
    id: string;
    gameId: string;
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

export interface Discussion {
    id: string;
    authorId: string;
    attachedId: string;
    content: string;
    likesCount: string;
    createdAt: string;
}

// HERE

export interface DlcInfo {
    name: string;
    price: number;
    discount?: number;
}
interface AboutGameProps {
    gameName: string;
    gameDescription: string;
    price: number;
    discount?: number;
    gameCategorys: string[];
    className?: string;
}
export interface ReviewInfo {
    userName: string;
    avatarUrl?: string;
    date: string;
    reviewText: string;
    rating: number;
    likes: number;
    comments: number;
}
export interface GameBundle {
    name: string;
    price: number;
    discount?: number;
    description: string;
    elements: string[];
}

const [games, setGames] = useState<GameInShop[]>([]);
const [maximumSystemRequirement, setMaximumSystemRequirement] = useState<MaximumSystemRequirement[]>([]);
const [wishedGame, setWishedGame] = useState<WishedGame[]>([]);
const [developers, setDevelopers] = useState<Developer[]>([]);
const [categories, setCategories] = useState<Categories[]>([]);
const [categoriesByAuthor, setCategoriesByAuthor] = useState<CategoryByAuthor[]>([]);
const [categoriesByUser, setCategoriesByUser] = useState<CategoryByUser[]>([]);
const [categoriesForGame, setCategoriesForGame] = useState<CategoryForGame[]>([]);
const [publishers, setPublisher] = useState<Publisher[]>([]);
const [chats, setChat] = useState<Chat[]>([]);
const [gameComments, setGameComments] = useState<GameComment[]>([]);
const [gameGroups, setGameGroups] = useState<GameGroup[]>([]);
const [gameGuides, setGameGuides] = useState<GameGuide[]>([]);
const [gameNews, setGameNews] = useState<GameNews[]>([]);
const [gamePosts, setGamePosts] = useState<GamePosts[]>([]);
const [gameTopic, setGameTopic] = useState<GameTopic[]>([]);
const [groupComment, setGroupComment] = useState<GroupComment[]>([]);
const [group, setGroup] = useState<Group[]>([]);
const [post, setPost] = useState<Post[]>([]);
const [topic, setTopic] = useState<Topic[]>([]);
const [languageInGame, setLanguageInGame] = useState<LanguageInGame[]>([]);
const [language, setLanguage] = useState<Language[]>([]);
const [friend, setFriends] = useState<Friends[]>([]);
const [ownedGame, setOwnedGame] = useState<OwnedGame[]>([]);
const [screenshot, setScreenshot] = useState<Screenshot[]>([]);
const [userCategory, setUserCategory] = useState<UserCategory[]>([]);
const [userComment, setUserComment] = useState<UserComment[]>([]);
const [user, setUser] = useState<User[]>([]);
const [video, setVideo] = useState<Video[]>([]);
const [minimalSystemRequirement, setMinimalSystemRequirement] = useState<MinimalSystemRequirement[]>([]);
const [DLCInShop, setDLCInShop] = useState<DLCInShop[]>([]);
const [discussion, setDiscussion] = useState<Discussion[]>([]);

useEffect(() => {
    const fetchGames = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/GamesInShop');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gamesData: GameInShop[] = await response.json();
            setGames(gamesData);
            console.log('Games:', gamesData);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/Categories');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const categoriesData: Categories[] = await response.json();
            setCategories(categoriesData);
            console.log('Categories: ', categoriesData);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchCategoriesByAuthor = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/CategoriesByAuthor');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const categoriesData: CategoryByAuthor[] = await response.json();
            setCategoriesByAuthor(categoriesData);
            console.log('CategoriesByAuthor: ', categoriesData);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchCategoriesByUser = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/CategoriesByUser');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const categoriesUserData: CategoryByUser[] = await response.json();
            setCategoriesByUser(categoriesUserData);
            console.log('CategoriesByUser: ', categoriesUserData);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchCategoriesForGame = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/CategoriesForGame');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const categoriesGame: CategoryForGame[] = await response.json();
            setCategoriesForGame(categoriesGame);
            console.log('CategoriesForGame: ', categoriesGame);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchDevelopers = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/Developer');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const categoriesGame: Developer[] = await response.json();
            setDevelopers(categoriesGame);
            console.log('Developer: ', categoriesGame);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchPublishers = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/Publisher');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const categoriesGame: Publisher[] = await response.json();
            setPublisher(categoriesGame);
            console.log('Publisher: ', categoriesGame);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchChats = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/Chat');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const chats: Chat[] = await response.json();
            setChat(chats);
            console.log('Chats: ', chats);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchGameComments = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/GameComment');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: GameComment[] = await response.json();
            setGameComments(gc);
            console.log('GameComments: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchGameGroups = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/GameGroup');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: GameGroup[] = await response.json();
            setGameGroups(gc);
            console.log('GameGroups: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchGameGuides = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/GameGuide');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: GameGuide[] = await response.json();
            setGameGuides(gc);
            console.log('GameGuides: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchGameNews = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/GameNews');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: GameNews[] = await response.json();
            setGameNews(gc);
            console.log('GameNews: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchGamePosts = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/GamePost');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: GamePosts[] = await response.json();
            setGamePosts(gc);
            console.log('GamePosts: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchGameTopic = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/GameTopic');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: GameTopic[] = await response.json();
            setGameTopic(gc);
            console.log('GameTopic: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchGroupComment = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/GroupComment');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: GroupComment[] = await response.json();
            setGroupComment(gc);
            console.log('GroupComment: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchGroup = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/Group');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: Group[] = await response.json();
            setGroup(gc);
            console.log('Group: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchPost = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/Post');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: Post[] = await response.json();
            setPost(gc);
            console.log('Post: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchTopic = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/Topic');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: Topic[] = await response.json();
            setTopic(gc);
            console.log('Topic: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchLanguageInGame = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/LanguageInGame');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: LanguageInGame[] = await response.json();
            setLanguageInGame(gc);
            console.log('LanguageInGame: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchLanguage = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/Language');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: Language[] = await response.json();
            setLanguage(gc);
            console.log('Language: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchFriends = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/Friends');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: Friends[] = await response.json();
            setFriends(gc);
            console.log('Friends: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchOwnedGame = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/OwnedGame');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: OwnedGame[] = await response.json();
            setOwnedGame(gc);
            console.log('OwnedGame: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchScreenshot = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/Screenshot');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: Screenshot[] = await response.json();
            setScreenshot(gc);
            console.log('Screenshot: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchUserCategory = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/UserCategory/getcategories');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: UserCategory[] = await response.json();
            setUserCategory(gc);
            console.log('UserCategory: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchUserCategory1 = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/UserCategory/getcategoriesbyuser');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: UserCategory[] = await response.json();
            setUserCategory(gc);
            console.log('UserCategory1: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchUserCategory2 = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/UserCategory/getownedgames');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: UserCategory[] = await response.json();
            setUserCategory(gc);
            console.log('UserCategory2: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchUserComment = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/UserComment');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: UserComment[] = await response.json();
            setUserComment(gc);
            console.log('UserComment: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchUser = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/User');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: User[] = await response.json();
            setUser(gc);
            console.log('User: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchVideo = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/Video');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: Video[] = await response.json();
            setVideo(gc);
            console.log('Video: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchWishedGame = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/WishedGame');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: WishedGame[] = await response.json();
            setWishedGame(gc);
            console.log('WishedGame: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchMaximumSystemRequirement = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/MaximumSystemRequirements');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: MaximumSystemRequirement[] = await response.json();
            setMaximumSystemRequirement(gc);
            console.log('MaximumSystemRequirement: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchMinimalSystemRequirement = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/MinimalSystemRequirements');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: MinimalSystemRequirement[] = await response.json();
            setMinimalSystemRequirement(gc);
            console.log('MinimalSystemRequirement: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchDLCInShop = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/DLCInShop');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: DLCInShop[] = await response.json();
            setDLCInShop(gc);
            console.log('DLCInShop: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchDiscussion = async () => {
        try {
            const response = await fetch('http://localhost:5049/api/Discussion');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const gc: Discussion[] = await response.json();
            setDiscussion(gc);
            console.log('Discussion: ', gc);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    fetchDiscussion();
    fetchDLCInShop();
    fetchMinimalSystemRequirement();
    fetchMaximumSystemRequirement();
    fetchWishedGame();
    fetchVideo();
    fetchUser();
    fetchUserComment();
    fetchUserCategory2();
    fetchUserCategory1();
    fetchUserCategory();
    fetchScreenshot();
    fetchOwnedGame();
    fetchFriends();
    fetchLanguage();
    fetchLanguageInGame();
    fetchTopic();
    fetchPost();
    fetchGroup();
    fetchGroupComment();
    fetchGameTopic();
    fetchGamePosts();
    fetchGameNews();
    fetchGameGuides();
    fetchGameGroups();
    fetchGameComments();
    fetchPublishers();
    fetchDevelopers();
    fetchCategoriesForGame();
    fetchCategoriesByUser();
    fetchCategories();
    fetchCategoriesByAuthor();
    fetchGames();
    fetchChats();
}, []);

// HERE
