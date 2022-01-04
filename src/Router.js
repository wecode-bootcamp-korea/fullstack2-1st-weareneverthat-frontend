import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<<<<<<< HEAD
import ProductList from './pages/productList';
=======
import Main from './pages/Main/Main';
import Ranking from './pages/Ranking/Ranking';
import List from './pages/List/List';
import Login from './pages/Login/Login';
>>>>>>> develop

function Router() {
	return (
		<BrowserRouter>
			<Routes>
<<<<<<< HEAD
				<Route path="/products" element={<ProductList />} />
=======
				<Route path="/" element={<Main />} />
				<Route path="/products/" element={<List />} />
				<Route path="/products/top20" element={<Ranking />} />
				<Route path="/users/login" element={<Login />} />
>>>>>>> develop
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
