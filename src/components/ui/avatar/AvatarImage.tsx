interface AvatarImageProps {
	alt: string;
	src: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ alt, src }) => {
	return (
		<img
			className="rounded-full w-10 h-10 object-cover"
			alt={alt}
			src={src}
		/>
	);
};

export default AvatarImage;
