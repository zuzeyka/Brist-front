import EmailConfirmation from "./components/Authorization/EmailConfirmation";
import Login from "./components/Authorization/Login";
import Register from "./components/Authorization/Register";
import Main from "./components/main/Main";
import React from "react";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/email_confirm" element={<EmailConfirmation />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
