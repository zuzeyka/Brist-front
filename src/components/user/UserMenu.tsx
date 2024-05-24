import { useMemo } from "react";
import PageSwitcher from "../shop/PageSwitcher";
import Avatar from "../ui/avatar/Avatar";
import Main from "./Pages/Main";
import Level from "./Pages/Level";

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

const UserMenu: React.FC<UserMenuProps> = (props) => {
    const pages = useMemo(() => [
        { title: "Головна", content: <Main></Main> }, { title: "Значки", content: <Level points={props.levelPoints} achievements={[{ name: 'name', description: 'description', points: 200, imageUrl: "https://i.imgur.com/ufBjnf8.png" }]}></Level> }, { title: "Бажане", content: <div></div> }, { title: "Пости", content: <div></div> }, { title: "Скріншоти", content: <div></div> }, { title: "Відео", content: <div></div> }, { title: "Гайди", content: <div></div> }, { title: "Рецензії", content: <div></div> }
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
