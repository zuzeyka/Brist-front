import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';

interface AuthContextProps {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const SESSION_TIMEOUT = 15 * 60 * 1000; // 15 минут

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });

    const logoutTimerRef = useRef<NodeJS.Timeout | null>(null);


    const resetLogoutTimer = () => {
        if (logoutTimerRef.current) {
            clearTimeout(logoutTimerRef.current);
        }
        logoutTimerRef.current = setTimeout(() => {
            logout();
        }, SESSION_TIMEOUT);
    };

    useEffect(() => {
        const handleUserActivity = () => {
            if (isAuthenticated) {
                resetLogoutTimer();
            }
        };


        if (isAuthenticated) {
            resetLogoutTimer();
        }

        window.addEventListener('mousemove', handleUserActivity);
        window.addEventListener('keydown', handleUserActivity);

        return () => {
            window.removeEventListener('mousemove', handleUserActivity);
            window.removeEventListener('keydown', handleUserActivity);
            if (logoutTimerRef.current) {
                clearTimeout(logoutTimerRef.current);
            }
        };
    }, [isAuthenticated]);

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        resetLogoutTimer();
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        if (logoutTimerRef.current) {
            clearTimeout(logoutTimerRef.current);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
