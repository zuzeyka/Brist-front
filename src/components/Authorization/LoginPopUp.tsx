import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { InputField } from "@/components/ui/input-field";
import { Link } from "react-router-dom";
import { useAuth } from './AuthContext';

const LoginPopUp: React.FC = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        // Здесь можно добавить логику аутентификации (например, запрос к серверу)
        login();
    };
    return (
        <div className="bg-card2 rounded-lg p-8 max-w-md mx-auto w-[400px] rounded-2xl">
            <div className="flex justify-between items-start">
                <h2 className="text-heading-2 font-manrope font-bold">
                    Авторизуйтесь, щоб продовжити
                </h2>
                <button className="text-button-1 leading-none">×</button>
            </div>
            <form className="mt-4">
                <div className="flex flex-col space-y-4">
                    <InputField placeholder="Логін або e-mail" type="text" className="rounded-full text-sign-2" />
                    <InputField placeholder="Пароль" type="password" className="rounded-full" />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember-me" />
                            <label
                                className="text-sm font-medium leading-none"
                                htmlFor="remember-me"
                            >
                                Запам'ятати мене
                            </label>
                        </div>
                        <Link className="text-sm underline" to="/reset_password">
                            Не пам'ятаю пароль
                        </Link>
                    </div>
                    <Button onClick={handleLogin} className="mt-4 rounded-full text-background">Увійти</Button>
                </div>
            </form>
            <div className="mt-4 text-center">
                <Link className="text-sm" to="/register">
                    Немає аккаунту? <u>Створіть новий</u>
                </Link>
            </div>
        </div>
    );
};

export default LoginPopUp;
