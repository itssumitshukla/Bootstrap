
let scrolled = document.querySelector('.scrolled');

window.addEventListener('scroll', function(e){
  if(window.pageYOffset > 4) {
    scrolled.classList.add('nope')
  }
});