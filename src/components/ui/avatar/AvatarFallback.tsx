import { Link } from "react-router-dom";

interface AvatarFallbackProps {
    className?: string;
}

const AvatarFallback: React.FC<AvatarFallbackProps> = (props) => {
    return (
        <Link
            to="/login"
            className={"rounded-full bg-gray-200 text-gray-400 text-xl w-10 h-10 flex items-center justify-center" + " " + props.className}
        >
            U
        </Link>
    );
};

export default AvatarFallback;
