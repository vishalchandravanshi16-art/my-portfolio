/* ==========================================================================
   Professional Student Portfolio - Contact Form Processing Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});

/**
 * Manages validation rules, event capture, and micro responses for the communication form
 */
function initContactForm() {
    const contactForm = document.getElementById('portfolio-contact-form');
    const statusMessage = document.getElementById('form-response-message');
    const submitBtn = document.getElementById('form-submit-btn');

    if (!contactForm || !statusMessage || !submitBtn) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Visual feedback during form processing state
        submitBtn.disabled = true;
        const originalBtnContent = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending... <i class="fas fa-circle-notch fa-spin"></i>';

        // Extract input fields safely
        const nameValue = document.getElementById('name').value.trim();
        const emailValue = document.getElementById('email').value.trim();
        const subjectValue = document.getElementById('subject').value.trim();
        const messageValue = document.getElementById('message').value.trim();

        // Basic front-end fallback verification layer
        if (!nameValue || !emailValue || !subjectValue || !messageValue) {
            displayStatus('Please fill in all required form fields.', 'error');
            resetSubmitButton();
            return;
        }

        /* 
           Simulating client-side asynchronous network submission pipeline. 
           For production, connect this layer to an action controller like Formspree, 
           EmailJS, or a localized server route.
        */
        setTimeout(() => {
            // Check process results mock flag status
            const isSuccess = true; 

            if (isSuccess) {
                displayStatus('Thank you, Vishal! Your message has been sent successfully.', 'success');
                contactForm.reset();
            } else {
                displayStatus('Oops! Something went sideways. Please try again later.', 'error');
            }

            resetSubmitButton();
        }, 1500);

        function resetSubmitButton() {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnContent;
        }
    });

    /**
     * Renders clean layout updates indicating data upload conditions
     */
    function displayStatus(messageText, conditionType) {
        statusMessage.textContent = messageText;
        statusMessage.className = `form-status ${conditionType}`;
        
        // Dynamic visibility fade tracking
        statusMessage.style.display = 'block';
        statusMessage.style.opacity = '1';

        // Automatically hide notification bar after an appropriate interval
        setTimeout(() => {
            statusMessage.style.opacity = '0';
            setTimeout(() => {
                statusMessage.style.display = 'none';
            }, 300);
        }, 5000);
    }
}