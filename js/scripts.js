document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Menu Toggle ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Change icon if using an animated icon library
        });

        // Close menu when a link is clicked (on mobile)
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // --- 2. Back to Top Button Functionality ---
    const backToTopButton = document.getElementById('backToTop');
    const heroSection = document.getElementById('home');
    let heroHeight = 500; // Default height

    if (heroSection) {
        // Get the height of the hero section to determine when to show the button
        heroHeight = heroSection.offsetHeight;
    }

    // Show/Hide the button on scroll
    window.onscroll = function() {
        if (document.body.scrollTop > heroHeight || document.documentElement.scrollTop > heroHeight) {
            backToTopButton.style.display = "flex"; // Use flex to center icon/text
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Scroll to the top when button is clicked
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Use smooth scroll behavior defined in HTML
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
    
    // --- 3. Simple active link state (for navigation) ---
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let currentSection = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for fixed nav
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(`#${currentSection}`)) {
                link.classList.add('active');
            }
        });
    });

});

window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.project-card');
    const stickyTop = 100; // Matches the 'top' value in your CSS

    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        
        // Check if the card has hit the sticky "ceiling"
        if (rect.top <= stickyTop) {
            // Calculate how much of the card has been "pushed" upward
            // As the card moves up, 'progress' goes from 0 to 1
            const progress = Math.min(Math.max((stickyTop - rect.top) / 400, 0), 1);
            
            // Apply shrinking and fading
            const scaleValue = 1 - (progress * 0.1); // Shrinks to 90%
            const opacityValue = 1 - (progress * 0.5); // Fades to 50%
            
            card.style.transform = `scale(${scaleValue})`;
            card.style.opacity = opacityValue;
        } else {
            // Reset to original state if scrolling back up
            card.style.transform = `scale(1)`;
            card.style.opacity = 1;
        }
    });
});