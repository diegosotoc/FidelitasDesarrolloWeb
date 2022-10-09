// Funcion para mantener la navbar en el top de la pantalla 

window.onscroll = function () { stickyVar() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyVar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}