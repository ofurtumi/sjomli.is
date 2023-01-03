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
    diffPercent: 70,
    stack: [
      { title: "JS", value: 55 },
      { title: "HTML", value: 25 },
      { title: "CSS", value: 20 },
    ],
    filler: [
      { title: "fleyti reiknings level", value: "+5" },
      { title: "nýtni", value: "rosaleg" },
      { title: "tími", value: "sirka vika" },
      { title: "pirringur frá samnemendum", value: "2/5" },
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
  clone.querySelector("#project-link").setAttribute("href", "/" + data.link[0]);
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

const template = document.querySelector("#project-template");

projectData.forEach((current) => {
  document
    .querySelector("#project-container")
    .appendChild(newProject(template, current));

  // todo: bæta þessu við þegar komið inn fyrir öll verkefni
  //   document
  //     .querySelector(".overview ul")
  //     .appendChild(
  //       CBN("li", {}, [
  //         CLN(
  //           "a",
  //           { class: ["fancy-link"], href: current.link[0] },
  //           current.link[1]
  //         ),
  //       ])
  //     );
});
