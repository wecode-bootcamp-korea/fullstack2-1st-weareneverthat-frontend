import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import TopNav from '../../components/Topnav/Topnav';
import Category from '../../components/category';
import ProductInfo from '../../components/Productinfo';
import Footer from '../../components/Footer/Footer';

function Detail() {
	const { id } = useParams();
	const props = useLocation();

	const [product, setProduct] = useState({});
	const [isHeart, setIsHeart] = useState(false);
	const [detailSizeId, setDetailSizeId] = useState();

	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_HOST}/products/${id}${props.search}`)
			.then(res => res.json())
			.then(data => {
				setProduct(data);
			});
	}, [id]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_HOST}/products/isHeart?productId=${id}`, {
			headers: new Headers({ Authorization: sessionStorage.getItem('token') }),
		})
			.then(res => res.json())
			.then(data => {
				setIsHeart(Boolean(data.heart));
			});
	}, [id]);

	const [quantityBySize, setQuantityBySize] = useState({});
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_HOST}/products/${id}/quantity?color=${product.colorId}`)
			.then(res => res.json())
			.then(data => {
				setQuantityBySize(data);
			});
	});

	const [images, setImages] = useState({});
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_HOST}/products/${id}/images`)
			.then(res => res.json())
			.then(data => {
				setImages(data);
			});
	}, []);

	const changeColor = e => {
		fetch(
			`${process.env.REACT_APP_SERVER_HOST}/products/${id}?color=${e.currentTarget.value}&size=s`,
		)
			.then(res => res.json())
			.then(data => {
				setProduct(data);
			});
	};

	const getQuantity = e => {
		fetch(
			`${process.env.REACT_APP_SERVER_HOST}/products/${id}?color=${product.colorId}&size=${e.target.value}`,
		)
			.then(res => res.json())
			.then(data => {
				setProduct(data);
				setDetailSizeId(data.detailSizeId);
			});
	};

	const showQuantity = () => {
		if (product.quantity < 100) {
			return `주문 가능한 수량이 ${product.quantity}개 남았습니다.`;
		} else {
			return `${product.quantity}`;
		}
	};

	const result = showQuantity();

	return (
		<div className="detail">
			<div>
				<TopNav />
			</div>
			<Category categoryName={product.categoryName} productName={product.name} />
			<div className="wrapper">
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
					detailSizeId={detailSizeId}
				/>
			</div>
			<Footer />
		</div>
	);
}

export default Detail;
