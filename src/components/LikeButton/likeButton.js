import React from 'react';
import { HeartFilled } from '@ant-design/icons';
import './likeButton.scss';

function LikeButton({ heartCount }) {
	return (
		<div className="likieButton">
			<span>
				<HeartFilled className="button red" />
			</span>
			<span className="liking">{heartCount}</span>
		</div>
	);
}

export default LikeButton;
