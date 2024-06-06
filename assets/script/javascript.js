let parSplash = document.querySelectorAll(".par-change-splash");
let parSplashArray = [...parSplash]; // converts NodeList to Array
let mainSplash = document.getElementById("main-splash");

setTimeout(() => {
	mainSplash.style.display = "none";
}, 2000);

let school = document
	.getElementById("school")
	.addEventListener("click", function () {
		parSplashArray.forEach((parSplash) => {
			parSplash.innerHTML = "SCHOOL";
		});
		mainSplash.style.display = "grid";
		mainSplash.classList.add(".index-main");

		setTimeout(() => {
			mainSplash.style.display = "none";
		}, 2000);

		// Adjust the delay as needed
	});

let piano = document
	.getElementById("piano")
	.addEventListener("click", function () {
		parSplashArray.forEach((parSplash) => {
			parSplash.innerHTML = "PIANO";
		});
		mainSplash.style.display = "grid";
		mainSplash.classList.add(".index-main");

		setTimeout(() => {
			mainSplash.style.display = "none";
		}, 2000);
	});

let about = document
	.getElementById("about")
	.addEventListener("click", function () {
		parSplashArray.forEach((parSplash) => {
			parSplash.innerHTML = "ABOUT";
		});
		mainSplash.style.display = "grid";
		mainSplash.classList.add(".index-main");

		setTimeout(() => {
			mainSplash.style.display = "none";
		}, 2000);
	});

let contact = document
	.getElementById("contact")
	.addEventListener("click", function () {
		parSplashArray.forEach((parSplash) => {
			parSplash.innerHTML = "CONTACT";
		});
		mainSplash.style.display = "grid";
		mainSplash.classList.add(".index-main");

		setTimeout(() => {
			mainSplash.style.display = "none";
		}, 2000);
	});

// If clicked on wxyz elemnt from header, change p1/p2 to correlating header name hard coded.
