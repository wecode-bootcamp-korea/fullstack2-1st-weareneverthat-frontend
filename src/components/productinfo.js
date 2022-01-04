import React, { useState, useEffect } from 'react';
import Carousel, { CarouselItem } from './carousel';
import '../pages/detail/detail.scss';

function ProductInfo(props) {
	const { product, images, changeColor, getQuantity, showQuantity, quantityBySize, result } = props;

	return (
		<>
			<div className="slide">
				<div className="leftSlide">
					<button>
						<a href="#!">
							{product.image_url &&
								product.image_url.map(el => {
									return <img src={el} width="60px" height="75px" className="subImg" />;
								})}
						</a>
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
										{' '}
										<img index={index} src={el} width="460px" height="620px" className="mainImg" />
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
							<span className="price">₩{product.price}</span>
							<span className="discount">₩{product.discount_price}</span>
						</li>
					</ul>
				</div>
				<div className="productColorName">
					<p>{product.color}</p>
				</div>
				<div className="productColor">
					<ul className="color">
						<li>
							{images.AllImages &&
								images.AllImages.map((el, index) => {
									return (
										<button onClick={changeColor} value={el.color}>
											<img
												index={index}
												src={el.image_url}
												value={el.color}
												width="37px"
												height="50px"
											/>
										</button>
									);
								})}
						</li>
					</ul>
				</div>
				<div>
					<ul className="productSize">
						<li className="size">
							<li>
								{quantityBySize.allQuantityBySize &&
									quantityBySize.allQuantityBySize.map(el => {
										const isSotck = !(el.quantity > 0);
										return (
											<label>
												<button disabled={isSotck} onClick={getQuantity} value={el.size} checked>
													{el.size}
												</button>
											</label>
										);
									})}
							</li>
						</li>
					</ul>
				</div>
				<div className="productCart">
					<ul>
						<li className="cart">
							<button>
								<p>ADD TO CART</p>
							</button>
						</li>
						<li className="wishlist">
							<a href="#!">
								ADD TO <br />
								WISHLIST
							</a>
						</li>
					</ul>
				</div>
				<div className="productStock">
					<ul>
						<li className="stock">
							{product.quantity < 150 ? <p className="blink">{result}</p> : <p></p>}
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
