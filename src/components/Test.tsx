import MenuIcon from "./icons/main-page/MenuIcon";
import SearchIcon from "./icons/main-page/SearchIcon";
import UserCircleIcon from "./icons/main-page/UserCircleIcon";
import ShoppingCartIcon from "./icons/main-page/ShoppingCartIcon";
import ChevronLeftIcon from "./icons/main-page/ChevronLeftIcon";
import ChevronRightIcon from "./icons/main-page/ChevronRightIcon";
import InstagramIcon from "./icons/main-page/InstagramIcon";
import TwitterIcon from "./icons/main-page/TwitterIcon";
import FacebookIcon from "./icons/main-page/FacebookIcon";

export default function Component() {
	return (
		<div className="bg-[#bd1e59] min-h-screen text-white">
			<header className="bg-[#9b153e] p-4">
				<div className="flex justify-between items-center max-w-6xl mx-auto">
					<div className="flex space-x-4">
						<MenuIcon className="text-white" />
						<h1 className="text-xl font-bold">SLUSH</h1>
					</div>
					<nav className="hidden md:flex space-x-4">
						<a className="hover:underline" href="#">
							Программ
						</a>
						<a className="hover:underline" href="#">
							Купить билет
						</a>
						<a className="hover:underline" href="#">
							Блог
						</a>
						<a className="hover:underline" href="#">
							Задать вопрос
						</a>
					</nav>
					<div className="flex space-x-4">
						<SearchIcon className="text-white" />
						<UserCircleIcon className="text-white" />
						<ShoppingCartIcon className="text-white" />
					</div>
				</div>
			</header>
			<section className="max-w-6xl mx-auto p-4">
				<div className="flex justify-between items-center mb-8">
					<ChevronLeftIcon className="text-white" />
					<p className="text-center text-sm">
						Играя в игры, вы можете заработать до 100 баллов в день.
					</p>
					<ChevronRightIcon className="text-white" />
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" />
				<div className="flex justify-between items-center mb-8">
					<ChevronLeftIcon className="text-white" />
					<p className="text-center text-sm">
						Играя в игры, вы можете заработать до 100 баллов в день.
					</p>
					<ChevronRightIcon className="text-white" />
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4" />
			</section>
			<footer className="bg-[#9b153e] p-4 mt-8">
				<div className="max-w-6xl mx-auto flex justify-between items-center">
					<p className="text-xs">
						© 2023 SLUSH. All rights reserved. SLUSH, the SLUSH
						logo, the tag design, MY SLUSH, and MY SLUSH.COM are
						trademarks of SLUSH Corporation in the United States
						and/or other countries. All other trademarks are the
						property of their respective owners.
					</p>
					<div className="flex space-x-4">
						<InstagramIcon className="text-white" />
						<TwitterIcon className="text-white" />
						<FacebookIcon className="text-white" />
					</div>
				</div>
			</footer>
		</div>
	);
}
