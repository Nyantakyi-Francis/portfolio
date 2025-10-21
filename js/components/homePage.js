// Home page component
import { getFeaturedProjects } from '../data/projects.js';
import { icons } from '../utils/icons.js';

export class HomePage {
    render() {
        const featuredProjects = getFeaturedProjects();

        return `
            <!-- Hero Section -->
            <section class="hero">
                <div class="container">
                    <h1 class="hero-title">Nyantakyi Francis</h1>
                    <p class="hero-subtitle">Software Developer & Educator</p>
                    <p class="hero-description">
                        Bridging technology and education to create innovative solutions that make a difference
                    </p>
                    
                    <div class="hero-buttons">
                        <a href="mailto:nyantakyifrancis54@gmail.com" class="btn btn-primary">
                            ${icons.mail}
                            Email Me
                        </a>
                        <a href="https://wa.me/233595715528?text=Hi%20Francis,%20I%20looked%20you%20up%20on%20your%20website.%20I%20would%20like%20for%20us%20to%20discuss%20..." 
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn btn-whatsapp">
                            ${icons.whatsapp}
                            WhatsApp
                        </a>
                        <a href="tel:+233595715528" class="btn btn-secondary">
                            ${icons.phone}
                            Call Me
                        </a>
                        <a href="https://github.com/Nyantakyi-Francis" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="btn btn-secondary">
                            ${icons.github}
                            GitHub
                        </a>
                    </div>

                    <!-- Quick Stats -->
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-icon">${icons.code}</div>
                            <h3 class="stat-number">5+</h3>
                            <p class="stat-label">Web Projects Built</p>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">${icons.graduationCap}</div>
                            <h3 class="stat-number">Dual Degrees</h3>
                            <p class="stat-label">Software Dev & Education</p>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">${icons.award}</div>
                            <h3 class="stat-number">2</h3>
                            <p class="stat-label">Professional Certificates</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Featured Projects Section -->
            <section class="section section-alt">
                <div class="container">
                    <h2 class="section-title">Featured Projects</h2>
                    <div class="projects-grid">
                        ${featuredProjects.map(project => `
                            <div class="project-card">
                                <h3 class="project-title">${project.name}</h3>
                                <p class="project-description">${project.description}</p>
                                <p class="project-focus">Focus: ${project.focus}</p>
                                <a href="${project.link}" 
                                   target="_blank" 
                                   rel="noopener noreferrer" 
                                   class="project-link">
                                    View Project →
                                </a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="cta-section">
                <div class="container">
                    <h2 class="cta-title">Let's Work Together</h2>
                    <p class="cta-description">
                        I'm always interested in hearing about new projects and opportunities
                    </p>
                    <div class="cta-buttons">
                        <a href="https://wa.me/233595715528?text=Hi%20Francis,%20I%20looked%20you%20up%20on%20your%20website.%20I%20would%20like%20for%20us%20to%20discuss%20..." 
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn btn-whatsapp">
                            ${icons.whatsapp}
                            WhatsApp
                        </a>
                        <a href="tel:+233595715528" class="btn btn-secondary">
                            ${icons.phone}
                            Call Me
                        </a>
                        <a href="https://www.linkedin.com/in/nyantakyi-francis-603497278" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="btn btn-secondary">
                            ${icons.linkedin}
                            LinkedIn
                        </a>
                        <a href="mailto:nyantakyifrancis54@gmail.com" class="btn btn-primary">
                            ${icons.mail}
                            Email
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
}