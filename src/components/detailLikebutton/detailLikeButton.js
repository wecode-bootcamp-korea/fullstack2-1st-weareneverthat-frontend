import React, { useState, useEffect } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './detailLikeButton.scss';

function HeartButton({ productId, isHeart, setIsHeart }) {
	const navigate = useNavigate();

	const activeLogin = () => {
		fetch('http://localhost:8000/products/heart?productId=' + productId, {
			headers: new Headers({ Authorization: sessionStorage.getItem('token') }),
		})
			.then(res => res.json())
			.then(data => {
				if (data.message === 'VALIDATE_ERROR') navigate('/users/login');
			});

		isHeart ? setIsHeart(false) : setIsHeart(true);
	};

	return (
		<div className="heartButton">
			<span>
				{isHeart ? (
					<HeartFilled className="button red" onClick={activeLogin} />
				) : (
					<HeartOutlined className="button white" onClick={activeLogin} />
				)}
			</span>
		</div>
	);
}
export default HeartButton;
