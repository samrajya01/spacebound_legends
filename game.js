const slides = document.querySelectorAll('.slide');
const nextbtn = document.getElementsByClassName('button-container');
let currentIndex = 0;

window.addEventListener('load', function() {
  slides[currentIndex].classList.add('active');
});

function nextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
  
}

function previousSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');
}
