import './CartCard.scss';

function CartCard({
	imageUrl,
	name,
	color,
	size,
	price,
	discountPrice,
	result,
	closeCart,
	cartId,
}) {
	const handleClickDelete = () => {
		fetch(`${process.env.REACT_APP_SERVER_HOST}/products/cartList`, {
			method: 'POST',
			headers: new Headers({
				Authorization: sessionStorage.getItem('token'),
				'Content-Type': 'application/json',
			}),
			body: JSON.stringify({
				cartId: cartId,
			}),
		});
	};

	return (
		<div className="cartCard">
			<section className="productCard">
				<div className="mainImage">
					<img src={imageUrl} width="100px" height="100px" />
				</div>
				<div className="Info">
					<section className="productName">
						<span>{name}</span>
						<span>{color}</span>
						<span>Size {size}</span>
					</section>
					<section className="productPrice">
						<span>₩{price}</span>
						<span>₩{discountPrice}</span>
					</section>
				</div>
				<section className="deleteBtn" onClick={handleClickDelete}>
					<span className="line-01"></span>
					<span className="line-02"></span>
				</section>
			</section>
		</div>
	);
}

export default CartCard;
