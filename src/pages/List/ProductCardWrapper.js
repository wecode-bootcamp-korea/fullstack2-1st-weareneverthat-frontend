import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LikeButton from './likeButton';
import './List.scss';

function ProductCardWrapper({
	product,
	index,
	src,
	productId,
	content,
	price,
	newprice,
	heartCount,
}) {
	const [number, setNumber] = useState(0);
	const [colorId, setColorId] = useState(product.detail[0].productColorId);
	const clickImg = index => {
		setNumber(index);
		setColorId(product.detail[index].productColorId);
	};
	const navigate = useNavigate();
	function goToDetail() {
		navigate(`/products/${productId}?color=${colorId}`);
	}
	return (
		<div className="image">
			<div className="imageFull">
				{src[number].image.map((image, index) => {
					return (
						<>
							<div className={`imageContainer${index + 1}`} onClick={goToDetail}></div>
							<img
								src={image.imageUrl}
								className={`img${index + 1}`}
								alt="상품"
								width="300px"
								height="300px"
							/>
						</>
					);
				})}
			</div>
			<div className="subImages">
				{src.map((detail, index) => {
					return (
						<img
							src={detail.image[0].imageUrl}
							alt="상품"
							width={50}
							height={50}
							onClick={() => {
								clickImg(index);
							}}
						/>
					);
				})}
			</div>

			<div className="contentContainer" onClick={goToDetail}>
				<h3>{content}</h3>
				<div className="priceContainer">
					<span className="price">￦{price}</span>
					<span className="newprice">￦{newprice}</span>
				</div>
			</div>
			<LikeButton productId={productId} heartCount={heartCount} />
		</div>
	);
}

export default ProductCardWrapper;
