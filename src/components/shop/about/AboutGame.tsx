import React from 'react';
import { Button } from '../../ui/Button';
import DlcList from './DlcList';
import ReviewCard from './ReviewCard';

interface AboutGameProps {
    gameName: string;
    className?: string;
}
const AboutGame: React.FC<AboutGameProps> = (props) => {
    return (
        <>
            <div className={'grid grid-cols-3 gap-4' + props.className}>
                <div className="col-span-3">
                    <h1 className="text-3xl font-bold mb-4 text-black">{props.gameName}</h1>
                    <img
                        alt="Game screenshot"
                        className="mb-4 h-72 w-full object-cover"
                        height="100"
                        src="https://th.bing.com/th/id/OIG1.9Hwx_b1FjLL85KAe4GR7?w=1024&h=1024&rs=1&pid=ImgDetMain"
                        style={{
                            aspectRatio: '100/100',
                            objectFit: 'cover',
                        }}
                    />
                    <div className="flex space-x-2 mb-4" />
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur. Pretium ultrices tincidunt mattis fermentum diam sapien ut. Mattis sit risus mauris molestie
                        adipiscing libero velit elementum enim. Ipsum consectetur feugiat dolor quam et. Mattis praesent eros vel non suspendisse cursus magna.
                    </p>
                    <Button className="bg-black text-white">▼</Button>
                </div>
            </div>
            <DlcList></DlcList>
            <div className="max-w-7xl mx-auto bg-white mb-8 flex flex-wrap gap-4 justify-between">
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
            </div>
        </>
    );
};

export default AboutGame;
