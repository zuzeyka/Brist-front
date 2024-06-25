import Avatar from '@/components/ui/avatar/avatar';
import React from 'react';
import { UserData } from './about-game';
import { useAuth } from '@/components/authorization/auth-context';


const Friends: React.FC<{ wishedFriends: UserData[], ownedFriends: UserData[] }> = ({ wishedFriends, ownedFriends }) => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) return null;
    return (
        <>
            <div className='bg-card1 p-4 mt-4 rounded-2xl font-artifakt text-typography'>
                <span className='font-semibold text-typography'>Друзів бажають цю гру: {wishedFriends.length}</span>
                {wishedFriends.slice(0, Math.ceil(ownedFriends.length / 2)).map((friend, index) => (
                    <div key={index} className='flex items-center my-2 space-x-2 bg-card2 rounded-2xl'>
                        <Avatar src={friend.avatarUrl} alt='Avatar' className='w-8 h-8'></Avatar>
                        <span className='font-bold text-sign-2'>{friend.name}</span>
                    </div>
                ))}
            </div>
            <div className='bg-card1 p-4 mt-4 rounded-2xl font-artifakt text-typography'>
                <span className='font-semibold text-typography'>Друзів мають цю гру: {ownedFriends.length}</span>
                {ownedFriends.slice(Math.ceil(ownedFriends.length / 2)).map((friend, index) => (
                    <div key={index} className='flex items-center my-2 space-x-2 bg-card2 rounded-2xl'>
                        <Avatar src={friend.avatarUrl} alt='Avatar' className='w-8 h-8'></Avatar>
                        <span className='font-bold text-sign-2'>{friend.name}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Friends;
