import React from 'react';
import '../pages/detail.scss';

function Nav() {
	return (
		<nav id="navbar" className="wrap">
			<ul className="navbar__menu">
				<li>
					<a href="#!">SHOP</a>
				</li>
				<li>
					<a href="#!">TOP 20</a>
				</li>
				<li>
					<a href="#!">FEATURES</a>
				</li>
				<li>
					<a href="#!">SEARCH</a>
				</li>
			</ul>
			<a href="main" className="navbar__logo">
				weareneverthat
			</a>
			<ul className="navbar__menu">
				<li>
					<a href="#!">KOR / ₩</a>
				</li>
				<li>
					<a href="#!">LOGIN</a>
				</li>
				<li>
					<a href="#!">CART</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
