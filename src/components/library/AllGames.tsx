import { CircleEllipsisIcon, StarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GameProps {
    className?: string
    gameNames: string[]
    gameSizes: string[]
    gameImages: string[]
    list: boolean
}

const AllGames: React.FC<GameProps> = (props) => {
    return props.list ? (
        <div className="flex flex-col justify-start max-w-7xl space-y-4 m-2">
            {Array.from({ length: props.gameImages.length }).map((_, index) => (
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg flex justify-between">
                    <img src={props.gameImages[index]} className="h-36 rounded-l-lg w-60 object-cover" alt="game-image" />
                    <div className="flex justify-evenly flex-col p-4">
                        <h2 className="font-bold">{props.gameNames[index]}</h2>
                        <Button className="bg-gray-600 rounded-full">Скачать</Button>
                    </div>
                    <div className="flex flex-col justify-evenly p-4">
                        <span>Розмір на диску</span>
                        <span className="font-bold">{props.gameSizes[index]}</span>
                    </div>
                    <div className="flex p-4 items-center space-x-4">
                        <Button className="bg-white text-black"><StarIcon></StarIcon></Button>
                        <Button className="bg-white text-black"><CircleEllipsisIcon></CircleEllipsisIcon></Button>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <div className="flex justify-start items-center max-w-7xl space-x-4 my-4 wrap">
            {Array.from({ length: props.gameImages.length }).map((_, index) => (
                <div
                    key={index}
                    className="h-60 w-44 rounded-lg bg-gray-100 dark:bg-gray-800 flitems-center justify-center aspect-square group"
                >
                    <img src={props.gameImages[index]} className="h-full rounded-lg w-full object-cover" alt="game-image" />


                    <div className="relative bottom-60 px-2">
                        <h2 className="text-transparent group-hover:text-white font-bold mb-28">{props.gameNames[index]}</h2>
                        <div className="flex justify-between flex-col my-2">
                            <span className="text-transparent group-hover:text-white">Розмір на диску</span>
                            <span className="text-transparent group-hover:text-white">{props.gameSizes[index]}</span>
                        </div>
                        <div className="flex justify-between">
                            <Button className="bg-transparent text-transparent group-hover:bg-white group-hover:text-black">Скачать</Button>
                            <Button className="bg-transparent text-xl text-transparent group-hover:bg-white group-hover:text-black">...</Button>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default AllGames;

