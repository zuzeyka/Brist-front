import { CircleEllipsisIcon, StarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GameInShop } from "@/shared/lib/interfaces"
import { useState } from "react"

interface GameProps {
    className?: string
    games: GameInShop[]
    list: boolean
}

const AllGames: React.FC<GameProps> = (props) => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = (index: number) => {
        if (props.games[index].urlForContent) {
            setIsDownloading(true);
            fetch(props.games[index].urlForContent)
                .then((response) => response.blob())
                .then((blob) => {
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = props.games[index].urlForContent;
                    link.click();

                    setIsDownloading(false);
                })
                .catch((error) => {
                    console.error("Error downloading file:", error);
                    setIsDownloading(false);
                });
        }
    };
    return props.list ? (
        <div className="flex flex-col justify-start w-full space-y-4 m-2 text-typography font-artifakt">
            {Array.from({ length: props.games.length }).map((_, index) => (
                <div className="bg-card1 rounded-lg flex justify-between">
                    <div className="flex">
                        <img src={props.games[index].previeImage} className="h-36 rounded-l-lg w-60 object-cover" alt="game-image" />
                        <div className="flex justify-evenly flex-col p-4">
                            <h2 className="font-bold text-heading-3 font-manrope">{props.games[index].name}</h2>
                            <Button onClick={() => handleDownload(index)} className="bg-primary text-background rounded-full hover:bg-primaryHover">{isDownloading ? "Завантаження..." : "Скачать"}</Button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-evenly p-4 text-typographySecondary">
                        <span>Розмір на диску</span>
                        <span className="font-bold">{props.games[index].discount}MB</span>
                    </div>
                    <div className="flex p-4 items-center space-x-4">
                        <Button className="bg-primary text-background hover:bg-primaryHover"><StarIcon></StarIcon></Button>
                        <Button className="bg-primary text-background hover:bg-primaryHover"><CircleEllipsisIcon></CircleEllipsisIcon></Button>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <div className="flex flex-wrap justify-start items-center max-w-7xl text-typography font-artifakt">
            {Array.from({ length: props.games.length }).map((_, index) => (
                <div
                    key={index}
                    className="h-60 w-44 rounded-lg bg-card1 flitems-center justify-center aspect-square group m-2"
                >
                    <img src={props.games[index].previeImage} className="h-full rounded-lg w-full object-cover" alt="game-image" />


                    <div className="relative bottom-60 px-2">
                        <h2 className="text-transparent group-hover:text-typography font-bold mb-28 text-heading-3 font-manrope">{props.games[index].name}</h2>
                        <div className="flex justify-between flex-col my-2">
                            <span className="text-transparent group-hover:text-typographySecondary">Розмір на диску</span>
                            <span className="text-transparent group-hover:text-typographySecondary">{props.games[index].discount}MB</span>
                        </div>
                        <div className="flex justify-between">
                            <Button onClick={() => handleDownload(index)} className="bg-transparent text-transparent group-hover:bg-primary group-hover:text-background">{isDownloading ? "Завантаження..." : "Скачать"}</Button>
                            <Button className="bg-transparent text-xl text-transparent group-hover:bg-primary group-hover:text-background">...</Button>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default AllGames;

