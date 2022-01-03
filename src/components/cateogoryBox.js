import React from 'react';
const Categorybox = () => {
	return (
		<form>
			Sort By
			<br />
			<input type="checkbox" name="catogories" value="product">
				Recent
			</input>
			<br />
			<input type="checkbox" name="catogories" value="product">
				Price (Low)
			</input>
			<br />
			<input type="checkbox" name="catogories" value="product">
				Price (High)
			</input>
			<br />
			<input type="checkbox" name="catogories" value="product">
				Trending
			</input>
		</form>
	);
};

export default Categorybox;
