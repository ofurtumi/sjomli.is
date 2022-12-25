const hiddens = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('shown');
		} else {
			entry.target.classList.remove('shown');
		}
	});
});

hiddens.forEach((element) => {
	observer.observe(element);
});
