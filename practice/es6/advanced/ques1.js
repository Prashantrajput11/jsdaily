// .	Problem: Extracting Data from Nested API Response (Nested Object Destructuring)
// 	•	Scenario: In your social media app, you receive a deeply nested API response containing user details. Extract specific data like username, bio, and follower count to display in the profile UI.

const apiResponse = {
	user: {
		id: 101,
		profile: {
			username: "john_doe",
			bio: "Tech enthusiast",
			stats: {
				followers: 1200,
				following: 150,
			},
		},
	},
};

// Task: Use object destructuring to extract username, bio, and followers into separate variables.
