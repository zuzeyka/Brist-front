import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useAuth } from '../authorization/auth-context';
import { WishedGame } from '@/shared/lib/interfaces';

interface WishlistContextProps {
    isWished: (gameId: string) => boolean;
    toggleWishlist: (gameId: string) => Promise<void>;
}

const WishlistContext = createContext<WishlistContextProps | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { isAuthenticated, userId } = useAuth();
    // Maps a game's id to the WishedGame row id wishing it, so we know what to DELETE.
    const [wished, setWished] = useState<Map<string, string>>(new Map());

    useEffect(() => {
        if (!isAuthenticated || !userId) {
            setWished(new Map());
            return;
        }
        let cancelled = false;

        async function load() {
            try {
                const res = await fetch('http://localhost:5049/api/WishedGame', { credentials: 'include' });
                if (!res.ok || cancelled) return;
                const rows = await res.json() as WishedGame[];
                const map = new Map<string, string>();
                for (const row of rows) {
                    if (row.userId === userId) map.set(row.ownedGameId, row.id);
                }
                if (!cancelled) setWished(map);
            } catch (error) {
                console.log('Fetch wishlist error:', error);
            }
        }

        load();
        return () => { cancelled = true; };
    }, [isAuthenticated, userId]);

    const isWished = useCallback((gameId: string) => wished.has(gameId), [wished]);

    const toggleWishlist = useCallback(async (gameId: string) => {
        if (!userId) return;
        const existingRowId = wished.get(gameId);

        try {
            if (existingRowId) {
                const res = await fetch(`http://localhost:5049/api/WishedGame/${existingRowId}`, {
                    method: 'DELETE',
                    credentials: 'include',
                });
                if (!res.ok) return;
                setWished((prev) => {
                    const next = new Map(prev);
                    next.delete(gameId);
                    return next;
                });
            } else {
                const res = await fetch('http://localhost:5049/api/WishedGame', {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ownedGameId: gameId, userId }),
                });
                if (!res.ok) return;
                const created = await res.json() as WishedGame;
                setWished((prev) => new Map(prev).set(gameId, created.id));
            }
        } catch (error) {
            console.log('Toggle wishlist error:', error);
        }
    }, [userId, wished]);

    return (
        <WishlistContext.Provider value={{ isWished, toggleWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = (): WishlistContextProps => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};
