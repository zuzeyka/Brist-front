import Avatar from '@/components/ui/avatar/avatar';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserData } from './about-game';
import { useAuth } from '@/components/authorization/auth-context';

const MAX_SHOWN = 7;

const FriendsBox: React.FC<{ title: string; friends: UserData[] }> = ({ title, friends }) => {
    if (!friends.length) return null;
    const hidden = friends.length - MAX_SHOWN;
    return (
        <div className='flex flex-col gap-5 bg-card1 p-5 rounded-[20px] text-typography'>
            <p className='text-heading-3'>
                <span className='font-manrope font-bold'>{title}:</span>{' '}
                <span className='font-artifakt tracking-[-0.01em]'>{friends.length}</span>
            </p>
            <div className='flex flex-wrap gap-2'>
                {friends.slice(0, MAX_SHOWN).map((friend) => (
                    // "Username card"
                    <div key={friend.name} className='flex items-center gap-3 pr-4 bg-card2 rounded-[20px]'>
                        <Avatar src={friend.avatarUrl} alt='' name={friend.name} className='size-9' />
                        <span className='font-artifakt font-bold text-sign-2 tracking-[-0.01em]'>{friend.name}</span>
                    </div>
                ))}
                {hidden > 0 && (
                    <span className='flex items-center justify-center w-9 py-2 rounded-[20px] bg-cardLight25 font-artifakt text-sign-2 text-typographySecondary'>+{hidden}</span>
                )}
            </div>
        </div>
    );
};

const Friends: React.FC<{ wishedFriends: UserData[], ownedFriends: UserData[] }> = ({ wishedFriends, ownedFriends }) => {
    const { t } = useTranslation();
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) return null;
    return (
        <div className='flex flex-col gap-5'>
            <FriendsBox title={t('shop.about.friendsWish')} friends={wishedFriends} />
            <FriendsBox title={t('shop.about.friendsOwn')} friends={ownedFriends} />
        </div>
    );
};

export default Friends;
