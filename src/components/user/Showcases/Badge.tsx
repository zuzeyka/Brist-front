import React from "react";


const Badge: React.FC<{ bagesimageUrl: string[] }> = ({ bagesimageUrl }) => {
    if (bagesimageUrl.length >= 1) {
        return (
            <div className="bg-gray-200 rounded-2xl w-full p-4">
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold">Галерея значків</h2>
                    <div className="flex space-x-4 justify-between">
                        <div className="flex w-1/4 flex-col bg-white rounded-2xl p-4 text-center mt-4">
                            <p className="font-semibold text-lg">{bagesimageUrl.length}</p>
                            <p>Значків</p>
                        </div>
                        <div className="flex space-x-8 mt-4 pr-20">
                            {bagesimageUrl.slice(0, 5).map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    className="w-20 h-20 object-cover rounded-2xl"
                                    alt="badge"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Badge;
