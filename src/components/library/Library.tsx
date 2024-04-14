import Footer from '../main/Footer';
import Head from '../main/Head';
import Collections from './Collections';
import Community from './Community';
import Games from './Games';
import News from './News';
import Search from './Search';

const Library: React.FC = () => {
  return (
    <>
      <Head></Head>
      <div className="bg-white flex">
        <Games></Games>
        <div className="flex flex-col p-5">
          <Search></Search>
          <News></News>
          <Community></Community>
          <Collections></Collections>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Library;
