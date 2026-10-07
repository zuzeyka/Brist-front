import React from "react";
import Catalog from "./catalog";
import NewCollection from "./new-collection";
import Notifications from "./notifications";

// Dev sandbox for popups that don't have a live entry point yet. Discussion/guide/
// screenshot/video/review creation and the friends list moved to the real, matched
// components (shop/community/create-post.tsx, shop/about/friends.tsx,
// shop/about/review-list.tsx) and were removed from here — see WORKLOG.
const Test: React.FC = () => {
    return (
        <div className="flex flex-col gap-5">
            <Catalog></Catalog>
            <Notifications></Notifications>
            <NewCollection></NewCollection>
        </div>
    );
};

export default Test;
