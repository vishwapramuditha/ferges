// script.js
// This file handles the interactivity for the hamburger menu.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Flow-inspired website loaded!');

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (event) => {
            // event.preventDefault();
            console.log('Create with Flow button clicked!');
        });
    }

    // Hamburger menu functionality
    const hamburgerMenuButton = document.querySelector('.hamburger-menu');
    const mobileNavMenu = document.querySelector('.mobile-nav-menu');

    if (hamburgerMenuButton && mobileNavMenu) {
        hamburgerMenuButton.addEventListener('click', () => {
            mobileNavMenu.classList.toggle('open');
            hamburgerMenuButton.classList.toggle('open'); // For hamburger icon animation
        });

        // Close menu when a link is clicked (optional, for SPA navigation)
        mobileNavMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNavMenu.classList.remove('open');
                hamburgerMenuButton.classList.remove('open');
            });
        });
    }
});
