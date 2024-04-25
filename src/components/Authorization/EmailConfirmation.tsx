import { Button } from "../ui/Button";
import { InputField } from "../ui/InputField";
import { XIcon } from "lucide-react";

const EmailConfirmation: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-gray-white bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                <div className="flex justify-between items-center pb-4">
                    <h3 className="text-lg font-semibold">Введіть код</h3>
                    <button className="text-black">
                        <XIcon className="h-6 w-6" />
                    </button>
                </div>
                <p className="text-sm mb-4">
                    На ваш e-mail був надісланий 5-значний код
                </p>
                <div className="flex justify-between mb-6">
                    <InputField className="w-12 h-16 text-center bg-gray-200 rounded-2xl" />
                    <InputField className="w-12 h-16 text-center bg-gray-200 rounded-2xl" />
                    <InputField className="w-12 h-16 text-center bg-gray-200 rounded-2xl" />
                    <InputField className="w-12 h-16 text-center bg-gray-200 rounded-2xl" />
                    <InputField className="w-12 h-16 text-center bg-gray-200 rounded-2xl" />
                </div>
                <Button className="w-full rounded-full">Продовжити</Button>
            </div>
        </div>
    );
};
export default EmailConfirmation;
