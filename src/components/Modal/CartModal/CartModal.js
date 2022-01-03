import './CartModal.scss';
import { Link } from 'react-router-dom';

function CartModal(props) {
	return (
		<div className={props.cartClass}>
			<section>
				<p>Your cart is empty</p>
				<p>
					<Link to="#">CONTINUE SHOPPING</Link>
				</p>
			</section>
		</div>
	);
}

export default CartModal;
