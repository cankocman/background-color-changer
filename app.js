const colors = ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
var hexCode = [];

btn.addEventListener("click", function () {
	for (i = 0; i < 6; i++) {
		const randomnumber = Math.floor(Math.random() * colors.length);
		const digit = colors[randomnumber];
		hexCode.push(digit);
	}
	let hexCodeString = hexCode.join("");
	document.body.style.backgroundColor = `#${hexCodeString}`;
	color.innerHTML = `#${hexCodeString}`;
	hexCode = [];
});

// This project was created by Can Koçman on July 9, 2020
