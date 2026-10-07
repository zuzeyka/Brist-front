import React, { useState } from "react";
import { ChevronDownIcon, MoreHorizontalIcon, SearchIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { InputField } from "@/components/ui/input-field";
import Avatar from "@/components/ui/avatar/avatar";
import LevelIcon from "../elements/level-icon";
import { Friend } from "../user-menu";

const FriendRow: React.FC<{ friend: Friend }> = ({ friend }) => {
    const { t } = useTranslation();
    return (
    <div className="flex items-center justify-between bg-card1 rounded-[20px] px-4 py-3">
        <div className="flex items-center gap-3">
            <Avatar online={friend.isOnline} src={friend.avatarUrl} alt={friend.name} name={friend.name} className="w-11 h-11 rounded-full" />
            <p className="font-artifakt font-bold text-subheading-2">{friend.name}</p>
        </div>
        <div className="flex items-center gap-3">
            <LevelIcon levelPoints={friend.levelPoints} small />
            <button type="button" aria-label={t('shop.about.more')} className="text-typographySecondary hover:text-typography"><MoreHorizontalIcon className="size-5" /></button>
        </div>
    </div>
    );
};

const Friends: React.FC<{ friends: Friend[] }> = ({ friends }) => {
    const { t } = useTranslation();
    const [tab, setTab] = useState<'all' | 'online'>('all');
    const [search, setSearch] = useState('');

    const online = friends.filter((f) => f.isOnline);
    const visible = (tab === 'all' ? friends : online).filter((f) => f.name.toLowerCase().includes(search.trim().toLowerCase()));
    const columns = [visible.filter((_, i) => i % 2 === 0), visible.filter((_, i) => i % 2 === 1)];

    return (
        <div className="flex flex-col p-5 rounded-3xl bg-card2 gap-5">
            <div className="flex items-center gap-8">
                <button type="button" onClick={() => setTab('all')} className={"flex items-center gap-2 font-manrope font-bold text-heading-3 pb-1 " + (tab === 'all' ? 'text-primary border-b-2 border-primary' : 'text-typographySecondary')}>
                    {t('user.friendsPage.all')}
                    <span className="px-2.5 py-0.5 rounded-2xl bg-cardLight25 text-sign-2 text-typographySecondary">{friends.length}</span>
                </button>
                <button type="button" onClick={() => setTab('online')} className={"flex items-center gap-2 font-manrope font-bold text-heading-3 pb-1 " + (tab === 'online' ? 'text-primary border-b-2 border-primary' : 'text-typographySecondary')}>
                    {t('user.friendsPage.onlineTab')}
                    <span className="px-2.5 py-0.5 rounded-2xl bg-cardLight25 text-sign-2 text-typographySecondary">{online.length}</span>
                </button>
            </div>
            <div className="flex items-center gap-5 justify-between">
                <div className="relative w-96 max-w-full">
                    <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-typographySecondary" />
                    <InputField value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t('user.friendsPage.searchByNickname')} type="text" className="pl-10 pr-3.5 py-2.5 rounded-3xl bg-secondary border-none w-full text-typography placeholder:text-typographySecondary" />
                </div>
                <button type="button" className="flex items-center gap-2 text-typographySecondary font-artifakt text-button-2">
                    {t('user.friendsPage.searchByGame')}<ChevronDownIcon className="size-4" />
                </button>
            </div>
            {visible.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 items-start">
                    {columns.map((column, c) => (
                        <div key={c} className="flex flex-col gap-3">
                            {column.map((friend) => <FriendRow key={friend.name} friend={friend} />)}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="py-10 text-center font-artifakt text-block-1 text-typographySecondary">{t('settings.nothingFound')}</p>
            )}
        </div>
    );
};

export default Friends;
