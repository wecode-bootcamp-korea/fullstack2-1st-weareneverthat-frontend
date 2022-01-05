import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import TopNav from '../../components/Topnav/Topnav';
import Category from '../../components/category';
import ProductInfo from '../../components/productinfo';
import Footer from '../../components/Footer/Footer';

function Detail() {
	const { id } = useParams();
	const props = useLocation();

	const [product, setProduct] = useState({});
	const [isHeart, setIsHeart] = useState(false);

	useEffect(() => {
		fetch(`http://localhost:8000/products/${id}?color=black`)
			.then(res => res.json())
			.then(data => {
				setProduct(data);
			});
	}, []);

	useEffect(() => {
		fetch(`http://localhost:8000/products/isHeart?productId=${id}`, {
			headers: new Headers({ Authorization: sessionStorage.getItem('token') }),
		})
			.then(res => res.json())
			.then(data => {
				setIsHeart(Boolean(data.heart));
			});
	}, []);

	const [quantityBySize, setQuantityBySize] = useState({});
	useEffect(() => {
		fetch(`http://localhost:8000/products/${id}/quantity?color=${product.color}`)
			.then(res => res.json())
			.then(data => {
				setQuantityBySize(data);
			});
	}, [product]);

	const [images, setImages] = useState({});
	useEffect(() => {
		fetch(`http://localhost:8000/products/${id}/images`)
			.then(res => res.json())
			.then(data => {
				setImages(data);
			});
	}, []);

	const changeColor = e => {
		fetch(`http://localhost:8000/products/${id}?color=${e.currentTarget.value}&size=s`)
			.then(res => res.json())
			.then(data => {
				setProduct(data);
			});
	};

	const getQuantity = e => {
		fetch(`http://localhost:8000/products/${id}?color=${product.color}&size=${e.target.value}`)
			.then(res => res.json())
			.then(data => {
				setProduct(data);
			});
	};

	const showQuantity = () => {
		if (product.quantity < 150) {
			return `주문 가능한 수량이 ${product.quantity}개 남았습니다.`;
		} else {
			return product.quantity;
		}
	};

	const result = showQuantity();

	return (
		<div>
			<div>
				<TopNav />
			</div>
			<div className="wrapper">
				<Category />
				<ProductInfo
					product={product}
					images={images}
					changeColor={changeColor}
					quantityBySize={quantityBySize}
					getQuantity={getQuantity}
					showQuantity={showQuantity}
					result={result}
					isHeart={isHeart}
					setIsHeart={setIsHeart}
				/>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default Detail;
