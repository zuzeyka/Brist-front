import { CircleEllipsisIcon, MailIcon } from "lucide-react";
import { Button } from "../ui/Button";
import Avatar from "../ui/avatar/Avatar";

interface UserHeaderProps {
    className?: string;
    userName: string;
    userAvatarUrl?: string;
    userBackgroundUrl?: string;
    about?: string;
    isOnline: boolean;
}

const UserHeader: React.FC<UserHeaderProps> = (props) => {
    return (
        <div className={props.className}>
            <div className="flex space-x-4 relative -translate-x-1/2 -translate-y-1/2 left-1/2 top-0">
                    <Avatar src={props.userAvatarUrl} alt="User avatar" className="w-48 h-48"></Avatar>
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-end mb-4">
                            <h1 className="text-3xl font-bold">{props.userName}</h1>
                            <p className="text-lg">{props.isOnline ? 'Online' : 'Offline'}</p>
                        </div>
                        <div className="flex flex-col justify-end mb-4">
                            <div className="flex">
                                <Button className="w-full rounded-2xl bg-gray-100 text-black border border-black mx-2">Видалити з друзів</Button>
                                <Button className="w-full rounded-2xl bg-gray-100 text-black border border-black mx-2"><MailIcon/></Button>
                                <Button className="w-full rounded-2xl bg-gray-100 text-black border border-black"><CircleEllipsisIcon/></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-16">{props.about}</div>
        </div>
    );
};

export default UserHeader;
