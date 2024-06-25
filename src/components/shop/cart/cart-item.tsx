import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from "react";
import { CartItemProps, useCart } from "./card-context";


const CartItem: React.FC<CartItemProps> = (props) => {
    const { removeFromCart } = useCart();

    const handleRemoveFromCart = () => {
        removeFromCart(props.gameName);
        // сделать запрос на добавление в желаемое
    };
    return (
        <div className="flex gap-5 rounded-3xl bg-card1 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                <img
                    loading="lazy"
                    srcSet={props.gamePictureUrl}
                    className="grow object-cover self-stretch rounded-l-3xl w-full aspect-[2.63]"
                />
            </div>
            <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-between grow px-5 pt-4 pb-5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between text-heading-2 font-bold font-manrope max-md:flex-wrap max-md:max-w-full">
                        <div className="max-md:max-w-full">
                            {props.gameName}
                        </div>
                        <Button className="bg-transparent hover:bg-transparent p-0" onClick={handleRemoveFromCart}>
                            <X className="hover:text-negative"></X>
                        </Button>
                    </div>
                    <div className="flex gap-4 justify-between py-1 mt-4 w-full max-md:flex-wrap max-md:max-w-full">
                        <Button className="my-auto bg-transparent hover:bg-transparent text-base text-primary hover:opacity-70 font-semibold p-0" onClick={handleRemoveFromCart}>
                            Перемістити до Бажаного
                        </Button>
                        <div className="flex flex-col justify-between mb-4">
                            {props.discount ? (
                                <div className='flex space-x-2 items-center'>
                                    <Badge className="text-background bg-accent hover:bg-accentHover font-artifakt">-{props.discount}%</Badge>
                                    <p className="line-through text-sign-1 text-typographySecondary font-artifakt">{Math.round(props.price)}₴</p>
                                    <p className="text-sign-1 text-typography font-artifakt">{Math.round(props.price - props.price * props.discount / 100)}₴</p>
                                </div>
                            ) : (<p className="text-sign-1 font-artifakt text-typography">{Math.round(props.price)}</p>)}
                            <span className='text-sign-2 text-typographySecondary'>Знижка діє до {props.endDate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CartItem;

