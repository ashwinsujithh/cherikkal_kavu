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

const modal = document.getElementById("theyyamModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close-btn");

// open modal
document.querySelectorAll(".gallery-item").forEach(item => {
	item.addEventListener("click", () => {

		// ignore items without data
		if (!item.dataset.title) return;

		modalTitle.innerText = item.dataset.title;
		modalBody.innerText = item.dataset.content;

		modal.classList.add("active");
		document.body.style.overflow = "hidden"; // lock scroll
	});
});

// close button
closeBtn.addEventListener("click", closeModal);

// outside click
modal.addEventListener("click", (e) => {
	if (e.target === modal) closeModal();
});

// ESC key
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") closeModal();
});

function closeModal() {
	modal.classList.remove("active");
	document.body.style.overflow = "auto";
}

let currentLang = "ml";
let currentItem = null;

document.querySelectorAll(".gallery-item").forEach(item => {
	item.addEventListener("click", () => {
		if (!item.dataset.title) return;

		currentItem = item;
		currentLang = "ml";

		modalTitle.innerText = item.dataset.title;
		modalBody.innerText = item.dataset.contentMl;

		modal.classList.add("active");
		document.body.style.overflow = "hidden";
	});
});

document.getElementById("translateBtn").addEventListener("click", () => {
	if (!currentItem) return;

	if (currentLang === "ml") {
		modalBody.innerText = currentItem.dataset.contentEn;
		currentLang = "en";
	} else {
		modalBody.innerText = currentItem.dataset.contentMl;
		currentLang = "ml";
	}
	translateBtn.innerText = currentLang === "ml" ? "EN" : "ML";
});