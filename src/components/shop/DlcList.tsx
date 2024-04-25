import React from 'react';

const GameContent: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white mb-8">
            <h2 className="text-2xl font-semibold mb-4">DLC та комплекти</h2>
            <div className="grid grid-cols-1 gap-4">
                <div className="h-20 bg-gray-200 rounded-lg" />
                <div className="h-20 bg-gray-200 rounded-lg" />
                <div className="h-20 bg-gray-200 rounded-lg" />
            </div>
        </div>
    );
};

export default GameContent;
