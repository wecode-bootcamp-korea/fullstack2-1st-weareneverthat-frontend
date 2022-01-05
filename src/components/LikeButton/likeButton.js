import React, { useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import './LikeButton.scss';

function LikeButton({ isHeart, heartCount }) {
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
