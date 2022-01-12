import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Topnav from '../../components/Topnav/Topnav';
import SortBox from './SortBox';
import ProductCardWrapper from './ProductCardWrapper';
import Footer from '../../components/Footer/Footer';
import './List.scss';

function List() {
	const [productList, setProductList] = useState([]);
<<<<<<< HEAD
	const [checked, ischecked] = useState('unviewSortBox');
=======
	const [checked1, ischecked1] = useState('sortBox1');

	const [number, setNumber] = useState([
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	]);
>>>>>>> main

	const activeButton = () => {
		checked === 'unviewSortBox' ? ischecked('viewSortBox') : ischecked('unviewSortBox');
	};

	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	const query = useQuery();
	const location = useLocation();

	const [categoryName, setCategoryName] = useState();

	useEffect(() => {
		fetch(
			`${process.env.REACT_APP_SERVER_HOST}/products/?category=${query.get(
				'category',
			)}&sort=${query.get('sort')}`,
		)
			.then(res => res.json())
			.then(data => {
				setProductList(data);

				if (query.get('category') === '1') {
					setCategoryName('OuterWear');
				} else if (query.get('category') === '2') {
					setCategoryName('SweatShirts');
				} else if (query.get('category') === '3') {
					setCategoryName('Bottoms');
				} else if (query.get('category') === '4') {
					setCategoryName('Shoes');
				} else {
					setCategoryName('All');
				}
			});
	}, [location]);

	return (
		<div className="listContainer">
			<div>
				<Topnav />
			</div>
			<nav className="buttons">
				<div className="navButton">
					<span type="button">{categoryName}</span>
				</div>
				<div className="sortingButton">
					<button type="button" onClick={activeButton}>
						Sort
					</button>
					<>
						<SortBox className={checked} category={query.get('category')} />
					</>
				</div>
			</nav>
			<div className="productList">
				{productList.product &&
					productList.product.map((product, index) => {
						return (
							<ProductCardWrapper
								product={product}
								index={index}
								src={product.detail}
								key={product.productId}
								productId={product.id}
								content={product.name}
								price={product.price}
								newprice={product.discountPrice}
								heartCount={product.heart.length}
							/>
						);
					})}
			</div>
			<Footer />
		</div>
	);
}

export default List;
