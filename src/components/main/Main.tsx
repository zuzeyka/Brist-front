import Categories from "./Categories";
import Footer from "./Footer";
import Head from "./Head";
import Search from "./Search";
import TopDeals from "./TopDeals";
import SliderCategories from "./SliderCategories";

const Main: React.FC = () => {
    const cards = [];
    const deals = [];
    for (let i = 0; i < 10; i++) {
        cards.push({
            gameName: `gameName${i}`,
            price: 1000,
            discount: 50,
            gamePictureUrl: `https://i.imgur.com/ufBjnf8.png?${i}`,
        });
        deals.push({
            gameName: `gameName${i}`,
            price: 1000,
            discount: 50,
            gamePictureUrl: `https://i.imgur.com/ufBjnf8.png`,
            aboutGame: "AboutGame",
            discountEnd: "2022-01-01",
        });
    };
    return (
        <div className="bg-background">
            <Head></Head>
            <Search></Search>
            <TopDeals games={deals}></TopDeals>
            <SliderCategories vertical={false} lable="Особливі пропозиціі" cards={cards}></SliderCategories>
            <SliderCategories vertical={true} lable="До 100₴" cards={cards}></SliderCategories>
            <SliderCategories vertical={true} lable="Рекомендовані вам" cards={cards}></SliderCategories>
            <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto bg-background">
                <Categories lable="Хіти продажу" cards={cards}></Categories>
                <Categories lable="Нові релізи" cards={cards}></Categories>
                <Categories lable="Безкоштовні пропозиціі" cards={cards}></Categories>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
