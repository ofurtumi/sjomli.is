window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.background = "rgba(176, 176, 176, 0.8";
  } else {
    document.getElementById("header").style.background = "none";
  }
}