import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/detail';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/products/:id" element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
