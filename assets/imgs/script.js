let currentIndex = 0;

function nextSlide() {
    const carousel = document.querySelector('.carousel');
    currentIndex = (currentIndex + 1) % 3;
    carousel.style.transform = `translateX(-${currentIndex * 500}px)`;
}

function prevSlide() {
    const carousel = document.querySelector('.carousel');
    currentIndex = (currentIndex - 1 + 3) % 3;
    carousel.style.transform = `translateX(-${currentIndex * 500}px)`;
}
