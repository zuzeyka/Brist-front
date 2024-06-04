import { useMemo } from "react";
import PageSwitcher from "../shop/PageSwitcher";
import Avatar from "@/components/ui/avatar/Avatar";
import { ReviewInfo } from "@/components/shop/about/AboutGame";
import Main from "./Pages/Main";
import Level from "./Pages/Level";
import Posts from "./Pages/Posts";
import { PostProps } from "../shop/community/Post";
import Media from "./Pages/Media";
import Guides from "./Pages/Guides";
import Reviews from "./Pages/Reviews";
import Wished, { GameProps } from "./Pages/Wished";

interface UserMenuProps {
    levelPoints: number;
    bagesCount: number;
    gamesCount: number;
    whishesCount: number;
    screenshotsCount: number;
    reviewsCount: number;
    videosCount: number;
    guidesCount: number;
    friends?: Friend[];
    onMoveContentToParent: (node: React.ReactNode) => void;
}

interface Friend {
    name: string;
    avatarUrl?: string;
    isOnline: boolean;
    level: number;
}

export interface ReviewProps extends ReviewInfo {
    gameName: string;
    gamePictureUrl: string;
}

const UserMenu: React.FC<UserMenuProps> = (props) => {
    const achievements = useMemo(() => [{ name: 'name', description: 'description', points: 200, complitionDate: '2022-01-01', imageUrl: "https://i.imgur.com/ufBjnf8.png" }, { name: 'name', description: 'description', points: 200, complitionDate: '2022-01-01', imageUrl: "https://i.imgur.com/ufBjnf8.png" }, { name: 'name', description: 'description', points: 200, complitionDate: '2022-01-01', imageUrl: "https://i.imgur.com/ufBjnf8.png" }, { name: 'name', description: 'description', points: 200, complitionDate: '2022-01-01', imageUrl: "https://i.imgur.com/ufBjnf8.png" }, { name: 'name', description: 'description', points: 200, imageUrl: "https://i.imgur.com/ufBjnf8.png" }], []);
    const posts: PostProps[] = useMemo(() => {
        const posts: PostProps[] = [];
        for (let i = 0; i < 10; i++) {
            posts.push({
                gameName: "Game",
                postTitle: `Title ${i}`,
                postText: "Lorem ipsum dolor sit amet consectetur. Amet nulla in risus commodo in in. Massa risus aliquet ut justo mauris blandit massa dolor vulputate. Pretium sit ullamcorper cursus cursus amet quis duis.",
                postDate: "2022-01-01",
                postAuthor: "Author",
                postComments: 5,
                postLikes: 2,
                postMediaUrl: "https://i.imgur.com/ufBjnf8.png",
            });
        }
        return posts;
    }, []);
    const screenshots: PostProps[] = useMemo(() => Array.from({ length: props.screenshotsCount }, (_, i) => ({
        gameName: "Game",
        postMediaUrl: "https://i.imgur.com/ufBjnf8.png",
        postTitle: `Title ${i}`,
        postText: "Description",
        postLikes: 5,
        postComments: 2,
        postDate: "2022-01-01",
        postAuthor: "Автор",
    })), [props.screenshotsCount]);
    const guides: PostProps[] = useMemo(() => Array.from({ length: props.guidesCount }, (_, i) => ({
        gameName: "Game",
        postTitle: `Title ${i}`,
        postText: "Description",
        postMediaUrl: "https://i.imgur.com/ufBjnf8.png",
        postLikes: 5,
        postComments: 2,
        postDate: "2022-01-01",
        postAuthor: "Автор",
    })), [props.guidesCount]);
    const reviews: ReviewProps[] = useMemo(() => Array.from({ length: props.reviewsCount }, (_, i) => ({
        gameName: "Game",
        userName: "Автор",
        avatarUrl: "https://i.imgur.com/ufBjnf8.png",
        date: "2022-01-01",
        reviewText: "Lorem ipsum dolor sit amet consectetur. Id duis vivamus dignissim a. Estfermentum amet adipiscing tristique faucibus proin quam.Ut cursus nulla imperdiet mauris egestas tincidunt quis eget.Tristique sit quam id duipurus.Vehicula condimentum netus risus tellus consequat.Egestasaccumsan cum diam erat.Lorem ipsum dolor sit amet consectetur.Id duisvivamus dignissim a.Est fermentum amet adipiscing tristique faucibusproin quam.Ut cursus nulla imperdiet mauris egestas tincidunt quiseget.Tristique sit quam id dui purus.Vehicula condimentum netus risustellus consequat.Egestas accumsan cum diam erat.",
        gamePictureUrl: "https://i.imgur.com/ufBjnf8.png",
        rating: 3,
        likes: 2,
        comments: 1
    })), [props.reviewsCount]);
    const wishes: GameProps[] = useMemo(() => Array.from({ length: props.whishesCount }, (_, i) => ({
        name: "Game",
        imageUrl: "https://i.imgur.com/ufBjnf8.png",
        rating: 3,
        price: 1000,
        discount: 50,
        discountEnd: "2022-01-01",
        isOwned: true,
        categorys: ["category1", "category2", "category3"]

    })), [props.whishesCount]);
    const pages = useMemo(() => [
        { title: "Головна", content: <Main></Main> }, { title: "Значки", content: <Level points={props.levelPoints} achievements={achievements}></Level> }, { title: "Бажане", content: <Wished games={wishes}></Wished> }, { title: "Пости", content: <Posts posts={posts}></Posts> }, { title: "Скріншоти", content: <Media media={screenshots}></Media> }, { title: "Відео", content: <Media media={screenshots}></Media> }, { title: "Гайди", content: <Guides guides={guides}></Guides> }, { title: "Рецензії", content: <Reviews reviewInfo={reviews}></Reviews> }
    ], []);
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-col bg-gray-100 p-4 rounded-2xl">
                <div className="flex space-x-4 items-center mb-4">
                    <p>Рівень: </p>
                    <p className="bg-[#333333] text-white rounded-full px-2 h-10 w-10 text-center pt-2">{Math.floor(props.levelPoints / 100)}</p>
                </div>
                <div className="flex justify-between">
                    <PageSwitcher onMoveContentToParent={props.onMoveContentToParent} vertical={true} pages={pages}></PageSwitcher>
                    <ul className="flex flex-col space-y-2 mt-8 text-gray-500">
                        <li>{props.whishesCount}</li>
                        <li>{props.bagesCount}</li>
                        <li>{props.gamesCount}</li>
                        <li>{props.screenshotsCount}</li>
                        <li>{props.videosCount}</li>
                        <li>{props.guidesCount}</li>
                        <li>{props.reviewsCount}</li>
                    </ul>
                </div>

            </div>
            {props.friends ? (
                <div className="flex flex-col bg-gray-100 p-4 rounded-2xl">
                    <div className="flex justify-between">
                        <p>Друзі: </p>
                        <p className="text-gray-500 pr-5">{props.friends.length}</p>
                    </div>
                    <div>
                        {props.friends.slice(0, 5).map((friend) => (
                            <div className="flex space-x-4 items-center my-4 justify-between">
                                <div className="flex space-x-4 items-center">
                                    <Avatar online={friend.isOnline} src={friend.avatarUrl} alt={friend.name} className="w-12 h-12 rounded"></Avatar>
                                    <p>{friend.name}</p>
                                </div>
                                <p className="bg-[#333333] text-white rounded-full h-8 w-8 text-center p-1">{friend.level}</p>
                            </div>
                        ))}
                    </div>
                    {props.friends.length - 5 > 0 ? <p className="text-gray-500">Ще {props.friends.length - 5} друзів</p> : null}
                </div>
            ) : null}
        </div>
    );
};

export default UserMenu;
