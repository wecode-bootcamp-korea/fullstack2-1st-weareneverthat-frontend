import React from 'react';
import '../pages/detail.scss';
import Carousel, { CarouselItem } from './carousel';

function MainSlide() {
	return (
		<div className="mainslide">
			<div className="slideShow">
				<Carousel>
					<CarouselItem>image 1</CarouselItem>
					<CarouselItem>image 2</CarouselItem>
					<CarouselItem>image 3</CarouselItem>
					<CarouselItem>image 1</CarouselItem>
				</Carousel>
				{/* {images.AllImages &&
					images.AllImages.map(el => {
						return (
							<button onClick={changeColor} value={el.color}>
								<img src={el.image_url} value={el.color} width="20px" height="20px" />
							</button>
						);
					})} */}
			</div>
		</div>
	);
}

export default MainSlide;
