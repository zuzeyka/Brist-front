import React from "react";



const Video: React.FC<{ videosUrl: string[] }> = ({ videosUrl }) => {
    if (videosUrl.length >= 1) {
        return (
            <div className="bg-gray-200 rounded-2xl w-full p-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-lg font-semibold">Галерея відео</h2>
                    <video className="w-full h-96 object-cover rounded-2xl" height="100" controls src={videosUrl[0]}></video>
                    {videosUrl.length == 2 ? (<video className="w-full h-96 object-cover rounded-2xl" height="100" controls src={videosUrl[1]}></video>) : (
                        <div className="flex space-x-2">
                            {videosUrl.slice(1, 3).map((url) => (
                                <video
                                    key={url}
                                    src={url}
                                    height="100"
                                    controls
                                    className={"h-32 object-cover rounded-2xl" + (videosUrl.length == 3 ? " w-1/2" : " w-1/3")}
                                />
                            ))}
                            {videosUrl.length > 3 ? (<div className="h-32 w-1/3 object-cover rounded-2xl bg-gray-400 flex items-center justify-center text-white text-3xl">+{videosUrl.length - 3}</div>) : null}
                        </div>
                    )}
                </div>
            </div>
        );
    }
};

export default Video;
