import React, { useEffect, useState} from 'react';

import ReactLoading from 'react-loading';



import { useNavigate, useLocation } from 'react-router-dom';
import LikeButton from '../../components/LikeButton/likeButton';
import Topnav from '../../components/Topnav/Topnav';
import Footer from '../../components/Footer/Footer';
import './List.scss';

function ProductCard({ src, productId }) {
	const navigate = useNavigate();
	function handleClick() {
		navigate(`/products/${productId}`);
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

function Sortbox({ className }) {
	return (
		<form className={className}>
			<div className="sort">SORT BY</div>
			<br />
			<input name="sorting" type="radio" />
			Recent
			<br />
			<input name="sorting" type="radio" />
			Price (Low)
			<br />
			<input name="sorting" type="radio" />
			Price (High)
			<br />
			<input name="sorting" type="radio" />
			Trending
		</form>
	);
}

function ProductCardMain({ content, price, newprice, productId, color }) {
	const navigate = useNavigate();
	function handleClick() {
		navigate(`/products/${productId}?color=${color}`);
	}
	return (
		<div className="contentContainer" onClick={handleClick}>
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
	const [productList, setProductList] = useState([]);
	const [checked1, ischecked1] = useState('sortBox1');
	const [target, setTarget] = useState('');
	// const [isLoading, setIsLoading] = useState(false);

	// const onIntersect = async ([entry], observer) => {
	// 	if (entry.isIntersecting && !isLoading) {
	// 		observer.unobserve(entry.target);
	// 		setIsLoading(true);
	// 		await new Promise(resolve => setTimeout(resolve, 2000));
	// 		setProductList(productList => productList.concat(productList));
	// 		console.log(setProductList);
	// 		setIsLoading(false);
	// 		observer.observe(entry.target);
	// 	}
	// };

	// useEffect(() => {
	// 	let observer;
	// 	if (target) {
	// 		observer = new IntersectionObserver(onIntersect, {
	// 			threshold: 0.4,
	// 		});
	// 		observer.observe(target);
	// 	}
	// 	return () => observer && observer.disconnect();
	// }, [target]);

	const activeButton = () => {
		checked1 === 'sortBox1' ? ischecked1('sortBox2') : ischecked1('sortBox1');
	};

	useEffect(() => {
		fetch('http://localhost:3000/data/soheon.json', {})
	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	const query = useQuery();
	const location = useLocation();

	const [productList, setProductList] = useState([]);

	useEffect(() => {
		fetch(
			`http://localhost:8000/products/?category=${query.get('category')}&sort=${query.get('sort')}`,
		)
			.then(res => res.json())
			.then(data => {
				setProductList(data);
			});

	}, [location]);

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
					<button type="button" onClick={activeButton}>
						Sort
					</button>
					<button type="button">View</button>
					<>
						<Sortbox className={checked1} />
					</>
				</div>
			</div>
			<div className="productList">
				{productList.product &&
					productList.product.map(product => {
						return (
							<div className="image">
								<ProductCard
									src1={product.detail[0].image[0].imageUrl}
									src2={product.detail[0].image[1].imageUrl}
									src3={product.detail[0].image[2].imageUrl}
									key={product.productId}
									productId={product.productId}
									color={product.detail[0].productDetailName}
								/>
								<ProductCard2
									src1={product.detail[0].image[0].imageUrl}
									src2={product.detail[1].image[0].imageUrl}
									key={product.productId}
								/>
								<ProductCardMain
									content={product.name}
									price={product.price}
									newprice={product.discountPrice}
									key={product.productId}
									productId={product.productId}
									color={product.detail[0].productDetailName}
								/>
								<LikeButton productId={product.id} heartCount={product.heart.length} />
							</div>
						);
					})}
			</div>
			{/* {isLoading ? (
				<div className="LoaderWrap">
					<ReactLoading type="spin" color="#A593E0" />
				</div>
			) : (
				'not in view port'
			)}
			<div ref={setTarget}></div> */}
			<Footer />
		</div>
	);
}

export default List;
