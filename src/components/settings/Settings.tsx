import { useState } from 'react';
import Head from '../main/Head';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { Bell, DollarSign, LockKeyhole, SunMoon, UserRoundCog, UserRoundX } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import Base from './Pages/Base';
import Notification from './Pages/Notification';
import Password from './Pages/Password';
import Delete from './Pages/Delete';
import Wallet from './Pages/Wallet';

interface PageContent {
    title: string;
    icon: JSX.Element;
    content: JSX.Element;
}


const Settings: React.FC = () => {
    const [selectedPage, setSelectedPage] = useState<PageContent | null>(null);

    const handleSelectPage = (page: PageContent) => {
        setSelectedPage(page);
    };


    const pages: PageContent[] = [
        { title: 'Загальні налаштування', icon: <UserRoundCog className='w-5 h-5' />, content: <Base name="name" email="email" about="about" avaterUrl="https://i.imgur.com/ufBjnf8.png" backgroundUrl="https://i.imgur.com/ufBjnf8.png"></Base> },
        { title: 'Пароль', icon: <LockKeyhole className='w-5 h-5' />, content: <Password oldhash='1'></Password> },
        { title: 'Сповіщення', icon: <Bell />, content: <Notification isAcceptFriendRequest={true} isDeclineFriendRequest={true} isBigSale={true} isWishSale={true} isNewComment={true} isNewFriendRequest={true} isNewMessage={true} isNewMessageSound={true}></Notification> },
        { title: 'Гаманець', icon: <DollarSign />, content: <Wallet balance={1000} transactions={[{ type: 'Якась гра, яка дуже всім сподобається', amount: -1000, date: '2022-01-01' }, { type: 'Поповнення балансу', amount: 2000, date: '2022-01-01' }]}></Wallet> },
        { title: 'Видалення акаунта', icon: <UserRoundX />, content: <Delete nick="name" passwordHash="1"></Delete> },
    ];

    return (
        <>
            <Head></Head>
            <div className="max-w-7xl mx-auto flex">
                <div className="w-1/4 bg-gray-100 rounded-2xl mt-5 h-1/4 p-5 sticky top-5">
                    <Command>
                        <CommandInput placeholder="Пошук налаштувань" />
                        <CommandList>
                            <CommandEmpty>Нічого не знайдено</CommandEmpty>
                            <CommandItem>
                                <div className='flex justify-between w-full'>
                                    <div className="flex items-center space-x-2">
                                        <SunMoon className='w-5 h-5' />
                                        <div>Темна тема</div>
                                    </div>
                                    <Switch />
                                </div>
                            </CommandItem>
                            {pages.map((page, index) => (
                                <CommandItem
                                    key={index}
                                    onSelect={() => handleSelectPage(page)}
                                    className={selectedPage === page ? 'bg-gray-200' : ''}
                                >
                                    <div className='flex justify-between w-full'>
                                        <div className="flex items-center space-x-2">
                                            {page.icon && <>{page.icon}</>}

                                            <div>{page.title}</div>
                                        </div>
                                        {selectedPage === page && page.content && <div className="mt-2">{page.content}</div>}
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandList>
                    </Command>
                </div>
                <div className="w-11/12">
                    <div className="h-full bg-white p-5">
                        {selectedPage && selectedPage.content && <div>{selectedPage.content}</div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;



