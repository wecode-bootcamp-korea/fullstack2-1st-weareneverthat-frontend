import React from 'react';

function ProductCard2({ src1, src2 }) {
	return (
		<div className="subImages">
			<img src={src1} alt="상품" width="5px" /> <img src={src2} alt="상품" width="5px" />
		</div>
	);
}

export default ProductCard2;
