import React from "react";
import Head from "../main/Head";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import UserList from "./UserList";

const Chat: React.FC = () => {
    return (
        <div className="h-screen w-screen grid grid-rows-[auto_1fr]">
            <Head />
            <ResizablePanelGroup
                direction="horizontal"
                className="flex h-full w-full"
            >
                <ResizablePanel defaultSize={25}>
                    <UserList />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                    <div className="flex flex-col h-full items-center justify-center p-6">
                        <span className="font-semibold">Content</span>
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={25}>
                    <div className="flex h-full items-center justify-center p-6">
                        <span className="font-semibold">Bar</span>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}

export default Chat;
