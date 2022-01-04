import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Ranking from './pages/Ranking/Ranking';
import List from './pages/List/List';
import Login from './pages/Login/Login';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/products/" element={<List />} />
				<Route path="/products/top20" element={<Ranking />} />
				<Route path="/users/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
