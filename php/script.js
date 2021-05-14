window.onload = choosePic;

var myPix = new Array(
    "/myndir/t1.png",
    "/myndir/t2.png",
    "/myndir/t3.png",
    "/myndir/t4.png",
    "/myndir/t5.png",
    "/myndir/t6.png"
    );

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("mynd").src = myPix[randomNum];
}