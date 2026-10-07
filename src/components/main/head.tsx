import Avatar from "@/components/ui/avatar/avatar";
import { BellIcon, SettingsIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from '@/components/authorization/auth-context';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Notifications from "../popups/notifications";
import { cn } from "@/shared/lib/utils";

const iconButton = "bg-cardLight12 hover:bg-cardLight25 p-3.5 rounded-[20px] text-typography";

const Head: React.FC = () => {
    const { t } = useTranslation();
    const { isAuthenticated, userName, userAvatarUrl } = useAuth();
    const currentPage = window.location.pathname.split('/')[1];
    const section = currentPage === 'library' ? 'library' : currentPage === 'chat' ? 'chat' : 'shop';

    const tabs = [
        { id: 'shop', label: t('header.store'), to: '/' },
        { id: 'library', label: t('header.library'), to: isAuthenticated ? '/library' : '/login' },
        { id: 'chat', label: t('header.chat'), to: isAuthenticated ? '/chat' : '/login' },
    ];

    return (
        <header className="relative bg-card1 h-[90px]">
            <div className="max-w-[1464px] h-full mx-auto flex justify-between items-center">
                <Link to="/">
                    <img className="w-[100px]" src={document.documentElement.classList.contains('dark') ? "/src/assets/svg/logoDecorativeDark.svg" : "/src/assets/svg/logoDecorativeWhite.svg"} alt="Slush" />
                </Link>
                <nav className="absolute left-1/2 -translate-x-1/2 top-[31px]">
                    <ul className="flex gap-[35px]">
                        {tabs.map((tab) => (
                            <li key={tab.id}>
                                <Link
                                    className={cn(
                                        "flex flex-col items-center gap-1.5 font-manrope font-bold text-heading-3",
                                        section === tab.id ? "text-primaryHover" : "text-typography hover:text-primaryHover",
                                    )}
                                    to={tab.to}
                                >
                                    {tab.label}
                                    {section === tab.id && <span className="bg-primaryHover size-2 rounded-full" />}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {isAuthenticated ? (
                    <div className="flex items-center gap-2">
                        <Link className={iconButton} to="/settings" aria-label={t('header.settings')}>
                            <SettingsIcon className="h-6 w-6" />
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger className={iconButton} aria-label={t('header.notifications')}>
                                <BellIcon className="h-6 w-6" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-auto bg-card2">
                                <Notifications />
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Avatar alt={t('header.profile')} src={userAvatarUrl ?? ''} name={userName} className="size-[52px]" />
                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="bg-secondary hover:bg-secondaryHover rounded-[20px] px-6 py-3.5 font-artifakt font-semibold text-button-2 text-typography"
                    >
                        {t('header.login')}
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Head;
