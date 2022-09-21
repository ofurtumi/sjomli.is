/**||||||||||||||||||||||||||||||
||    __                 __    ||
||  _/  |_ __ __  _____ |__|   ||
||  \   __\  |  \/     \|  |   ||
||   |  | |  |  /  Y Y  \  |   ||
||   |__| |____/|__|_|__/__|   ||
||                             ||
||||||||||||||||||||||||||||||**/

window.onload = () => {
	if (window.location.hostname !== 'www.sjomli.is') {
		document.querySelector('header').remove();
	}

	const input = document.querySelector('#input');
	const output = document.querySelector('#prison');
	const start = document.querySelector('#start');
	const canvas = document.querySelector('#can');
	const ctx = canvas.getContext('2d');

	const SC = new Image(1152, 32);
	SC.src = 'stafir.png';

	let playing = false;
	let speed = 50;

	start.addEventListener('click', spila);

	async function spila() {
		if (playing) {
			speed = speed * 0.25;
		} else {
			playing = true;
			output.textContent = '';
			let lines = input.value.split('\n');
			let words = lines.map((line) => {
				return line.split(' ');
			});

			for (let i = 0; i < words.length; i++) {
				let cell;
				if (words[i][0].match(/\/[1-5]/)) {
					cell = document.createElement('h' + words[i][0][1]);
					words[i][0] = '';
				} else cell = document.createElement('p');
				output.appendChild(cell);
				for (let j = 0; j < words[i].length; j++) {
					let word = [...words[i][j]];
					for (let u = 0; u < word.length; u++) {
						ctx.fillStyle = '#fff';
						ctx.fillRect(0, 0, 64, 64);
						ctx.drawImage(
							SC,
							getCharPos(word[u]),
							0,
							32,
							32,
							0,
							0,
							64,
							64
						);
						cell.textContent += word[u];
						await new Promise((r) => setTimeout(r, speed));
					}
					cell.textContent += ' ';
				}
			}
			speed = 50; // ? 0.05s
			playing = false;
		}
	}
};

function getCharPos(char) {
	if (!isNaN(Number(char))) {
		return 32 * Number(char);
	} else if (frames[char.toLowerCase()]) return frames[char].frame.x;
	else return frames.none.frame.x;
}

let frames = {
	0: {
		frame: { x: 0, y: 0, w: 32, h: 32 },
	},
	1: {
		frame: { x: 32, y: 0, w: 32, h: 32 },
	},
	2: {
		frame: { x: 64, y: 0, w: 32, h: 32 },
	},
	3: {
		frame: { x: 96, y: 0, w: 32, h: 32 },
	},
	4: {
		frame: { x: 128, y: 0, w: 32, h: 32 },
	},
	5: {
		frame: { x: 160, y: 0, w: 32, h: 32 },
	},
	6: {
		frame: { x: 192, y: 0, w: 32, h: 32 },
	},
	7: {
		frame: { x: 224, y: 0, w: 32, h: 32 },
	},
	8: {
		frame: { x: 256, y: 0, w: 32, h: 32 },
	},
	9: {
		frame: { x: 288, y: 0, w: 32, h: 32 },
	},
	a: {
		frame: { x: 320, y: 0, w: 32, h: 32 },
	},
	b: {
		frame: { x: 352, y: 0, w: 32, h: 32 },
	},
	c: {
		frame: { x: 384, y: 0, w: 32, h: 32 },
	},
	d: {
		frame: { x: 416, y: 0, w: 32, h: 32 },
	},
	e: {
		frame: { x: 448, y: 0, w: 32, h: 32 },
	},
	f: {
		frame: { x: 480, y: 0, w: 32, h: 32 },
	},
	g: {
		frame: { x: 512, y: 0, w: 32, h: 32 },
	},
	h: {
		frame: { x: 544, y: 0, w: 32, h: 32 },
	},
	i: {
		frame: { x: 576, y: 0, w: 32, h: 32 },
	},
	j: {
		frame: { x: 608, y: 0, w: 32, h: 32 },
	},
	k: {
		frame: { x: 640, y: 0, w: 32, h: 32 },
	},
	l: {
		frame: { x: 672, y: 0, w: 32, h: 32 },
	},
	m: {
		frame: { x: 704, y: 0, w: 32, h: 32 },
	},
	n: {
		frame: { x: 736, y: 0, w: 32, h: 32 },
	},
	o: {
		frame: { x: 768, y: 0, w: 32, h: 32 },
	},
	p: {
		frame: { x: 800, y: 0, w: 32, h: 32 },
	},
	r: {
		frame: { x: 832, y: 0, w: 32, h: 32 },
	},
	s: {
		frame: { x: 864, y: 0, w: 32, h: 32 },
	},
	t: {
		frame: { x: 896, y: 0, w: 32, h: 32 },
	},
	u: {
		frame: { x: 928, y: 0, w: 32, h: 32 },
	},
	v: {
		frame: { x: 960, y: 0, w: 32, h: 32 },
	},
	w: {
		frame: { x: 992, y: 0, w: 32, h: 32 },
	},
	x: {
		frame: { x: 1024, y: 0, w: 32, h: 32 },
	},
	y: {
		frame: { x: 1056, y: 0, w: 32, h: 32 },
	},
	z: {
		frame: { x: 1088, y: 0, w: 32, h: 32 },
	},
	none: {
		frame: { x: 1120, y: 0, w: 32, h: 32 },
	},
};

/**
 * ! þessi frekar flott i guess, en ekkert að nota lengur :(
 * heildarlengd strengs sem verður til ef allir strengir fylkisins eru lagðir saman með bil á milli sín
 * @param {Array<string>} arr fylki af strengjum
 * @returns {Number} lengd heildarstrengs
 */
function len(arr) {
	return (
		arr.length -
		1 +
		arr
			.map((i) => {
				return i.length;
			})
			.reduce((sum, red) => sum + red)
	);
}
