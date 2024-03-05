import Main from "./components/main/Main";
import React from "react";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
