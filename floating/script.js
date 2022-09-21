// |||||||||||||||||||||||||||||||||
// ||    __    sjomli.is    __    ||
// ||  _/  |_ __ __  _____ |__|   ||
// ||  \   __\  |  \/     \|  |   ||
// ||   |  | |  |  /  Y Y  \  |   ||
// ||   |__| |____/|__|_|__/__|   ||
// ||                             ||
// |||||||||||||||||||||||||||||||||

const butt = document.querySelector('#getRes');
const inp = document.querySelector('#floatIn');
const output = document.querySelector('#decOut');

inp.addEventListener("keypress", (e) => {
	if(e.key === 'Enter') {
		console.log('e.key --> ', e.key)
		getRes.click();
	}
})

getRes.addEventListener('click', (e) => {
	let whole = inp.value.split('').map((x) => Number(x));
	let works = true;
	for (const num of whole) {
		if (num === 1 || num === 0) {
			continue;
		} else {
			works = false;
			break;
		}
	}

	// * bias reiknaður með stærð 2^(expo í bitum-1)-1
	// ? fyrir 3ja bita expo er það (2^2)-1 þ.e. maður dregur 3 frá expo
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
			let stable = expo > -3;

			let dec = stable
				? Math.pow(2, expo) +
				  whole[4] * Math.pow(2, expo - 1) +
				  whole[5] * Math.pow(2, expo - 2)
				: whole[4] * Math.pow(2, expo) +
				  whole[5] * Math.pow(2, expo - 1);
			output.textContent = Math.pow(-1, minus) * dec;
		}
	} else {
		output.classList.add('rautt');
		output.textContent = 'tala verður að vera gild 6-bita tala';
	}
});
