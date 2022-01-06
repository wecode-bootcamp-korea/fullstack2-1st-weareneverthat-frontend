// import { useRef, useState, useEffect } from 'react';

// const [isLoading, setIsLoading] = useState(false);

// const [target, setTarget] = useState('');

// const onIntersect = async ([entry], observer) => {
// 	if (entry.isIntersecting && !isLoading) {
// 		observer.unobserve(entry.target);
// 		setIsLoading(true);
// 		await new Promise(resolve => setTimeout(resolve, 4000));
// 		const getListData = async productList => {
// 			const loadedListData = await fetch(
// 				`http://localhost:8000/products/?category=${query.get('category')}&sort=${query.get('sort')}`,
// 			);
// 			const response = await loadedListData.json();
// 			setListData(listData.concat(response));
// 		};
// 		console.log(setProductList);
// 		setIsLoading(false);
// 		observer.observe(entry.target);
// 	}
// };

// useEffect(() => {
// 	let observer;
// 	if (target) {
// 		observer = new IntersectionObserver(onIntersect, {
// 			threshold: 0.4,
// 		});
// 		observer.observe(target);
// 	}
// 	return () => observer && observer.disconnect();
// }, [target]);

// {isLoading ? (
//   <div className="LoaderWrap">
//     <ReactLoading type="spin" color="#A593E0" />
//   </div>
// ) : (
//   'not in view port'
// )}
// <div ref={setTarget}></div>
