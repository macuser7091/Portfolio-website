
// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Smooth scroll to the section (respect reduced motion preference)
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Fade-in Animation on Scroll
    const sections = document.querySelectorAll('section');
    
    // Only apply fade-in animations if user hasn't requested reduced motion
    if (!prefersReducedMotion) {
        // Intersection Observer for fade-in effect
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe all sections
        sections.forEach(section => {
            observer.observe(section);
        });
    } else {
        // If reduced motion is preferred, make all sections visible immediately
        sections.forEach(section => {
            section.classList.add('visible');
        });
    }

    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Contact Form Submission Handler & EmailJS Integration
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // Initialize EmailJS with your User ID
        emailjs.init('6DqdP_rmQ1_zBqKaH'); // <-- Replace with your actual User ID

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (name && email && message) {
                // Send email
                emailjs.send('service_lkq18eo', 'template_m3f98hb', {
                    name: name,
                    email: email,
                    message: message
                })
                .then(function(response) {
                    alert('Message sent successfully!');
                    contactForm.reset();
                }, function(error) {
                    alert('Failed to send message. Please try again.');
                });
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
