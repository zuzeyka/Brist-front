import { useMemo, useState } from 'react';
import Footer from '../main/Footer';
import Head from '../main/Head';
import Search from '../main/Search';
import PageSwitcher from './PageSwitcher';
import AboutGame from './about/AboutGame';
import Characteristics from './characteristics/Characteristics';
import Community from './community/Community';

const Store: React.FC = () => {
    const pages = useMemo(() => [
    { title: 'Про ігру', content: <AboutGame price={1000} discount={50} gameName='Якась гра, яка дуже всім сподобається' gameDescription='Lorem ipsum, dolor sit amet consectetur adipisicing elit.Minima harum officiis laborum assumenda ad, maxime ipsum laudantium fugit quisquam repudiandae explicabo voluptatem sapiente optio porro neque pariatur eligendi voluptatibus impedit voluptate officia.Temporibus illo assumenda iure commodi placeat autem suscipit odit, itaque fugiat vel debitis quidem quia delectus, provident molestiae sint labore ullam saepe natus officia voluptate! Nesciunt et sunt quas ad, quis illo perferendis minima deserunt ullam maxime nulla ea, perspiciatis voluptate cum molestiae.Quisquam molestiae expedita aspernatur quae explicabo, ducimus fuga vero.Nihil saepe impedit dolorem officiis qui recusandae at obcaecati error deleniti provident.Quasi hic veritatis iusto!' gameCategorys={['шутер', 'екшн', 'виживання', 'наукова фантастика', 'відкритий світ', 'многокористувацька']}></AboutGame> },
    {
        title: 'Характеристики', content: <Characteristics gameName='Якась гра, яка дуже всім сподобається' price={1000} discount={50}></Characteristics>
    },
    { title: 'Спільнота', content: <Community gameName='Якась гра, яка дуже всім сподобається'></Community> }
    ], []);
    const [content, setContent] = useState<React.ReactNode>(null);

    const handleMoveContentToParent = (node: React.ReactNode) => {
        setContent(node);
    };
    return (
        <>
            <Head></Head>
            <Search></Search>
            <div className="max-w-7xl mx-auto bg-white">
                <PageSwitcher onMoveContentToParent={handleMoveContentToParent} pages={pages}></PageSwitcher>
            {content}
            </div>
            <Footer></Footer>
        </>
    );
};

export default Store;
