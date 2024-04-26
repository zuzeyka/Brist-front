import Footer from '../main/Footer';
import Head from '../main/Head';
import Search from '../main/Search';
import Payment from './Payment';
import PageSwitcher from './PageSwitcher';

const Store: React.FC = () => {
    return (
        <>
            <Head></Head>
            <Search></Search>

            <div className="fixed top-[9em] right-[6vh] max-w-[12vw] z-10">
                <Payment className="sticky"></Payment>
            </div>
            <div className="max-w-7xl mx-auto p-6 bg-white mb-8">
                <PageSwitcher></PageSwitcher>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Store;
