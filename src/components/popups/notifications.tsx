import { Check, UsersRound, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Avatar from "@/components/ui/avatar/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/authorization/auth-context";

interface NotificationDto {
    id: string;
    type: number;
    actorId: string;
    isRead: boolean;
    createdAt?: string;
}

interface NotificationItem {
    id: string;
    type: number;
    actorName: string;
    actorAvatar?: string;
    date: string;
}

// Mirrors NotificationType in the backend (Entity/Profile/Notification.cs).
const FRIEND_REQUEST_RECEIVED = 0;
const FRIEND_REQUEST_ACCEPTED = 1;
const FRIEND_REQUEST_DECLINED = 2;

const Notifications: React.FC = () => {
    const { t } = useTranslation();
    const { userId } = useAuth();
    const [items, setItems] = useState<NotificationItem[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!userId) return;
        let cancelled = false;

        async function load() {
            try {
                const res = await fetch('http://localhost:5049/api/Notification', { credentials: 'include' });
                const rows = res.ok ? await res.json() as NotificationDto[] : [];
                if (cancelled) return;

                const resolved = await Promise.all(rows.map(async (row): Promise<NotificationItem> => {
                    const userRes = await fetch(`http://localhost:5049/api/User/${row.actorId}`, { credentials: 'include' });
                    const actor = userRes.ok ? await userRes.json() as { name: string; image?: string } : undefined;
                    return {
                        id: row.id,
                        type: row.type,
                        actorName: actor?.name ?? t('popups.notif.username'),
                        actorAvatar: actor?.image,
                        date: row.createdAt ? new Date(row.createdAt).toLocaleDateString() : '',
                    };
                }));

                if (!cancelled) {
                    setItems(resolved);
                    setLoaded(true);
                }

                // Opening the popup is what "seeing" a notification means here —
                // there's no separate per-item read affordance in this UI.
                if (rows.some((r) => !r.isRead)) {
                    fetch('http://localhost:5049/api/Notification/markallread', { method: 'PUT', credentials: 'include' }).catch(() => undefined);
                }
            } catch (error) {
                console.log('Fetch notifications error:', error);
            }
        }

        load();
        return () => { cancelled = true; };
    }, [userId, t]);

    const handleClearAll = async () => {
        try {
            const res = await fetch('http://localhost:5049/api/Notification/clearall', { method: 'DELETE', credentials: 'include' });
            if (res.ok) setItems([]);
        } catch (error) {
            console.log('Clear notifications error:', error);
        }
    };

    return (
        <div className="flex flex-col p-5 mx-auto w-full bg-card2 rounded-3xl max-w-[480px] text-typography text-sign-3">
            <div className="flex gap-4 justify-between">
                <div className="my-auto text-heading-2 font-medium text-typography font-manrope">
                    {t('header.notifications')}
                </div>
            </div>
            {loaded && items.length === 0 && (
                <div className="mt-4 text-typographySecondary text-sign-2">{t('popups.notif.noNotifications')}</div>
            )}
            {items.map((item) => (
                <div key={item.id} className="flex flex-col p-3 mt-2 w-full rounded-3xl bg-card1 first:mt-4">
                    <div className="flex gap-5 justify-between w-full whitespace-nowrap text-typographySecondary">
                        <div className="flex gap-3">
                            <UsersRound />
                            <div className="my-auto">{t('user.menu.friends')}</div>
                        </div>
                        <div className="my-auto">{item.date}</div>
                    </div>
                    <div className="flex gap-3.5 mt-3.5 text-base">
                        <Avatar src={item.actorAvatar} alt="avatar" name={item.actorName} className="shrink-0 rounded-full bg-typographySecondary h-[45px] w-[45px]" />
                        <div className="flex flex-col flex-1 justify-between">
                            <div className="font-bold text-subheading-2">{item.actorName}</div>
                            {item.type === FRIEND_REQUEST_RECEIVED && (
                                <div className="mt-2 text-sign-2">{t('popups.notif.newFriendRequest')}</div>
                            )}
                            {item.type === FRIEND_REQUEST_ACCEPTED && (
                                <div className="flex items-center gap-1">
                                    <Check className="h-4" />
                                    <div className="text-sign-2 text-positive">{t('popups.notif.requestAccepted')}</div>
                                </div>
                            )}
                            {item.type === FRIEND_REQUEST_DECLINED && (
                                <div className="flex items-center gap-1">
                                    <X className="h-4" />
                                    <div className="text-sign-2 text-negative">{t('popups.notif.requestDeclined')}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            {items.length > 0 && (
                <Button
                    onClick={handleClearAll}
                    className="justify-center self-center px-7 py-2.5 mt-4 text-button-2 text-primary font-semibold hover:text-primaryHover rounded-3xl bg-transparent hover:bg-cardLight25"
                >
                    {t('popups.notif.clearAll')}
                </Button>
            )}
        </div>
    );
}

export default Notifications;
