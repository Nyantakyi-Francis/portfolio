Francis Nyantakyi  Professional Portfolio
🌟 Overview
This repository hosts the static, single-page professional portfolio for Francis Nyantakyi, Software Developer & Educator.
The site is built on a clean, maintainable structure using only standard web technologies (HTML, CSS, JavaScript). This architecture ensures maximum performance, complete search engine optimization (SEO) on static hosts like GitHub Pages, and immediate content rendering.
Key Features
•	100% SEO Friendly All content is in the initial HTML document, guaranteeing Google indexing.
•	Responsive Design Optimized for all screen sizes using a custom, modern design.
•	Gradient Theme Professional and highly aesthetic style defined in a single CSS file.
•	Comprehensive SEO Meta Tags Includes Open Graph (og) and Twitter tags for superior social media sharing.
•	Technical Expertise Showcases proficiency in JavaScript, C#, Python, React, and Data Visualization tools (Tableau, Power BI).
________________________________________
🛠️ Project Structure
The project follows a minimalist structure focused on performance and clarity
francis-nyantakyi-portfolio
├── index.html              -- THE CORE All content, structure, and SEO tags are here.
├── resume.html             -- Separate static file for the detailed resume.
├── css
│   └── styles.css          -- THE DESIGN All custom styles and professional theme.
├── js
│   └── scripts.js          -- THE BEHAVIOR Minimal code for navigation toggle & 'Back to Top' scroll.
└── images
    └── francis-nyantakyi-software-developer.jpg -- Profile image (optimized for SEO).
    └── logo.png            -- Favicon.
    └── social_share_image.png -- Image used for social media link previews (ogimage).
________________________________________
🚀 Getting Started & Deployment
This is a static site and requires no backend server.
1. Running Locally (Development)
1.	Clone the repository
Bash
git clone httpsgithub.comNyantakyi-Francisportfolio-repo.git
cd portfolio-repo
2.	Open index.html Simply open the index.html file in your web browser (Chrome, Firefox, etc.).
2. Deployment (GitHub Pages)
The fastest and most reliable way to host this project is using GitHub Pages, which is optimized for this static structure.
1.	Create a Repository Push this project to a new public GitHub repository.
2.	Go to Settings Navigate to Settings  Pages in your repository.
3.	Source Select the main branch (or master) and choose the  (root) folder.
4.	Save Your site will be live within minutes at a URL like httpsnyantakyi-francis.github.ioportfolio.
________________________________________
✏️ Customization & Making Changes
All content is managed across three core files.
1. Editing Content (index.html)
The index.html file contains all text and links.
Section to Edit	HTML Elements	Key Areas to Change
SEO & Title	head tags	Update the title, meta name=description, and Open Graph tags (ogimage, twittersite).
HeroAbout	section class=hero id=home	Modify the h1 and h2 headings and the main p class=hero-description text.
Projects	section id=projects	Use the existing .project-card structure. Update the h3 title, project-focus, project-description, and the href URL for your projects (GeoSphere and Stories).
Contact Links	section id=contact	Update the mailto email address and the href link for WhatsApp (httpwa.me233...) and LinkedIn.
Resume Link	nav and Hero Buttons	The link resume.html points to the static resume file in the root.
2. Editing Style (cssstyles.css)
All colors, fonts, spacing, and responsiveness are controlled here.
Area to Edit	CSS Variables (at the top)	Code Blocks to Target
Colors	--primary-color, --secondary-color, --bg-dark, etc.	Changing these variables instantly updates the site's primary palette.
Hero Gradient	NA	Find the .hero selector and update the linear-gradient() values for a different color blend.
Fonts	body selector	Change the font-family if you wish to use a different typeface (e.g., from Google Fonts).
LayoutGrid	.projects-grid, .skills-grid	Adjust grid-template-columns if you want a different number of columns on desktop view.
3. Editing Behavior (jsscripts.js)
This file contains minimal, non-essential logic for user interface enhancement.
Functionality	Purpose	Notes
Mobile Menu	Controls the openingclosing of the navigation on mobile devices.	Do not modify.
Back to Top	Handles showinghiding the button when the user scrolls past the hero section.	The variable heroHeight determines when the button appears.
Active Link State	Updates the active class on the navigation links based on the current scroll position.	Do not modify.
________________________________________
🔎 SEO and Performance Maintenance
The code is optimized for search engines. Follow these rules when making updates
SEO Component	Location	Maintenance Rule
Image Ranking	img src=... tag	The alt text must be descriptive (alt=Francis Nyantakyi - Professional Software Developer Headshot). Do not remove or change the image file name (francis-nyantakyi-software-developer.jpg).
Page Speed	Last line of body	The script tag uses defer (script src=jsscripts.js deferscript). Always keep the defer attribute.
Search Snippet	head	Keep the meta name=description tag concise and keyword-rich (e.g., Software Developer, Data Visualization, C#).
Broken Links	All a tags	Regularly verify that the links to your projects and social media are still active.
________________________________________
📞 Contact
For any questions or professional inquiries, please reach out
•	Email nyantakyifrancis54@gmail.com
•	LinkedIn Francis Nyantakyi
•	GitHub Nyantakyi-Francis
________________________________________
License This project is open-source. Feel free to fork and modify.
