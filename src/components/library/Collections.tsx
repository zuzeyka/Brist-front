import { DownloadIcon } from "lucide-react";

const Collections: React.FC = () => {
  return (
    <>
      <div className="flex m-2">
        <button className="text-gray-500 dark:text-gray-400 mr-4">All games</button>
        <button className="text-gray-500 dark:text-gray-400 mr-4">Favorites</button>
        <button className="text-gray-500 dark:text-gray-400 mr-4">+</button>
      </div>
      <div className=" flex items-center max-w-7xl">
        <div className="grid gap-4 md:gap-8 lg:gap-12">
          <div className="grid grid-cols-10 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="h-40 rounded-lg bg-gray-300 dark:bg-gray-700 flex items-center justify-center w-full aspect-square"
              >
                <DownloadIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
