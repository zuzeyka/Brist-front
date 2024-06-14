import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
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
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(document.cookie.includes('somedonuts'));

    useEffect(() => {
        setIsAuthenticated(document.cookie.includes('somedonuts'));
    }, []);

    const login = async (credentials: LoginValidationModel) => {
        try {
            const response = await fetch('http://localhost:5049/api/User/validatelogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                setIsAuthenticated(true);
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
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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
