console.log(window.location)

var navbar = document.getElementById('nav');

window.onscroll = function () {

  if(window.pageYOffset > 100){

   navbar.style.position = "fixed";
   navbar.style.top = 0;

   }else{
     // nav.style.position = "absolute";
     navbar.style.position = 'relative'; //fixed
     navbar.style.top = 100;
   }