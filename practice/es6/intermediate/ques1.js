// Problem: Extracting Social Media Post Data (Array Destructuring, Object Destructuring)
// 	•	Scenario: You’re working on a social media platform and have an array of posts. You need to extract the first post’s details (like title and content) to show as a featured post.

const posts = [
	{
		id: 101,
		title: "Learning JavaScript",
		content: "JavaScript is awesome!",
		likes: 150,
	},
	{
		id: 102,
		title: "React Tips",
		content: "Use hooks for better performance!",
		likes: 200,
	},
	{
		id: 103,
		title: "Node.js Basics",
		content: "Understand event-driven architecture.",
		likes: 100,
	},
];

// Task: Use array and object destructuring to extract the first post’s title and content into separate variables.

// const [firstPost] = posts;

// const { title, content } = firstPost;

// shorthand

const [{ title, content }] = posts;

console.log(title, content);
