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


const toggleMenu = document.querySelector('.toggle-menu');
const headnav = document.querySelector('.head-nav');

// Toggle menu and icon rotation
toggleMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu.classList.toggle('active'); // Add active state to toggle-menu
    headnav.classList.toggle('active');
});

// Close menu and reset rotation when clicking outside
document.addEventListener('click', function (e) {
    if (!headnav.contains(e.target) && !toggleMenu.contains(e.target)) {
        headnav.classList.remove('active');
        toggleMenu.classList.remove('active');
    }
});



// Starry background and dark mode script
const body = document.body;
const starryBackground = document.querySelector('.starry-background');
const darkModeToggle = document.querySelector('.dark-mode-toggle');

// Create stars
function createStars(numStars = 100) {
    starryBackground.innerHTML = '';
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random positioning
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        starryBackground.appendChild(star);
    }
}

// Glow animation
function animateStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        // Random interval for glowing
        if (Math.random() < 0.1) {
            star.classList.toggle('glow');
        }
    });
}

// Toggle dark mode
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    // Recreate stars to match new color scheme
    createStars();
}

// Initialize
function init() {
    // Default to light mode
    body.classList.add('light-mode');
    createStars();

    // Start star animation
    setInterval(animateStars, 500);

    // Add dark mode toggle listener
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

// Run initialization
init();