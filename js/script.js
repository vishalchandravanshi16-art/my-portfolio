/* ==========================================================================
   Professional Student Portfolio - Core Structural Logic & Navigation
   ========================================================================== */
   // Preloader Loader Function
window.addEventListener('load', () => {
    const preloader = document.getElementById('welcome-loader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 1500); // 1.5 Seconds me auto hide hoga
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    highlightActiveLink();
});

/**
 * Handles hamburger menu toggle mechanics and responsive mobile layouts
 */
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        // Toggle menu drawer state
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle body scroll locking when mobile menu drawer is open
            document.body.style.overflowY = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close menu drawer when any navigational link element is tapped
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflowY = 'auto';
            });
        });
    }
}

/**
 * Double checks current pathname routing rules to preserve active markup validation
 */
function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu .nav-link, .nav-menu .nav-link-btn');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}