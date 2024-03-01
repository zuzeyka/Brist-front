import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Slider: React.FC = () => {
	return (
		<div className="bg-[#E5E5E5] min-h-screen">
			<div className="max-w-7xl mx-auto py-4 px-6">
				<div className="mt-6 flex justify-between items-center">
					<ChevronLeftIcon className="h-8 w-8 text-gray-400" />
					<div className="flex-grow mx-4 bg-[#C4C4C4] rounded-lg p-6 text-center">
						<h2 className="text-lg font-semibold mb-2">Ігра1</h2>
						<p className="text-sm">
							Lorem ipsum dolor sit amet consectetur. Sit lectus a
							lorem vulputate morbi tortor.
						</p>
					</div>
					<ChevronRightIcon className="h-8 w-8 text-gray-400" />
				</div>
				<div className="mt-4 flex justify-center space-x-2">
					<div className="w-4 h-4 bg-black rounded-full" />
					<div className="w-4 h-4 bg-gray-300 rounded-full" />
					<div className="w-4 h-4 bg-gray-300 rounded-full" />
					<div className="w-4 h-4 bg-gray-300 rounded-full" />
					<div className="w-4 h-4 bg-gray-300 rounded-full" />
					<div className="w-4 h-4 bg-gray-300 rounded-full" />
					<div className="w-4 h-4 bg-gray-300 rounded-full" />
				</div>
			</div>
		</div>
	);
};

export default Slider;
