
let cerrar = document.querySelectorAll('.close')[0];
let abrir = document.querySelectorAll('.email-btn')[0];
let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll('.modal-container')[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
  })
  cerrar.addEventListener('click', function(e){
  modal.classList.toggle('modal-close');
  setTimeout(function(){
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  },800)})
  window.addEventListener("click", function(e){
    this.console.log(e.target)
    if(e.target == modalC){
      modal.classList.toggle('modal-close');
      
      setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
      },800)
    }
  })