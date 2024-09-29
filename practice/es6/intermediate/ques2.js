// .	Problem: Updating Product Prices (Spread Operator)
// 	•	Scenario: In an ecommerce platform, the price of certain products needs to be updated, but the original price data should remain unchanged for record-keeping.
// 	•	Dummy Data:

const products = [
	{ id: 1, name: "Laptop", price: 1200 },
	{ id: 2, name: "Smartphone", price: 700 },
	{ id: 3, name: "Tablet", price: 500 },
];

// Create a new array where you update the price of the laptop to 1300, without modifying the original products array.

// const newItems = [...products, products[0] && { products[0].price: 1300 }]; ❌

const newItems = products.map((product) =>
	product.id === 1 ? { ...product, price: 1300 } : product
);
console.log(newItems);
