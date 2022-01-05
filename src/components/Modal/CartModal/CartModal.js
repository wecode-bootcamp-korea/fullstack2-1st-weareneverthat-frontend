import './CartModal.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function CartModal(props) {
	const [carts, setCarts] = useState({});
	useEffect(() => {
		fetch('http://localhost:8000/carts', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			headers: new Headers({ Authorization: sessionStorage.getItem('token') }),
			mode: 'cors',
		})
			.then(res => res.json())
			.then(data => {
				setCarts(data);
			});
	}, []);

	return (
		<div className={props.cartClass}>
			<section>
				<p>Your cart is empty</p>
				<p>
					<Link to="/products">CONTINUE SHOPPING</Link>
				</p>
			</section>
		</div>
	);
}

export default CartModal;
