const fruitmap = new Map();

fruitmap.set("apple", 5);
fruitmap.set("banana", 15);
fruitmap.set("orange", 8);

// console.log(fruitmap.get("banana"));

const hasGrape = fruitmap.has("grape");

// console.log(fruitmap.size);

for (let keys of fruitmap.keys()) {
	console.log(keys);
}

// loop over values
for (let value of fruitmap.values()) {
	console.log(value);
}

// convert map to array

// console.log(Array.from(fruitmap));

fruitmap.clear();

console.log(fruitmap);

// Create a Map where the keys are not strings.
// Use a number (100) and an object ({id: 1}) as keys, with corresponding values "hundred"
// and "object".
//  Then, retrieve the value of these keys.

const num = 101;
const user = { id: 1 };

const amazingMap = new Map();

amazingMap.set(num, "hundred");
amazingMap.set(user, "object");

console.log(amazingMap.get(num));
console.log(amazingMap.get(user));
