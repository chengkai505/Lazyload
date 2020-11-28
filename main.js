'use strict';
let lazyload = {};

lazyload.main = function() {
	lazyload.img.main();
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
		if (lazyload.dom[i].getElementsByTagName("img").length > 0)
			observer.observe(lazyload.dom[i]);
	}
};

lazyload.background.main = function() {
	
}

lazyload.dom = document.getElementsByClassName("lazyload");
if (lazyload.dom.length > 0) lazyload.main();