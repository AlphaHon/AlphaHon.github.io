
let x1 = document.querySelectorAll('.desplazamiento')[0];
let x2 = document.querySelectorAll('#menu-items')[0];
let x3 = document.querySelectorAll('.nav-menu')[0];
let x= document.querySelectorAll('.fa')[0];
x1.addEventListener("click", function(e){
  e.preventDefault();
  x3.classList.toggle('show');
  x.classList.toggle('fa-times');
  
})
x2.addEventListener("click", function(e){

  x3.classList.toggle('show');
})
