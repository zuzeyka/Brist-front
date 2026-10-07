// Login.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { InputField } from "@/components/ui/input-field";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from './auth-context';
import Head from "../main/head";
import Footer from "../main/footer";

const Login: React.FC = () => {
    const { t } = useTranslation();
    const { login } = useAuth();
    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setError('');

        const isEmail = /\S+@\S+\.\S+/.test(identifier);
        const payload = isEmail
            ? { email: identifier, password }
            : { username: identifier, password };

        try {
            await login(payload);
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
            setError(t('auth.login.invalidCredentials'));
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
                        {t('auth.login.title')}
                    </h2>
                    <form className="mt-4" onSubmit={handleLogin}>
                        <div className="flex flex-col space-y-4">
                            <span className="text-sign-2 font-bold">{t('auth.login.identifierLabel')}</span>
                            <InputField
                                placeholder={t('auth.login.identifierPlaceholder')}
                                type="text"
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                className="rounded-full"
                            />
                            <span className="text-sign-2 font-bold">{t('auth.password')}</span>
                            <InputField
                                placeholder={t('auth.login.passwordPlaceholder')}
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
                                        {t('auth.login.rememberMe')}
                                    </label>
                                </div>
                                <Link className="text-sm underline" to="/reset_password">
                                    {t('auth.login.forgotPassword')}
                                </Link>
                            </div>
                            {error && (
                                <p className="text-sm text-negative">{error}</p>
                            )}
                            <Button type="submit" className="mt-4 rounded-full text-background">
                                {t('auth.continue')}
                            </Button>
                        </div>
                    </form>
                    <div className="mt-4 text-center text-sign-3 text-typographySecondary">
                        {t('auth.login.noAccount')} <Link className="text-primary hover:text-primaryHover font-bold" to="/register">{t('auth.login.registerLink')}</Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;
