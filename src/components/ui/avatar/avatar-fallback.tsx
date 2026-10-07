import { Link } from "react-router-dom";

interface AvatarFallbackProps {
    name?: string;
}

// Only links to a profile when we actually know whose it is — an avatar with no
// `name` (a game cover, a not-yet-loaded header avatar, ...) just renders in place.
const AvatarFallback: React.FC<AvatarFallbackProps> = (props) => {
    const className = "rounded-full bg-card3 text-typographySecondary text-xl flex items-center justify-center w-full h-full";
    const content = "U";
    return props.name ? (
        <Link to={"/user/" + props.name} className={className}>{content}</Link>
    ) : (
        <div className={className}>{content}</div>
    );
};

export default AvatarFallback;
