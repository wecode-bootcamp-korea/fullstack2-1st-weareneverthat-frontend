import React, { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import './likeButton.scss';

function LikeButton({ productId, heartCount }) {
	const [checked, ischecked] = useState(false);

	const activeLogin = () => {
		fetch('http://localhost:8000/products/heart?productId=' + productId, {
			headers: new Headers({ Authorization: sessionStorage.getItem('token') }),
		})
			.then(res => res.json())
			.then(data => console.log(data));

		checked ? ischecked(false) : ischecked(true);
	};

	return (
		<div className="likieButton">
			<span>
				{checked ? (
					<HeartFilled className="button red" onClick={activeLogin} />
				) : (
					<HeartOutlined className="button" onClick={activeLogin} />
				)}
			</span>
			<span className="liking">{heartCount}</span>
		</div>
	);
}

export default LikeButton;
