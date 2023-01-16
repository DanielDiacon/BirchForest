// take scrolly <=====================================>
window.addEventListener('scroll', e => {
   document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
});
// <=>

// loading page <=====================================>
const loader = document.getElementById("loader");

window.addEventListener("load", function () {
   loader.style.display = "none";
});
// <=>
