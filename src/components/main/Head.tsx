import Avatar from "@/components/ui/avatar/Avatar";
import { BellIcon, SettingsIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Head: React.FC = () => {
    return (
        <header className="bg-card1 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/">
                    <h1 className="text-white font-bold text-xl">Slush</h1>
                </Link>
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link
                                className="text-typography text-heading-3 hover:text-gray-300 text-manrope"
                                to="/store"
                            >
                                Крамниця
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-typography text-heading-3 hover:text-gray-300"
                                to="/library"
                            >
                                Бібліотека
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-typography text-heading-3 hover:text-gray-300"
                                to="/chat"
                            >
                                Чат
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link
                        className="bg-cardLight12 rounded-2xl p-2 w-10 h-10 text-typography text-sm hover:brightness-50"
                        to="/settings"
                    >
                        <SettingsIcon className="text-typography h-6 w-6" />
                    </Link>
                    <div className="bg-cardLight12 rounded-2xl p-2 w-10 h-10 text-white text-sm hover:brightness-50">
                        <BellIcon className="text-typography h-6 w-6" />
                    </div>
                    <Avatar alt="User Avatar" src="" className="w-10 h-10"></Avatar>
                </div>
            </div>
        </header>
    );
};

export default Head;
