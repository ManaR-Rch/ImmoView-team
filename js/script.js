const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const totalImages = carouselImages.length;
const imagesToShow = 3; 
const size = carouselImages[0].clientWidth;

nextBtn.addEventListener("click", () => {
    if (counter >= totalImages - imagesToShow) { 
        counter = 0; 
        carouselSlide.style.transition = "none"; 
        carouselSlide.style.transform = `translateX(0px)`;
    } else {
        counter++;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});

prevBtn.addEventListener("click", () => {
    if (counter <= 0) {
        counter = totalImages - imagesToShow; 
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    } else {
        counter--;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});

  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }

