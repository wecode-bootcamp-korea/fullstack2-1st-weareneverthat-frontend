import React from 'react';
import ProductCard2 from './ProductCard2';

function ProductCard({ src }) {
	return (
		<div className="imageContainer">
			<img src={src} alt="상품" />
		</div>
	);
}

export default ProductCard;
