import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { InputField } from "@/components/ui/input-field";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from './auth-context';

const LoginPopUp: React.FC = () => {
    const { t } = useTranslation();
    const { login } = useAuth();

    const handleLogin = () => {
        // Здесь можно добавить логику аутентификации (например, запрос к серверу)
        login({ username: 'username', password: 'password' });
    };
    return (
        <div className="bg-card2 rounded-lg p-8 max-w-md mx-auto w-[400px] rounded-2xl">
            <div className="flex justify-between items-start">
                <h2 className="text-heading-2 font-manrope font-bold">
                    {t('auth.login.title')}
                </h2>
                <button className="text-button-1 leading-none">×</button>
            </div>
            <form className="mt-4">
                <div className="flex flex-col space-y-4">
                    <InputField placeholder={t('auth.login.identifierLabel')} type="text" className="rounded-full text-sign-2" />
                    <InputField placeholder={t('auth.password')} type="password" className="rounded-full" />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember-me" />
                            <label
                                className="text-sm font-medium leading-none"
                                htmlFor="remember-me"
                            >
                                {t('auth.login.rememberMe')}
                            </label>
                        </div>
                        <Link className="text-sm underline" to="/reset_password">
                            {t('auth.login.forgotPassword')}
                        </Link>
                    </div>
                    <Button onClick={handleLogin} className="mt-4 rounded-full text-background">{t('auth.loginButton')}</Button>
                </div>
            </form>
            <div className="mt-4 text-center">
                <Link className="text-sm" to="/register">
                    {t('auth.login.noAccountPopup')} <u>{t('auth.login.registerLinkPopup')}</u>
                </Link>
            </div>
        </div>
    );
};

export default LoginPopUp;
