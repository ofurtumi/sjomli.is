const w = document.querySelector("#width");
const h = document.querySelector("#height");
const wt = document.querySelector("#wtiles");
const ht = document.querySelector("#htiles");
const grid = document.querySelector("#grid");
const check = document.querySelector("#gridcheck");

let brush = "tomt";
check.checked = true;

window.addEventListener("resize", (e) => {
  w.textContent = window.innerWidth;
  wt.textContent = finnaGrid(window.innerWidth);
  h.textContent = window.innerHeight;
  ht.textContent = finnaGrid(window.innerHeight);
});

check.addEventListener("click",(e)=> {
  let temp = grid.querySelectorAll(".cell");
  if (check.checked) {
    temp.forEach(element => {
      element.classList.add("cell-grid")
    });
  }
  else {
    temp.forEach(element => {
      element.classList.remove("cell-grid")
    });
  }
})

function finnaGrid(wh, width = false) {
  if (width) {
    wh = wh - 256;
  }
  let temp = wh % 64;
  return (wh - temp) / 64 - 1;
}

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
  const pallette = document.querySelector(".chooser");
  tiles = await fetch("tiles.json");
  tiles = await tiles.json();
  tiles = tiles.tiles;
  for (let u = 0; u < 2; u++) {
    let block = el("div");
    block.classList.add("pallette-block");

    for (let i = 0; i < 3; i++) {
      let row = el("div");
      row.classList.add("pallette-row");

      for (let j = 1; j <= 3; j++) {
        let c = el("div");
        let thisTile = tiles[i * 3 + j + u * 9]["tile"];
        c.classList.add("pallette-cell", thisTile);
        c.addEventListener("click", (e) => {
          // console.log(brush)
          // document.querySelector("."+brush).classList.remove("valid");
          // c.classList.add("valid")
          brush = thisTile;
          thisTile.classList;
        });
        row.appendChild(c);
      }
      block.appendChild(row);
    }
    pallette.appendChild(block);
  }
}

function onstart() {
  let height = finnaGrid(window.innerHeight);
  let width = finnaGrid(window.innerWidth, true);
  for (let i = 0; i < height; i++) {
    let row = el("div");
    row.className = "row";
    for (let j = 0; j < width; j++) {
      let cell = el("div");
      cell.classList.add("cell", "tomt", "cell-grid");
      cell.addEventListener("click", (e) => {
        e.stopPropagation();
        let klasi = brush;
        let tempKlasi = cell.classList[1];
        if (tempKlasi === klasi) {
          cell.classList.replace(tempKlasi, "tomt");
        } else {
          console.log("ekki tomt");
          cell.classList.replace(tempKlasi, klasi);
        }
      });
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
  palletteCreator();
}

onstart();
