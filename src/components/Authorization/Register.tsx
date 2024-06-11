import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { InputField } from "@/components/ui/input-field";
import { Link } from "react-router-dom";
import { useAuth } from './AuthContext';
import Head from "../main/Head";
import Footer from "../main/Footer";

const Register: React.FC = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
        // Здесь можно добавить логику аутентификации (например, запрос к серверу)
        logout();
    };
    return (
        <>
            <Head></Head>
            <div className="min-h-screen bg-background flex justify-center items-center">
                <img className="absolute top-15 left-0 w-full h-full z-0" src="/src/assets/svg/authorizationBG.svg" alt="Background"></img>
                <img className="absolute top-15 left-0 w-full h-full z-0" src="/src/assets/svg/authorizationBG2.svg" alt="Background"></img>
                <div className="bg-card1 p-8 w-1/3 z-10 rounded-2xl">
                    <h1 className="text-heading-2 font-manrope font-bold mb-6">
                        Створити новий акаунт
                    </h1>
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
                        <Button onClick={handleLogout} className="w-full rounded-full text-background">Продовжити</Button>
                    </form>
                    <div className="mt-4 text-center">
                        <span className="text-sm">Маєте акаунт? </span>
                        <Link className="text-sm" to="/login">
                            <u>Авторизуйтесь</u>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};
export default Register;
