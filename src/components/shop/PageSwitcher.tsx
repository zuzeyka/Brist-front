import React, { useEffect, useState } from 'react';

interface PageContent {
    title: string;
    content: JSX.Element;
}

interface PageSwitcherProps {
    className?: string;
    pages: PageContent[];
    onMoveContentToParent: (node: React.ReactNode) => void;
    vertical?: boolean;
}
const PageSwitcher: React.FC<PageSwitcherProps> = (props) => {
    const [activePageIndex, setActivePageIndex] = useState(0);

    const handleClick = (index: number) => {
        setActivePageIndex(index);
        props.onMoveContentToParent(pageContent);
    };

    const activePage = props.pages[activePageIndex];
    const pageContent = (<>{activePage.content}</>);
    useEffect(() => {
        props.onMoveContentToParent(props.pages[activePageIndex].content);
    }, [activePageIndex, props.onMoveContentToParent]);
    return (
        <div>
            <ul className={props.vertical ? "flex flex-col space-y-2" : "flex space-x-2"}>
                {props.pages.map((page, index) => (
                    <li key={index}>
                        <button
                            className={`page-button text-heading-2 hover:text-typography ${activePageIndex === index ? 'active underline text-primary' : 'text-typographySecondary'
                                }` + (props.className ? ' ' + props.className : '')}
                            onClick={() => handleClick(index)}
                        >
                            {page.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PageSwitcher;

