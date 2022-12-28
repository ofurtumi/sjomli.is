const hiddens = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		let round = entry.target.parentElement.querySelector(".round");
		let roundRadius = round.querySelector('circle').getAttribute('r');
		let roundPercent = round.dataset.percent;
		let roundCircum = 2 * roundRadius * Math.PI;
		let roundDraw = (roundPercent * roundCircum) / 100;

		let num = entry.target.parentElement.querySelector(".per-num")
		num.textContent = roundPercent / 10 + "/10"
		
		if (entry.isIntersecting) {
			entry.target.classList.add('shown');

			round.style.strokeDasharray = roundDraw + ' 999';
		} else {
			entry.target.classList.remove('shown');
			round.style.strokeDasharray = "0 999";
		}
	});
});

document.querySelector('#arrow-svg').addEventListener('click', () => {
	document.querySelector('main').scrollIntoView();
});

hiddens.forEach((element) => {
	observer.observe(element);
});
