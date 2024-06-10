document.addEventListener("DOMContentLoaded", function () {
	const parSplashArray = Array.from(
		document.querySelectorAll(".par-change-splash")
	);
	const mainSplash = document.getElementById("main-splash");
	const delay = 1750;

	setTimeout(() => {
		mainSplash.style.display = "none";
	}, delay);

	function updateParSplash(text) {
		parSplashArray.forEach((parSplash) => {
			parSplash.innerHTML = text;
		});
		mainSplash.style.display = "grid";
		mainSplash.classList.add("index-main");

		setTimeout(() => {
			mainSplash.style.display = "none";
		}, delay);
	}

	const actions = [
		{ id: "school", text: "SCHOOL" },
		{ id: "piano", text: "PIANO" },
		{ id: "about", text: "ABOUT" },
		{ id: "contact", text: "CONTACT" },
	];

	actions.forEach(({ id, text }) => {
		document.getElementById(id).addEventListener("click", function () {
			updateParSplash(text);
		});
	});
});
