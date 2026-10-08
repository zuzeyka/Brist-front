import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MailIcon, MoreHorizontalIcon, PencilLineIcon, UserPlusIcon } from "lucide-react";
import Avatar from "@/components/ui/avatar/avatar";

interface UserHeaderProps {
    className?: string;
    userName: string;
    userAvatarUrl?: string;
    about?: string;
    isOnline: boolean;
    isOwnProfile: boolean;
}

const secondaryIconButton = 'p-3 rounded-[20px] bg-secondary hover:bg-secondaryHover text-typography';

// No friend-request backend yet — cycles through the three Figma states locally (not persisted).
type FriendStatus = 'none' | 'pending' | 'friends';

const UserHeader: React.FC<UserHeaderProps> = (props) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [friendStatus, setFriendStatus] = useState<FriendStatus>('none');
    const friendButton: Record<FriendStatus, { label: string; next: FriendStatus; className: string }> = {
        none: { label: t('user.addFriend'), next: 'pending', className: 'bg-primary hover:bg-primaryHover text-background' },
        pending: { label: t('user.cancelRequest'), next: 'none', className: 'bg-accent hover:bg-accentHover text-background' },
        friends: { label: t('user.removeFriend'), next: 'none', className: 'bg-secondary hover:bg-secondaryHover text-typography' },
    };
    const friend = friendButton[friendStatus];
    return (
        <div className={props.className}>
            <div className="flex items-end gap-4">
                <Avatar src={props.userAvatarUrl} alt={t('settings.avatarAlt')} className="w-48 h-48 -mt-24 shrink-0 border-4 border-background rounded-full"></Avatar>
                <div className="flex items-end justify-between w-full pb-4">
                    <div className="flex flex-col font-manrope">
                        <h1 className="text-heading-2 font-bold">{props.userName}</h1>
                        <p className="text-subheading-2 text-accent">{props.isOnline ? t('user.online') : t('user.offline')}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        {props.isOwnProfile ? (
                            <button type="button" onClick={() => navigate('/settings')} className="flex items-center gap-2 px-[26px] py-3 rounded-[20px] bg-card3 hover:bg-cardLight12 text-typography font-artifakt font-semibold text-button-1">
                                <PencilLineIcon className="size-5" />{t('user.editProfile')}
                            </button>
                        ) : (
                            <>
                                <button type="button" onClick={() => setFriendStatus(friend.next)} className={`flex items-center gap-2 px-[26px] py-3 rounded-[20px] font-artifakt font-semibold text-button-1 ${friend.className}`}>
                                    {friendStatus === 'none' && <UserPlusIcon className="size-5" />}{friend.label}
                                </button>
                                <button type="button" onClick={() => navigate('/chat/' + encodeURIComponent(props.userName))} aria-label={t('user.sendMessage')} className={secondaryIconButton}><MailIcon className="size-6" /></button>
                                <button type="button" aria-label={t('shop.about.more')} className={secondaryIconButton}><MoreHorizontalIcon className="size-6" /></button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {props.about && <p className="mt-4 font-artifakt text-block-2 tracking-[-0.01em] text-typographySecondary">{props.about}</p>}
        </div>
    );
};

export default UserHeader;
