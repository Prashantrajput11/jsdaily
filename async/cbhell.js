console.log("starts..");

setTimeout(() => {
	console.log("hello set timeout");

	setTimeout(() => {
		console.log("api 2");

		setTimeout(() => {
			console.log("api 3");
		}, 5000);
	}, 4000);
}, 3000);

console.log("afterr set time out");
