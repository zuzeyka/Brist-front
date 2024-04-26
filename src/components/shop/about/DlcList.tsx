import React from 'react';

const DlcList: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto bg-white mb-8">
            <h2 className="text-2xl font-semibold mb-4">DLC та комплекти</h2>
            <div className="grid grid-cols-1 gap-4">
                <div className="h-20 bg-gray-200 rounded-lg" />
                <div className="h-20 bg-gray-200 rounded-lg" />
                <div className="h-20 bg-gray-200 rounded-lg" />
            </div>
        </div>
    );
};

export default DlcList;
