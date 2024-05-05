import Footer from '../main/Footer';
import Head from '../main/Head';
import Search from '../main/Search';
import PageSwitcher from './PageSwitcher';

export interface UserData {
    name: string;
    avatarUrl?: string;
}

const Store: React.FC = () => {
    return (
        <>
            <Head></Head>
            <Search></Search>

            <div className="max-w-7xl mx-auto bg-white">
                <PageSwitcher></PageSwitcher>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Store;
