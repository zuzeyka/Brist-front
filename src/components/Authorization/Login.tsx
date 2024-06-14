// Login.tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { InputField } from "@/components/ui/input-field";
import { Link } from "react-router-dom";
import { useAuth } from './AuthContext';
import Head from "../main/Head";
import Footer from "../main/Footer";

const Login: React.FC = () => {
    const { login } = useAuth();
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const isEmail = /\S+@\S+\.\S+/.test(identifier);
        const payload = isEmail
            ? { email: identifier, password }
            : { username: identifier, password };

        try {
            await login(payload);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Head></Head>
            <div className="flex justify-center bg-background items-center min-h-screen">
                <img className="absolute top-15 left-0 w-full h-full z-0" src="/src/assets/svg/authorizationBG.svg" alt="Background"></img>
                <img className="absolute top-15 left-0 w-full h-full z-0" src="/src/assets/svg/authorizationBG2.svg" alt="Background"></img>
                <img className="absolute top-15 left-0 w-full h-full z-0" src="/src/assets/blobs-no-bg.png" alt="Background"></img>
                <div className="bg-card1 rounded-lg p-8 rounded-2xl mx-auto w-1/3 z-10">
                    <h2 className="text-heading-2 font-manrope font-bold">
                        Авторизуйтесь, щоб продовжити
                    </h2>
                    <form className="mt-4" onSubmit={handleLogin}>
                        <div className="flex flex-col space-y-4">
                            <span className="text-sign-2 font-bold">Логін або e-mail</span>
                            <InputField
                                placeholder="Логін або e-mail"
                                type="text"
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                className="rounded-full"
                            />
                            <span className="text-sign-2 font-bold">Пароль</span>
                            <InputField
                                placeholder="Пароль"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="rounded-full"
                            />
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
                            <Button type="submit" className="mt-4 rounded-full text-background">
                                Увійти
                            </Button>
                        </div>
                    </form>
                    <div className="mt-4 text-center">
                        <Link className="text-sm" to="/register">
                            Немає аккаунту? <u>Створіть новий</u>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;
