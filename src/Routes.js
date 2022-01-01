import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Topnav from './pages/Topnav/Topnav';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Topnav />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
