import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<<<<<<< HEAD:src/Routes.js
=======
import ProductList from './pages/productList';

>>>>>>> develop:src/Router.js
function Router() {
	return (
		<BrowserRouter>
			<Routes>
<<<<<<< HEAD:src/Routes.js
				<></>
=======
				<Route path="/products" element={<ProductList />} />
>>>>>>> develop:src/Router.js
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
