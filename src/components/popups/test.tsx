import React from "react";
import Catalog from "./catalog";
import NewCollection from "./new-collection";
import NewReview from "./new-review";
import Notifications from "./notifications";

// Dev sandbox for popups that don't have a live entry point yet. Discussion/guide/
// screenshot/video creation and the friends list moved to the real, matched
// components (shop/community/create-post.tsx, shop/about/friends.tsx) and were
// removed from here — see WORKLOG.
const Test: React.FC = () => {
    return (
        <div className="flex flex-col gap-5">
            <Catalog></Catalog>
            <Notifications></Notifications>
            <NewCollection></NewCollection>
            <NewReview></NewReview>
        </div>
    );
};

export default Test;
