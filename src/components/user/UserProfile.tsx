import { useState } from 'react';
import Footer from '../main/Footer';
import Head from '../main/Head';
import UserHeader from './UserHeader';
import UserMenu from './UserMenu';

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
                        <UserMenu onMoveContentToParent={handleMoveContentToParent} levelPoints={1250} gamesCount={10} bagesCount={10} whishesCount={10} screenshotsCount={10} reviewsCount={10} videosCount={10} guidesCount={10} friends={[{ name: 'name', isOnline: true, level: 11, avatarUrl: 'https://i.pravatar.cc/100' }, { name: 'name', isOnline: false, level: 10, avatarUrl: 'https://i.pravatar.cc/200' }, { name: 'name', isOnline: true, level: 12, avatarUrl: 'https://i.pravatar.cc/300' }, { name: 'name', isOnline: true, level: 13, avatarUrl: 'https://i.pravatar.cc/400' }, { name: 'name', isOnline: false, level: 15, avatarUrl: 'https://i.pravatar.cc/700' }]}></UserMenu>
                    </div>
                </div>
                <div className='col-span-3 pb-4 flex-grow'>{content}</div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default UserProfile;
