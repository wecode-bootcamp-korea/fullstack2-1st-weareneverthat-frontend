// import { useRef, useState, useEffect, useLocation } from 'react';
// import List from '../../pages/List/List';

// const InfiObserverList = () => {
// 	const [page, setPage] = useState(1);
// 	const [items, setItems] = useState([]);
// 	const [loading, setLoading] = useState(false);
// 	const observer = useRef();

// 	const getFetchData = () => {
// 		const location = useLocation();

// 		const query = useQuery();

// 		function useQuery() {
// 			return new URLSearchParams(useLocation().search);
// 		}
// 		const url = `${process.env.REACT_APP_SERVER_HOST}/products/?category=${query.get(
// 			'category',
// 		)}&sort=${query.get('sort')}`;
// 		fetch(url)
// 			.then(res => res.json())
// 			.then(
// 				item => {
// 					setItems(prev => [...prev, ...item]);
// 					setLoading(true);
// 				},
// 				[location],
// 			);
// 	};

// 	useEffect(() => getFetchData(), [page]);

// 	const onIntersect = entries => {
// 		const target = entries[0];
// 		if (target.isIntersecting) setPage(p => p + 1);
// 	};

// 	useEffect(() => {
// 		if (!observer.current) return;

// 		if (loading) {
// 			const io = new IntersectionObserver(onIntersect, { threshold: 1 });
// 			io.observe(observer.current);

// 			return () => io.disconnect();
// 		}
// 	}, [loading]);

// 	return (
// 		<div>
// 			{items?.map(item => (
// 				<List key={item.id} item={item} />
// 			))}
// 			<div ref={observer} />
// 		</div>
// 	);
// };

// export default InfiObserverList;
