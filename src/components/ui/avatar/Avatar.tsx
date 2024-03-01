import AvatarFallback from "./AvatarFallback";
import AvatarImage from "./AvatarImage";

interface AvatarProps {
	alt: string;
	src?: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
	return (
		<div className="relative">
			{props.src ? (
				<AvatarImage alt={props.alt} src={props.src} />
			) : (
				<AvatarFallback />
			)}
		</div>
	);
};

export default Avatar;
