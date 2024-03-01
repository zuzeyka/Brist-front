import Input from "../ui/avatar/Input";
import { HeartIcon, Link, ShoppingCartIcon } from "lucide-react";

const Search: React.FC = () => {
	return (
		<div className="flex justify-between items-center">
			<Input className="flex-grow mr-4" placeholder="Пошук" />
			<nav className="flex space-x-4">
				<Link className="block" href="#">
					Каталог
				</Link>
				<Link className="block" href="#">
					Новини
				</Link>
			</nav>
			<div className="flex items-center space-x-4">
				<HeartIcon className="h-6 w-6" />
				<ShoppingCartIcon className="h-6 w-6" />
			</div>
		</div>
	);
};

export default Search;
