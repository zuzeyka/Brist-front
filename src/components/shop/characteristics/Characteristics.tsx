import React, { useState } from 'react';
import Payment from '../payment';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CharacteristicsList from './characteristics-list';
import { FuelIcon, Gamepad2Icon, GamepadIcon } from 'lucide-react';
import { SystemRequirement, User } from '@/shared/lib/interfaces';
import Friends from '../about/friends';

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
    users: User[];
    className?: string;
}

const Characteristics: React.FC<CharacteristicsProps> = ({
    gameName,
    price,
    discount,
    endDate,
    rate,
    minOs,
    maxOs,
    releaseDate,
    developer,
    publisher,
    previewUrl,
    users,
    className = '',
}) => {
    const characteristics = [...minOs, ...maxOs];
    const allOS = characteristics.map(({ os }) => os);
    const [selectedCharacteristic, setSelectedCharacteristic] = useState<string>(allOS[0]);

    return (
        <div className={`col-span-2 flex ${className}`}>
            <div className='flex flex-col flex-grow py-4'>
                <h1 className='text-heading-1 font-bold text-typography'>{gameName}</h1>
                <div>
                    <Select onValueChange={setSelectedCharacteristic}>
                        <SelectTrigger className="w-96 my-4 !bg-cardLight12 rounded-2xl" id="sort">
                            <SelectValue placeholder={allOS[0]} />
                        </SelectTrigger>
                        <SelectContent className='!bg-secondary'>
                            {allOS.map((element: string, index: number) => (
                                <SelectItem key={index} value={element}>{element}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {characteristics.filter(({ os }) => os === selectedCharacteristic).map((osData, index) => (
                        <CharacteristicsList key={index} data={[osData]} />
                    ))}
                </div>
            </div>
            <div className='flex-1 pl-4 py-4'>
                <div className='sticky top-20 z-9'>
                    <Payment
                        gameName={gameName}
                        platforms={[<GamepadIcon key="1" />, <Gamepad2Icon key="2" />, <FuelIcon key="3" />]}
                        developer={developer}
                        publisher={publisher}
                        releaseDate={releaseDate}
                        previewUrl={previewUrl}
                        price={price}
                        discount={discount}
                        rate={rate}
                        endDate={endDate}
                    />
                    <Friends wishedFriends={users} ownedFriends={users} />
                </div>
            </div>
        </div>
    );
};

export default Characteristics;
