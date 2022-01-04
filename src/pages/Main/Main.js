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
			if (window.innerWidth > 1140 || i < 8) a[i] = 1;
			else a[i] = 2;
		}
		setImageSrc(a);
	}, [scrollCount]);

	window.addEventListener('scroll', () => {
		if (window.innerWidth > 1140) {
			const scroll = Math.floor(
				(window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 26,
			);
			setscrollCount(scroll);
		} else {
			const scroll = Math.floor(
				(window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 23,
			);
			setscrollCount(scroll);
		}
	});

	const handleClick = e => {
		console.log(e.target.parentNode);
		e.target.parentNode.style.display = 'none';
	};

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
				<div className="alert">
					배송 일시 중단 안내
					<br />
					본사 내부 사정으로 인해 물류 및 고객센터 운영이 일시적으로 중단됩니다.
					<br />
					주문 및 이용 시 참고 부탁드립니다.
					<div className="cancel" onClick={handleClick}>
						닫기
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Main;
