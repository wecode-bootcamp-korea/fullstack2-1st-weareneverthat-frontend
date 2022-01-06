import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartCard from '../../CartCard/CartCard';
import './CartModal.scss';

function CartModal({ cartClass, closeCart }) {
	const [carts, setCarts] = useState({});
	useEffect(() => {
		fetch(`${process.env.REACT_APP_SERVER_HOST}/products/cartList`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			headers: new Headers({ Authorization: sessionStorage.getItem('token') }),
			mode: 'cors',
		})
			.then(res => res.json())
			.then(data => {
				setCarts(data);
			});
	}, [cartClass, carts]);

	const subTotal = () => {
		let subTotal = 0;
		const priceArr = carts.list.map(el => el.discountPrice);
		for (let i = 0; i < priceArr.length; i++) {
			subTotal += priceArr[i];
		}
		return subTotal;
	};

	const result = carts.list && subTotal();

	const handleClickCheckOut = () => {
		fetch(`${process.env.REACT_APP_SERVER_HOST}/products/checkout`, {
			method: 'POST',
			headers: new Headers({
				Authorization: sessionStorage.getItem('token'),
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify({
				cartList: carts.list,
			}),
		}).then(() => {
			setCarts({});
			alert('결제가 완료되었습니다.');
		});

		closeCart();
	};

	return (
		<div className={cartClass}>
			{(carts.list ? carts.list.length : false) ? (
				<section className="summary">
					<section>ORDER SUMMARY</section>
					<section className="closeBtn" onClick={closeCart}>
						CLOSE
					</section>
				</section>
			) : (
				<></>
			)}
			<section className="wrapper">
				{(carts.list ? carts.list.length : false) ? (
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
								cartId={el.id}
								detailOnSizeId={el.detailOnSizeId}
								productId={el.productId}
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
			{(carts.list ? carts.list.length : false) ? (
				<section className="cartFooter">
					<section className="total">
						<div>SUBTOTAL</div>
						<div>₩{result}</div>
					</section>
					<button className="checkoutBtn" onClick={handleClickCheckOut}>
						CHECKOUT
					</button>
					<section className="subInfo">배송비 및 쿠폰 적용은 결제 단계이서 적용됩니다.</section>
				</section>
			) : (
				<></>
			)}
		</div>
	);
}

export default CartModal;
