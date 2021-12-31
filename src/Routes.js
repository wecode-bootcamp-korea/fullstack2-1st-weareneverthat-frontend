import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductList from './pages/productList';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/list" element={<ProductList />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
