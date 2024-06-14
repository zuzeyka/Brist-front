import Head from "@/components/main/Head";
import Search from "@/components/main/Search";
import React from "react";
import { useCart } from "./CardContext";
import CartItem from "./CartItem";
import Total from "./Total";

const Card: React.FC = () => {
    const { cart } = useCart();
    const totalPrice = cart.reduce((sum, game) => sum + game.price, 0);
    const totalDiscount = cart.reduce((sum, game) => sum + (game.price - game.price * (game.discount ?? 0) / 100), 0);
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
                            endDate={game.endDate} gamePictureUrl={"https://i.imgur.com/ufBjnf8.png"} />

                    ))}
                </div>
                <div className="sticky top-20 h-1/4">
                    <Total total={totalPrice} economy={totalDiscount}></Total>
                </div>
            </div>
        </div>
    );
};

export default Card;

