import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { InputField } from "@/components/ui/input-field";
import { Link } from "react-router-dom";
import Head from "../main/head";
import Footer from "../main/footer";
import { useState } from "react";

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const CommitUser = async (event: React.FormEvent) => {
        event.preventDefault();

        if (password !== passwordConfirm) {
            console.error('Passwords do not match');
            return;
        }

        try {
            await fetch('http://localhost:5049/api/User', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    passwordSalt: password,
                    email,
                    verified: false,
                })
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Head />
            <div className="min-h-screen bg-background flex justify-center items-center">
                <img className="absolute top-15 left-0 w-full h-full z-0" src="/src/assets/svg/authorizationBG.svg" alt="Background" />
                <img className="absolute top-15 left-0 w-full h-full z-0" src="/src/assets/svg/authorizationBG2.svg" alt="Background" />
                <img className="absolute top-15 left-0 w-full h-full z-0" src="/src/assets/blobs-no-bg.png" alt="Background" />
                <div className="bg-card1 p-8 w-1/3 z-10 rounded-2xl">
                    <h1 className="text-heading-2 font-manrope font-bold mb-6">
                        Створити новий акаунт
                    </h1>
                    <form onSubmit={CommitUser}>
                        <div className="flex flex-col space-y-4 mb-4">
                            <span className="text-sign-2 font-bold">Логін</span>
                            <InputField
                                placeholder="Логін"
                                type="text"
                                className="rounded-full"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span className="text-sign-2 font-bold">E-mail</span>
                            <InputField
                                placeholder="E-mail"
                                type="email"
                                className="rounded-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="text-sign-2 font-bold">Пароль</span>
                            <InputField
                                placeholder="Пароль"
                                type="password"
                                className="rounded-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="text-sign-2 font-bold">Повторіть пароль</span>
                            <InputField
                                placeholder="Повторити пароль"
                                type="password"
                                className="rounded-full"
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center space-x-2 mb-6">
                            <Checkbox id="terms" />
                            <Link className="text-sm" to="/terms">
                                Я погоджуюсь з <u>Умовами використання</u>
                            </Link>
                        </div>
                        <Button type="submit" className="w-full rounded-full text-background">
                            Продовжити
                        </Button>
                    </form>
                    <div className="mt-4 text-center">
                        <span className="text-sm">Маєте акаунт? </span>
                        <Link className="text-sm" to="/login">
                            <u>Авторизуйтесь</u>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
