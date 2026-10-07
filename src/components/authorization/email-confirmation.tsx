import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useTranslation } from "react-i18next";

const EmailConfirmation: React.FC<{ emailChange: (value: boolean) => void }> = ({ emailChange }) => {
    const { t } = useTranslation();
    return (
        <div className="bg-card2 p-6 rounded-lg w-[400px]">
            <div className="flex justify-between items-center pb-4">
                <h3 className="text-heading-2 font-bold font-manrope text-center">{t('auth.emailConfirm.title')}</h3>
            </div>
            <p className="text-sm mb-4">
                {t('auth.emailConfirm.message')}
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
            <Button onClick={() => emailChange(true)} className="w-full rounded-full">{t('auth.continue')}</Button>
        </div>
    );
};
export default EmailConfirmation;
