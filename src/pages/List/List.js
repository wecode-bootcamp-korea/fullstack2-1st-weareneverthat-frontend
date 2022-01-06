import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LikeButton from '../../components/LikeButton/likeButton';
import Topnav from '../../components/Topnav/Topnav';
import Footer from '../../components/Footer/Footer';
import './List.scss';
import ReactLoading from 'react-loading';

function ProductCard({ src1, src2, src3, productId, colorId }) {
	const navigate = useNavigate();
	function handleClick() {
		console.log('colorId: ', colorId);
		navigate(`/products/${productId}?color=${colorId}`);
	}

	function mouseOver1() {
		var d = document.img1;
		d.src = { src2 };
	}

	function mouseOut1() {
		var d = document.img1;
		d.src = { src1 };
	}
	function mouseOver2() {
		var d = document.img2;
		d.src = { src3 };
	}
	function mouseOut2() {
		var d = document.img2;
		d.src = { src3 };
	}
	function mouseOut3() {
		var d = document.img3;
		d.src = { src1 };
	}

	return (
		<div className="imageFull">
			<div className="imageContainer1" onClick={handleClick}>
				<img
					src={src1}
					name="img1"
					id="front1"
					alt="상품"
					onMouseOver={mouseOver1}
					onMouseOut={mouseOut1}
				/>
			</div>
			<div className="imageContainer2" onClick={handleClick}>
				<img
					src={src2}
					name="img2"
					id="front2"
					alt="상품"
					onMouseOver={mouseOver2}
					onMouseOut={mouseOut2}
				/>
			</div>
			<div className="imageContainer3" onClick={handleClick}>
				<img src={src3} id="front3" name="img3" alt="상품" onMouseOut={mouseOut3} />
			</div>
		</div>
	);
}

function ProductCard2({ src1, src2, number, index, setNumber }) {
	const clickImg1 = () => {
		const arr = [...number];
		arr[index] = 0;
		setNumber(arr);
		console.log(0);
	};

	const clickImg2 = () => {
		const arr = [...number];
		arr[index] = 1;
		setNumber(arr);
	};
	return (
		<div className="subImages">
			<img src={src1} alt="상품" width={50} height={65} onClick={clickImg1} />
			<img src={src2} alt="상품" width={50} height={65} onClick={clickImg2} />
		</div>
	);
}

function Sortbox({ className }) {
	const navigate = useNavigate();
	function handleClick1() {
		navigate(`/products`);
	}
	function handleClick2() {
		navigate('?sort=price-asc');
	}
	function handleClick3() {
		navigate('?sort=price-desc');
	}
	return (
		<form className={className}>
			<div className="sort">SORT BY</div>
			<br />
			<input name="sorting" type="radio" onClick={handleClick1} />
			Recent
			<br />
			<input name="sorting" type="radio" onClick={handleClick2} />
			Price (Low)
			<br />
			<input name="sorting" type="radio" onClick={handleClick3} />
			Price (High)
			<br />
			<input name="sorting" type="radio" />
			Trending
		</form>
	);
}

function ProductCardMain({ content, price, newprice, productId, colorId }) {
	const navigate = useNavigate();
	function handleClick() {
		navigate(`/products/${productId}?color=${colorId}`);
	}
	return (
		<div className="contentContainer" onClick={handleClick}>
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

	const [number, setNumber] = useState([
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	]);

	const activeButton = () => {
		checked1 === 'sortBox1' ? ischecked1('sortBox2') : ischecked1('sortBox1');
	};

	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}

	const query = useQuery();
	const location = useLocation();

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
			<nav className="buttons">
				<div className="navButton">
					<span type="button">{categoryName}</span>
				</div>
				<div className="sortingButton">
					<button type="button" onClick={activeButton}>
						Sort
					</button>
					<>
						<Sortbox className={checked1} />
					</>
				</div>
			</nav>
			<div className="productList">
				{productList.product &&
					productList.product.map((product, index) => {
						return (
							<div className="image">
								<ProductCard
									src1={product.detail[number[index]].image[0].imageUrl}
									src2={product.detail[number[index]].image[1].imageUrl}
									src3={product.detail[number[index]].image[2].imageUrl}
									key={product.productId}
									productId={product.id}
									colorId={product.detail[0].productColorId}
								/>
								<ProductCard2
									src1={product.detail[0].image[0].imageUrl}
									src2={product.detail[1].image[0].imageUrl}
									key={product.productId}
									setNumber={setNumber}
									number={number}
									index={index}
								/>
								<ProductCardMain
									content={product.name}
									price={product.price}
									newprice={product.discountPrice}
									key={product.productId}
									productId={product.id}
									colorId={product.detail[0].productColorId}
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
