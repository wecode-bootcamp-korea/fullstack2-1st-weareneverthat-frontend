import React, { useState, useEffect } from 'react';
import Carousel, { CarouselItem } from './carousel';
import { useNavigate } from 'react-router-dom';
import '../pages/Detail/Detail.scss';
import HeartButton from './detailLikebutton/detailLikeButton';

function ProductInfo(props) {
	const {
		product,
		images,
		changeColor,
		getQuantity,
		showQuantity,
		quantityBySize,
		result,
		isHeart,
		setIsHeart,
		detailSizeId,
	} = props;

	const navigate = useNavigate();

	const [imageClick, setImageClick] = useState(false);

	const handleClickCart = () => {
		fetch(`${process.env.REACT_APP_SERVER_HOST}/products/cart?detailSizeId=${detailSizeId}`, {
			headers: new Headers({ Authorization: sessionStorage.getItem('token') }),
		})
			.then(res => res.json())
			.then(data => {
				if (data.message === 'VALIDATE_ERROR') navigate('/users/login');
			});
	};

	return (
		<>
			<div className="slide">
				<div className="leftSlide">
					<button>
						{product.image_url &&
							product.image_url.map((el, index) => {
								return (
									<label onClick={() => setImageClick(!imageClick)}>
										<input type="radio" name="subImg" id={index} />
										<img index={index} src={el} width="60px" height="70px" className="subImg" />
									</label>
								);
							})}
					</button>
				</div>
			</div>
			<div className="mainslide">
				<div className="slideShow">
					<Carousel>
						{product.image_url &&
							product.image_url.map((el, index) => {
								return (
									<CarouselItem>
										<img index={index} src={el} width="600px" height="650px" className="mainImg" />
									</CarouselItem>
								);
							})}
					</Carousel>
				</div>
			</div>
			<div className="productInfo">
				<p className="productName">{product.name}</p>
				<div className="comparePrice">
					<ul>
						<li>
							<span className="price">₩ {product.price}</span>
							<span className="discount">₩ {product.discount_price}</span>
						</li>
					</ul>
				</div>
				<div className="productColor">
					<div className="colorName">
						<ul>
							<li className="color">
								{images.AllImages &&
									images.AllImages.map((el, index) => {
										return (
											<li>
												<button onClick={changeColor} value={el.colorId}>
													<img
														index={index}
														src={el.image_url}
														value={el.colorId}
														width="45px"
														height="50px"
													/>
												</button>
												<p class="arrow_box">{el.color}</p>
											</li>
										);
									})}
							</li>
						</ul>
					</div>
				</div>
				<div>
					<ul className="productSize">
						<li className="size">
							<li>
								{quantityBySize.allQuantityBySize &&
									quantityBySize.allQuantityBySize.map((el, index) => {
										const isNotSotck = !(el.quantity > 0);
										const color = isNotSotck ? 'lightgray' : 'black';
										return (
											<button>
												<label style={{ color: color }}>
													<input
														type="radio"
														name="size"
														id={el.size}
														disabled={isNotSotck}
														onClick={getQuantity}
														value={el.size}
													/>
													<span>{el.size}</span>
												</label>
											</button>
										);
									})}
							</li>
						</li>
					</ul>
				</div>
				<div className="productCart">
					<ul>
						<li className="cart">
							<button onClick={handleClickCart}>
								<p>ADD TO CART</p>
							</button>
						</li>
						<li className="wishlist">
							<HeartButton
								isHeart={isHeart}
								setIsHeart={setIsHeart}
								productId={product.product_id}
							/>
							<a href="#!">WISHLIST</a>
						</li>
					</ul>
				</div>
				<div className="productStock">
					<ul>
						<li className="stock">
							{product.quantity < 100 ? <p className="blink">{result}</p> : <p></p>}
						</li>
					</ul>
				</div>
				<div className="productDescription">
					<ul>
						<li className="description">
							<p>{product.description}</p>
						</li>
						<li className="country">
							<p>Made in {product.country}</p>
						</li>
					</ul>
				</div>
				<div className="popup">
					<ul className="popupContent">
						<li className="sizeFit">
							<li className="popupTitle">SIZE {'&'} FIT</li>
							<p>Model is 183cm(6ft) and wears size L.</p>
						</li>
						<li className="shipping">
							<li className="popupTitle">SHIPPING</li>
							<p>서울 및 경기 일부 지역 당일배송 가능</p>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default ProductInfo;
