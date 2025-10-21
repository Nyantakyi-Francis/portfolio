// Main application entry point
import { Navigation } from './components/navigation.js';
import { HomePage } from './components/homePage.js';
import { AboutPage } from './components/aboutPage.js';
import { PortfolioPage } from './components/portfolioPage.js';

class App {
    constructor() {
        this.navigation = new Navigation();
        this.homePage = new HomePage();
        this.aboutPage = new AboutPage();
        this.portfolioPage = new PortfolioPage();
        this.mainContent = document.getElementById('main-content');

        this.init();
    }

    init() {
        // Render navigation
        this.navigation.render();

        // Render initial page (home)
        this.renderPage('home');

        // Listen for page changes
        window.addEventListener('pageChange', (e) => {
            this.renderPage(e.detail.page);
        });

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            const page = e.state?.page || 'home';
            this.renderPage(page, false);
        });

        // Set initial state
        history.replaceState({ page: 'home' }, '', '#home');
    }

    renderPage(page, updateHistory = true) {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Render appropriate page
        switch (page) {
            case 'home':
                this.mainContent.innerHTML = this.homePage.render();
                break;
            case 'about':
                this.mainContent.innerHTML = this.aboutPage.render();
                break;
            case 'portfolio':
                this.mainContent.innerHTML = this.portfolioPage.render();
                // Attach portfolio event listeners after rendering
                setTimeout(() => this.portfolioPage.attachEventListeners(), 0);
                break;
            case 'certificates':
            case 'testimonials':
                this.mainContent.innerHTML = this.renderComingSoon(page);
                break;
            default:
                this.mainContent.innerHTML = this.homePage.render();
        }

        // Update browser history
        if (updateHistory) {
            history.pushState({ page }, '', `#${page}`);
        }

        // Update navigation active state
        if (this.navigation.currentPage !== page) {
            this.navigation.currentPage = page;
            this.navigation.render();
        }
    }

    renderComingSoon(page) {
        const pageTitle = page.charAt(0).toUpperCase() + page.slice(1);
        return `
            <div class="about-container">
                <section class="about-section">
                    <div class="about-card" style="text-align: center; padding: 4rem 2rem;">
                        <h2 class="section-title">${pageTitle}</h2>
                        <p class="about-intro">This page is coming soon! Check back later for updates.</p>
                    </div>
                </section>
            </div>
        `;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new App();
});