const gleraugu = document.querySelector("#gleraugu");
const grima = document.querySelector("#grima");
let mynd = document.querySelector("#mynd");
const myndirClass = document.querySelector(".myndir");
let myndir = [];
mynd.classList.add("m1")

grima.checked = true;
gleraugu.checked = true;

function hvadErA() {
    // mynd = document.querySelector("#mynd");
    let gr = grima.checked;
    let gl = gleraugu.checked;
    if (gr && gl) mynd.classList.replace(mynd.classList[0], "m4");
    else if (gr) mynd.classList.replace(mynd.classList[0], "m2");
    else if (gl) mynd.classList.replace(mynd.classList[0], "m3");
    else mynd.classList.replace(mynd.classList[0], "m1");
    // if (gr && gl) myndirClass.replaceChild(myndir[3], mynd);
    // else if (gr) myndirClass.replaceChild(myndir[1], mynd);
    // else if (gl) myndirClass.replaceChild(myndir[2], mynd);
    // else myndirClass.replaceChild(myndir[0], mynd);
}

async function saekja() {
    try {
        for (let i = 1; i <= 4; i++) {
            let m = new Image();

            let o =  await fetch("./myndir/andlit2/m"+i+".jpg")
            .then(()=> {
                m.src = "./myndir/andlit2/m"+i+".jpg"
            })
            m.id = "mynd";
            myndir[i - 1] = m;
        }
        
        return "Tókst að loada";
    } catch (error) {
        console.log(error);
    }
    return null;
}

//load that shit
async function LTS() {
    console.log("byrja loada");
    saekja()
    .then((e) => {
        console.log(e);
        gleraugu.addEventListener("click", hvadErA);
        grima.addEventListener("click", hvadErA);
        hvadErA();
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

LTS();
