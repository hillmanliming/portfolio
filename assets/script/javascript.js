let parSplash = document.querySelectorAll(".par-splash");
let parSplashArray = [...parSplash]; // converts NodeList to Array

let school = document
	.getElementById("school")
	.addEventListener("click", function () {
		parSplashArray.forEach((parSplash) => {
			parSplash.innerHTML = "SCHOOL";
		});
	});

let piano = document
	.getElementById("piano")
	.addEventListener("click", function () {
		parSplashArray.forEach((parSplash) => {
			parSplash.innerHTML = "PIANO";
		});
	});

let about = document
	.getElementById("about")
	.addEventListener("click", function () {
		parSplashArray.forEach((parSplash) => {
			parSplash.innerHTML = "ABOUT";
		});
	});

let contact = document
	.getElementById("contact")
	.addEventListener("click", function () {
		parSplashArray.forEach((parSplash) => {
			parSplash.innerHTML = "CONTACT";
		});
	});

// If clicked on wxyz elemnt from header, change p1/p2 to correlating header name hard coded.
