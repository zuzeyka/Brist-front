import { useEffect, useState } from 'react';
import Head from '../main/head';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Bell, DollarSign, LockKeyhole, SunMoon, UserRoundCog, UserRoundX } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import Base from './pages/base';
import Notification from './pages/notification';
import Password from './pages/password';
import Delete from './pages/delete';
import Wallet from './pages/wallet';

interface PageContent {
    title: string;
    icon: JSX.Element;
    content: JSX.Element;
}


const Settings: React.FC = () => {
    const [theme, setTheme] = useState(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    const [selectedPage, setSelectedPage] = useState<PageContent | null>(null);

    const handleSelectPage = (page: PageContent) => {
        setSelectedPage(page);
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };


    const pages: PageContent[] = [
        { title: 'Загальні налаштування', icon: <UserRoundCog className='w-5 h-5' />, content: <Base name="name" email="email" about="about" avaterUrl="https://i.imgur.com/ufBjnf8.png" backgroundUrl="https://i.imgur.com/ufBjnf8.png"></Base> },
        { title: 'Пароль', icon: <LockKeyhole className='w-5 h-5' />, content: <Password></Password> },
        { title: 'Сповіщення', icon: <Bell />, content: <Notification isAcceptFriendRequest={true} isDeclineFriendRequest={true} isBigSale={true} isWishSale={true} isNewComment={true} isNewFriendRequest={true} isNewMessage={true} isNewMessageSound={true}></Notification> },
        { title: 'Гаманець', icon: <DollarSign />, content: <Wallet balance={1000} transactions={[{ type: 'Якась гра, яка дуже всім сподобається', amount: -1000, date: new Date(Date.now()).toLocaleDateString() }, { type: 'Поповнення балансу', amount: 2000, date: new Date(Date.now() - 1000 * 60 * 60 * 48).toLocaleDateString() }]}></Wallet> },
        { title: 'Видалення акаунта', icon: <UserRoundX />, content: <Delete></Delete> },
    ];

    useEffect(() => {
        setSelectedPage(pages[0]);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <>
            <Head></Head>
            <div className="max-w-7xl mx-auto flex">
                <div className="w-1/4 bg-background rounded-2xl mt-5 h-1/4 p-5 sticky top-5">
                    <Command>
                        <CommandInput className='bg-secondary' placeholder="Пошук налаштувань" />
                        <CommandList>
                            <CommandEmpty>Нічого не знайдено</CommandEmpty>
                            <CommandItem>
                                <div className='flex justify-between w-full'>
                                    <div className="flex items-center space-x-2">
                                        <SunMoon className='w-5 h-5' />
                                        <div>Темна тема</div>
                                    </div>
                                    <Switch className='!bg-background40' checked={theme === 'dark'} onClick={toggleTheme} />
                                </div>
                            </CommandItem>
                            {pages.map((page, index) => (
                                <CommandItem
                                    key={index}
                                    onSelect={() => handleSelectPage(page)}
                                    className={selectedPage?.title === page.title ? 'bg-primary' : ''}
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
                    <div className="h-full bg-background p-5">
                        {selectedPage && selectedPage.content && <div>{selectedPage.content}</div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;

