import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { InputField } from "@/components/ui/input-field";
import { Link, useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import Head from "../main/head";
import Footer from "../main/footer";
import { useState } from "react";

const Register: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    const CommitUser = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        if (password !== passwordConfirm) {
            setError(t('auth.register.passwordsMismatch'));
            return;
        }

        try {
            const response = await fetch('http://localhost:5049/api/User', {
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

            if (!response.ok) {
                setError(t('auth.register.createFailed'));
                return;
            }

            navigate('/login');
        } catch (err) {
            console.error('Error:', err);
            setError(t('auth.register.createError'));
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
                        {t('auth.register.title')}
                    </h1>
                    <form onSubmit={CommitUser}>
                        <div className="flex flex-col space-y-4 mb-4">
                            <span className="text-sign-2 font-bold">{t('auth.register.loginLabel')}</span>
                            <InputField
                                placeholder={t('auth.register.loginPlaceholder')}
                                type="text"
                                className="rounded-full"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span className="text-sign-2 font-bold">{t('auth.email')}</span>
                            <InputField
                                placeholder={t('auth.register.emailPlaceholder')}
                                type="email"
                                className="rounded-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="text-sign-2 font-bold">{t('auth.password')}</span>
                            <InputField
                                placeholder={t('auth.register.passwordPlaceholder')}
                                type="password"
                                className="rounded-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="text-sign-2 font-bold">{t('auth.register.passwordConfirmLabel')}</span>
                            <InputField
                                placeholder={t('auth.register.passwordConfirmPlaceholder')}
                                type="password"
                                className="rounded-full"
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                            />
                        </div>
                        {error && (
                            <p className="text-sm text-negative mb-4">{error}</p>
                        )}
                        <div className="flex items-center space-x-2 mb-6">
                            <Checkbox id="terms" />
                            <Link className="text-sm" to="/terms">
                                <Trans i18nKey="auth.register.agreeToTerms" components={{ u: <u /> }} />
                            </Link>
                        </div>
                        <Button type="submit" className="w-full rounded-full text-background">
                            {t('auth.continue')}
                        </Button>
                    </form>
                    <div className="mt-4 text-center">
                        <span className="text-sm">{t('auth.register.haveAccount')} </span>
                        <Link className="text-sm" to="/login">
                            <u>{t('auth.register.loginLink')}</u>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
