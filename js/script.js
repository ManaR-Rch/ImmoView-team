const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const totalImages = carouselImages.length;
const imagesToShow = 3; // Nombre d'images à afficher
const size = carouselImages[0].clientWidth; // Largeur de chaque image

nextBtn.addEventListener("click", () => {
    if (counter >= totalImages - imagesToShow) { // Ajustez la condition
        counter = 0; // Réinitialisez au début
        carouselSlide.style.transition = "none"; // Supprimez la transition pour un effet lisse
        carouselSlide.style.transform = `translateX(0px)`;
    } else {
        counter++;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});

prevBtn.addEventListener("click", () => {
    if (counter <= 0) {
        counter = totalImages - imagesToShow; // Passez au dernier slide
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    } else {
        counter--;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});
