import React from 'react';
import Payment from '../Payment';
import Avatar from '@/components/ui/avatar/Avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserData } from '../about/AboutGame';
import CharacteristicsList from './CharacteristicsList';

export interface Characteristics {
    system: string;
    graphics: string;
    processor: string;
    memory: string;
    directX?: string;
    storage: string;
    sound?: string;
    other?: string;
}

export interface CharacteristicsOS {
    name: string;
    characteristics: Characteristics[];
}

interface CharacteristicsProps {
    gameName: string;
    price: number;
    discount?: number;
    className?: string;
}

const Characteristics: React.FC<CharacteristicsProps> = (props) => {
    const friends: UserData[] = [
        {
            name: 'Юзернейм',
        },
        {
            name: 'Довгий Юзернейм',
        }
    ]
    const characteristics: CharacteristicsOS[] = [
        {
            name: 'Windows',
            characteristics: [{
                system: 'Windows 7 64-bit, Service Pack 1',
                graphics: 'NVIDIA GeForce 460 GTX, 1 GB or AMD Radeon 6870 HD, 1 GB',
                processor: 'Intel Core i5-2300, 2.8 GHz or AMD FX-6300, 3.5 GHz',
                memory: '4 GB RAM',
                directX: 'DirectX 11',
                storage: '20 GB HDD',
                sound: 'Windows Compatible Audio Device',
                other: 'Підтримка контролера: рекомендується контролер Microsoft Xbox 360® для Windows® (або еквівалент)'
            },
            {
                system: 'Windows 10 64-bit',
                graphics: 'NVIDIA GeForce GTX 1060 3 GB or AMD Radeon RX 580 4 GB',
                processor: 'Intel Core i7-7700, 3.6 GHz or AMD Ryzen 7 3700X, 3.6GHz',
                memory: '8 GB RAM',
                directX: 'DirectX 12',
                storage: '25 GB HDD',
                sound: 'Windows Compatible Audio Device',
            }],
        },
        {
            name: 'Linux',
            characteristics: [
                {
                    system: 'Ubuntu 16.04 LTS (64bit)',
                    graphics: 'GeForce 9800GTX+ (1GB)',
                    processor: 'Intel Core 2 Duo E5200',
                    memory: '4 GB RAM',
                    storage: '9 GB HDD',
                    other: '1080p, 16:9 recommended'
                },
                {
                    system: 'Ubuntu 16.04 LTS (64bit)',
                    graphics: 'GeForce GTX 560',
                    processor: ' Intel Core i5',
                    memory: '8 GB RAM',
                    storage: '9 GB HDD',
                    other: '1080p, 16:9 recommended'
                }
            ]
        },
        {
            name: 'MacOS',
            characteristics: [
                {
                    system: 'MacOS 10.13.6+',
                    graphics: 'Intel HD 5000 (must support Metal API)',
                    processor: 'Dual Core 2.4GHz',
                    memory: '4 GB RAM',
                    directX: '9.0c',
                    storage: '15 GB HDD',
                    sound: 'DirectX 9.0c',
                    other: "MacBook Air, MacBook Pro, iMac, Mac Mini late 2012 and newer; Mac Pro late 2013 and newer; MacBook 2015 and newer"
                },
                {
                    system: 'MacOS 10.14+',
                    graphics: 'Intel UHD 630+ (must support Metal API)',
                    processor: 'Quad Core 3.0 GHz+',
                    memory: '8 GB RAM',
                    directX: '9.0c',
                    storage: '20 GB HDD',
                    sound: 'DirectX 9.0c'
                }
            ]
        }
    ]
    const [selectedCharacteristicState, setSelectedCharacteristicState] = React.useState<string>(characteristics[0].name);

    const setSelectedCharacteristic = (characteristic: string) => {
        setSelectedCharacteristicState(characteristic);
    }

    return (
        <div className={'col-span-2 flex' + (props.className ? ' ' + props.className : '')}>
            <div className='flex flex-col flex-grow py-4'>
                <h1 className='font-bold text-3xl'>{props.gameName}</h1>
                <div>
                    <Select onValueChange={(characteristic) => {
                        if (characteristic) {
                            setSelectedCharacteristic(characteristic);
                        }
                    }}>
                        <SelectContent>
                            {characteristics.map(c => <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>)}
                        </SelectContent>
                        <SelectTrigger className="w-96 my-4" id="sort">
                            <SelectValue placeholder={characteristics[0].name} />
                        </SelectTrigger>
                    </Select>
                    {characteristics.find(c => c.name === selectedCharacteristicState) && <CharacteristicsList data={characteristics.find(c => c.name === selectedCharacteristicState)!} />}

                </div>
            </div>
            <div className='flex-1 pl-4 py-4'>
                <div className='sticky top-20 z-9'>
                    <Payment previewUrl={'https://i.imgur.com/3KkJhjG.png'} price={props.price} discount={props.discount} ></Payment>
                    <div className='bg-gray-100 p-4 mt-4 rounded-2xl'>
                        <span className='font-semibold'>Друзів бажають цю гру: {friends.length}</span>
                        {friends.map((friend, index) => (
                            <div key={index} className='flex items-center my-2 space-x-2'>
                                <Avatar src={friend.avatarUrl} alt='Avatar' className='w-8 h-8'></Avatar>
                                <span>{friend.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className='bg-gray-100 p-4 mt-4 rounded-2xl'>
                        <span className='font-semibold'>Друзів мають цю гру: {friends.length}</span>
                        {friends.map((friend, index) => (
                            <div key={index} className='flex items-center my-2 space-x-2'>
                                <Avatar src={friend.avatarUrl} alt='Avatar' className='w-8 h-8'></Avatar>
                                <span>{friend.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Characteristics;
