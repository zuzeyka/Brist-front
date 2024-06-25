import { Link } from "react-router-dom";

interface AvatarImageProps {
    alt: string;
    src: string;
    className?: string;
    name?: string;
}

const AvatarImage: React.FC<AvatarImageProps> = (props) => {
    return (
        <Link
            className={"rounded-full flex" + (props.className ? ' ' + props.className : '')}
            to={"/user/" + (props.name ? props.name : "test_user")}
        >
            <img
                className={"rounded-full object-cover" + (props.className ? ' ' + props.className : '')}
                alt={props.alt}
                src={props.src}
            />
        </Link>
    );
};

export default AvatarImage;
