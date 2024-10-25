let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.hm-sec12 img');
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }

    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === currentIndex) {
            img.classList.add('active');
        }
    });
}

function changeImage(direction) {
    showImage(currentIndex + direction);
}

// Initial display
showImage(currentIndex);