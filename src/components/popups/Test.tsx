import React from "react";
import Catalog from "./Catalog";
import NewCollection from "./NewCollection";
import NewDiscussion from "./NewDiscussion";
import NewGuide from "./NewGuide";
import NewReview from "./NewReview";
import NewScreenshot from "./NewScreenshot";
import NewVideo from "./NewVideo";
import WishedFriends from "./WishedFriends";
import Notifications from "./Notifications";


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
