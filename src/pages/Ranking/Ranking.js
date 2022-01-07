import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from '../../components/Topnav/Topnav';
import Footer from '../../components/Footer/Footer';
import './Ranking.scss';

function List({
	name,
	category,
	imageUrl,
	changeImage,
	productId,
	productColor,
	salesCount,
	index,
}) {
	const navigate = useNavigate();

	const handleMouseEnter = () => {
		changeImage(imageUrl);
	};

	const handleMouseLeave = () => {
		changeImage('');
	};

	const handleClick = () => {
		navigate(`/products/${productId}?color=${productColor}`);
	};

	return (
		<div
			className="list"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
		>
			<div className="nameWrapper">
				<span className="number">{index + 1}</span>
				<span className="name">{name}</span>
			</div>
			<div>{salesCount}</div>
			<div className="rankingCategory">{category}</div>
		</div>
	);
}

function Ranking() {
	const [productList, setProductList] = useState([]);
	const [hoverImage, setHoverImage] = useState('');

	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_HOST}/products/top20`, {
			method: 'GET',
		})
			.then(res => res.json())
			.then(data => {
				setProductList(data);
			});
	}, []);

	const imageAlert = document.querySelector('.imageAlert');

	const onMouseMove = e => {
		const mouseX = e.pageX;
		const mouseY = e.pageY;

		imageAlert.style.left = mouseX + 'px';
		imageAlert.style.top = mouseY + 'px';

		if (e.clientY / window.innerHeight > 0.6) {
			imageAlert.style.transform = 'translate(-10%, -120%)';
		} else {
			imageAlert.style.transform = 'translate(-10%, -30%)';
		}
	};

	return (
		<div className="rank">
			<Topnav />
			<nav className="category">
				<span className="top20Category">Top 20</span>
			</nav>
			<div className="ranking" onMouseMove={onMouseMove}>
				<div>
					<img src={hoverImage} alt="alert img" className="imageAlert" />
				</div>

				{productList.product &&
					productList.product.map((product, index) => {
						return (
							<List
								name={product.name}
								category={product.Category.name}
								imageUrl={product.detail[0].image[0].imageUrl}
								changeImage={setHoverImage}
								index={index}
								productId={product.id}
								productColor={product.detail[0].productColorId}
								salesCount={product.salesCount}
							/>
						);
					})}
			</div>
			<Footer />
		</div>
	);
}

export default Ranking;
