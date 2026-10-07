import { Link } from "react-router-dom";
import Avatar from "@/components/ui/avatar/avatar";

export interface GameInfo {
    key: number | null
    name: string
    image: string
}

const SmallGame: React.FC<GameInfo> = (props) => {
    return (
        <Link key={props.key} to={`/library/${encodeURIComponent(props.name)}`} className="flex space-x-2 hover:bg-cardLight12 rounded-md -mx-1 px-1">
            <Avatar alt="Game image" src={props.image} className="w-10 h-10 rounded-md"></Avatar>
            <span className="p-2">{props.name}</span>
        </Link>
    )
};

export default SmallGame;