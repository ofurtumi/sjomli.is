const projectData = [
	{
		title: "ökuskírteini",
		description:
			"endurgerð á rafrænu íslensku ökuskírteini, upphaflega gert til að æfa css og vakti svo mikla aðdáun niðri í bæ",
		date: "apríl 2020",
		link: ["bannad", "ökuskírteini"],
		ghLink: "https://github.com/ofurtumi/sjomli.is/tree/main/bannad",
		diffPercent: 35,
		stack: [
			{ title: "CSS", value: "75%" },
			{ title: "HTML", value: "25%" },
		],
		filler: [
			{ title: "CSS level", value: "+1" },
			{ title: "HTML level", value: "---" },
			{ title: "tími", value: "1.5 klst" },
			{ title: "nytsemi", value: "mikil" },
		],
	},
	{
		title: "leikur",
		description:
			"upphaflega hugsað sem undirbúningur fyrir áfanga í HÍ, hér eru mín fyrstu skref við að nota JS canvas apann til leikjagerðar.",
		date: "25. maí 2022",
		link: ["canvas", "canvas leikur"],
		ghLink: "https://github.com/ofurtumi/canvas/tree/main",
		diffPercent: 65,
		stack: [
			{ title: "JS", value: "80%" },
			{ title: "HTML", value: "10%" },
			{ title: "CSS", value: "10%" },
		],
		filler: [
			{ title: "JS level", value: "+2" },
			{ title: "vesen", value: "mikið" },
			{ title: "tími", value: "3 dagar" },
			{ title: "lærdómur", value: "mjög mikill" },
		],
	},
	{
		title: "fleytireiknir",
		description:
			"reiknivél sem tekur n bita fleytitölu á IEEE-754 tvíundarformi og skilar tugabrotinu",
		date: "30. sept 2022",
		link: ["fpc", "n bita fleytitölureiknivél"],
		ghLink: "https://github.com/ofurtumi/fpc",
		diffPercent: 65,
		stack: [
			{ title: "JS", value: "55%" },
			{ title: "HTML", value: "25%" },
			{ title: "CSS", value: "20%" },
		],
		filler: [
			{ title: "fleytireiknings level", value: "+5" },
			{ title: "nýtni", value: "rosaleg" },
			{ title: "tími", value: "sirka vika" },
			{ title: "pirringur frá samnemendum", value: "2/5" },
		],
	},
	{
		title: "inverse kinematics",
		description:
			"sýnidæmi á minni útfærslu af inverse kinematics reikniritinu",
		date: "18. júl 2022",
		link: ["IKP", "inverse kinematics"],
		ghLink: "https://github.com/ofurtumi/IKP",
		diffPercent: 75,
		stack: [
			{ title: "JS", value: "90%" },
			{ title: "CSS", value: "5%" },
			{ title: "HTML", value: "5%" },
		],
		filler: [
			{ title: "JS level", value: "+1" },
			{ title: "nýtni", value: "rosalega lítil" },
			{ title: "tími", value: "sirka mánuður (með pásum)" },
			{ title: "helstu gæði", value: "skítlookar" },
		],
	},
	{
		title: "wave function collapse",
		description:
			"mín útfærsla af wave function collapse reikniritinu, fyrsta útgáfa",
		date: "25. okt 2022",
		link: ["wfc", "wave function collapse"],
		ghLink: "https://github.com/ofurtumi/wave-function-collapse",
		diffPercent: 65,
		stack: [
			{ title: "JS", value: "65%" },
			{ title: "HTML", value: "25%" },
			{ title: "CSS", value: "10%" },
		],
		filler: [
			{ title: "js level", value: "+2" },
			{ title: "nýtni", value: "mikil en ekki í js" },
			{ title: "tími", value: "tveir dagar" },
			{ title: "kúl factor", value: "4/5" },
		],
	},
	{
		title: "noise",
		description:
			"tilraun í að útfæra noise, átti upphaflega að vera perlin en varð að sínu eigin dæmi ansi hratt",
		date: "18. ág 2022",
		link: ["noise-test", "noise"],
		ghLink: "https://github.com/ofurtumi/noise-test.git",
		diffPercent: 65,
		stack: [
			{ title: "JS", value: "60%" },
			{ title: "HTML", value: "30%" },
			{ title: "CSS", value: "10%" },
		],
		filler: [
			{ title: "canvas level", value: "+3" },
			{ title: "nýtni", value: "engin :(" },
			{ title: "tími", value: "of mikill" },
			{ title: "kúl factor", value: "1/5" },
		],
	},
];

/**
 * 2d-array, architecture:
 * `arr[x][0]` : link svg
 * `arr[x][1]`: link url
 */
const contactData = [
	["instagram", "https://www.instagram.com/ofurtumi/"],
	["twitter", "https://www.twitter.com/tumi_tigur"],
	["discord", "https://discord.com/users/244947297266434050"],
	["github", "https://github.com/ofurtumi"],
	["linkedin", "https://www.linkedin.com/in/ofurtumi"],
	["mail", "mailto:thorvaldur.tumi@gmail.com"],
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
		if (key === "class") {
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

	clone.querySelector("section").setAttribute("id", data.link[0]);
	clone.querySelector("#project-name").textContent = data.title;
	clone.querySelector("#project-description").textContent = data.description;
	clone
		.querySelector("#project-link")
		.setAttribute("href", "/" + data.link[0]);
	clone.querySelector("#project-date").textContent = data.date;
	clone.querySelector("#project-github").setAttribute("href", data.ghLink);
	clone.querySelector("#project-github").setAttribute("target", "_blank");
	clone.querySelector("#project-percent").dataset.percent = data.diffPercent;
	clone.querySelector("#project-num").textContent = data.diffPercent;
	let stack = data.stack.map((o) => {
		return listItem(o);
	});
	clone.querySelector(".stack-list").append(...stack);
	let rand = data.filler.map((o) => {
		return listItem(o);
	});
	clone.querySelector(".rand-list").append(...rand);

	return clone;
}

function listItem(data) {
	return CBN("li", {}, [
		CLN("span", {}, data.title),
		CLN("span", {}, data.value),
	]);
}

/**
 * Create Project from Template - uses a predifined project template to place the corresponding data into the DOM
 * @param {Object} data project data defined at the top of this file
 */
function CPT(data) {
	const template = document.querySelector("#project-template");
	data.forEach((current) => {
		document
			.querySelector("#project-container")
			.appendChild(newProject(template, current));

		// todo: bæta þessu við þegar komið inn fyrir öll verkefni
		  document
		    .querySelector(".overview ul")
		    .appendChild(
		      CBN("li", {}, [
		        CLN(
		          "a",
		          { class: ["fancy-link"], href: `#${current.link[0]}` },
		          current.link[1]
		        ),
		      ])
		    );
	});
}

/**
 * Create Contact Links - function to create SVG contact links
 * @param {Object} data contact link data defined at the top of this file
 */
function CCL(data) {
	const parent = document.querySelector("footer");

	data.forEach((data) => {
		let svg = `myndir/logos/${data[0]}.svg`;

		let temp = CLN("img", { src: svg, alt: data[0] + " logo" }, "");

		temp.addEventListener("click", (e) => {
			e.preventDefault();
			window.open(data[1], "_blank").focus();
		});

		parent.appendChild(temp);
	});
}

function init() {
	CPT(projectData);
	CCL(contactData);
}

init();
