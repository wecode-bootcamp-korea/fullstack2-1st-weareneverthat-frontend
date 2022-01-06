import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LikeButton from '../../components/LikeButton/likeButton';
import Topnav from '../../components/Topnav/Topnav';
import Footer from '../../components/Footer/Footer';
import './List.scss';

function ProductCard({ src, productId, colorId }) {
	const navigate = useNavigate();
	function handleClick() {
		navigate(`/products/${productId}?color=${colorId}`);
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

function List() {
	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	const query = useQuery();
	const location = useLocation();

	const [productList, setProductList] = useState([]);

	const [categoryName, setCategoryName] = useState();

	useEffect(() => {
		fetch(
			`${process.env.REACT_APP_SERVER_HOST}/products/?category=${query.get(
				'category',
			)}&sort=${query.get('sort')}`,
		)
			.then(res => res.json())
			.then(data => {
				setProductList(data);

				if (query.get('category') === '1') {
					setCategoryName('OuterWear');
				} else if (query.get('category') === '2') {
					setCategoryName('SweatShirts');
				} else if (query.get('category') === '3') {
					setCategoryName('Bottoms');
				} else if (query.get('category') === '4') {
					setCategoryName('Shoes');
				} else {
					setCategoryName('All');
				}
			});
	}, [location]);

	return (
		<div className="listContainer">
			<div>
				<Topnav />
			</div>
			<div className="buttons">
				<div className="navButton">
					<span type="button">{categoryName}</span>
				</div>
				<div className="sortingButton"></div>
			</div>
			<div className="productList">
				{productList.product &&
					productList.product.map((product, index) => {
						return (
							<div className="image">
								<ProductCard
									src={product.detail[0].image[0].imageUrl}
									key={product.productId1}
									productId={product.id}
									colorId={product.detail[0].productColorId}
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
								<LikeButton productId={product.id} heartCount={product.heart.length} />
							</div>
						);
					})}
			</div>
			<Footer />
		</div>
	);
}

export default List;
