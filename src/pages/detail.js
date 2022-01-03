import React from 'react';
import Nav from '../components/nav';
import Category from '../components/category';
import SubSlide from '../components/subslide';
import MainSlide from '../components/mainslide';
import ProductInfo from '../components/productinfo';

function Detail() {
	return (
		<div className="wrapper">
			<Nav />
			<Category />
			<SubSlide />
			<MainSlide />
			<ProductInfo />
		</div>
	);
}

export default Detail;
