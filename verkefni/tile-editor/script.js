const w = document.querySelector("#width");
const h = document.querySelector("#height");
const wt = document.querySelector("#wtiles");
const ht = document.querySelector("#htiles");
const grid = document.querySelector("#grid");

let brush = "tomt";

w.textContent = window.innerWidth;
wt.textContent = finnaGrid(window.innerWidth);
h.textContent = window.innerHeight;
ht.textContent = finnaGrid(window.innerHeight);
wt.addEventListener("change", (e) => {
  console.log("breyttist");
});

window.addEventListener("resize", (e) => {
  w.textContent = window.innerWidth;
  wt.textContent = finnaGrid(window.innerWidth);
  h.textContent = window.innerHeight;
  ht.textContent = finnaGrid(window.innerHeight);
});

function finnaGrid(wh) {
  let temp = wh % 64;
  return ((wh - temp) / 64)-5;
}

// function tileHeight (tileFjoldi) {
//     if (tileFjoldi !== grid.childElementCount) {
//         grid.insertBefore()
//     }
// }

function empty(element) {
  if (!element || !element.firstChild) {
    return;
  }

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function el(name, ...children) {
  const e = document.createElement(name);

  for (const child of children) {
    if (typeof child === "string") {
      e.appendChild(document.createTextNode(child));
    } else {
      e.appendChild(child);
    }
  }

  return e;
}

async function palletteCreator() {
  const pallette = document.querySelector(".chooser")
  tiles = await fetch("tiles.json");
  tiles = await tiles.json();
  tiles = tiles.tiles;
  for (let u = 0; u < 2; u++) {
    let block = el("div");
    block.classList.add("pallette-block");

    for (let i = 0; i < 3; i++) {
      let row = el("div");
      row.classList.add("pallette-row")

      for (let j = 1; j <= 3; j++) {
        let c = el("div");
        let thisTile = tiles[i*3+j+u*9]["tile"];
        c.classList.add("pallette-cell",thisTile);
        c.addEventListener("click",(e) => {
          brush = thisTile;
        })
        row.appendChild(c)
      }
      block.appendChild(row);
    }
    pallette.appendChild(block)
  }
}

function onstart() {
  let height = finnaGrid(window.innerHeight);
  let width = finnaGrid(window.innerWidth);
  for (let i = 0; i < height; i++) {
    let row = el("div");
    row.className = "row";
    for (let j = 0; j < width; j++) {
        let cell = el("div");
        cell.classList.add("cell","tomt");
        cell.addEventListener("click",(e) => {
            e.stopPropagation();
            let klasi = brush;
            let tempKlasi = cell.classList[1];
            if (tempKlasi===klasi) {
                cell.classList.replace(tempKlasi,"tomt")
            }
            else {
                console.log("ekki tomt")
                cell.classList.replace(tempKlasi,klasi)
            }

        })
        row.appendChild(cell)
    }
    grid.appendChild(row);
  }
  palletteCreator();
}

onstart();
