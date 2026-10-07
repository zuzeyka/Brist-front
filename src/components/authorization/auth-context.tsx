import { createContext, useContext, useState, useMemo, useCallback, ReactNode, useEffect } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    token?: string;
    userId?: string;
    userName?: string;
    userAvatarUrl?: string;
    login: (credentials: LoginValidationModel) => Promise<void>;
    logout: () => void;
    refreshUser: () => Promise<void>;
}

// The backend embeds the user's id as the "userId" claim (see JWTService.GenerateToken).
const decodeUserId = (jwt: string): string | undefined => {
    try {
        const payload = JSON.parse(atob(jwt.split('.')[1]));
        return payload.userId;
    } catch {
        return undefined;
    }
};

interface LoginValidationModel {
    email?: string;
    username?: string;
    password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [token, setToken] = useState<string | undefined>(undefined);
    const userId = useMemo(() => (token ? decodeUserId(token) : undefined), [token]);
    const [userName, setUserName] = useState<string | undefined>(undefined);
    const [userAvatarUrl, setUserAvatarUrl] = useState<string | undefined>(undefined);

    // Header avatar etc. need the current user's own name/image, which the JWT
    // doesn't carry (only "userId") — look it up once we know who's logged in.
    const refreshUser = useCallback(async () => {
        if (!userId) {
            setUserName(undefined);
            setUserAvatarUrl(undefined);
            return;
        }

        try {
            const res = await fetch(`http://localhost:5049/api/User/${userId}`, { credentials: 'include' });
            if (!res.ok) return;
            const data = await res.json();
            setUserName(data.name);
            setUserAvatarUrl(data.image);
        } catch {
            // Keep the last known name/avatar rather than blanking them on a transient error.
        }
    }, [userId]);

    useEffect(() => {
        refreshUser();
    }, [refreshUser]);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedAuthState = localStorage.getItem('isAuthenticated') === 'true';

        if (storedToken) {
            setToken(storedToken);
            setIsAuthenticated(storedAuthState);
        }
    }, []);

    const login = async (credentials: LoginValidationModel) => {
        const response = await fetch('http://localhost:5049/api/User/validatelogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(credentials)
        });

        if (!response.ok) {
            setIsAuthenticated(false);
            throw new Error('Login failed');
        }

        const data = await response.json();
        setIsAuthenticated(true);
        setToken(data["res"]);

        localStorage.setItem('token', data["res"]);
        localStorage.setItem('isAuthenticated', 'true');
    };

    const logout = () => {
        // The auth cookie is HttpOnly, so it can't be cleared from script -- only the
        // server can do that, by replying with a Set-Cookie that expires it.
        fetch('http://localhost:5049/api/User/logout', { method: 'POST', credentials: 'include' }).catch(() => { });
        setIsAuthenticated(false);
        setToken(undefined);

        localStorage.removeItem('token');
        localStorage.removeItem('isAuthenticated');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, userId, userName, userAvatarUrl, login, logout, refreshUser }}>
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
