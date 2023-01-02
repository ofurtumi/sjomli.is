const data = [
	{
		title: 'ökuskírteini',
		description:
			'endurgerð á rafrænu íslensku ökuskírteini, upphaflega gert til að æfa css og vakti svo mikla aðdáun niðri í bæ',
		date: 'apríl 2020',
		link: 'bannad',
		ghLink: 'https://github.com/ofurtumi/sjomli.is/tree/main/bannad',
		diffPercent: 35,
		stack: [
			{ title: 'CSS', value: "75%" },
			{ title: 'HTML', value: "25%" },
		],
		filler: [
			{ title: 'CSS level', value: '+1' },
			{ title: 'HTML level', value: '---' },
			{ title: 'tími', value: '1.5 klst' },
			{ title: 'nytsemi', value: 'mikil' },
		],
	},
	{
		title: 'leikur',
		description:
			'mín fyrstu skref við að nota JS canvas apann til leikjagerðar, upprunalega var þetta undirbúningur fyrir áfanga sem átti að kenna haustið 2022 í HÍ, en áfanginn féll niður',
		date: '25. maí 2022',
		link: 'canvas',
		ghLink: 'https://github.com/ofurtumi/canvas/tree/main',
		diffPercent: 65,
		stack: [
			{ title: 'JS', value: "80%" },
			{ title: 'HTML', value: "10%" },
			{ title: 'CSS', value: "10%" },
		],
		filler: [
			{ title: 'JS level', value: '+2' },
			{ title: 'vesen', value: 'mikið' },
			{ title: 'tími', value: '3 dagar' },
			{ title: 'lærdómur', value: 'mjög mikill' },
		],
	},
];

/**
 * ANP - Add Node Parameters
 * easier way to add multiple classes and parameters to a DOM node
 *
 * @param {Node} node DOM node object to be modified with parameters
 * @param {Object} params classes defined as `class: ["class1", "class2", ...]`, different kinds of attributes added as `<name>:<value>`
 */
function ANA(node, params) {
	for (const [key, value] of Object.entries(params)) {
		if (key === 'class') {
			value.forEach((className) => {
				node.classList.add(className);
			});
		} else {
			node.setAttribute(key, value);
		}
	}
	return node;
}

/**
 * CBN - Create Branch Node
 * easier way to create a DOM node with children
 *
 * @param {String} name HTML element name
 * @param {Object} params object of attributes, classes defined as `class: ["class1", "class2"]` and all other attributes as `<name>:<value>`
 * @param {Array<Node>} children array of DOM nodes
 * @returns {Node} DOM node with defined paramaters and children
 */
function CBN(name, params, children) {
	let temp = ANA(document.createElement(name), params);
	children.forEach((child) => temp.appendChild(child));
	return temp;
}

/**
 * CLN - Create Leaf Node
 * easier way to create a DOM node with text content
 *
 * @param {String} name HTML element name
 * @param {Object} params object of attributes, classes defined as `class: ["class1", "class2"]` and all other attributes as `<name>:<value>`
 * @param {String} content text content for the current node
 * @returns DOM node with defined parameters and text content
 */
function CLN(name, params, content) {
	let temp = ANA(document.createElement(name), params);
	temp.textContent = content;
	return temp;
}

function newProject(template, data) {
	let clone = template.content.cloneNode(true);

	clone.querySelector("section").setAttribute("id", data.link)
	clone.querySelector('#project-name').textContent = data.title;
	clone.querySelector('#project-description').textContent = data.description;
	clone.querySelector('#project-link').setAttribute('href', '/' + data.link);
	clone.querySelector('#project-date').textContent = data.date;
	clone.querySelector('#project-github').setAttribute('href', data.ghLink);
	clone.querySelector('#project-github').setAttribute('target', '_blank');
	clone.querySelector('#project-percent').dataset.percent = data.diffPercent;
	clone.querySelector('#project-num').textContent = data.diffPercent;
	let stack = data.stack.map((o) => {return listItem(o)})
	clone.querySelector('.stack-list').append(...stack)
	let rand = data.filler.map((o) => {return listItem(o)})
	clone.querySelector('.rand-list').append(...rand)

	return clone;
}

function listItem(data) {
	return CBN('li', {}, [CLN('span', {}, data.title), CLN('span', {}, data.value)]);
}

const template = document.querySelector('#project-template');

data.forEach(current => {
	document
		.querySelector('main')
		.appendChild(newProject(template, current));
})


// data.forEach((project) => {
// 	let section = CBN(
// 		'section',
// 		{
// 			class: ['proj'],
// 			id: 'bannad',
// 		},

// 		[
// 			CBN('div', { class: ['content', 'hidden'] }, [
// 				CLN(
// 					'h2',
// 					{
// 						class: ['difficulty-title', 'float-right'],
// 					},
// 					project.title
// 				),
// 				CLN(
// 					'p',
// 					{ class: ['description', 'float-left'] },
// 					project.description
// 				),
// 				CLN(
// 					'a',
// 					{
// 						class: ['fancy-link', 'float-right'],
// 						href: project.link,
// 					},
// 					'opna verkefni'
// 				),
// 				CBN('div', { class: ['foot', 'float-left'] }, [
// 					CLN('p', {}, project.date),
// 					CLN(
// 						'a',
// 						{ target: '_blank', href: project.ghLink },
// 						'kóði á github'
// 					),
// 				]),
// 			]),
// 			CBN('div', { class: ['info', 'hidden'] }, [
// 				CLN(
// 					'h3',
// 					{ class: ['difficulty-title', 'float-right'] },
// 					'erfiðleiki'
// 				),
// 				CBN(
// 					'div',
// 					{ class: ['float-right', 'difficulty', 'percentage'] },
// 					[
// 						CBN(
// 							'svg',
// 							{
// 								class: ['round'],
// 								width: 100,
// 								height: 100,
// 								'data-percent': project.diffPercent,
// 							},
// 							[
// 								ANA(document.createElement('circle'), {
// 									cx: 50,
// 									cy: 50,
// 									r: 40,
// 								}),
// 							]
// 						),
// 						CLN('span', { class: 'per-num' }, project.diffPercent),
// 					]
// 				),
// 			]),
// 		]
// 	);
// 	document.querySelector('main').appendChild(section);
// });
