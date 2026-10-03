import Avatar from "@/components/ui/avatar/avatar";
import { BellIcon, SettingsIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from '@/components/authorization/auth-context';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Notifications from "../popups/notifications";

const Head: React.FC = () => {
    const { isAuthenticated } = useAuth();
    const currentPage = window.location.pathname.split('/')[1];
    const section = currentPage === 'library' ? 'library' : currentPage === 'chat' ? 'chat' : 'shop';
    return (
        <header className="bg-card1 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/">
                    <img src={document.documentElement.classList.contains('dark') ? "/src/assets/svg/logoDecorativeDark.svg" : "/src/assets/svg/logoDecorativeWhite.svg"} alt="logo" />
                </Link>
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link
                                className={"text-typography text-heading-3 hover:text-typographySecondary font-manrope font-bold flex items-center flex-col" + (section === 'shop' ? ' text-primaryHover' : '')}
                                to="/"
                            >
                                <div>Крамниця</div>
                                <div className={section === 'shop' ? 'bg-primaryHover h-2 w-2 rounded-full mt-1' : ''} />
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={"text-typography text-heading-3 hover:text-typographySecondary font-manrope font-bold flex items-center flex-col" + (section === 'library' ? ' text-primaryHover' : '')}
                                to={isAuthenticated ? "/library" : "/login"}
                            >
                                <div>Бібліотека</div>
                                <div className={section === 'library' ? 'bg-primaryHover h-2 w-2 rounded-full mt-1' : ''} />

                            </Link>
                        </li>
                        <li>
                            <Link
                                className={"text-typography text-heading-3 hover:text-typographySecondary font-manrope font-bold flex items-center flex-col" + (section === 'chat' ? ' text-primaryHover' : '')}
                                to={isAuthenticated ? "/chat" : "/login"}
                            >
                                <div>Чат</div>
                                <div className={section === 'chat' ? 'bg-primaryHover h-2 w-2 rounded-full mt-1' : ''} />

                            </Link>
                        </li>
                    </ul>
                </nav>
                {isAuthenticated ? (
                    <div className="flex items-center space-x-4">

                        <Link
                            className="bg-cardLight12 rounded-2xl p-2 w-10 h-10 text-typography text-sm hover:brightness-50"
                            to="/settings"
                        >
                            <SettingsIcon className="text-typography h-6 w-6" />
                        </Link>
                        <div className="bg-cardLight12 rounded-2xl p-2 w-10 h-10 text-white text-sm hover:brightness-50">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <BellIcon className="text-typography h-6 w-6" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-auto bg-card2">
                                    <Notifications />
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <Avatar alt="User Avatar" src="" className="w-10 h-10"></Avatar>
                    </div>
                ) : (<Button className="bg-secondary rounded-2xl text-typography hover:bg-cardLight12 font-semibold text-button-2"><Link

                    to="/login"
                >Увійти</Link></Button>)}

            </div>
        </header>
    );
};

export default Head;
