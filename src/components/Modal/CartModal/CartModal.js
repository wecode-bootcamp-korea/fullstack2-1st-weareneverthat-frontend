import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CartModal.scss';

function CartModal(props) {
	const [carts, setCarts] = useState({});
	useEffect(() => {
		fetch('http://localhost:3000/data/cartMock.json', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			headers: new Headers({ Authorization: sessionStorage.getItem('token') }),
			mode: 'cors',
		})
			.then(res => res.json())
			.then(data => {
				setCarts(data);
			});
	}, []);

	// const subTotal = () => {
	// 	let subTotal = 0;
	// 	const priceArr = carts.list && carts.list.map(el => el.discountPrice);
	// 	console.log(priceArr);
	// 	for (let i = 0; i < priceArr.length; i++) {
	// 		subTotal += priceArr[i];
	// 	}
	// 	return subTotal;
	// };

	// const result = subTotal();

	return (
		<div className={props.cartClass}>
			<section className="wrapper">
				{carts.list &&
					carts.list.map(el => {
						return (
							<>
								<section className="productCard">
									<div className="mainImage">
										<img src={el.imageUrl} width="100px" height="100px" />
									</div>
									<div className="Info">
										<section className="productName">
											<span>{el.name}</span>
											<span>{el.color}</span>
											<span>size {el.size}</span>
										</section>
										<section className="productPrice">
											<section>{el.price}</section>
											<section>{el.discountPrice}</section>
										</section>
									</div>
								</section>
							</>
						);
					})}
			</section>

			<section className="total">
				<div>SUBTOTAL</div>
				{/* <div>{result}</div> */}
			</section>
			<section className="checkoutBtn">버튼</section>
			{/* <section>
				<p>Your cart is empty</p>
				<p>
					<Link to="/products">CONTINUE SHOPPING</Link>
				</p>
			</section> */}
		</div>
	);
}

export default CartModal;
