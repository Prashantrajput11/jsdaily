const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/name/portugal");

const data = request.send();

console.log("data", data);
