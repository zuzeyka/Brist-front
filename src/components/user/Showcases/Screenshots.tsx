import React from "react";



const Screenshots: React.FC<{ screenshotsUrl: string[] }> = ({ screenshotsUrl }) => {
    if (screenshotsUrl.length >= 1) {
        return (
            <div className="bg-gray-200 rounded-2xl w-full p-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-lg font-semibold">Галерея скріншотів</h2>
                    <img className="w-full h-96 object-cover rounded-2xl" src={screenshotsUrl[0]} alt="Game screenshot"></img>
                    {screenshotsUrl.length == 2 ? (<img className="w-full h-96 object-cover rounded-2xl" src={screenshotsUrl[1]} alt="Game screenshot"></img>) : (
                        <div className="flex space-x-2">
                            {screenshotsUrl.slice(1, 3).map((url) => (
                                <img
                                    key={url}
                                    src={url}
                                    className={"h-32 object-cover rounded-2xl" + (screenshotsUrl.length == 3 ? " w-1/2" : " w-1/3")}
                                    alt="game"
                                />
                            ))}
                            {screenshotsUrl.length > 3 ? (<div className="h-32 w-1/3 object-cover rounded-2xl bg-gray-400 flex items-center justify-center text-white text-3xl">+{screenshotsUrl.length - 3}</div>) : null}
                        </div>
                    )}
                </div>
            </div>
        );
    }
};

export default Screenshots;
