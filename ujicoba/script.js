// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    const themeToggleButton = document.getElementById('theme-toggle-button');
    const bodyElement = document.getElementById('body-element'); // Or document.documentElement for <html>
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navRight = document.querySelector('.nav-right');

    // --- Theme Toggling ---

    // Function to apply the theme
    const applyTheme = (theme) => {
        if (theme === 'light') {
            bodyElement.classList.add('light-mode');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline'; // Or 'block' if needed
        } else {
            bodyElement.classList.remove('light-mode');
            sunIcon.style.display = 'inline'; // Or 'block'
            moonIcon.style.display = 'none';
        }
    };

    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme or default to dark
    // You could also check user's system preference here:
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    const currentTheme = savedTheme || 'dark'; // Default to dark if no preference saved
    applyTheme(currentTheme);


    // Add event listener to the toggle button
    themeToggleButton.addEventListener('click', () => {
        let newTheme;
        if (bodyElement.classList.contains('light-mode')) {
            newTheme = 'dark';
        } else {
            newTheme = 'light';
        }
        applyTheme(newTheme);
        // Save the new theme preference to localStorage
        localStorage.setItem('theme', newTheme);
    });


    // --- Mobile Menu Toggling --- (Optional, but good to have)
    if (mobileMenuToggle && navRight) {
        mobileMenuToggle.addEventListener('click', () => {
            navRight.classList.toggle('active');
            // Optional: Change hamburger to 'X' icon
            const icon = mobileMenuToggle.querySelector('i');
            if (navRight.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Font Awesome 'X' icon
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

}); // End DOMContentLoaded
