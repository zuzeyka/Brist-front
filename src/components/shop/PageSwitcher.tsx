import React, { useState } from 'react';
import AboutGame from './about/AboutGame';
import Community from './community/Community';

interface PageContent {
    title: string;
    content: JSX.Element;
}

const pages: PageContent[] = [
    { title: 'Про ігру', content: <AboutGame gameName='Якась гра, яка дуже всім сподобається'></AboutGame> },
    { title: 'Характеристики', content: <AboutGame gameName='Якась гра, яка дуже всім сподобається'></AboutGame> },
    { title: 'Спільнота', content: <Community gameName='Якась гра, яка дуже всім сподобається'></Community> },
];

interface PageSwitcherProps {
    className?: string;
}
const PageSwitcher: React.FC<PageSwitcherProps> = (props) => {
    const [activePageIndex, setActivePageIndex] = useState(0);

    const handleClick = (index: number) => {
        setActivePageIndex(index);
    };

    const activePage = pages[activePageIndex];
    return (
        <div className={"page-switcher" + props.className}>
            <ul className="button-list flex space-x-2">
                {pages.map((page, index) => (
                    <li key={index}>
                        <button
                            className={`page-button text-black ${activePageIndex === index ? 'active underline' : ''
                                }`}
                            onClick={() => handleClick(index)}
                        >
                            {page.title}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="page-content">{activePage.content}</div>
        </div>
    );
};

export default PageSwitcher;

