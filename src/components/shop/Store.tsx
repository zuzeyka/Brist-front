import Footer from '../main/Footer';
import Head from '../main/Head';
import Search from '../main/Search';
import PageSwitcher from './PageSwitcher';

const Store: React.FC = () => {
    return (
        <>
            <Head></Head>
            <Search></Search>

            <div className="max-w-7xl mx-auto p-6 bg-white mb-8">
                <PageSwitcher></PageSwitcher>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Store;
