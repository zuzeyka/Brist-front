import Login from '@/components/authorization/login';
import Register from '@/components/authorization/register';
import Library from '@/components/library/library';
import MyFeed from '@/components/library/my-feed';
import LibraryGame from '@/components/library/library-game';
import Main from '@/components/main/main';
import Store from '@/components/shop/store';
import DlcPage from '@/components/shop/dlc-page';
import AllDlcs from '@/components/shop/all-dlcs';
import Category from '@/components/shop/category';
import AllNews from '@/components/main/all-news';
import Wishlist from '@/components/shop/wishlist';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProfile from '@/components/user/user-profile';
import AdminPanel from '@/components/admin/admin-panel';
import { AuthProvider } from '@/components/authorization/auth-context';
import Settings from '@/components/settings/settings';
import Test from '@/components/popups/test';
import Chat from '@/components/chat/chat';
import ForgotPassword from '@/components/authorization/forgot-password';
import Terms from '@/components/credentials/terms';
import Privacy from '@/components/credentials/privacy';
import Refund from '@/components/credentials/refund';
import Cart from '@/components/shop/cart/cart';
import { CartProvider } from '@/components/shop/cart/card-context';
import { WishlistProvider } from '@/components/shop/wishlist-context';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <WishlistProvider>
                    <CartProvider>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/store/:userName" element={<Store />} />
                            <Route path="/store/:userName/dlc" element={<AllDlcs />} />
                            <Route path="/dlc/:dlcName" element={<DlcPage />} />
                            <Route path="/catalog" element={<Category />} />
                            <Route path="/news" element={<AllNews />} />
                            <Route path="/wishlist" element={<Wishlist />} />
                            <Route path="/library" element={<Library />} />
                            <Route path="/library/feed" element={<MyFeed />} />
                            <Route path="/library/:gameName" element={<LibraryGame />} />
                            <Route path="/user/:userName" element={<UserProfile />} />
                            <Route path="/admin_panel" element={<AdminPanel />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/testing" element={<Test />} />
                            <Route path="/card" element={<Cart />} />
                            <Route path="/chat" element={<Chat />} />
                            <Route path="/chat/:userName" element={<Chat />} />
                            <Route path="/reset_password" element={<ForgotPassword />} />
                            <Route path="/terms" element={<Terms />} />
                            <Route path="/privacy" element={<Privacy />} />
                            <Route path="/refund" element={<Refund />} />
                        </Routes>
                    </CartProvider>
                </WishlistProvider>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
