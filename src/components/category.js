import React from 'react';
import '../pages/Detail/Detail.scss';

function Category(props) {
	return (
		<nav className="category">
			<span className="topCategory">
				<a>{props.categoryName}</a>
			</span>
			<span className="subCategory">
				<a>{props.productName}</a>
			</span>
		</nav>
	);
}

export default Category;
