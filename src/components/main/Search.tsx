import Input from "../ui/SearchInput";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Search: React.FC = () => {
	return (
		<div className="flex justify-between items-center">
			<Input className="flex-grow mr-4" placeholder="Пошук" />
			<nav className="flex space-x-4">
				<Link className="block" to="/catalog">
					Каталог
				</Link>
				<Link className="block" to="/news">
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
