import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Ranking from './pages/Ranking/Ranking';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/products/top20" element={<Ranking />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
