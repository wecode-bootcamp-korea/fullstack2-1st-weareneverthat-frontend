import React, { useEffect, useState } from 'react';
// import ProductCardMain from '../components/ProductcardMain';
// import ProductCard2 from '../components/ProductCard2';
import './productList.scss';

function ProductCard({ src }) {
	return (
		<div className="imageContainer">
			<img src={src} alt="상품" width="100px" />
		</div>
	);
}

function ProductCard2({ src1, src2 }) {
	return (
		<span className="subImages">
			<img src={src1} alt="상품" width="50px" />
			<img src={src2} alt="상품" width="50px" />
		</span>
	);
}

function ProductCardMain({ proudct, content, price, newprice }) {
	return (
		<>
			<h3>{content}</h3>
			<div>
				<span>{price}</span>
				<span>{newprice}</span>
			</div>
		</>
	);
}

function Lists() {
	const [productList, setProductList] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3000/data/listData.json', {})
			.then(res => res.json())
			.then(data => {
				setProductList(data);
			});
	}, []);

	return (
		<div className="listContainer">
			<div>nav들어갈 자리</div>
			<div className="buttons">
				<div className="navButton">
					<span>abc</span>
				</div>
				<div className="sorgingButton">
					<span>vvv</span> <span>vvs</span>
				</div>
			</div>
			<div className="productList">
				{productList.product &&
					productList.product.map((product, index) => {
						return (
							<div className="image">
								<ProductCard
									src={product.image[0][0]}
									onMouseOver={e => (e.currentTarget.src = product.image[0][1])}
									onMouseOut={e => (e.currentTarget.src = product.image[0][0])}
									key={index}
								/>
								<ProductCard2 src1={product.image[0][0]} src2={product.image[1][0]} key={index} />
								<ProductCardMain
									content={product.name}
									price={product.price}
									newprice={product.discountPrice}
									key={index}
								/>
							</div>
						);
					})}
			</div>
			<div>footer 들어갈 자리</div>
		</div>
	);
}

export default Lists;
