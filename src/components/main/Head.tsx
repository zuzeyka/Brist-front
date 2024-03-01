import Avatar from "../ui/avatar/Avatar";
import { BellIcon, SettingsIcon } from "lucide-react";

const Head: React.FC = () => {
	return (
		<header className="bg-[#333333] py-4">
			<div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
				<h1 className="text-white font-bold text-xl">Brirst</h1>
				<nav>
					<ul className="flex space-x-8">
						<li>
							<a
								className="text-white text-sm hover:text-gray-300"
								href="#"
							>
								Крамниця
							</a>
						</li>
						<li>
							<a
								className="text-white text-sm hover:text-gray-300"
								href="#"
							>
								Бібліотека
							</a>
						</li>
						<li>
							<a
								className="text-white text-sm hover:text-gray-300"
								href="#"
							>
								Завантаження
							</a>
						</li>
					</ul>
				</nav>
				<div className="flex items-center space-x-4">
					<SettingsIcon className="text-white h-6 w-6" />
					<BellIcon className="text-white h-6 w-6" />
					<Avatar alt="User Avatar" src=""></Avatar>
				</div>
			</div>
		</header>
	);
};

export default Head;
