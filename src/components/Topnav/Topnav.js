import './Topnav.scss';
import CartModal from '../Modal/CartModal/CartModal';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Topnav() {
	const [isCartOn, setIsCartOn] = useState(false);
	const [cartClass, setCartClass] = useState('CartModalOff');
	const [hiddenNavClass, setHiddenNavClass] = useState('navOff');

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

	return (
		<div className="Topnav">
			<header>
				<nav>
					<ul>
						<li className="shop">
							<Link to="#">SHOP</Link>
							<ul className="category">
								<li>
									<div className="rec"></div>
									New
								</li>
								<li>
									<div className="rec"></div>All
								</li>
								<li>
									<div className="rec"></div>Outerwear
								</li>
								<li>
									<div className="rec"></div>Sweatshirts
								</li>
								<li>
									<div className="rec"></div>Tees
								</li>
								<li>
									<div className="rec"></div>Shirts
								</li>
								<li>
									<div className="rec"></div>Tops
								</li>
								<li>
									<div className="rec"></div>Bottoms
								</li>
							</ul>
						</li>
						<li>
							<Link to="#">TOP20</Link>
						</li>
						<li>
							<Link to="#">FEATURES</Link>
						</li>
						<li>
							<Link to="#">SEARCH</Link>
						</li>
					</ul>
				</nav>
				<section className="menuBtn" onClick={handleHiddenNavClass}>
					<div className="line line1"></div>
					<div className="line line2"></div>
					<div className="line line3"></div>
				</section>
				<h1>
					<Link to="#">
						weareneverthat <span>®</span>
					</Link>
				</h1>
				<nav>
					<ul>
						<li>
							<Link to="#">KOR / ₩</Link>
						</li>
						<li>
							<Link to="#">LOGIN</Link>
						</li>
						<li onClick={handleCartModal}>
							<Link to="#">CART</Link>
						</li>
					</ul>
				</nav>
				<FontAwesomeIcon className="cartBtn" icon={faShoppingCart} onClick={handleCartModal} />
			</header>
			<CartModal cartClass={cartClass} />
			<nav className={hiddenNavClass}>
				<section className="wraper">
					<section>
						<ul>
							<li>
								<Link to="#">SHOP</Link>
							</li>
							<li>
								<Link to="#">TOP20</Link>
							</li>
							<li>
								<Link to="#">FEATURES</Link>
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
