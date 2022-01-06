import './Topnav.scss';
import CartModal from '../Modal/CartModal/CartModal';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Topnav() {
	const [isCartOn, setIsCartOn] = useState(false);
	const [cartClass, setCartClass] = useState('CartModalOff');
	const [hiddenNavClass, setHiddenNavClass] = useState('navOff');
	const [loginButton, setLoginButton] = useState('LOGIN');
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_HOST}/users`, {
			headers: new Headers({ Authorization: sessionStorage.getItem('token') }),
		})
			.then(res => res.json())
			.then(data => {
				if (data.message !== 'VALIDATE_ERROR') {
					setLoginButton('LOGOUT');
				}
			});
	}, []);

	const handleCartModal = () => {
		setIsCartOn(!isCartOn);
		if (cartClass === 'CartModalOff') {
			setCartClass('CartModalOn');
		} else {
			setCartClass('CartModalOff');
		}
	};

	const handleHiddenNavClass = () => {
		if (hiddenNavClass === 'navOff') {
			setHiddenNavClass('navOn');
		} else {
			setHiddenNavClass('navOff');
		}
	};

	const handleLoginClick = () => {
		if (loginButton === 'LOGIN') {
			navigate('/users/login');
		} else {
			sessionStorage.removeItem('token');
			navigate('/');
			setLoginButton('LOGIN');
		}
	};

	return (
		<div className="Topnav">
			<header>
				<nav>
					<ul>
						<li className="shop">
							<Link to="/products">SHOP</Link>
							<ul className="navCategory">
								<li>
									<div className="rec"></div>
									<Link to="/products/new">New</Link>
								</li>
								<li>
									<div className="rec"></div>
									<Link to="/products">All</Link>
								</li>
								<li>
									<div className="rec"></div>
									<Link to="/products?category=1">Outerwear</Link>
								</li>
								<li>
									<div className="rec"></div>
									<Link to="/products?category=2">Sweatshirts</Link>
								</li>
								<li>
									<div className="rec"></div>
									<Link to="/products?category=3">Bottoms</Link>
								</li>
								<li>
									<div className="rec"></div>
									<Link to="/products?category=4">Shoes</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to="/products/top20">TOP20</Link>
						</li>
						<li>
							<Link to="#">FEATURES</Link>
						</li>
						<li>
							<Link to="#">SEARCH</Link>
						</li>
					</ul>
				</nav>
				<Link to="">
					<section className="menuBtn" onClick={handleHiddenNavClass}>
						<div className="line line1"></div>
						<div className="line line2"></div>
						<div className="line line3"></div>
					</section>
				</Link>
				<h1>
					<Link to="/">
						weareneverthat <span>®</span>
					</Link>
				</h1>
				<nav>
					<ul>
						<li>
							<Link to="#">KOR / ₩</Link>
						</li>
						<li onClick={handleLoginClick} className="login">
							{loginButton}
						</li>
						<li onClick={handleCartModal} className="cartButton">
							CART
						</li>
					</ul>
				</nav>
				<Link to="" className="cartBtn">
					<FontAwesomeIcon icon={faShoppingCart} onClick={handleCartModal} />
				</Link>
			</header>
			<CartModal cartClass={cartClass} closeCart={handleCartModal} />
			<nav className={hiddenNavClass}>
				<section className="wraper">
					<section>
						<ul>
							<li>
								<Link to="/products">SHOP</Link>
							</li>
							<li>
								<Link to="/products/top20">TOP20</Link>
							</li>
							<li>
								<Link to="/">FEATURES</Link>
							</li>
							<li>
								<Link to="#">SEARCH</Link>
							</li>
						</ul>
					</section>
					<section className="loginBtn">
						<div>LOGIN</div>
						<div>KOR / ₩</div>
					</section>
					<section className="snsLogin">소셜 로그인</section>
					<section className="saleInfo">이미지 설명</section>
					<section className="line"></section>
					<section className="navFooter">풋터</section>
				</section>
			</nav>
		</div>
	);
}

export default Topnav;
