import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    token: string;
    login: (credentials: LoginValidationModel) => Promise<void>;
    logout: () => void;
}

interface LoginValidationModel {
    email?: string;
    username?: string;
    password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedAuthState = localStorage.getItem('isAuthenticated') === 'true';

        if (storedToken) {
            setToken(storedToken);
            setIsAuthenticated(storedAuthState);
        }
    }, []);

    const login = async (credentials: LoginValidationModel) => {
        try {
            const response = await fetch('http://localhost:5049/api/User/validatelogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                const data = await response.json();
                setIsAuthenticated(true);
                setToken(data["res"]);

                localStorage.setItem('token', data["res"]);
                localStorage.setItem('isAuthenticated', 'true');
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Login failed', error);
            setIsAuthenticated(false);
        }
    };

    const logout = () => {
        document.cookie = 'somedonuts=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        setIsAuthenticated(false);
        setToken(null);

        // Remove token and authentication state from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('isAuthenticated');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
