import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/detail';
import Topnav from './components/Topnav/Topnav';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/detail" element={<Detail />} />
				<Route path="/" element={<Topnav />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
