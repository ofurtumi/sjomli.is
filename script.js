// window.onload = choosePic;

// var myPix = new Array(
//     "/myndir/t1.png",
//     "/myndir/t2.png",
//     "/myndir/t3.png",
//     "/myndir/t4.png",
//     "/myndir/t5.png",
//     "/myndir/t6.png"
//     );

// function choosePic() {
//      var randomNum = Math.floor(Math.random() * myPix.length);
//      document.getElementById("mynd").src = myPix[randomNum];
// }

const gleraugu = document.querySelector("#gleraugu");
const grima = document.querySelector("#grima");
const mynd = document.querySelector("#mynd");

gleraugu.addEventListener("click",hvadErA);
grima.addEventListener("click",hvadErA);

function hvadErA() {
    let gr = grima.checked;
    let gl = gleraugu.checked;

    if (gr && gl) mynd.setAttribute("src","./myndir/andlit2/gg.jpg");
    else if (gr) mynd.setAttribute("src","./myndir/andlit2/egg.jpg");
    else if (gl) mynd.setAttribute("src","./myndir/andlit2/geg.jpg");
    else mynd.setAttribute("src","./myndir/andlit2/egeg.jpg");
}

hvadErA()