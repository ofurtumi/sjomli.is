const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const parent = entry.target.parentElement;
		/**
		 * Define JSON
		 * @typedef {Node} pCircle reference to svg
		 * @typedef {Node} pNum reference to span with num value
		 * @typedef {Number} pVal percentage value
		 * @typedef {Number} pDraw svg draw value
		 */
		const { pCircle, pNum, pVal, pDraw } = percentCircle(parent);
		pNum.textContent = pVal / 10 + '/10';

		if (entry.isIntersecting) {
			entry.target.classList.add('shown');

			pCircle.style.strokeDasharray = pDraw + ' 999';
		} else {
			entry.target.classList.remove('shown');
			pCircle.style.strokeDasharray = '0 999';
		}
	});
});

document.querySelector('#arrow-svg').addEventListener('click', () => {
	document.querySelector('main').scrollIntoView();
});

function percentCircle(container) {
	let round = container.querySelector('.round');
	let num = container.querySelector('.per-num');
	let roundRadius = round.querySelector('circle').getAttribute('r');
	let roundPercent = round.dataset.percent;
	let roundCircum = 2 * roundRadius * Math.PI;
	let roundDraw = (roundPercent * roundCircum) / 100;

	return {
		pCircle: round,
		pNum: num,
		pVal: Number(roundPercent),
		pDraw: Number(roundDraw),
	};
}

const hiddens = document.querySelectorAll('.hidden');
hiddens.forEach((element) => {
	observer.observe(element);
});
