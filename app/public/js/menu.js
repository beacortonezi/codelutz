function abrir(){
    menu.className = "active";  
    menuBar.style.marginLeft = "20vw";
    menuBar.style.width = "60vw";
}

function fechar(){
    menu.className = "hidden";
    menuBar.style.marginLeft = "0";
    menuBar.style.width = "100vw";
}  
    
var menu = document.querySelector('nav'); 
var menuBar = document.querySelector('#menu-bar'); 
var btnAbrirMenu = document.querySelector('#btn');
var btnFecharMenu = document.querySelector('#close');

btnAbrirMenu.addEventListener('click', function(evt){
  menu.className === 'hidden'? abrir() : fechar(); 
});

btnFecharMenu.addEventListener('click', fechar); 