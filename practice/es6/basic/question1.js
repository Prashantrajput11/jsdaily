// Problem: Merging User Profiles (Spread Operator, Object Destructuring)
// 	•	Scenario: In a social media app, you receive a user object with profile details from two different sources (one from a database, another from social media API). Your task is to merge the data and create a complete user profile.
// 	•	Dummy Data:

const dbUser = { id: 1, name: "John Doe", age: 25, email: "john@example.com" };
const apiUser = {
	username: "johnny_d",
	followers: 150,
	bio: "Loves coding!",
	email: "prashant",
};

// Task: Merge both objects into one fullUser object without modifying the original objects.

const fullObj = { ...dbUser, ...apiUser };

console.log(fullObj);
