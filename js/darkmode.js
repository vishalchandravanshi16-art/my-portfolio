/* ==========================================================================
   Professional Student Portfolio - Persistent Theme Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
});

/**
 * Manages theme synchronization across session actions using localStorage
 */
function initDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    if (!themeToggle || !themeIcon) return;

    // Check system preference or pre-existing cache configuration
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const cachedTheme = localStorage.getItem('portfolio-theme');

    // Establish dynamic target layout baseline
    if (cachedTheme === 'dark' || (!cachedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        updateThemeIcon(false);
    }

    // Capture explicit theme adjustments from user toggle clicks
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const isSwitchingToDark = currentTheme === 'light';

        if (isSwitchingToDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('portfolio-theme', 'dark');
            updateThemeIcon(true);
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('portfolio-theme', 'light');
            updateThemeIcon(false);
        }
    });
}

/**
 * Updates navigation utility font icons according to active view conditions
 */
function updateThemeIcon(isDark) {
    const themeIcon = document.getElementById('theme-icon');
    if (!themeIcon) return;

    if (isDark) {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}