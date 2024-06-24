import React, { useState } from 'react';
import Payment from '../Payment';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CharacteristicsList from './CharacteristicsList';
import { FuelIcon, Gamepad2Icon, GamepadIcon } from 'lucide-react';
import { SystemRequirement, User } from '@/shared/lib/interfaces';
import Friends from '../about/Friends';

interface CharacteristicsProps {
    gameName: string;
    price: number;
    discount?: number;
    endDate?: string;
    rate: number;
    minOs: SystemRequirement[];
    maxOs: SystemRequirement[];
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
    users,
    className
}) => {


    const setSelectedCharacteristic = (characteristic: string) => {
        setSelectedCharacteristicState(characteristic);
    }
    const hasOsData = minOs[0].length > 0 ? 0 : 1;
    const characteristics = [...(minOs || []), ...(maxOs || [])];
    const allOS = characteristics[hasOsData].map(({ os }) => os);
    const [selectedCharacteristicState, setSelectedCharacteristicState] = useState<string>(allOS[0]);

    return (
        <div className={`col-span-2 flex ${className ? className : ''}`}>
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
                    {characteristics[hasOsData].find(({ os }) => os === selectedCharacteristicState) && (
                        <CharacteristicsList data={characteristics[hasOsData].filter(({ os }) => os === selectedCharacteristicState)} />
                    )}
                </div>
            </div>
            <div className='flex-1 pl-4 py-4'>
                <div className='sticky top-20 z-9'>
                    <Payment
                        gameName={gameName}
                        platforms={[<GamepadIcon />, <Gamepad2Icon />, <FuelIcon />]}
                        developer={developer}
                        publisher={publisher}
                        releaseDate={releaseDate}
                        previewUrl={'https://i.imgur.com/hNIw75C.png'}
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
