import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { useAuth } from './AuthContext';
import Head from "../main/Head";
import Footer from "../main/Footer";

const ChangePassword: React.FC = () => {
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
                <img className="absolute top-15 left-0 w-full h-full z-0" src="/src/assets/blobs-no-bg.png" alt="Background"></img>
                <div className="bg-card1 p-8 shadow-lg w-1/3 z-10 rounded-2xl">
                    <h1 className="text-heading-2 font-manrope font-bold mb-6 text-center">
                        Придумайте новий пароль
                    </h1>
                    <form className="space-y-4">
                        <InputField placeholder="Придумайте новий пароль..." type="password" className="rounded-full" />
                        <InputField placeholder="Напишіть пароль ще раз..." type="email" className="rounded-full" />
                        <Button onClick={handleLogout} className="w-full rounded-full text-background">Продовжити</Button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};
export default ChangePassword;
