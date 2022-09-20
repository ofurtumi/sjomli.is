const butt = document.querySelector('#getRes');
const inp = document.querySelector('#floatIn');
const output = document.querySelector('#decOut');

getRes.addEventListener('click', (e) => {
	let whole = inp.value.split('').map((x) => Number(x));
	// console.log('whole --> ', whole)
	let works = true;
	for (const num of whole) {
		if (num === 1 || num === 0) {
			continue;
		} else {
			works = false;
			break;
		}
	}

	if (whole.length == 6 && works) {
		output.classList.remove('rautt');

		if (whole[1] + whole[2] + whole[3] === 3)
			output.textContent =
				whole[4] + whole[5] === 0
					? 'Infinity'
					: 'NaN (þetta er ekki villa)';
		else {
			let minus = whole[0];
			let expo = whole[1] * 4 + whole[2] * 2 + whole[3] - 3;
			console.log('expo --> ', expo);
			let dec =
				Math.pow(2, expo) +
				whole[4] * Math.pow(2, expo - 1) +
				((expo > -3 ? whole[5] : 0) * Math.pow(2, expo - 2));
			output.textContent = Math.pow(-1, minus) * dec;
		}
	} else {
		output.classList.add('rautt');
		output.textContent = 'tala verður að vera gild 6-bita tala';
	}
});
