import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { InputField } from "@/components/ui/input-field";
import { Link } from "react-router-dom";
import { useAuth } from './AuthContext';

const Register: React.FC = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
        // Здесь можно добавить логику аутентификации (например, запрос к серверу)
        logout();
    };
    return (
        <div className="min-h-screen bg-gray-white flex justify-center items-center">
            <div className="bg-white p-8 shadow-lg w-[400px]">
                <div className="flex justify-between items-start">
                    <h1 className="text-2xl font-semibold mb-6">
                        Створити новий акаунт
                    </h1>
                    <button className="text-lg leading-none">×</button>
                </div>
                <form>
                    <div className="flex flex-col space-y-4 mb-4">
                        <InputField placeholder="Логін" type="text" className="rounded-full" />
                        <InputField placeholder="E-mail" type="email" className="rounded-full" />
                        <InputField placeholder="Пароль" type="password" className="rounded-full" />
                        <InputField
                            placeholder="Повторити пароль"
                            type="password" className="rounded-full"
                        />
                    </div>
                    <div className="flex items-center space-x-2 mb-6">
                        <Checkbox id="terms" />
                        <Link className="text-sm" to="/terms">
                            Я погоджуюсь з <u>Умовами використання</u>
                        </Link>
                    </div>
                    <Button onClick={handleLogout} className="w-full rounded-full">Продовжити</Button>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-sm">Маєте акаунт? </span>
                    <Link className="text-sm" to="/login">
                        <u>Авторизуйтесь</u>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Register;
