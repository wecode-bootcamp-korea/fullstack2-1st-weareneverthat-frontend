import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from '../src/pages/Detail/detail';
import List from '../src/pages/List/list';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/products" element={<List />} />
				<Route path="/products/:id" element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
