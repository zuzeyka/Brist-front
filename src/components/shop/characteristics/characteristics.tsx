import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Payment from '../payment';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import CharacteristicsList from './characteristics-list';
import { SystemRequirement, User } from '@/shared/lib/interfaces';
import Friends from '../about/friends';
import { GameTitle } from '../about/about-game';
import { MacOsIcon, WindowsIcon } from '@/components/ui/icons';

interface CharacteristicsProps {
    gameName: string;
    price: number;
    discount?: number;
    endDate?: string;
    rate: number;
    minOs: SystemRequirement[];
    maxOs: SystemRequirement[];
    previewUrl: string;
    releaseDate: string;
    developer: string;
    publisher: string;
    wishedFriends: User[];
    ownedFriends: User[];
    className?: string;
}

const platforms = [
    { id: 'windows', label: 'Windows', icon: <WindowsIcon className="size-6" /> },
    { id: 'macos', label: 'macOS', icon: <MacOsIcon className="size-6" /> },
];

const toUserData = (users: User[]) => users.map((u) => ({ name: u.name, avatarUrl: u.image }));

const Characteristics: React.FC<CharacteristicsProps> = (props) => {
    const { t } = useTranslation();
    const [platform, setPlatform] = useState(platforms[0].id);
    const current = platforms.find((p) => p.id === platform)!;

    return (
        <div className={`flex flex-col gap-6 pt-8 ${props.className ?? ''}`}>
            <GameTitle name={props.gameName} rate={props.rate} />
            <div className='flex gap-6 items-start'>
                <div className='w-[1092px] min-w-0 flex flex-col gap-8'>
                    <Select value={platform} onValueChange={setPlatform}>
                        <SelectTrigger className="w-[512px] h-12 px-4 rounded-2xl border border-secondary !bg-card1 !text-typography font-artifakt font-semibold text-button-1">
                            <div className="flex items-center gap-3">{current.icon}{current.label}</div>
                        </SelectTrigger>
                        <SelectContent className='!bg-card2 !text-typography'>
                            {platforms.map((p) => (
                                <SelectItem key={p.id} value={p.id}>{p.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <div className='grid grid-cols-2 gap-6'>
                        <CharacteristicsList title={t('shop.characteristics.minimum')} data={props.minOs[0]} />
                        <CharacteristicsList title={t('shop.characteristics.recommended')} data={props.maxOs[0]} />
                    </div>
                </div>
                <aside className='w-[348px] shrink-0 sticky top-6 flex flex-col gap-8'>
                    <Payment
                        gameName={props.gameName}
                        platforms={[<WindowsIcon />, <MacOsIcon />]}
                        developer={props.developer}
                        publisher={props.publisher}
                        releaseDate={props.releaseDate}
                        previewUrl={props.previewUrl}
                        price={props.price}
                        discount={props.discount}
                        rate={props.rate}
                        endDate={props.endDate}
                    />
                    <Friends wishedFriends={toUserData(props.wishedFriends)} ownedFriends={toUserData(props.ownedFriends)} />
                </aside>
            </div>
        </div>
    );
};

export default Characteristics;
