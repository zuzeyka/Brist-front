import React, { useState } from 'react';
import AboutGame from './about/AboutGame';
import Community from './community/Community';

interface PageContent {
    title: string;
    content: JSX.Element;
}

const pages: PageContent[] = [
    { title: 'Про ігру', content: <AboutGame price={1000} discount={50} gameName='Якась гра, яка дуже всім сподобається' gameDescription='Lorem ipsum, dolor sit amet consectetur adipisicing elit.Minima harum officiis laborum assumenda ad, maxime ipsum laudantium fugit quisquam repudiandae explicabo voluptatem sapiente optio porro neque pariatur eligendi voluptatibus impedit voluptate officia.Temporibus illo assumenda iure commodi placeat autem suscipit odit, itaque fugiat vel debitis quidem quia delectus, provident molestiae sint labore ullam saepe natus officia voluptate! Nesciunt et sunt quas ad, quis illo perferendis minima deserunt ullam maxime nulla ea, perspiciatis voluptate cum molestiae.Quisquam molestiae expedita aspernatur quae explicabo, ducimus fuga vero.Nihil saepe impedit dolorem officiis qui recusandae at obcaecati error deleniti provident.Quasi hic veritatis iusto!' gameCategorys={['шутер', 'екшн', 'виживання', 'наукова фантастика', 'відкритий світ', 'многокористувацька']}></AboutGame> },
    {
        title: 'Характеристики', content: <AboutGame price={1000} discount={50} gameName='Якась гра, яка дуже всім сподобається' gameDescription='Lorem ipsum, dolor sit amet consectetur adipisicing elit.Minima harum officiis laborum assumenda ad, maxime ipsum laudantium fugit quisquam repudiandae explicabo voluptatem sapiente optio porro neque pariatur eligendi voluptatibus impedit voluptate officia.Temporibus illo assumenda iure commodi placeat autem suscipit odit, itaque fugiat vel debitis quidem quia delectus, provident molestiae sint labore ullam saepe natus officia voluptate! Nesciunt et sunt quas ad, quis illo perferendis minima deserunt ullam maxime nulla ea, perspiciatis voluptate cum molestiae.Quisquam molestiae expedita aspernatur quae explicabo, ducimus fuga vero.Nihil saepe impedit dolorem officiis qui recusandae at obcaecati error deleniti provident.Quasi hic veritatis iusto!' gameCategorys={['Ігри', 'Ігри', 'Ігри', 'Ігри', 'Ігри', 'Ігри']}></AboutGame>
    },
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

