import { Link } from "react-router-dom";

const AvatarFallback: React.FC = () => {
	return (
		<Link
			to="/profile"
			className="rounded-full bg-gray-200 text-gray-400 text-xl w-10 h-10 flex items-center justify-center"
		>
			U
		</Link>
	);
};

export default AvatarFallback;
