import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './productList.scss';
import LikeButton from '../components/LikeButton/LikeButton';
import Topnav from '../components/Topnav/Topnav';
import Footer from '../components/Footer/Footer';
// import Categorybox from '../components/CateogoryBox';

function ProductCard({ src, productId }) {
	const navigate = useNavigate();
	function handleClick() {
		navigate('/products/' + productId);
	}

	return (
		<div className="imageContainer" onClick={handleClick}>
			<img src={src} alt="상품" />
		</div>
	);
}

function ProductCard2({ src1, src2 }) {
	return (
		<div className="subImages">
			<img src={src1} alt="상품" />
			<img src={src2} alt="상품" />
		</div>
	);
}

function ProductCardMain({ content, price, newprice }) {
	return (
		<div className="contentContainer">
			<h3>{content}</h3>
			<div className="priceContainer">
				<span className="price">￦{price}</span>
				<span className="newprice">￦{newprice}</span>
			</div>
		</div>
	);
}

function Lists() {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/data/soheon.json', {})
			.then(res => res.json())
			.then(data => {
				setProductList(data);
			});
	}, []);

	return (
		<div className="listContainer">
			<div>
				<Topnav />
			</div>
			<div className="buttons">
				<div className="navButton">
					<span type="button">All</span>
				</div>
				<div className="sortingButton">
					<button type="button">Sort</button>

					<button type="button">View</button>
				</div>
			</div>
			<div className="productList">
				{productList.product &&
					productList.product.map(product => {
						return (
							<div className="image">
								<ProductCard
									src={product.detail[0].image[0].imageUrl}
									key={product.productId1}
									productId={product.productId}
								/>
								<ProductCard2
									src1={product.detail[0].image[0].imageUrl}
									src2={product.detail[1].image[0].imageUrl}
									key={product.productId2}
								/>
								<ProductCardMain
									content={product.name}
									price={product.price}
									newprice={product.discountPrice}
									key={product.productId3}
								/>
								<LikeButton productId={product.productId} />
							</div>
						);
					})}
			</div>
			<Footer />
		</div>
	);
}

export default Lists;
