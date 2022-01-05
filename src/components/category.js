import React from 'react';
import '../pages/Detail/Detail.scss';

function Category(props) {
	return (
		<nav className="category">
			<span>
				<a className="topCategory">All</a>
			</span>
			<span>
				<a className="subCategory">{props.name}</a>
			</span>
		</nav>
	);
}

export default Category;
