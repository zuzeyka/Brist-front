import Avatar from "@/components/ui/avatar/Avatar";
import { BellIcon, SettingsIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Head: React.FC = () => {
    return (
        <header className="bg-[#333333] py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/">
                    <h1 className="text-white font-bold text-xl">Slush</h1>
                </Link>
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link
                                className="text-white text-sm hover:text-gray-300"
                                to="/store"
                            >
                                Крамниця
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-white text-sm hover:text-gray-300"
                                to="/library"
                            >
                                Бібліотека
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-white text-sm hover:text-gray-300"
                                to="/chat"
                            >
                                Чат
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link
                        className="bg-gray-400 rounded-2xl p-2 w-10 h-10 text-white text-sm hover:text-gray-300"
                        to="/settings"
                    >
                        <SettingsIcon className="text-white h-6 w-6" />
                    </Link>
                    <div className="bg-gray-400 rounded-2xl p-2 w-10 h-10 text-white text-sm hover:text-gray-300">
                        <BellIcon className="text-white h-6 w-6" />
                    </div>
                    <Avatar alt="User Avatar" src="" className="w-10 h-10"></Avatar>
                </div>
            </div>
        </header>
    );
};

export default Head;
