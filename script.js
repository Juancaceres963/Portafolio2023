// Animacion de menu 

let icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

/*
function bgAnimation () {
  document.getElementById("bg-nav").classList.remove("container-menu");
}

function navToggle () {
  document.getElementById("burguer-nav").classList.remove("cont-menu")
}

function burguerNav () {
  document.getElementById("burguer-label").classList.remove("open")
}

document.getElementById("nav-link-desple").onclick = function () {
  navToggle();
  bgAnimation();
  burguerNav();
}
*/
