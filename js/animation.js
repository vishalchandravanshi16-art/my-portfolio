/* ==========================================================================
   Professional Student Portfolio - Scroll Animation & Typing Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initTypingEffect();
});

/**
 * Optimizes scroll entry animations utilizing the Intersection Observer API
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Unobserve element once it is animated onto canvas canvas
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.15,
            rootMargin: '0px 0px -20px 0px'
        });

        revealElements.forEach(element => revealObserver.observe(element));
    } else {
        // Fallback execution block for legacy browser variants
        revealElements.forEach(element => element.classList.add('active'));
    }
}

/**
 * Runs the dynamic typing text simulation on the primary home screen header banner
 */
function initTypingEffect() {
    const targetElement = document.getElementById('typing-text');
    if (!targetElement) return;

    // Custom configuration parameters derived from creator data logs
    const wordsArray = ["Computer Science Student", "Front-End Developer", "Content Creator"];
    let wordIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    let printingSpeed = 100;

    function typeLoop() {
        const currentWord = wordsArray[wordIndex];
        
        if (isDeleting) {
            targetElement.textContent = currentWord.substring(0, characterIndex - 1);
            characterIndex--;
            printingSpeed = 50; // Quicker speed when removing content strings
        } else {
            targetElement.textContent = currentWord.substring(0, characterIndex + 1);
            characterIndex++;
            printingSpeed = 120; // Steady baseline pace during character printing
        }

        // Logic breakpoint toggles for state management loops
        if (!isDeleting && characterIndex === currentWord.length) {
            printingSpeed = 2000; // Static window duration when a string completes
            isDeleting = true;
        } else if (isDeleting && characterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % wordsArray.length;
            printingSpeed = 500; // Pause buffer right before launching next sequence
        }

        setTimeout(typeLoop, printingSpeed);
    }

    // Trigger typing loop engine
    setTimeout(typeLoop, 1000);
}