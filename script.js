const gleraugu = document.querySelector("#gleraugu");
const grima = document.querySelector("#grima");
const mynd = document.querySelector("#mynd");
let myndir = [];
let gr = grima.checked;
let gl = gleraugu.checked;

function hvadErA() {
  if (gr && gl) mynd.setAttribute("src", myndir[0].src);
  else if (gr) mynd.setAttribute("src", myndir[1].src);
  else if (gl) mynd.setAttribute("src", myndir[2].src);
  else mynd.setAttribute("src", myndir[3].src);
}



async function saekja() {
    for (let i = 1; i <= 4; i++) {
        let m = (new Image())
        m.src = await "./myndir/andlit2/m"+i+".jpg";
        myndir[i-1] = m;
    }
    return
}

//load that shit
async function LTS() {
    saekja().then((e) => {
        gleraugu.addEventListener("click", hvadErA);
        grima.addEventListener("click", hvadErA);
        hvadErA()
    })
}

LTS();
