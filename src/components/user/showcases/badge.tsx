import React from "react";


const Badge: React.FC<{ bagesimageUrl: string[] }> = ({ bagesimageUrl }) => {
    if (bagesimageUrl.length >= 1) {
        return (
            <div className="bg-card2 rounded-2xl w-full p-4">
                <div className="flex flex-col">
                    <h2 className="text-heading-2 font-manrope font-bold">Галерея значків</h2>
                    <div className="flex space-x-4 justify-between">
                        <div className="flex w-1/4 flex-col bg-card1 rounded-2xl p-4 text-center mt-4">
                            <p className="font-bold text-heading-1 font-manrope">{bagesimageUrl.length}</p>
                            <p className="text-sign-1 text-typographySecondary">Значків</p>
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
