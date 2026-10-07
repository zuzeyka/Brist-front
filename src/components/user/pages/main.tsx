import React from "react";
import { InboxIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import Badge from "../showcases/badge";
import Games from "../showcases/games";
import Discussions from "../showcases/discussions";
import Screenshots from "../showcases/screenshots";
import Videos from "../showcases/video";
import Reviews from "../showcases/reviews";
import Guides from "../showcases/guides";
import Comments from "../showcases/comments";
import { PostProps } from "../../shop/community/post";

interface ReviewEntry {
    gameName: string;
    text: string;
    rating: number;
    date: string;
    likes: number;
    comments: number;
    gamePictureUrl: string;
}

interface GuideEntry {
    gameName: string;
    title: string;
    text: string;
    date: string;
    likes: number;
    comments: number;
    guidePictureUrl: string;
}

interface CommentEntry {
    userName: string;
    userAvatar: string;
    text: string;
    date: string;
}

interface MainProps {
    badgeIcons: string[];
    gameCount: number;
    dlcCount: number;
    wishesCount: number;
    gameCovers: string[];
    discussions: PostProps[];
    screenshots: string[];
    videos: string[];
    reviews: ReviewEntry[];
    guides: GuideEntry[];
    comments: CommentEntry[];
}

const Main: React.FC<MainProps> = (props) => {
    const { t } = useTranslation();
    const hasActivity = props.discussions.length > 0 || props.screenshots.length > 0 || props.videos.length > 0
        || props.reviews.length > 0 || props.guides.length > 0;

    return (
        <div className="flex flex-col space-y-4">
            <Badge bagesimageUrl={props.badgeIcons}></Badge>
            <Games contentUrl={props.gameCovers} wishesCount={props.wishesCount} gameCount={props.gameCount} dlcCount={props.dlcCount}></Games>
            {hasActivity ? (
                <>
                    <Discussions discussions={props.discussions}></Discussions>
                    <Screenshots screenshotsUrl={props.screenshots}></Screenshots>
                    <Videos videosUrl={props.videos}></Videos>
                    <Reviews reviews={props.reviews}></Reviews>
                    <Guides guides={props.guides}></Guides>
                </>
            ) : (
                <div className="flex flex-col items-center gap-4 py-16 bg-card2 rounded-2xl">
                    <div className="flex items-center justify-center size-20 rounded-2xl bg-cardLight12 text-typographySecondary">
                        <InboxIcon className="size-10" />
                    </div>
                    <p className="font-artifakt text-block-1 text-typographySecondary">{t('user.noActivity')}</p>
                </div>
            )}
            <Comments comment={props.comments}></Comments>
        </div>
    );
};

export default Main;
