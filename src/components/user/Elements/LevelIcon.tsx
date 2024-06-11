import React from "react";
import "./LevelIcon.css";


const Game: React.FC<{ levelPoints: number, small?: boolean }> = ({ levelPoints, small }) => {
    let imageName = '';
    let level = Math.floor(levelPoints / 100);
    if (level >= 1 && level <= 19) {
        imageName = 'Polygon1-19';
    } else if (level >= 20 && level <= 39) {
        imageName = 'Polygon20-39';
    } else if (level >= 40 && level <= 59) {
        imageName = 'Polygon40-59';
    } else if (level >= 60 && level <= 69) {
        imageName = 'Polygon60-69';
    } else if (level >= 70 && level <= 79) {
        imageName = 'Polygon70-79';
    } else if (level >= 80 && level <= 89) {
        imageName = 'Polygon80-89';
    } else if (level >= 90 && level <= 99) {
        imageName = 'Polygon90-99';
    } else if (level >= 100) {
        imageName = 'Polygon100';
    }

    let imageUrl = `/src/assets/svg/${imageName}`;
    if (small) {
        imageUrl += 'mini';
    }
    imageUrl += '.svg';
    console.log(imageUrl);
    return (
        <div className={`${imageName} ${level > 99 ? 'w-12' : 'w-11'} h-12 bg-center bg-cover bg-no-repeat flex justify-center items-center`}>
            <span className="sign-1">{Math.floor(levelPoints / 100)}</span>
        </div>
    );
}

export default Game;
