import './Footer.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<div className="Footer">
			<section className="footer-upper">
				<section className="ft-sns">
					<FontAwesomeIcon icon={faInstagram} />
					<FontAwesomeIcon icon={faYoutube} />
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 191.94">
						<g>
							<polygon
								class="cls-1"
								points="76.01 89.49 87.99 89.49 87.99 89.49 82 72.47 76.01 89.49"
							/>
							<path
								class="cls-1"
								d="M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,55,48.75,69.48-1.59,5.49-10.24,35.34-10.58,37.69,0,0-.21,1.76.93,2.43a3.14,3.14,0,0,0,2.48.15c3.28-.46,38-24.81,44-29A131.56,131.56,0,0,0,104,164c57.44,0,104-36.71,104-82S161.44,0,104,0ZM52.53,69.27c-.13,11.6.1,23.8-.09,35.22-.06,3.65-2.16,4.74-5,5.78a1.88,1.88,0,0,1-1,.07c-3.25-.64-5.84-1.8-5.92-5.84-.23-11.41.07-23.63-.09-35.23-2.75-.11-6.67.11-9.22,0-3.54-.23-6-2.48-5.85-5.83s1.94-5.76,5.91-5.82c9.38-.14,21-.14,30.38,0,4,.06,5.78,2.48,5.9,5.82s-2.3,5.6-5.83,5.83C59.2,69.38,55.29,69.16,52.53,69.27Zm50.4,40.45a9.24,9.24,0,0,1-3.82.83c-2.5,0-4.41-1-5-2.65l-3-7.78H72.85l-3,7.78c-.58,1.63-2.49,2.65-5,2.65a9.16,9.16,0,0,1-3.81-.83c-1.66-.76-3.25-2.86-1.43-8.52L74,63.42a9,9,0,0,1,8-5.92,9.07,9.07,0,0,1,8,5.93l14.34,37.76C106.17,106.86,104.58,109,102.93,109.72Zm30.32,0H114a5.64,5.64,0,0,1-5.75-5.5V63.5a6.13,6.13,0,0,1,12.25,0V98.75h12.75a5.51,5.51,0,1,1,0,11Zm47-4.52A6,6,0,0,1,169.49,108L155.42,89.37l-2.08,2.08v13.09a6,6,0,0,1-12,0v-41a6,6,0,0,1,12,0V76.4l16.74-16.74a4.64,4.64,0,0,1,3.33-1.34,6.08,6.08,0,0,1,5.9,5.58A4.7,4.7,0,0,1,178,67.55L164.3,81.22l14.77,19.57A6,6,0,0,1,180.22,105.23Z"
							/>
						</g>
					</svg>
					<FontAwesomeIcon icon={faFacebookF} />
				</section>
				<section className="ft-menu">
					<a>NEWSLETTER</a>
					<a>STORES</a>
					<a>CONTACT</a>
					<a>SHIPPING&RETURNS</a>
					<a>PRIVACY POLICY</a>
					<a>TERMS&CONDITIONS</a>
				</section>
				<section className="ft-name">© 2022 weareneverthat®</section>
			</section>
			<section className="footer-lower">
				<span>주식회사 위네댓&nbsp;&nbsp;&nbsp;</span>
				<span>대표 김코드&nbsp;&nbsp;&nbsp;</span>
				<span>서울특별시 서대문구&nbsp;&nbsp;&nbsp;</span>
				<span>사업자 등록번호: 123-45-67890&nbsp;&nbsp;&nbsp;</span>
				<span>통신판매업 신고:2022-서울마포-0000&nbsp;&nbsp;&nbsp;</span>
				<span>전화: +82 (0)07 1111 2222-3</span>
			</section>
		</div>
	);
}

export default Footer;
