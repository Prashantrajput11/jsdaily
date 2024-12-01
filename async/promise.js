let age = 2;
const lotteryPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (age > 19) {
			resolve("yow won");
		} else {
			reject("you are not 19");
		}
	}, 3000);
});

lotteryPromise.then((res) => console.log(res)).catch((e) => console.error(e));
