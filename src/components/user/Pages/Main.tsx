import React from "react";
import Badge from "../showcases/badge";
import Games from "../showcases/games";
import Screenshots from "../showcases/screenshots";
import Videos from "../showcases/video";
import Reviews from "../showcases/reviews";
import Guides from "../showcases/guides";
import Comments from "../showcases/comments";


const Main: React.FC = () => {
    const images: string[] = ["https://i.imgur.com/ufBjnf8.png", "https://i.imgur.com/5Hds4bh.png", "https://i.imgur.com/oh4wspW.png", "https://i.imgur.com/NvDm7W1.png", "https://i.imgur.com/hNIw75C.png"]
    return (
        <div className="flex flex-col space-y-4">
            <Badge bagesimageUrl={images}></Badge>
            <Games contentUrl={images} wishesCount={120} gameCount={540} dlcCount={110}></Games>
            <Screenshots screenshotsUrl={images}></Screenshots>
            <Videos videosUrl={["https://i.imgur.com/XrUH10g.mp4", "https://i.imgur.com/XrUH10g.mp4", "https://i.imgur.com/XrUH10g.mp4"]}></Videos>
            <Reviews reviews={[{ gameName: "Game", text: "Text", rating: 4, date: "2022-01-01", likes: 5, comments: 2, gamePictureUrl: "https://i.imgur.com/ufBjnf8.png" }, { gameName: "Game", text: "Text", rating: 4, date: "2022-01-01", likes: 5, comments: 2, gamePictureUrl: "https://i.imgur.com/ufBjnf8.png" }, { gameName: "Game", text: "Text", rating: 4, date: "2022-01-01", likes: 5, comments: 2, gamePictureUrl: "https://i.imgur.com/ufBjnf8.png" }]}></Reviews>
            <Guides guides={[{ gameName: "Game", text: "Text", rating: 4, date: "2022-01-01", likes: 5, comments: 2, gamePictureUrl: "https://i.imgur.com/ufBjnf8.png", title: "Title", guidePictureUrl: "https://i.imgur.com/ufBjnf8.png" }, { gameName: "Game", text: "Text", rating: 4, date: "2022-01-01", likes: 5, comments: 2, gamePictureUrl: "https://i.imgur.com/ufBjnf8.png", title: "Title", guidePictureUrl: "https://i.imgur.com/ufBjnf8.png" }, { gameName: "Game", text: "Text", rating: 4, date: "2022-01-01", likes: 5, comments: 2, gamePictureUrl: "https://i.imgur.com/ufBjnf8.png", title: "Title", guidePictureUrl: "https://i.imgur.com/ufBjnf8.png" }]}></Guides>
            <Comments comment={[{ userName: "User", text: "Text", date: "2022-01-01", userAvatar: "https://i.imgur.com/ufBjnf8.png" }, { userName: "User", text: "Text", date: "2022-01-01", userAvatar: "https://i.imgur.com/ufBjnf8.png" }, { userName: "User", text: "Text", date: "2022-01-01", userAvatar: "https://i.imgur.com/ufBjnf8.png" }, { userName: "User", text: "Text", date: "2022-01-01", userAvatar: "https://i.imgur.com/ufBjnf8.png" }]}></Comments>
        </div>
    );
};

export default Main;
