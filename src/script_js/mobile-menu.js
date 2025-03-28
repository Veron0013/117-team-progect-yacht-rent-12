var myBurgerIcon = document.getElementById("burger-icon");
var btnOpenMenu = document.getElementById("open_menu");

var myModalMenu = document.getElementById("modal_menu");

var bodyElement = document.body;

//для грьобаної кнопки!!

var currentHref = myBurgerIcon.getAttribute("href");
var basePath = currentHref.split("#")[0];

function toggleClass(objForm) {
	return function () {
		objForm.classList.toggle("is-open");
		bodyElement.classList.toggle("locked");

		if (objForm.classList.contains("is-open")) {
			myBurgerIcon.setAttribute("href", basePath + "#icon-close-iscon");
		} else {
			myBurgerIcon.setAttribute("href", basePath + "#icon-menu-icon");
		}

	};
}

var menuLinks = document.querySelectorAll(".mobile-menu-nav-list-item-link, .menu-social-link");

menuLinks.forEach(link => {
	link.addEventListener("click", function () {
		myModalMenu.classList.remove("is-open");
		bodyElement.classList.remove("locked");
		myBurgerIcon.setAttribute("href", basePath + "#icon-menu-icon");
	});
});

btnOpenMenu.addEventListener("click", toggleClass(myModalMenu));

document.addEventListener("DOMContentLoaded", function () {
	new Swiper(".swiper", {
		loop: true,
		spaceBetween: 16, // Менший відступ, щоб не виходило за межі
		centeredSlides: true,
		pagination: { el: ".swiper-pagination", clickable: true },
		navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
		breakpoints: {
			0: { slidesPerView: 1 },
			768: { slidesPerView: 2 },
			1280: { slidesPerView: 3 },
		},
	});
});