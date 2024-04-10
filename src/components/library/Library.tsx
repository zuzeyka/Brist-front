import Footer from '../main/Footer';
import Head from '../main/Head';
import Community from './Community';
import Games from './Games';
import News from './News';
import Search from './Search';

const Library: React.FC = () => {
  return (
    <>
      <Head></Head>
      <div className="bg-white">
        <div className="flex">
          <Games></Games>
          <Search></Search>
          <News></News>
          <Community></Community>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Library;
