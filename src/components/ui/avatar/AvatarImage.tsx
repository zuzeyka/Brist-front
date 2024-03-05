import { Link } from "react-router-dom";

interface AvatarImageProps {
	alt: string;
	src: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ alt, src }) => {
	return (
		<Link
			className="rounded-full bg-gray-200 text-gray-400 text-xl w-10 h-10 flex items-center justify-center"
			to="/profile"
		>
			<img
				className="rounded-full w-10 h-10 object-cover"
				alt={alt}
				src={src}
			/>
		</Link>
	);
};

export default AvatarImage;
