import { DownloadIcon } from "lucide-react";

interface CollectionsProps {
    className?: string;
    collectionsNames: string[];
}

const Collections: React.FC<CollectionsProps> = (props) => {
    return (
        <div className="flex space-x-4">
                <button className="text-gray-500 dark:text-gray-400">All games</button>
                <button className="text-gray-500 dark:text-gray-400">Favorites</button>
                {props.collectionsNames.map((name) => (
                    <button key={name} className="text-gray-500 dark:text-gray-400">{name}</button>
                ))}
                <button className="text-gray-500 dark:text-gray-400">+</button>
        </div>
    );
};

export default Collections;
