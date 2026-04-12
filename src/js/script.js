window.addEventListener("scroll", function () {
	const img = document.querySelector(".hero img");
	let scroll = window.scrollY;

	img.style.transform = `translateY(${scroll * 0.3}px)`;
});

const heroTitle = document.querySelector(".hero-content h1");
const navTitle = document.querySelector(".nav-title");
const navbar = document.querySelector(".navbar");

// copy content once
navTitle.innerHTML = heroTitle.innerHTML;

window.addEventListener("scroll", () => {
	if (window.scrollY > 770) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
	nav.classList.toggle("active");
});