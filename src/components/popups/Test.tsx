import React from "react";
import Catalog from "./Catalog";
import NewCollection from "./new-collection";
import NewDiscussion from "./new-discussion";
import NewGuide from "./new-guide";
import NewReview from "./new-review";
import NewScreenshot from "./new-screenshot";
import NewVideo from "./new-video";
import WishedFriends from "./wished-friends";
import Notifications from "./notifications";


const Test: React.FC = () => {
    return (
        <div className="flex flex-col gap-5">
            <Catalog></Catalog>
            <Notifications></Notifications>
            <NewCollection></NewCollection>
            <NewDiscussion></NewDiscussion>
            <NewGuide></NewGuide>
            <NewReview></NewReview>
            <NewScreenshot></NewScreenshot>
            <NewVideo></NewVideo>
            <WishedFriends></WishedFriends>
        </div>
    );
};

export default Test;
