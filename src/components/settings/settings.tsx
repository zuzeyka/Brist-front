import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Head from '../main/head';
import Footer from '../main/footer';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Bell, LockKeyhole, SunMoon, UserRoundCog, UserRoundX, WalletIcon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import PageGlows from '@/components/ui/page-glows';
import Base from './pages/base';
import Notification from './pages/notification';
import Password from './pages/password';
import Delete from './pages/delete';
import Wallet from './pages/wallet';

const glows = [
    { left: 1472, top: 108, large: true },
    { left: 4, top: 1200, large: true },
];

interface PageContent {
    id: string;
    title: string;
    icon: JSX.Element;
    content: JSX.Element;
}


const Settings: React.FC = () => {
    const { t } = useTranslation();
    const [theme, setTheme] = useState(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    const [selectedPageId, setSelectedPageId] = useState<string | null>(null);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };


    const pages: PageContent[] = [
        { id: 'general', title: t('settings.general'), icon: <UserRoundCog className='w-5 h-5' />, content: <Base></Base> },
        { id: 'password', title: t('settings.password'), icon: <LockKeyhole className='w-5 h-5' />, content: <Password></Password> },
        { id: 'notifications', title: t('settings.notifications'), icon: <Bell />, content: <Notification isAcceptFriendRequest={true} isDeclineFriendRequest={true} isBigSale={true} isWishSale={true} isNewComment={true} isNewFriendRequest={true} isNewMessage={true} isNewMessageSound={true}></Notification> },
        { id: 'wallet', title: t('settings.wallet'), icon: <WalletIcon className='w-5 h-5' />, content: <Wallet balance={1000} transactions={[{ type: t('settings.walletSamplePurchase'), amount: -1000, date: new Date(Date.now()).toLocaleDateString() }, { type: t('settings.walletSampleTopUp'), amount: 2000, date: new Date(Date.now() - 1000 * 60 * 60 * 48).toLocaleDateString() }]}></Wallet> },
        { id: 'delete', title: t('settings.deleteAccount'), icon: <UserRoundX />, content: <Delete></Delete> },
    ];
    const selectedPage = pages.find((page) => page.id === selectedPageId) ?? pages[0];

    useEffect(() => {
        setSelectedPageId((id) => id ?? pages[0].id);
        document.documentElement.classList.toggle('dark', theme === 'dark');
        try {
            localStorage.setItem('theme', theme);
        } catch {
            // Storage unavailable; the theme still applies for this session.
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    return (
        <div className="relative bg-background">
            <PageGlows glows={glows} />
            <div className="relative">
                <Head></Head>
                <div className="max-w-[1464px] mx-auto flex gap-6 items-start pt-8 pb-[120px] text-typography">
                    <div className="w-[350px] shrink-0 bg-card2 rounded-2xl p-5 sticky top-5">
                        <Command className="bg-transparent">
                            <CommandInput className='bg-secondary' placeholder={t('settings.searchPlaceholder')} />
                            <CommandList>
                                <CommandEmpty>{t('settings.nothingFound')}</CommandEmpty>
                                <CommandItem className="aria-selected:bg-transparent">
                                    <div className='flex justify-between w-full'>
                                        <div className="flex items-center space-x-2">
                                            <SunMoon className='w-5 h-5' />
                                            <div>{t('settings.darkTheme')}</div>
                                        </div>
                                        <Switch className='!bg-background40' checked={theme === 'dark'} onClick={toggleTheme} />
                                    </div>
                                </CommandItem>
                                {pages.map((page) => (
                                    <CommandItem
                                        key={page.id}
                                        onSelect={() => setSelectedPageId(page.id)}
                                        className={'aria-selected:bg-transparent rounded-xl ' + (selectedPage?.id === page.id ? 'bg-cardLight25' : '')}
                                    >
                                        <div className='flex justify-between w-full'>
                                            <div className="flex items-center space-x-2">
                                                {page.icon && <>{page.icon}</>}
                                                <div>{page.title}</div>
                                            </div>
                                        </div>
                                    </CommandItem>
                                ))}
                            </CommandList>
                        </Command>
                    </div>
                    <div className="flex-1 min-w-0">
                        {selectedPage && selectedPage.content && <div>{selectedPage.content}</div>}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Settings;

