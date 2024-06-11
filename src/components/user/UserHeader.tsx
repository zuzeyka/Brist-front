import { CircleEllipsisIcon, MailIcon, PencilLineIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Avatar from "@/components/ui/avatar/Avatar";

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
                    <div className="flex flex-col justify-end mb-4 font-manrope">
                        <h1 className="text-heading-2 font-bold">{props.userName}</h1>
                        <p className="text-subheading-2 text-accent">{props.isOnline ? 'Online' : 'Offline'}</p>
                    </div>
                    <div className="flex flex-col justify-end mb-4">
                        {false ? (<div className="flex"> \\ to do
                            <Button className="w-2xl rounded-2xl bg-primary text-black border border-black mx-2">Видалити з друзів</Button>
                            <Button className="w-full rounded-2xl bg-gray-100 text-black border border-black mx-2"><MailIcon /></Button>
                            <Button className="w-full rounded-2xl bg-gray-100 text-black border border-black"><CircleEllipsisIcon /></Button>
                        </div>) : (<Button className="w-2xl rounded-2xl bg-card3 text-typography hover:bg-cardLight12 mx-2 space-x-2"><PencilLineIcon></PencilLineIcon><span>Редагувати профіль</span></Button>)}
                    </div>
                </div>
            </div>
            <div className="relative -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-16 text-block-2">{props.about}</div>
        </div>
    );
};

export default UserHeader;
