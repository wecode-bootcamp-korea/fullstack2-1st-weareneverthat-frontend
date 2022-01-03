import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import '../pages/detail.scss';

function ProductInfo() {
	// const { id } = useParams();
	// const props = useLocation();

	// const [product, setProduct] = useState({});
	// useEffect(() => {
	// 	fetch(`http://localhost:8000/products/${id}?color=${props.state.color}&size=s`)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			setProduct(data);
	// 		});
	// }, []);

	// const [quantityBySize, setQuantityBySize] = useState({});
	// useEffect(() => {
	// 	fetch(`http://localhost:8000/products/quantity/${id}?color=${product.color}`)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			setQuantityBySize(data);
	// 		});
	// }, [product]);

	// console.log(quantityBySize);

	// const [images, setImages] = useState({});
	// useEffect(() => {
	// 	fetch(`http://localhost:8000/products/image/${id}`)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			setImages(data);
	// 		});
	// }, []);

	// const changeColor = e => {
	// 	fetch(`http://localhost:8000/products/${id}?color=${e.currentTarget.value}&size=s`)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			setProduct(data);
	// 		});
	// };

	// const getQuantity = e => {
	// 	fetch(`http://localhost:8000/products/${id}?color=${product.color}&size=${e.target.value}`)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			setProduct(data);
	// 		});
	// };

	// const showQuantity = () => {
	// 	if (product.quantity < 150) {
	// 		return `주문 가능한 수량이 ${product.quantity}개 남았습니다.`;
	// 	} else {
	// 		return product.quantity;
	// 	}
	// };

	// const result = showQuantity();

	const [isChecked, setIsChecked] = useState(false);

	return (
		<div className="productInfo">
			<p className="productName">
				PERTEX® T Down <br /> Jacket Bandana Black
				{/* {product.name} */}
			</p>
			<div className="comparePrice">
				<ul>
					<li>
						<span className="cost">₩189,000 {/* {product.price} */}</span>
						<span className="discount">₩132,300 {/* {product.discount_price} */}</span>
					</li>
				</ul>
			</div>
			<div className="productColorName">
				<p>Bandana Black {/* {product.color} */}</p>
			</div>
			<div className="productColor">
				<ul className="color">
					<li>
						<button>
							<img
								src="https://cdn.shopify.com/s/files/1/0562/4971/2815/products/PERTEX-T-Down-Jacket-Bandana-Black3_110x110@2x.jpg?v=1632893621"
								alt="black"
								width={37}
								height={50}
							/>
							{/* {product.image_url &&
								product.image_url.map(el => {
									return <img src={el} width="37px" height="50px" />;
								})} */}
						</button>
					</li>
					<li>
						<button>
							<img
								src="https://cdn.shopify.com/s/files/1/0562/4971/2815/products/PERTEX-T-Down-Jacket-Bandana-Black3_110x110@2x.jpg?v=1632893621"
								alt="white"
								width={37}
								height={50}
							/>
						</button>
					</li>
					<li className="color">
						<button>
							<img
								src="https://cdn.shopify.com/s/files/1/0562/4971/2815/products/PERTEX-T-Down-Jacket-Bandana-Black3_110x110@2x.jpg?v=1632893621"
								alt="gray"
								width={37}
								height={50}
							/>
						</button>
					</li>
				</ul>
			</div>
			<div>
				<ul className="productSize">
					<li className="size">
						<label>
							<input type="radio" value="XS" id="xs" checked />
							XS
						</label>
						<label>
							<input type="radio" value="S" id="s" />S
						</label>
						<label>
							<input type="radio" value="M" id="m" />M
						</label>
						<label>
							<input type="radio" value="L" id="l" />L
						</label>
						<label>
							<input type="radio" value="XL" id="xl" />
							XL
						</label>
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
						<p className="blink">주문 가능한 수량이 6개 남았습니다.</p>
						{/* <div>
							{quantityBySize.allQuantityBySize &&
								quantityBySize.allQuantityBySize.map(el => {
									const isSotck = !(el.quantity > 150);
									return (
										<button disabled={isSotck} onClick={getQuantity} value={el.size}>
											{el.size}
										</button>
									);
								})}
						</div>
						<p>수량 : {result}</p> */}
					</li>
				</ul>
			</div>
			<div className="productDescription">
				<ul>
					<li className="description">
						<p>
							PERTEX QUANTUM fabric with bandana pattern print <br />
							Duck down 80%, Duck Feather 20% <br />
							Logo embroidery on left chest and wrist <br />
							Logo jacquard zip puller <br />
							Logo print above the inner pocket Nylon 100% <br />
							{/* {product.description} */}
						</p>
					</li>
					<li className="country">
						<p>Made in Vietnam {/* {product.country} */}</p>
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
	);
}

export default ProductInfo;
