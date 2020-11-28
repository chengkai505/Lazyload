'use strict';
let lazyload = {};

lazyload.img = {};
lazyload.background = {};

lazyload.main = function() {
	lazyload.img.main();
	lazyload.background.main();
};

lazyload.img.main = function() {
	let observer = new IntersectionObserver(function (entries, observer) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				let img = new Image;
				entry.target.appendChild(img);
				if (img.complete) {
					img.classList.add("loaded");
					entry.target.classList.add("done");
				} else {
					img.addEventListener("load", function() {
						img.classList.add("loaded");
						entry.target.classList.add("done");
					});
				}
				img.src = entry.target.dataset.src;
				if (entry.target.dataset.alt) img.alt = entry.target.dataset.alt;
				if (entry.target.dataset.srcset) img.srcset = entry.target.dataset.srcset;
				observer.unobserve(entry.target);
			}
		});
	});
	for (let i = 0; i < lazyload.dom.length; i++) {
		if (lazyload.dom[i].dataset.src)
			observer.observe(lazyload.dom[i]);
	}
};

lazyload.background.main = function() {
	let observer = new IntersectionObserver(function (entries, observer) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				let img = new Image;
				img.onload = function() {
					entry.target.style.backgroundImage = 'url(' + entry.target.dataset.background + ')';
					entry.target.classList.add("done");
				};
				img.src = entry.target.dataset.background;
				observer.unobserve(entry.target);
			}
		});
	});
	for (let i = 0; i < lazyload.dom.length; i++) {
		if (lazyload.dom[i].dataset.background)
			observer.observe(lazyload.dom[i]);
	}
}

lazyload.dom = document.getElementsByClassName("lazyload");
if (lazyload.dom.length > 0) lazyload.main();