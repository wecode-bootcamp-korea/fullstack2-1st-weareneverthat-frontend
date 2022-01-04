import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/detail';
import ProductList from './pages/productList';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/products/:id" element={<Detail />} />
				<Route path="/products" element={<ProductList />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
