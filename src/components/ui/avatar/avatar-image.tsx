import { Link } from "react-router-dom";

interface AvatarImageProps {
    alt: string;
    src: string;
    className?: string;
    name?: string;
}

// Only links to a profile when we actually know whose it is — an avatar with no
// `name` (a game cover, a not-yet-loaded header avatar, ...) just renders in place.
const AvatarImage: React.FC<AvatarImageProps> = (props) => {
    const linkClassName = "rounded-full flex" + (props.className ? ' ' + props.className : '');
    const image = (
        <img
            className={"rounded-full object-cover" + (props.className ? ' ' + props.className : '')}
            alt={props.alt}
            src={props.src}
        />
    );
    return props.name ? (
        <Link className={linkClassName} to={"/user/" + props.name}>{image}</Link>
    ) : image;
};

export default AvatarImage;
