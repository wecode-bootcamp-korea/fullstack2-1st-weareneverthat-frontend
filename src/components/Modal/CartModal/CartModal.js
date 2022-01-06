import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartCard from '../../CartCard/CartCard';
import './CartModal.scss';

function CartModal({ cartClass, closeCart }) {
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

	const subTotal = () => {
		let subTotal = 0;
		const priceArr = carts.list.map(el => el.discountPrice);
		console.log(priceArr);
		for (let i = 0; i < priceArr.length; i++) {
			subTotal += priceArr[i];
		}
		return subTotal;
	};

	const result = carts.list && subTotal();

	return (
		<div className={cartClass}>
			{carts.list && (
				<section className="summary">
					<section>ORDER SUMMARY</section>
					<section className="closeBtn" onClick={closeCart}>
						CLOSE
					</section>
				</section>
			)}
			<section className="wrapper">
				{carts.list ? (
					carts.list.map((el, index) => {
						return (
							<CartCard
								key={index}
								imageUrl={el.imageUrl}
								name={el.name}
								color={el.color}
								size={el.size}
								price={el.price}
								discountPrice={el.discountPrice}
								closeCart={closeCart}
							/>
						);
					})
				) : (
					<section className="empty">
						<p>Your cart is empty</p>
						<p>
							<Link to="/products">CONTINUE SHOPPING</Link>
						</p>
					</section>
				)}
			</section>
			{carts.list && (
				<section className="cartFooter">
					<section className="total">
						<div>SUBTOTAL</div>
						<div>₩{result}</div>
					</section>
					<button className="checkoutBtn">CHECKOUT</button>
					<section className="subInfo">배송비 및 쿠폰 적용은 결제 단계이서 적용됩니다.</section>
				</section>
			)}
		</div>
	);
}

export default CartModal;
