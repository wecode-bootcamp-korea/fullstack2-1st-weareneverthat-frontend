import React, { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import './style.css';

function LikeButton() {
	const [checked, ischecked] = useState(false);
	const activeLogin = () => {
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
			<span className="liking">22220</span>
		</div>
	);
}
export default LikeButton;
