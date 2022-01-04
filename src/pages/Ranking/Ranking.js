import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from '../../components/Topnav/Topnav';
import Footer from '../../components/Footer/Footer';
import './Ranking.scss';

function List({ name, category, imageUrl, changeImage, productId, index }) {
	const navigate = useNavigate();

	const handleMouseEnter = () => {
		changeImage(imageUrl);
	};

	const handleMouseLeave = () => {
		changeImage('');
	};

	const handleClick = () => {
		navigate(`/products/${productId}`);
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
			<div className="category">{category}</div>
		</div>
	);
}

function Ranking() {
	const [productList, setProductList] = useState([]);
	const [hoverImage, setHoverImage] = useState('');

	useEffect(() => {
		fetch('http://localhost:8000/products/top20', {
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
			imageAlert.style.transform = 'translate(-10%, -90%)';
		} else {
			imageAlert.style.transform = 'translate(-10%, -7%)';
		}
	};

	return (
		<>
			<Topnav />
			<div className="ranking" onMouseMove={onMouseMove}>
				<img src={hoverImage} className="imageAlert" />

				{productList.product &&
					productList.product.map((product, index) => {
						console.log(product);
						return (
							<List
								name={product.name}
								category={product.Category.name}
								imageUrl={product.detail[0].image[0].imageUrl}
								changeImage={setHoverImage}
								index={index}
								productId={product.id}
							/>
						);
					})}
				<Footer />
			</div>
		</>
	);
}

export default Ranking;
