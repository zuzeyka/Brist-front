import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MailIcon, MoreHorizontalIcon, PencilLineIcon, UserCheckIcon, UserPlusIcon } from "lucide-react";
import Avatar from "@/components/ui/avatar/avatar";
import { useAuth } from "../authorization/auth-context";

interface UserHeaderProps {
    className?: string;
    profileUserId: string;
    userName: string;
    userAvatarUrl?: string;
    about?: string;
    isOnline: boolean;
    isOwnProfile: boolean;
}

const secondaryIconButton = 'p-3 rounded-[20px] bg-secondary hover:bg-secondaryHover text-typography';

// 'pending-sent' = I asked, waiting on them. 'pending-received' = they asked,
// waiting on me. Both map to a row in dbFriends with status 0 (Pending) — which
// side it is depends only on who's looking.
type RelationshipStatus = 'none' | 'pending-sent' | 'pending-received' | 'friends';

interface RelationshipDto {
    id: string;
    userId: string;
    friendId: string;
    status: number;
}

const UserHeader: React.FC<UserHeaderProps> = (props) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { userId } = useAuth();
    const [relationship, setRelationship] = useState<RelationshipDto | null>(null);
    const [status, setStatus] = useState<RelationshipStatus>('none');
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        if (props.isOwnProfile || !userId) return;
        let cancelled = false;

        async function load() {
            try {
                const res = await fetch(`http://localhost:5049/api/Friends/relationship/${props.profileUserId}`, { credentials: 'include' });
                if (cancelled) return;
                if (!res.ok) {
                    setRelationship(null);
                    setStatus('none');
                    return;
                }
                const row = await res.json() as RelationshipDto;
                setRelationship(row);
                setStatus(row.status === 1 ? 'friends' : row.userId === userId ? 'pending-sent' : 'pending-received');
            } catch (error) {
                console.log('Fetch friend relationship error:', error);
            }
        }

        load();
        return () => { cancelled = true; };
    }, [props.isOwnProfile, props.profileUserId, userId]);

    const handleFriendClick = async () => {
        if (!userId || busy) return;
        setBusy(true);
        try {
            if (status === 'none') {
                const res = await fetch('http://localhost:5049/api/Friends', {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userId, friendId: props.profileUserId }),
                });
                if (!res.ok) throw new Error('Network response was not ok');
                const row = await res.json() as RelationshipDto;
                setRelationship(row);
                setStatus(row.status === 1 ? 'friends' : 'pending-sent');
            } else if (status === 'pending-received' && relationship) {
                const res = await fetch(`http://localhost:5049/api/Friends/accept/${relationship.id}`, {
                    method: 'PUT',
                    credentials: 'include',
                });
                if (!res.ok) throw new Error('Network response was not ok');
                setStatus('friends');
            } else if (relationship) {
                // 'pending-sent' (cancel) or 'friends' (unfriend) both just remove the row.
                const res = await fetch(`http://localhost:5049/api/Friends/${relationship.id}`, {
                    method: 'DELETE',
                    credentials: 'include',
                });
                if (!res.ok) throw new Error('Network response was not ok');
                setRelationship(null);
                setStatus('none');
            }
        } catch (error) {
            console.log('Friend action error:', error);
        } finally {
            setBusy(false);
        }
    };

    const friendButton: Record<RelationshipStatus, { label: string; className: string }> = {
        none: { label: t('user.addFriend'), className: 'bg-primary hover:bg-primaryHover text-background' },
        'pending-sent': { label: t('user.cancelRequest'), className: 'bg-accent hover:bg-accentHover text-background' },
        'pending-received': { label: t('user.acceptRequest'), className: 'bg-primary hover:bg-primaryHover text-background' },
        friends: { label: t('user.removeFriend'), className: 'bg-secondary hover:bg-secondaryHover text-typography' },
    };
    const friend = friendButton[status];
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
                                <button type="button" disabled={busy} onClick={handleFriendClick} className={`flex items-center gap-2 px-[26px] py-3 rounded-[20px] font-artifakt font-semibold text-button-1 ${friend.className}`}>
                                    {status === 'none' && <UserPlusIcon className="size-5" />}
                                    {status === 'pending-received' && <UserCheckIcon className="size-5" />}
                                    {friend.label}
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
