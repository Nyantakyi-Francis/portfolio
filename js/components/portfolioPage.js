// Portfolio page component
import { getAllProjects, getProjectCount } from '../data/projects.js';
import { icons } from '../utils/icons.js';

export class PortfolioPage {
    constructor() {
        this.filter = 'all'; // all, featured, web, educational
    }

    render() {
        const allProjects = getAllProjects();
        const projectCount = getProjectCount();

        return `
            <div class="portfolio-container">
                <!-- Header Section -->
                <section class="portfolio-header">
                    <div class="container">
                        <h1 class="portfolio-title">My Projects</h1>
                        <p class="portfolio-subtitle">
                            A showcase of ${projectCount} web applications I've built, demonstrating my skills in 
                            full-stack development, API integration, and user experience design.
                        </p>
                    </div>
                </section>

                <!-- Filter Section -->
                <section class="portfolio-filters">
                    <div class="container">
                        <div class="filter-buttons">
                            <button class="filter-btn active" data-filter="all">
                                All Projects (${projectCount})
                            </button>
                            <button class="filter-btn" data-filter="featured">
                                Featured
                            </button>
                            <button class="filter-btn" data-filter="educational">
                                Educational
                            </button>
                            <button class="filter-btn" data-filter="web">
                                Web Apps
                            </button>
                        </div>
                    </div>
                </section>

                <!-- Projects Grid -->
                <section class="portfolio-projects">
                    <div class="container">
                        <div class="portfolio-grid" id="portfolio-grid">
                            ${this.renderProjects(allProjects)}
                        </div>
                    </div>
                </section>

                <!-- GitHub CTA -->
                <section class="portfolio-cta">
                    <div class="container">
                        <div class="cta-card">
                            <div class="cta-icon">${icons.github}</div>
                            <h2 class="cta-title">View All My Code</h2>
                            <p class="cta-description">
                                Check out more of my work and contributions on GitHub
                            </p>
                            <a href="https://github.com/Nyantakyi-Francis" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               class="btn btn-primary">
                                ${icons.github}
                                Visit GitHub Profile
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    renderProjects(projects) {
        return projects.map((project, index) => `
            <div class="portfolio-card" data-category="${this.getProjectCategory(project)}" data-featured="${project.featured}">
                <div class="portfolio-card-header">
                    <div class="portfolio-number">${String(index + 1).padStart(2, '0')}</div>
                    ${project.featured ? '<span class="portfolio-badge">Featured</span>' : ''}
                </div>
                
                <div class="portfolio-card-body">
                    <h3 class="portfolio-card-title">${project.name}</h3>
                    <p class="portfolio-card-description">${project.description}</p>
                    
                    <div class="portfolio-card-tech">
                        <span class="tech-label">Focus:</span>
                        <span class="tech-items">${project.focus}</span>
                    </div>
                </div>
                
                <div class="portfolio-card-footer">
                    <a href="${project.link}" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       class="portfolio-link">
                        <span>View Project</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                </div>
            </div>
        `).join('');
    }

    getProjectCategory(project) {
        const name = project.name.toLowerCase();
        const description = project.description.toLowerCase();
        const focus = project.focus.toLowerCase();

        // Categorize projects based on keywords
        if (name.includes('quiz') || name.includes('study') || description.includes('student') || description.includes('educational')) {
            return 'educational';
        } else {
            return 'web';
        }
    }

    attachEventListeners() {
        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.filterProjects(filter);

                // Update active state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }

    filterProjects(filter) {
        const projects = document.querySelectorAll('.portfolio-card');

        projects.forEach(project => {
            const category = project.dataset.category;
            const featured = project.dataset.featured === 'true';

            let shouldShow = false;

            switch (filter) {
                case 'all':
                    shouldShow = true;
                    break;
                case 'featured':
                    shouldShow = featured;
                    break;
                case 'educational':
                    shouldShow = category === 'educational';
                    break;
                case 'web':
                    shouldShow = category === 'web';
                    break;
            }

            if (shouldShow) {
                project.style.display = 'flex';
                project.classList.add('fade-in');
            } else {
                project.style.display = 'none';
            }
        });
    }
}