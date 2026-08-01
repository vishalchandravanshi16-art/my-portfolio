/* ==========================================================================
   Professional Student Portfolio - Dynamic Typing Text Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initIsolatedTypingEffect();
});

/**
 * Runs a fluid, non-blocking typing simulation on the primary hero header banner
 */
function initIsolatedTypingEffect() {
    const targetElement = document.getElementById('typing-text');
    if (!targetElement) return;

    // Academic, development, and creative profile logs
    const wordsArray = [
        "Computer Science Student", 
        "Front-End Developer", 
        "Content Creator"
    ];
    
    let wordIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    let printingSpeed = 100;

    function typeLoop() {
        const currentWord = wordsArray[wordIndex];
        
        if (isDeleting) {
            targetElement.textContent = currentWord.substring(0, characterIndex - 1);
            characterIndex--;
            printingSpeed = 50; // Accelerated pacing for string deletion
        } else {
            targetElement.textContent = currentWord.substring(0, characterIndex + 1);
            characterIndex++;
            printingSpeed = 120; // Stable, natural baseline pace during typing simulation
        }

        // Structural loop state transitions
        if (!isDeleting && characterIndex === currentWord.length) {
            printingSpeed = 2000; // Static display window duration upon string completion
            isDeleting = true;
        } else if (isDeleting && characterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % wordsArray.length;
            printingSpeed = 500; // Micro pause state before executing next sequence entry
        }

        setTimeout(typeLoop, printingSpeed);
    }

    // Initialize the main process loop with an initial boot buffer
    setTimeout(typeLoop, 800);
}