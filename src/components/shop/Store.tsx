import Footer from '../main/Footer';
import Head from '../main/Head';
import Search from '../main/Search';
import DlcList from './DlcList';
import GameContent from './GameContent';
import Payment from './Payment';
import ReviewCard from './ReviewCard';

const Store: React.FC = () => {
    return (
        <>
            <Head></Head>
            <Search></Search>

            <div className="fixed top-[9em] right-[6vh] max-w-[20vw]">
                <Payment className="sticky"></Payment>
            </div>
            <div className="max-w-4xl mx-auto p-6 bg-white mb-8">
                <GameContent></GameContent>
            </div>
            <DlcList></DlcList>
            <div className="max-w-4xl mx-auto p-6 bg-white mb-8 flex flex-wrap gap-4 justify-between">
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Store;
