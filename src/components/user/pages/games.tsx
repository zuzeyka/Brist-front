import React from "react";
import Wished from "./wished";
import { GameInShop } from "@/shared/lib/interfaces";

// Reuses the "Бажане" list item until this page gets its own pass against its Figma frame.
const Games: React.FC<{ games: GameInShop[] }> = ({ games }) => (
    <Wished games={games.map((game) => ({
        name: game.name,
        imageUrl: game.previeImage,
        rating: 0,
        price: game.price,
        discount: game.discount,
        discountEnd: game.discountFinish ? new Date(game.discountFinish).toLocaleDateString('uk-UA') : undefined,
        isOwned: true,
        categorys: [],
    }))} />
);

export default Games;
