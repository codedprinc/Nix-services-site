const toggleMenu = document.querySelector('.toggle-menu');
const navbarMenu = document.querySelector('.navbar-menu');

// Toggle menu and icon rotation
toggleMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu.classList.toggle('active'); // Add active state to toggle-menu
    navbarMenu.classList.toggle('active');
});

// Close menu and reset rotation when clicking outside
document.addEventListener('click', function (e) {
    if (!navbarMenu.contains(e.target) && !toggleMenu.contains(e.target)) {
        navbarMenu.classList.remove('active');
        toggleMenu.classList.remove('active');
    }
});


// Get the toggle button
const darkModeToggle = document.getElementById("darkModeToggle");

// Add click event listener
darkModeToggle.addEventListener("click", () => {
    // Toggle the "dark-mode" class on the body
    document.body.classList.toggle("dark-mode");
});


