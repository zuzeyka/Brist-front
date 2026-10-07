import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import PageSwitcher from "../shop/page-switcher";
import Avatar from "@/components/ui/avatar/avatar";
import Main from "./pages/main";
import Level from "./pages/level";
import Posts from "./pages/posts";
import { PostProps } from "../shop/community/post";
import Media from "./pages/media";
import Guides from "./pages/guides";
import Reviews from "./pages/reviews";
import GamesPage from "./pages/games";
import Wished, { GameProps } from "./pages/wished";
import FriendsPage from "./pages/friends";
import LevelIcon from "./elements/level-icon";
import { GameInShop } from "@/shared/lib/interfaces";

interface UserMenuProps {
    levelPoints: number;
    ownedGames: GameInShop[];
    wishedGames: GameInShop[];
    dlcCount: number;
    screenshots: PostProps[];
    videos: PostProps[];
    discussions: PostProps[];
    guides: PostProps[];
    reviews: ReviewProps[];
    comments: CommentEntry[];
    achievements: AchievementEntry[];
    friends?: Friend[];
    onMoveContentToParent: (node: React.ReactNode) => void;
}

export interface Friend {
    name: string;
    avatarUrl?: string;
    isOnline: boolean;
    levelPoints: number;
}

export interface ReviewProps {
    gameName: string;
    reviewText: string;
    rating: number;
    likes: number;
    date: string;
    comments: number;
    gamePictureUrl: string;
}

export interface CommentEntry {
    userName: string;
    userAvatar: string;
    text: string;
    date: string;
}

export interface AchievementEntry {
    name: string;
    description: string;
    points: number;
    imageUrl: string;
    complitionDate?: string;
}

const UserMenu: React.FC<UserMenuProps> = (props) => {
    const { t } = useTranslation();

    const wishes: GameProps[] = useMemo(() => props.wishedGames.map((game) => ({
        id: game.id,
        name: game.name,
        imageUrl: game.previeImage,
        rating: 0,
        price: game.price,
        discount: game.discount,
        discountEnd: game.discountFinish ? new Date(game.discountFinish).toLocaleDateString('uk-UA') : undefined,
        isOwned: false,
        categorys: [],
    })), [props.wishedGames]);

    const pages = useMemo(() => [
        {
            title: t('user.menu.home'), content: (
                <Main
                    badgeIcons={props.achievements.map((a) => a.imageUrl).filter(Boolean).slice(0, 5)}
                    gameCount={props.ownedGames.length}
                    dlcCount={props.dlcCount}
                    wishesCount={props.wishedGames.length}
                    gameCovers={props.ownedGames.slice(0, 4).map((g) => g.previeImage)}
                    discussions={props.discussions}
                    screenshots={props.screenshots.map((p) => p.postMediaUrl!).filter(Boolean)}
                    videos={props.videos.map((p) => p.postMediaUrl!).filter(Boolean)}
                    reviews={props.reviews.map((r) => ({ gameName: r.gameName, text: r.reviewText, rating: r.rating, date: r.date, likes: r.likes, comments: r.comments, gamePictureUrl: r.gamePictureUrl }))}
                    guides={props.guides.map((g) => ({ gameName: g.postAuthor, title: g.postTitle, text: g.postText ?? '', date: g.postDate, likes: g.postLikes, comments: g.postComments, guidePictureUrl: g.postMediaUrl ?? '' }))}
                    comments={props.comments}
                />
            )
        },
        { title: t('user.menu.badges'), content: <Level points={props.levelPoints} achievements={props.achievements}></Level> },
        { title: t('library.allGames'), content: <GamesPage games={props.ownedGames}></GamesPage> },
        { title: t('search.wishlist'), content: <Wished games={wishes}></Wished> },
        { title: t('user.menu.discussions'), content: <Posts posts={props.discussions}></Posts> },
        { title: t('shop.community.screenshots'), content: <Media media={props.screenshots}></Media> },
        { title: t('shop.community.videos'), content: <Media media={props.videos}></Media> },
        { title: t('shop.community.guides'), content: <Guides guides={props.guides}></Guides> },
        { title: t('shop.about.reviews'), content: <Reviews reviewInfo={props.reviews}></Reviews> },
    ], [t, props.ownedGames, props.wishedGames, props.dlcCount, props.levelPoints, props.achievements, props.discussions, props.screenshots, props.videos, props.guides, props.reviews, props.comments, wishes]);

    const counts: (number | undefined)[] = useMemo(() => [
        undefined,
        props.achievements.length,
        props.ownedGames.length,
        props.wishedGames.length,
        props.discussions.length,
        props.screenshots.length,
        props.videos.length,
        props.guides.length,
        props.reviews.length,
    ], [props.achievements, props.ownedGames, props.wishedGames, props.discussions, props.screenshots, props.videos, props.guides, props.reviews]);

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-col bg-card2 p-4 rounded-2xl">
                <div className="flex space-x-4 items-center mb-4 px-3">
                    <p className="text-heading-2 font-manrope font-bold">{t('user.menu.level')}</p>
                    <LevelIcon levelPoints={props.levelPoints}></LevelIcon>
                </div>
                <PageSwitcher onMoveContentToParent={props.onMoveContentToParent} vertical={true} pages={pages} counts={counts}></PageSwitcher>
            </div>
            {props.friends ? (
                <div className="flex flex-col bg-card2 p-4 rounded-2xl">
                    <button type="button" className="flex justify-between hover:text-primaryHover" onClick={() => props.onMoveContentToParent(<FriendsPage friends={props.friends!} />)}>
                        <p className="text-subheading-1 font-bold">{t('user.menu.friends')}</p>
                        <p className="text-typographySecondary text-sign-2 font-bold px-3 bg-card3 flex justify-center items-center rounded-2xl">{props.friends.length}</p>
                    </button>
                    <div>
                        {props.friends.slice(0, 5).map((friend) => (
                            <div key={friend.name} className="flex space-x-4 items-center my-4 justify-between">
                                <div className="flex space-x-4 items-center">
                                    <Avatar online={friend.isOnline} src={friend.avatarUrl} alt={friend.name} name={friend.name} className="w-12 h-12 rounded-full"></Avatar>
                                    <p className="text-subheading-2 font-bold">{friend.name}</p>
                                </div>
                                <LevelIcon levelPoints={friend.levelPoints} small={true}></LevelIcon>
                            </div>
                        ))}
                    </div>
                    {props.friends.length - 5 > 0 ? <p className="text-typographySecondary">{t('user.menu.moreFriends', { count: props.friends.length - 5 })}</p> : null}
                </div>
            ) : null}
        </div>
    );
};

export default UserMenu;
