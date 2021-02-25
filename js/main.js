
let x1 = document.querySelectorAll('.desplazamiento')[0];
let x2 = document.querySelectorAll('#menu-items')[0];
let x = document.querySelectorAll('.nav-menu')[0];


x1.addEventListener("click", function(e){
  e.preventDefault();
  x.classList.toggle('show');
})
x2.addEventListener("click", function(e){

  x.classList.toggle('show');
})
