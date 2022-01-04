import React, { useState } from 'react';
import '../pages/Detail/detail.scss';

export const CarouselItem = ({ children, width }) => {
	return (
		<div className="carouselItem" style={{ width: width }}>
			{children}
		</div>
	);
};

const Carousel = ({ children }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const updateIndex = newIndex => {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}

		setActiveIndex(newIndex);
	};

	return (
		<>
			<div className="indicators">
				<button
					className="prev"
					onClick={() => {
						updateIndex(activeIndex - 1);
					}}
				>
					&lang;
				</button>
			</div>
			<div className="carousel">
				<div
					className="inner"
					style={{
						transform: `translateX(-${activeIndex * 100}%)`,
					}}
				>
					{React.Children.map(children, (child, index) => {
						return React.cloneElement(child, { width: '100%' });
					})}
				</div>
			</div>
			<div className="indicators">
				<button
					className="next"
					onClick={() => {
						updateIndex(activeIndex + 1);
					}}
				>
					&rang;
				</button>
			</div>
		</>
	);
};

export default Carousel;
