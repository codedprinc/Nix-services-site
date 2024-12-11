const darkToggle = document.querySelector('.dark-mode-toggle');
const darkBody = document.querySelector('.body');

darkToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    darkBody.classList.toggle('dark-mode');
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


function pop(id) {
    var x = document.getElementById(id);
    var body = document.body;

    // Toggle popup and body blur
    x.classList.toggle('show');
    body.classList.toggle('blurred');

    // Add event listener to close when clicking outside
    if (x.classList.contains('show')) {
        setTimeout(() => {
            document.addEventListener('click', function closePopup(event) {
                // Check if the click is outside the popup
                if (!x.contains(event.target)) {
                    x.classList.remove('show');
                    body.classList.remove('blurred');
                    // Remove the event listener to prevent memory leaks
                    document.removeEventListener('click', closePopup);
                }
            });
        }, 0);
    }
}


let myBtn = document.querySelector('.topBtn');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myBtn.style.display = "block";

    }
    else{
        myBtn.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; //for chrome and others
}


// // Starry background and dark mode script
// const body = document.body;
// const starryBackground = document.querySelector('.starry-background');
// const darkModeToggle = document.querySelector('.dark-mode-toggle');

// // Create stars
// function createStars(numStars = 100) {
//     starryBackground.innerHTML = '';
//     for (let i = 0; i < numStars; i++) {
//         const star = document.createElement('div');
//         star.classList.add('star');
        
//         // Random positioning
//         star.style.left = `${Math.random() * 100}%`;
//         star.style.top = `${Math.random() * 100}%`;
        
//         // Random size
//         const size = Math.random() * 3;
//         star.style.width = `${size}px`;
//         star.style.height = `${size}px`;
        
//         starryBackground.appendChild(star);
//     }
// }

// // Glow animation
// function animateStars() {
//     const stars = document.querySelectorAll('.star');
//     stars.forEach(star => {
//         // Random interval for glowing
//         if (Math.random() < 0.1) {
//             star.classList.toggle('glow');
//         }
//     });
// }

// // Toggle dark mode
// function toggleDarkMode() {
//     body.classList.toggle('dark-mode');
//     body.classList.toggle('light-mode');
    
//     // Recreate stars to match new color scheme
//     createStars();
// }

// // Initialize
// function init() {
//     // Default to light mode
//     body.classList.add('light-mode');
//     createStars();

//     // Start star animation
//     setInterval(animateStars, 500);

//     // Add dark mode toggle listener
//     darkModeToggle.addEventListener('click', toggleDarkMode);
// }

// // Run initialization
// init();




// const swiper = new Swiper('.card-wrapper', {
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });