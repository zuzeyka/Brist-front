import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AuthProvider, useRequireAuth } from './auth-context';

const Guarded = () => {
    const ready = useRequireAuth();
    if (!ready) return null;
    return <div>protected content</div>;
};

const renderGuarded = () =>
    render(
        <MemoryRouter initialEntries={['/settings']}>
            <AuthProvider>
                <Routes>
                    <Route path="/settings" element={<Guarded />} />
                    <Route path="/login" element={<div>login page</div>} />
                </Routes>
            </AuthProvider>
        </MemoryRouter>
    );

describe('useRequireAuth', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.stubGlobal('fetch', vi.fn(() => Promise.reject(new Error('no network in tests'))));
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('redirects to /login when there is no stored session', async () => {
        renderGuarded();

        expect(await screen.findByText('login page')).toBeInTheDocument();
        expect(screen.queryByText('protected content')).not.toBeInTheDocument();
    });

    it('renders the protected content when a session is already stored', async () => {
        localStorage.setItem('token', 'header.' + btoa(JSON.stringify({ userId: 'u1' })) + '.sig');
        localStorage.setItem('isAuthenticated', 'true');

        renderGuarded();

        expect(await screen.findByText('protected content')).toBeInTheDocument();
        expect(screen.queryByText('login page')).not.toBeInTheDocument();
    });
});
