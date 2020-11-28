let lazyload = {};

lazyload.main = function() {
	let observer = new IntersectionObserver(function (entries, observer) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				let img = document.createElement("img");
				if (img.complete) {
					img.classList.add("loaded");
					entry.target.classList.add("done");
				} else {
					img.addEventListener('loadend', function() {
						img.classList.add("loaded");
						entry.target.classList.add("done");
					});
				}
				img.src = entry.target.dataset.src;
				img.alt = entry.target.dataset.alt;
				entry.target.appendChild(img);
				observer.unobserve(entry.target);
			}
		});
	});
	for (let i = 0; i < lazyload.dom.length; i++) {
		observer.observe(lazyload.dom[i]);
	}
};

lazyload.dom = document.getElementsByClassName("lazyload");
if (lazyload.dom.length > 0) lazyload.main();