import { useState } from 'react';
import Footer from '../main/footer';
import Head from '../main/head';
import UserHeader from './user-header';
import UserMenu from './user-menu';

const UserProfile: React.FC = () => {
    const userBackgroundUrl: string = '';
    const [content, setContent] = useState<React.ReactNode>(null);

    const handleMoveContentToParent = (node: React.ReactNode) => {
        setContent(node);
    };
    return (
        <>
            <Head></Head>
            <div className="max-w-7xl mx-auto bg-background grid grid-cols-4 grid-rows-2">
                {userBackgroundUrl ? <img src={userBackgroundUrl} alt="User background" className="w-full h-full object-cover col-span-4 rounded-br-md" /> : <div className="w-full h-full bg-gradient-to-br from-primary via-negative to-accent col-span-4 rounded-br-md"></div>}
                <UserHeader className='col-span-3 h-40' userAvatarUrl='https://i.pravatar.cc/600' userName='test username' isOnline={true} about='lorem ipsum dolor sit amet consectetur.'></UserHeader>
                <div className='py-4 pl-4 row-span-12'>
                    <div className='sticky top-1 z-9'>
                        <UserMenu onMoveContentToParent={handleMoveContentToParent} levelPoints={1250} gamesCount={10} bagesCount={10} whishesCount={10} screenshotsCount={10} reviewsCount={10} videosCount={10} guidesCount={10} friends={[{ name: 'name', isOnline: true, levelPoints: 1750, avatarUrl: 'https://i.pravatar.cc/100' }, { name: 'name', isOnline: false, levelPoints: 5345, avatarUrl: 'https://i.pravatar.cc/200' }, { name: 'name', isOnline: true, levelPoints: 1250, avatarUrl: 'https://i.pravatar.cc/300' }, { name: 'name', isOnline: true, levelPoints: 65445, avatarUrl: 'https://i.pravatar.cc/400' }, { name: 'name', isOnline: false, levelPoints: 15000, avatarUrl: 'https://i.pravatar.cc/700' }]}></UserMenu>
                    </div>
                </div>
                <div className='col-span-3 pb-4 flex-grow'>{content}</div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default UserProfile;
