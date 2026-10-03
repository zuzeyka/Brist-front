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
    counts?: number[];
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
        <>
            <ul className={props.vertical ? "flex flex-col space-y-2" : "flex gap-8"}>
                {props.pages.map((page, index) => (
                    <li key={index} className={props.vertical ? `self-start px-3 py-2 text-subheading-1 rounded-xl font-bold w-full hover:bg-cardLight25 flex justify-between ${activePageIndex === index ? 'bg-cardLight25' : ''
                        }` : ""}>
                        {props.vertical ? (
                            <button
                                className={`page-button text-heading-2 hover:text-typography ${activePageIndex === index ? 'text-typography' : 'text-typographySecondary'}` + (props.className ? ' ' + props.className : '')}
                                onClick={() => handleClick(index)}
                            >
                                {page.title}
                            </button>
                        ) : (
                            // "Tabs lvl2": Manrope 24, active tab in primary with a 3px bar under it.
                            <button
                                className={`flex flex-col justify-between h-10 font-manrope font-bold text-heading-2 ${activePageIndex === index ? 'text-primary' : 'text-typographySecondary hover:text-typography'}` + (props.className ? ' ' + props.className : '')}
                                onClick={() => handleClick(index)}
                            >
                                {page.title}
                                <span className={`h-[3px] w-full rounded-sm bg-primary ${activePageIndex === index ? '' : 'opacity-0'}`} />
                            </button>
                        )}
                        {props.counts && <div className="justify-center px-3 py-1 rounded-3xl bg-cardLight25 text-sign-2 font-bold text-typographySecondary">{props.counts[index]}</div>}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default PageSwitcher;

