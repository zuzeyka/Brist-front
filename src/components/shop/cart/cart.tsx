import Head from "@/components/main/head";
import Search from "@/components/main/search";
import Footer from "@/components/main/footer";
import React from "react";
import { useTranslation } from "react-i18next";
import { useCart } from "./card-context";
import CartItem from "./cart-item";
import Total from "./total";
import PageGlows from "@/components/ui/page-glows";
import { useRequireAuth } from "@/components/authorization/auth-context";

const glows = [
    { left: 1472, top: 108, large: true },
    { left: 4, top: 1200, large: true },
];

const Card: React.FC = () => {
    const ready = useRequireAuth();
    const { t } = useTranslation();
    const { cart } = useCart();
    const totalPrice = cart.reduce((sum, game) => sum + Math.round(game.price), 0);
    const totalDiscount = cart.reduce((sum, game) => sum + Math.round(game.price * (game.discount ?? 0) / 100), 0);
    if (!ready) return null;
    return (
        <div className="relative bg-background">
            <PageGlows glows={glows} />
            <div className="relative">
                <Head></Head>
                <Search></Search>

                <div className="max-w-[1464px] mx-auto pb-[120px] text-typography">
                    <h1 className="font-manrope font-bold text-heading-1 mb-6">{t('cart.title')}</h1>
                    {cart.length > 0 ? (
                        <div className="flex gap-6 items-start">
                            <div className="flex flex-col gap-4 flex-1 min-w-0">
                                {cart.map((game) => (
                                    <CartItem key={game.itemId}
                                        itemId={game.itemId}
                                        itemType={game.itemType}
                                        gameName={game.gameName}
                                        price={game.price}
                                        discount={game.discount}
                                        endDate={game.endDate} gamePictureUrl={game.gamePictureUrl} />
                                ))}
                            </div>
                            <div className="sticky top-20 shrink-0">
                                <Total total={totalPrice} economy={totalDiscount} isDiscounted={totalDiscount > 0}></Total>
                            </div>
                        </div>
                    ) : (
                        <p className="py-16 text-center font-artifakt text-block-1 text-typographySecondary">{t('cart.empty')}</p>
                    )}
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Card;

