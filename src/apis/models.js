const baseURL = 'http://localhost:3000';

export const fetchProducts = async () => {
	const response = await fetch(`${baseURL}/products`);
	console.log(response);
	return await response.json();
};

export const fetchProductsById = async id => {
	const response = await fetch(`${baseURL}/users/${id}/products`);
	console.log(response);
	return await response.json();
};
