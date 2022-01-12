import React from 'react';
import { useNavigate } from 'react-router-dom';
import './List.scss';

function SortBox({ className, category }) {
	const navigate = useNavigate();
	function handleClick1() {
		navigate(`/products`);
	}
	function handleClick2() {
		navigate(`?category=${category}&sort=discount_price-asc`);
	}
	function handleClick3() {
		navigate(`?category=${category}&sort=discount_price-desc`);
	}
	return (
		<form className={className}>
			<div className="sort">SORT BY</div>
			<br />
			<div onClick={handleClick1}>
				- <span className="sortName">Recent</span>
			</div>
			<br />
			<div onClick={handleClick2}>
				- <span className="sortName">Price (Low)</span>
			</div>
			<br />
			<div onClick={handleClick3}>
				- <span className="sortName">Price (High)</span>
			</div>
		</form>
	);
}

export default SortBox;
