import EmailConfirmation from './components/authorization/EmailConfirmation';
import Login from './components/authorization/Login';
import Register from './components/authorization/Register';
import Library from './components/library/Library';
import Main from './components/main/Main';
import Store from './components/shop/Store';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/email_confirm" element={<EmailConfirmation />} />
                <Route path="/store" element={<Store />} />
                <Route path="/library" element={<Library />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
