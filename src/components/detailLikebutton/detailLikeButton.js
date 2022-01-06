import React from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './detailLikeButton.scss';

function HeartButton({ productId, isHeart, setIsHeart }) {
	const navigate = useNavigate();

	const handleClickHeart = () => {
		fetch('${process.env.REACT_APP_SERVER_HOST}/products/heart?productId=' + productId, {
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
					<HeartFilled className="button red" onClick={handleClickHeart} />
				) : (
					<HeartOutlined className="button white" onClick={handleClickHeart} />
				)}
			</span>
		</div>
	);
}
export default HeartButton;
