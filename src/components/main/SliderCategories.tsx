import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const SliderCategories: React.FC = () => {
	return (
		<div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
			<div>
				<h2 className="text-lg font-semibold mb-4">Категория</h2>
				<div className="flex items-center space-x-4">
					<ChevronLeftIcon className="h-6 w-6 text-gray-400" />
					<div className="bg-gray-200 h-32 w-72" />
					<div className="bg-gray-200 h-32 w-48" />
					<div className="bg-gray-200 h-32 w-48" />
					<div className="bg-gray-200 h-32 w-72" />
					<ChevronRightIcon className="h-6 w-6 text-gray-400" />
				</div>
			</div>
			<div>
				<h2 className="text-lg font-semibold mb-4">Категория</h2>
				<div className="flex items-center space-x-4">
					<ChevronLeftIcon className="h-6 w-6 text-gray-400" />
					<div className="bg-gray-200 h-32 w-72" />
					<div className="bg-gray-200 h-32 w-48" />
					<div className="bg-gray-200 h-32 w-48" />
					<div className="bg-gray-200 h-32 w-72" />
					<ChevronRightIcon className="h-6 w-6 text-gray-400" />
				</div>
			</div>
			<div>
				<h2 className="text-lg font-semibold mb-4">Категория</h2>
				<div className="flex items-center space-x-4">
					<ChevronLeftIcon className="h-6 w-6 text-gray-400" />
					<div className="bg-gray-200 h-32 w-72" />
					<div className="bg-gray-200 h-32 w-48" />
					<div className="bg-gray-200 h-32 w-48" />
					<div className="bg-gray-200 h-32 w-72" />
					<ChevronRightIcon className="h-6 w-6 text-gray-400" />
				</div>
			</div>
		</div>
	);
};

export default SliderCategories;
