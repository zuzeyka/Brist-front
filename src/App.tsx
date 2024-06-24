import EmailConfirmation from './components/authorization/EmailConfirmation';
import Login from './components/authorization/Login';
import Register from './components/authorization/Register';
import Library from './components/library/Library';
import Main from './components/main/Main';
import Store from './components/shop/Store';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProfile from './components/user/UserProfile';
import AdminPanel from './components/admin/AdminPanel';
import { AuthProvider } from './components/authorization/AuthContext';
import Settings from './components/settings/Settings';
import Test from './components/popups/Test';
import Chat from './components/chat/Chat';
import ForgotPassword from './components/authorization/ForgotPassword';
import Terms from './components/credentials/Terms';
import Privacy from './components/credentials/Privacy';
import Refund from './components/credentials/Refund';
import Cart from './components/shop/cart/Cart';
import { CartProvider } from './components/shop/cart/CardContext';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <CartProvider>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/email_confirm" element={<EmailConfirmation />} />
                        <Route path="/store/:userName" element={<Store />} />
                        <Route path="/library" element={<Library />} />
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
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
