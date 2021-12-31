import React from 'react';
import ProductCard2 from './ProductCard2';
import ProductCard from './ProductCard';

function ProductCardMain({ content, price, newprice }) {
	return (
		<div className="image">
			<ProductCard />
			<ProductCard2 />
			<h3>{content}</h3>
			<span>{price}</span>
			<span>{newprice}</span>
		</div>
	);
}

export default ProductCardMain;
