const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Ensure index wraps around
    currentIndex = (index + slides.length) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});