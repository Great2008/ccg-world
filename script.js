// Function to handle the theme toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.checked = true;
    }

    // Add an event listener to the toggle switch
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Function to handle the hamburger menu toggle
function setupHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    // Add an event listener to the hamburger icon
    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Function to initialize Animate on Scroll (AOS)
function initializeAOS() {
    AOS.init({
        duration: 1000,
        once: true, // Only animate once as you scroll down
    });
}

// Call all the setup functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle();
    setupHamburgerMenu();
    initializeAOS();
});
