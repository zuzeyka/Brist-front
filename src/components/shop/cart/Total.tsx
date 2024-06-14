import { Button } from "@/components/ui/button";
import React from "react";
import { useCart } from "./CardContext";

interface TotalProps {
    total: number;
    economy: number;
}

const Total: React.FC<TotalProps> = (props) => {
    const { removeAllFromCart } = useCart();

    const handleBuy = () => {
        removeAllFromCart();
    };
    return (
        <div className="flex flex-col px-5 pt-6 pb-5 rounded-3xl bg-card2 max-w-96">
            <div className="flex gap-5 justify-between">
                <div className="my-auto text-sign-2">Ви заощадите</div>
                <div className="text-subheading-1 font-bold text-right">{props.economy}₴</div>
            </div>
            <div className="flex gap-5 justify-between mt-2 whitespace-nowrap">
                <div className="text-sign-1">Усього</div>
                <div className="flex gap-1 items-center font-manrope">
                    <div className="line-through text-sign-1 text-typographySecondary">{props.total}₴</div>
                    <div className="text-heading-2 font-manrope font-bold text-right">{props.total - props.economy}₴</div>
                </div>
            </div>
            <div className="mt-4 text-block-2 text-typographySecondary">
                Якщо застосовно, податок із продажу буде розраховано в процесі оплати.
            </div>
            <Button className="text-center px-7 py-6 mt-6 text-button-1 font-semibold rounded-2xl" onClick={handleBuy}>
                Купити
            </Button>
            <Button className="text-center px-7 py-6 mt-3 text-button-1 font-semibold bg-secondary hover:bg-secondaryHover rounded-2xl" onClick={() => window.location.href = '/'}>
                Продовжити покупки
            </Button>
            <Button className="self-center mt-6 text-button-1 hover:bg-transparent hover:opacity-50 bg-transparent font-semibold text-negative" onClick={removeAllFromCart}>
                Очистити кошик
            </Button>
        </div>
    );
}

export default Total;
