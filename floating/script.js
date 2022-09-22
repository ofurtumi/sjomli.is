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

const lenInp = document.querySelector('#len');
const expoInp = document.querySelector('#expo');
const changer = document.querySelector('#change');

const biasCalc = document.querySelector('#biasCalc');
const expoCalc = document.querySelector('#expoCalc');
let bannad = document.querySelector('#bannad');

changer.addEventListener('click', () => {
	let bl = Number(lenInp.value);
	let el = Number(expoInp.value);
	
	if (bl >= 4 && el <= bl -2) {
		bannad.textContent = ""
		setGlobals(bl, el);
	} else {
		bannad.textContent = "lengd bitastrengs verður að vera 4 >=\nlengd veldisstrengs þarf að vera >= heildarlengd - 2"
	}
});

let blen; // ? hver er heildarlengd fleytitölunar
let bias; // ? hver er bias fyrir tölu af stærð blen
let elen; // ? hver er lengd expo bitastrengsins

/**
 * fall til þess að auðvelda frumstillingar á breytum
 * @param {Number} bl bit length, heildarlengd fleytitölunar í bitum (bl >= 3)
 * @param {Number} el exponent length, stærð expo bitastrengs (el <= bl -2)
 */
function setGlobals(bl, el) {
	// * bias reiknaður með stærð 2^(expo í bitum-1)-1
	// ? fyrir 3ja bita expo er það (2^2)-1 þ.e. maður dregur 3 frá expo
	bias = Math.pow(2, el - 1) - 1;
	blen = bl;
	elen = el;
}

setGlobals(6, 3);

inp.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		console.log('e.key --> ', e.key);
		getRes.click();
	}
});

getRes.addEventListener('click', (e) => {
	calculate()
});

function calculate() {
	// * útbýr listann whole úr streng og breytir gildum yfir í Number
	let whole = inp.value.split('').map((x) => Number(x));

	// * athugar hvort stak í fallinu sé utann 1 eða 0
	let works = true;
	for (const num of whole) {
		if (num === 1 || num === 0) {
			continue;
		} else {
			works = false;
			break;
		}
	}

	if (whole.length == blen && works) {
		output.classList.remove('rautt');
		// let eCheck = ;

		// ? athugar hvort sé out of bounds eða infinity
		let infTest = whole.slice(1, 1 + elen).reduce((a, b) => a + b, 0);
		// console.log('infTest --> ', infTest)
		// console.log('bias --> ', bias)
		// console.log('elen --> ', elen)
		if (infTest === elen) {
			output.textContent = '';

			if (whole[0] === 1) {
				output.textContent = '-';
			}

			if (whole.slice(1 + elen).reduce((a, b) => a + b, 0) === 0) {
				output.textContent += 'Infinity';
			} else {
				output.textContent += 'NaN (þetta er ekki villa)';
			}
		} else {
			let minus = whole[0];
			// ? sér til að sé aðeins verið að vinna með veldisbitana
			// ? framkvæmir einfalda bitasamlagninu til að finna exponent
			let expo = whole
				.slice(1, 1 + elen)
				.reduce((a, b, c) => a + b * Math.pow(2, elen - (c + 1)), 0);
			expo -= bias;

			biasCalc.textContent = `(2^(${elen}-1))-1 = ${bias}`;
			expoCalc.textContent = `${expo + bias}-${bias} = ${expo}`;

			let stable = expo > -1 * bias;

			let dec = stable
				? whole
						.slice(1 + elen)
						.reduce(
							(a, b, c) => a + b * Math.pow(2, expo - (c + 1)),
							Math.pow(2, expo)
						)
				: whole
						.slice(1 + elen)
						.reduce((a, b, c) => a + b * Math.pow(2, expo - c), 0);
			output.textContent = Math.pow(-1, minus) * dec;
		}
	} else {
		output.classList.add('rautt');
		output.textContent = 'tala verður að vera gild ' + blen + ' bita tala';
	}
}
