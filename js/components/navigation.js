// Navigation component
import { icons } from '../utils/icons.js';

export class Navigation {
    constructor() {
        this.currentPage = 'home';
        this.mobileMenuOpen = false;
        this.navItems = [
            { id: 'home', name: 'Home', disabled: false },
            { id: 'about', name: 'About', disabled: false },
            { id: 'portfolio', name: 'Portfolio', disabled: false },
            { id: 'certificates', name: 'Certificates', disabled: true },
            { id: 'testimonials', name: 'Testimonials', disabled: true }
        ];
    }

    render() {
        const nav = document.getElementById('main-nav');
        nav.className = 'nav';
        nav.innerHTML = `
            <div class="nav-container">
                <a href="#" class="nav-logo">
                    <img src="images/my_picture.jpg" alt="Nyantakyi Francis" class="nav-logo-img">
                    <span class="nav-logo-text">NYANTAKYI FRANCIS</span>
                </a>
                
                <ul class="nav-menu" id="nav-menu">
                    ${this.navItems.map(item => `
                        <li>
                            <a href="#" 
                               class="nav-link ${item.id === this.currentPage ? 'active' : ''} ${item.disabled ? 'disabled' : ''}"
                               data-page="${item.id}"
                               ${item.disabled ? 'aria-disabled="true"' : ''}>
                                ${item.name}${item.disabled ? ' (Coming Soon)' : ''}
                            </a>
                        </li>
                    `).join('')}
                </ul>
                
                <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
                    ${icons.menu}
                </button>
            </div>
        `;

        this.attachEventListeners();
    }

    attachEventListeners() {
        // Navigation links
        const navLinks = document.querySelectorAll('.nav-link:not(.disabled)');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.dataset.page;
                this.navigateTo(page);
            });
        });

        // Mobile menu toggle
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        navToggle.addEventListener('click', () => {
            this.mobileMenuOpen = !this.mobileMenuOpen;
            navMenu.classList.toggle('active');
            navToggle.innerHTML = this.mobileMenuOpen ? icons.close : icons.menu;
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const nav = document.getElementById('main-nav');
            if (this.mobileMenuOpen && !nav.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    navigateTo(page) {
        this.currentPage = page;
        this.closeMobileMenu();

        // Update active state
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === page) {
                link.classList.add('active');
            }
        });

        // Dispatch custom event for page change
        window.dispatchEvent(new CustomEvent('pageChange', { detail: { page } }));
    }

    closeMobileMenu() {
        this.mobileMenuOpen = false;
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');

        if (navMenu) navMenu.classList.remove('active');
        if (navToggle) navToggle.innerHTML = icons.menu;
    }

    getCurrentPage() {
        return this.currentPage;
    }
}