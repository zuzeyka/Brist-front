import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCart } from "./card-context";

interface TotalProps {
    total: number;
    economy: number;
    isDiscounted: boolean;
}

const Total: React.FC<TotalProps> = (props) => {
    const { t } = useTranslation();
    const { removeAllFromCart } = useCart();
    const navigate = useNavigate();

    const handleBuy = () => {
        removeAllFromCart();
    };
    return (
        <div className="flex flex-col px-5 pt-6 pb-5 rounded-3xl bg-card2 max-w-96">
            <div className="flex gap-5 justify-between">
                <div className="my-auto text-sign-2">{t('cart.youSave')}</div>
                <div className="text-subheading-1 font-bold text-right">{props.economy}₴</div>
            </div>
            <div className="flex gap-5 justify-between mt-2 whitespace-nowrap">
                <div className="text-sign-1">{t('cart.total')}</div>
                <div className="flex gap-1 items-center font-manrope">
                    {props.isDiscounted && <div className="line-through text-sign-1 text-typographySecondary">{props.total}₴</div>}
                    <div className="text-heading-2 font-manrope font-bold text-right">{props.total - props.economy}₴</div>
                </div>
            </div>
            <div className="mt-4 text-block-2 text-typographySecondary">
                {t('cart.taxNote')}
            </div>
            <Button className="text-center px-7 py-6 mt-6 text-button-1 font-semibold rounded-2xl" onClick={handleBuy}>
                {t('cart.checkout')}
            </Button>
            <Button className="text-center px-7 py-6 mt-3 text-button-1 font-semibold bg-secondary hover:bg-secondaryHover rounded-2xl" onClick={() => navigate('/')}>
                {t('cart.continueShopping')}
            </Button>
            <Button className="self-center mt-6 text-button-1 hover:bg-transparent hover:opacity-50 bg-transparent font-semibold text-negative" onClick={removeAllFromCart}>
                {t('cart.clearCart')}
            </Button>
        </div>
    );
}

export default Total;
