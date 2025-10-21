// About page component
import { education, certifications, highlights } from '../data/education.js';
import { skills } from '../data/skills.js';
import { icons } from '../utils/icons.js';

export class AboutPage {
    render() {
        return `
            <div class="about-container">
                <!-- Professional Summary -->
                <section class="about-section">
                    <div class="about-card">
                        <h2 class="section-title">About Me</h2>
                        <p class="about-intro">
                            I'm a highly motivated dual-degree student pursuing both Software Development and Education, 
                            combining technical expertise with strong communication and instructional abilities. I'm passionate 
                            about leveraging programming, database management, and data visualization to solve complex problems 
                            and build engaging web applications. My unique background allows me to bridge the gap between 
                            technology and education, creating solutions that are both innovative and accessible.
                        </p>
                    </div>
                </section>

                <!-- Education -->
                <section class="about-section">
                    <h2 class="section-title">Education</h2>
                    <div class="education-grid">
                        ${education.map(edu => `
                            <div class="education-card">
                                <div class="education-icon">${icons.educationIcon}</div>
                                <div>
                                    <h3 class="education-title">${edu.degree}</h3>
                                    <p class="education-institution">${edu.institution}</p>
                                    <p class="education-date">${edu.graduationDate}</p>
                                    <p class="education-coursework">${edu.coursework}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- Technical Skills -->
                <section class="about-section">
                    <h2 class="section-title">Technical Skills</h2>
                    <div class="skills-grid">
                        ${skills.map(skillGroup => `
                            <div class="skill-category">
                                <h3 class="skill-category-title">${skillGroup.category}</h3>
                                <ul class="skill-list">
                                    ${skillGroup.items.map(skill => `
                                        <li class="skill-item">
                                            <span class="skill-bullet"></span>
                                            ${skill}
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- Professional Highlights -->
                <section class="about-section">
                    <h2 class="section-title">Professional Highlights</h2>
                    <div class="highlights-grid">
                        ${highlights.map(highlight => `
                            <div class="highlight-card">
                                <div class="highlight-icon">${this.getHighlightIcon(highlight.icon)}</div>
                                <h3 class="highlight-title">${highlight.title}</h3>
                                <p class="highlight-description">${highlight.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- Certifications -->
                <section class="about-section">
                    <h2 class="section-title">Certifications</h2>
                    <div>
                        ${certifications.map(cert => `
                            <div class="cert-card">
                                <div class="cert-icon">${icons.award}</div>
                                <div>
                                    <h3 class="cert-title">${cert.title}</h3>
                                    <p class="cert-institution">${cert.institution}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- Contact Info -->
                <section>
                    <div class="contact-card">
                        <h2 class="contact-title">Get in Touch</h2>
                        <div class="contact-info">
                            <div class="contact-item">
                                ${icons.mail}
                                <a href="mailto:nyantakyifrancis54@gmail.com" class="contact-link">
                                    nyantakyifrancis54@gmail.com
                                </a>
                            </div>
                            <div class="contact-item">
                                ${icons.phone}
                                <a href="tel:+233595715528" class="contact-link">
                                    (+233) 595-715-528
                                </a>
                            </div>
                            <div class="contact-item">
                                ${icons.whatsapp}
                                <a href="https://wa.me/233595715528?text=Hi%20Francis,%20I%20looked%20you%20up%20on%20your%20website.%20I%20would%20like%20for%20us%20to%20discuss%20..." 
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="contact-link">
                                    WhatsApp Me
                                </a>
                            </div>
                            <div class="contact-item">
                                <span>📍</span>
                                <span>Kumasi, Ashanti Region, Ghana</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    getHighlightIcon(iconName) {
        const iconMap = {
            'briefcase': icons.briefcase,
            'message': icons.message,
            'code': icons.code,
            'award': icons.award
        };
        return iconMap[iconName] || icons.code;
    }
}