import './CartModal.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function CartModal(props) {
	const [carts, setCarts] = useState({});
	useEffect(() => {
		fetch('http://localhost:8000/carts', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			mode: 'cors',
			body: JSON.stringify({
				userId: sessionStorage.getItem('token'),
			}),
		})
			.then(res => res.json())
			.then(data => {
				if (data.message === 'KEY_ERROR') {
					setCarts({});
				} else {
					setCarts(data);
				}
			});
	}, []);
	return;
}

export default CartModal;
