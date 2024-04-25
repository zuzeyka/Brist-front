import { Button } from "../ui/Button";
import { Checkbox } from "../ui/Checkbox";
import { InputField } from "../ui/InputField";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    return (
        <div className="flex justify-center bg-gray-white items-center min-h-screen">
            <div className="bg-white rounded-lg p-8 max-w-md mx-auto shadow-lg w-[400px]">
                <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold">
                        Авторизуйтесь, щоб продовжити
                    </h2>
                    <button className="text-lg leading-none">×</button>
                </div>
                <form className="mt-4">
                    <div className="flex flex-col space-y-4">
                        <InputField placeholder="Логін або e-mail" type="text" className="rounded-full" />
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
                        <Button className="mt-4 rounded-full">Увійти</Button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <Link className="text-sm" to="/register">
                        Немає аккаунту? <u>Створіть новий</u>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
