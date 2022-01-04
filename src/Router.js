import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Ranking from './pages/Ranking/Ranking';
import List from './pages/List/List';
import Detail from './pages/Detail/detail';
import Login from './pages/Login/Login';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/products/" element={<List />} />
				<Route path="/products/:id" element={<Detail />} />
				<Route path="/products/top20" element={<Ranking />} />
				<Route path="/users/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
