// Problem: Combining Multiple Carts (Rest and Spread Operators)
// 	•	Scenario: In your ecommerce app, customers can have multiple carts (one from the web, one from the mobile app). You need to combine the carts into one and remove any duplicate items (based on the product ID).

const cartWeb = [
	{ id: 1, item: "Laptop", price: 1500 },
	{ id: 2, item: "Phone", price: 800 },
];
const cartMobile = [
	{ id: 1, item: "Laptop", price: 1500 },
	{ id: 3, item: "Headphones", price: 200 },
];

// •	Task: Combine both carts, and ensure there are no duplicate items based on the product ID.
