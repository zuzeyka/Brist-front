import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GameBundle, GameInShop } from '@/shared/lib/interfaces';

interface BundleProps {
    className?: string
    bundles: GameBundle[]
    elements: GameInShop[]
}

const BundleList: React.FC<BundleProps> = (props) => {
    return (
        <div>
            <span className='font-bold text-typography text-heading-1'>Комплекти:</span>
            {props.bundles.map((bundle) => (
                <div key={bundle.name} className="flex flex-col space-x-2 bg-card1 text-typography px-4 py-3 my-4 rounded-2xl font-semibold">
                    <div className='mb-2 font-bold text-typography text-heading-2'>{bundle.name}</div>
                    <div className='flex flex-col bg-card2 rounded-2xl p-4'>
                        <div className='text-typography text-block-1 font-artifakt'>
                            {bundle.description}
                        </div>
                        <span className='text-typographySecondary text-block-1 font-artifakt my-2'>Вміст:</span>
                        <ul className='list-disc list-inside mb-2'>
                            {props.elements.map((element) => (
                                <li className='text-typography text-block-1 font-artifakt' key={element.id}>{element.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex justify-end space-x-4 mt-2 items-center'>

                        {bundle.discount ? (
                            <div className="flex flex-col items-end">
                                <div className='flex space-x-2'>
                                    <Badge className="text-background bg-accent hover:bg-accentHover font-artifakt">-{bundle.discount}%</Badge>
                                    <p className="line-through text-sign-1 text-typographySecondary font-artifakt">{bundle.price}₴</p>
                                    <p className="text-sign-1 text-typography font-artifakt">{Math.round(bundle.price - bundle.price * bundle.discount / 100)}₴</p>
                                </div>
                                <span className='text-sign-2 text-typographySecondary'>Знижка діє до {bundle.discountFinish ? bundle.discountFinish.toLocaleString() : "немає дати"}</span>
                            </div>
                        ) : (
                            <p className="text-sign-1 font-artifakt text-typography">{bundle.price}₴</p>
                        )}
                        <Button className='bg-primary hover:bg-primaryHover !text-background rounded-3xl text-button-1 font-artifakt'>У кошик</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BundleList;
