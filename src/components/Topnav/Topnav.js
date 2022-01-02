import './Topnav.scss';
import CartModal from '../Modal/CartModal/CartModal';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Topnav() {
	const [isCartOn, setIsCartOn] = useState(false);
	const [cartClass, setCartClass] = useState('CartModalOff');

	const handleCartModal = () => {
		setIsCartOn(!isCartOn);
		if (cartClass === 'CartModalOff') {
			setCartClass('CartModalOn');
		} else {
			setCartClass('CartModalOff');
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
			</header>
			<CartModal cartClass={cartClass} />
		</div>
	);
}

export default Topnav;
