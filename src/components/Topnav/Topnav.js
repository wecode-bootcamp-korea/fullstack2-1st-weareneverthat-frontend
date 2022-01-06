import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import CartModal from '../Modal/CartModal/CartModal';
import './Topnav.scss';

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
		return () => {
			setHiddenNavClass('navOff');
			document.body.style.overflow = 'unset';
		};
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
			document.body.style.overflow = 'hidden';
		} else {
			setHiddenNavClass('navOff');
			document.body.style.overflow = 'unset';
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
						<div onClick={handleLoginClick} className="login">
							{loginButton}
						</div>
						<div>KOR / ₩</div>
					</section>
					<section className="snsLogin">
						<FontAwesomeIcon icon={faInstagram} />
						<FontAwesomeIcon icon={faYoutube} />
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 191.94">
							<g>
								<polygon
									class="cls-1"
									points="76.01 89.49 87.99 89.49 87.99 89.49 82 72.47 76.01 89.49"
								/>
								<path
									class="cls-1"
									d="M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,55,48.75,69.48-1.59,5.49-10.24,35.34-10.58,37.69,0,0-.21,1.76.93,2.43a3.14,3.14,0,0,0,2.48.15c3.28-.46,38-24.81,44-29A131.56,131.56,0,0,0,104,164c57.44,0,104-36.71,104-82S161.44,0,104,0ZM52.53,69.27c-.13,11.6.1,23.8-.09,35.22-.06,3.65-2.16,4.74-5,5.78a1.88,1.88,0,0,1-1,.07c-3.25-.64-5.84-1.8-5.92-5.84-.23-11.41.07-23.63-.09-35.23-2.75-.11-6.67.11-9.22,0-3.54-.23-6-2.48-5.85-5.83s1.94-5.76,5.91-5.82c9.38-.14,21-.14,30.38,0,4,.06,5.78,2.48,5.9,5.82s-2.3,5.6-5.83,5.83C59.2,69.38,55.29,69.16,52.53,69.27Zm50.4,40.45a9.24,9.24,0,0,1-3.82.83c-2.5,0-4.41-1-5-2.65l-3-7.78H72.85l-3,7.78c-.58,1.63-2.49,2.65-5,2.65a9.16,9.16,0,0,1-3.81-.83c-1.66-.76-3.25-2.86-1.43-8.52L74,63.42a9,9,0,0,1,8-5.92,9.07,9.07,0,0,1,8,5.93l14.34,37.76C106.17,106.86,104.58,109,102.93,109.72Zm30.32,0H114a5.64,5.64,0,0,1-5.75-5.5V63.5a6.13,6.13,0,0,1,12.25,0V98.75h12.75a5.51,5.51,0,1,1,0,11Zm47-4.52A6,6,0,0,1,169.49,108L155.42,89.37l-2.08,2.08v13.09a6,6,0,0,1-12,0v-41a6,6,0,0,1,12,0V76.4l16.74-16.74a4.64,4.64,0,0,1,3.33-1.34,6.08,6.08,0,0,1,5.9,5.58A4.7,4.7,0,0,1,178,67.55L164.3,81.22l14.77,19.57A6,6,0,0,1,180.22,105.23Z"
								/>
							</g>
						</svg>
						<FontAwesomeIcon icon={faFacebookF} />
					</section>
					<img
						src="https://images.unsplash.com/photo-1629374029669-aab2f060553b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
						width={'20%'}
					/>
					<section className="navFooter">
						<section className="contact">
							<div>CONTACT</div>
							<div>NEWSLETTER</div>
							<div>STORES</div>
						</section>
						<section className="name">© weareneverthat®</section>
					</section>
				</section>
			</nav>
		</div>
	);
}

export default Topnav;
