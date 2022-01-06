import './CartCard.scss';

function CartCard({ imageUrl, name, color, size, price, discountPrice, result, closeCart }) {
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
				<section className="deleteBtn">
					<span className="line-01"></span>
					<span className="line-02"></span>
				</section>
			</section>
		</div>
	);
}

export default CartCard;
