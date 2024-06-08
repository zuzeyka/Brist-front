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

const App: React.FC = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/email_confirm" element={<EmailConfirmation />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/user" element={<UserProfile />} />
                    <Route path="/admin_panel" element={<AdminPanel />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/testing" element={<Test />} />
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App;
