import Categories from "./BoxCategories";
import Footer from "./Footer";
import Head from "./Head";
import Search from "./Search";
import Slider from "./Slider";
import SliderCategories from "./SliderCategories";

const Main: React.FC = () => {
	return (
		<>
			<Head></Head>
			<Search></Search>
			<Slider></Slider>
			<SliderCategories></SliderCategories>
			<Categories></Categories>
			<Footer></Footer>
		</>
	);
};

export default Main;
