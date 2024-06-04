let parSplash = document.querySelectorAll(".par-splash");

let school = document
	.getElementById("school")
	.addEventListener("click", function () {
		alert("hello");

		var parSplash = document.querySelectorAll(".par-splash"); // returns NodeList
		var parSplashArray = [...parSplash]; // converts NodeList to Array
		parSplashArray.forEach((parSplash) => {
			parSplash.innerHTML = "hello";
		});
	});

// let piano = document
// 	.getElementById("piano")
// 	.addEventListener("click", function () {
// 		parSplash.innerHTML = "hello";
// 	});

// let about = document
// 	.getElementById("piano")
// 	.addEventListener("click", function () {
// 		parSplash.innerHTML = "hello";
// 	});

// let contact = document
// 	.getElementById("contact")
// 	.addEventListener("click", function () {
// 		alert("hello");
// 		parSplash.textContent = "hello";
// 	});

// If clicked on wxyz elemnt from header, change p1/p2 to correlating header name hard coded.
