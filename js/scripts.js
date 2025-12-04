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