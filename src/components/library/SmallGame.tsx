import Avatar from "../ui/avatar/Avatar";

export interface GameInfo {
    key: number | null
    name: string
    image: string
}

const SmallGame: React.FC<GameInfo> = (props) => {
    return (
        <div key={props.key} className="flex space-x-2">
            <Avatar alt="Game image" src={props.image} className="w-10 h-10 rounded"></Avatar>
            <span className="p-2">{props.name}</span>
        </div>
    )
};

export default SmallGame;