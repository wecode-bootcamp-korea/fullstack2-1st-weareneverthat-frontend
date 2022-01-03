import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Topnav from '../../components/Topnav/Topnav';
import Footer from '../../components/Footer/Footer';
import './Main.scss';

function ImageCard({ src }) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/products');
	};

	return <img src={src} alt="메인페이지 이미지" className="imageCard" onClick={handleClick} />;
}

function MainBox({ text, href }) {
	return (
		<a href={href} className="mainBox" target="_blank">
			{text}
		</a>
	);
}

function Main() {
	const [imageList, setImageList] = useState([]);
	const [imageSrc, setImageSrc] = useState(Array.from({ length: 16 }, () => 0));
	const [scrollCount, setscrollCount] = useState(0);

	useEffect(() => {
		fetch('http://localhost:3000/data/main.json', {
			method: 'GET',
		})
			.then(res => res.json())
			.then(data => {
				setImageList(data);
			});
	}, []);

	useEffect(() => {
		const a = Array.from({ length: 16 }, () => 0);
		for (let i = 0; i < scrollCount; i++) {
			a[i] = 1;
		}
		setImageSrc(a);
	}, [scrollCount]);

	window.addEventListener('scroll', () => {
		const scroll = Math.floor(
			(window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 26,
		);

		setscrollCount(scroll);
	});

	return (
		<>
			<Topnav />
			<div className="main">
				{imageList &&
					imageList.map((img, index) => {
						return <ImageCard src={img.image[imageSrc[index]].url} />;
					})}
				<MainBox text="Shop All" />
				<MainBox text="Features" />
				<MainBox
					text="Frontend"
					href="https://github.com/wecode-bootcamp-korea/fullstack3-1st-weareneverthat-frontend"
				/>
				<MainBox
					text="Backend"
					href="https://github.com/wecode-bootcamp-korea/fullstack3-1st-weareneverthat-backend"
				/>
			</div>
			<Footer />
		</>
	);
}

export default Main;
