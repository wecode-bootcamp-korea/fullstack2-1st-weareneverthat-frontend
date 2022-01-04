import React, { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import './detailLikeButton.scss';

function HeartButton({ productId }) {
	const [checked, ischecked] = useState(false);
	const activeLogin = () => {
		// fetch('http://localhost:8000/heart?productid=' + productId,{headers:{'Content-Type':'application/json','Authorization'}});
		checked ? ischecked(false) : ischecked(true);
	};

	return (
		<div className="heartButton">
			<span>
				{checked ? (
					<HeartFilled className="button red" onClick={activeLogin} />
				) : (
					<HeartOutlined className="button white" onClick={activeLogin} />
				)}
			</span>
		</div>
	);
}
export default HeartButton;
