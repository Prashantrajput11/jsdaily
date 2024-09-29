// Problem: Looping Over Orders (for…of loop)
// 	•	Scenario: In an ecommerce app, you have a list of user orders, and you need to loop through them to display each order’s details in the console.
// 	•	Dummy Data:

const orders = [
	{ orderId: 1, product: "Shoes", quantity: 2, total: 100 },
	{ orderId: 2, product: "Watch", quantity: 1, total: 250 },
	{ orderId: 3, product: "Backpack", quantity: 3, total: 90 },
];

// Task: Use a for...of loop to log each order’s product name and total amount to the console.

for (const order of orders) {
	console.log(order.product, order.total);
}
