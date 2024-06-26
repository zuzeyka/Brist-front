import Head from "@/components/main/head";
import Search from "@/components/main/search";
import React from "react";
import { useCart } from "./card-context";
import CartItem from "./cart-item";
import Total from "./total";

const Card: React.FC = () => {
    const { cart } = useCart();
    const totalPrice = cart.reduce((sum, game) => sum + Math.round(game.price), 0);
    const totalDiscount = cart.reduce((sum, game) => sum + Math.round(game.price * (game.discount ?? 0) / 100), 0);
    return (
        <div className="bg-background">
            <Head></Head>
            <Search></Search>

            <div className="self-stretch max-w-7xl mx-auto flex space-x-4">
                <div className="flex flex-col gap-4 flex-1">
                    <div className="font-manrope font-bold text-heading-1 text-typography">Мій кошик</div>
                    {cart.map((game, index) => (
                        <CartItem key={index}
                            gameName={game.gameName}
                            price={game.price}
                            discount={game.discount}
                            endDate={game.endDate} gamePictureUrl={game.gamePictureUrl} />

                    ))}
                </div>
                <div className="sticky top-20 h-1/4">
                    <Total total={totalPrice} economy={totalDiscount} isDiscounted={totalDiscount > 0}></Total>
                </div>
            </div>
        </div>
    );
};

export default Card;

