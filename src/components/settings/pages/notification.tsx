import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/components/authorization/auth-context";

interface Prefs {
    bigSaleNotification: boolean;
    saleFromWishlistNotification: boolean;
    newCommentNotification: boolean;
    friendRequestNotification: boolean;
    approvedFriendRequest: boolean;
    declinedFriendRequest: boolean;
}

const defaultPrefs: Prefs = {
    bigSaleNotification: true,
    saleFromWishlistNotification: true,
    newCommentNotification: true,
    friendRequestNotification: true,
    approvedFriendRequest: true,
    declinedFriendRequest: true,
};

const Notification: React.FC = () => {
    const { t } = useTranslation();
    const { userId } = useAuth();
    const [settingsId, setSettingsId] = useState<string | null>(null);
    const [prefs, setPrefs] = useState<Prefs>(defaultPrefs);
    // Chat message notifications have no backend field yet — kept local-only.
    const [isNewMessage, setIsNewMessage] = useState(true);
    const [isNewMessageSound, setIsNewMessageSound] = useState(true);

    useEffect(() => {
        if (!userId) return;
        let cancelled = false;

        (async () => {
            try {
                const res = await fetch(`http://localhost:5049/api/Settings/getbyuid/${userId}`, { credentials: 'include' });
                if (cancelled) return;
                if (res.ok) {
                    const row = await res.json() as Prefs & { id: string };
                    setSettingsId(row.id);
                    setPrefs(row);
                }
                // 404 means no Settings row yet — defaults stay, and one gets
                // created on the first toggle.
            } catch (error) {
                console.log('Fetch notification settings error:', error);
            }
        })();

        return () => { cancelled = true; };
    }, [userId]);

    const save = async (next: Prefs) => {
        if (!userId) return;
        setPrefs(next);
        const body = {
            attachedUserId: userId,
            bigSaleNotification: next.bigSaleNotification,
            saleFromWishlistNotification: next.saleFromWishlistNotification,
            newCommentNotification: next.newCommentNotification,
            friendRequestNotification: next.friendRequestNotification,
            approvedFriendRequestNotification: next.approvedFriendRequest,
            declinedFriendRequestNotification: next.declinedFriendRequest,
        };
        try {
            if (settingsId) {
                await fetch(`http://localhost:5049/api/Settings/${settingsId}`, {
                    method: 'PUT',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                });
            } else {
                const res = await fetch('http://localhost:5049/api/Settings', {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                });
                if (res.ok) {
                    const created = await res.json() as { id: string };
                    setSettingsId(created.id);
                }
            }
        } catch (error) {
            console.log('Save notification settings error:', error);
        }
    };

    const toggle = (key: keyof Prefs) => save({ ...prefs, [key]: !prefs[key] });

    return (
        <div className="bg-card1 rounded-2xl w-full p-4">
            <div className="flex flex-col items-start p-8 rounded-3xl bg-card1 max-md:px-5">
                <div className="text-heading-3 font-manrope font-bold max-md:max-w-full">
                    {t('settings.notif.silentTitle')}
                </div>
                <div className="flex gap-5 justify-between pr-20 mt-5 max-w-full w-[701px] max-md:flex-wrap max-md:pr-5">
                    <div className="text-block-2">{t('settings.notif.bigSale')}</div>
                    <div className="flex flex-col justify-center items-start px-5 fill-neutral-400">
                        <Switch checked={prefs.bigSaleNotification} onClick={() => toggle('bigSaleNotification')} />
                    </div>
                </div>
                <div className="flex gap-5 justify-between pr-20 mt-6 max-w-full w-[701px] max-md:flex-wrap max-md:pr-5">
                    <div className="text-block-2">{t('settings.notif.wishSale')}</div>
                    <div className="flex flex-col justify-center items-start px-5 fill-neutral-400">
                        <Switch checked={prefs.saleFromWishlistNotification} onClick={() => toggle('saleFromWishlistNotification')} />
                    </div>
                </div>
                <div className="flex gap-5 justify-between pr-20 mt-6 max-w-full w-[701px] max-md:flex-wrap max-md:pr-5">
                    <div className="text-block-2">{t('settings.notif.newComment')}</div>
                    <div className="flex flex-col justify-center items-start px-5 fill-neutral-400">
                        <Switch checked={prefs.newCommentNotification} onClick={() => toggle('newCommentNotification')} />
                    </div>
                </div>
                <div className="flex gap-5 justify-between pr-20 mt-6 max-w-full w-[701px] max-md:flex-wrap max-md:pr-5">
                    <div className="text-block-2">{t('settings.notif.newFriendRequest')}</div>
                    <div className="flex flex-col justify-center items-start px-5 fill-neutral-400">
                        <Switch checked={prefs.friendRequestNotification} onClick={() => toggle('friendRequestNotification')} />
                    </div>
                </div>
                <div className="flex gap-5 justify-between pr-20 mt-6 max-w-full w-[701px] max-md:flex-wrap max-md:pr-5">
                    <div className="text-block-2">{t('settings.notif.friendRequestAccepted')}</div>
                    <div className="flex flex-col justify-center items-start px-5 fill-neutral-400">
                        <Switch checked={prefs.approvedFriendRequest} onClick={() => toggle('approvedFriendRequest')} />
                    </div>
                </div>
                <div className="flex gap-5 justify-between pr-20 mt-6 max-w-full w-[701px] max-md:flex-wrap max-md:pr-5">
                    <div className="text-block-2">{t('settings.notif.friendRequestDeclined')}</div>
                    <div className="flex flex-col justify-center items-start px-5 fill-neutral-400">
                        <Switch checked={prefs.declinedFriendRequest} onClick={() => toggle('declinedFriendRequest')} />
                    </div>
                </div>
                <div className="mt-20 text-heading-3 font-manrope font-bold max-md:mt-10 max-md:max-w-full">
                    {t('header.chat')}
                </div>
                <div className="flex gap-5 justify-between mt-2.5 max-w-full w-[701px] max-md:flex-wrap">
                    <div className="self-end mt-8 text-block-2">
                        {t('settings.notif.newChatMessage')}
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="flex flex-col">
                            <div className="text-subheading-2 font-bold text-center">
                                {t('header.notifications')}
                            </div>
                            <div className="flex flex-col justify-center items-center self-center px-5 mt-3 w-10 fill-neutral-400">
                                <Switch checked={isNewMessage} onClick={() => setIsNewMessage(!isNewMessage)} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-subheading-2 font-bold text-center">
                                {t('settings.notif.sound')}
                            </div>
                            <div className="flex flex-col justify-center items-center px-5 mt-3 fill-neutral-400">
                                <Switch checked={isNewMessageSound} onClick={() => setIsNewMessageSound(!isNewMessageSound)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
