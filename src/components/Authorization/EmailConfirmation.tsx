import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

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
                <div className="flex justify-center mb-6 w-full">
                    <InputOTP maxLength={6}>
                        <InputOTPGroup><InputOTPSlot index={0} /></InputOTPGroup>
                        <InputOTPGroup><InputOTPSlot index={1} /></InputOTPGroup>
                        <InputOTPGroup><InputOTPSlot index={2} /></InputOTPGroup>
                        <InputOTPGroup><InputOTPSlot index={3} /></InputOTPGroup>
                        <InputOTPGroup><InputOTPSlot index={4} /></InputOTPGroup>
                        <InputOTPGroup><InputOTPSlot index={5} /></InputOTPGroup>
                    </InputOTP>
                </div>
                <Button className="w-full rounded-full">Продовжити</Button>
            </div>
        </div>
    );
};
export default EmailConfirmation;
