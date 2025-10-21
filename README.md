# Nyantakyi Francis - Portfolio Website

A modern, professional portfolio website showcasing software development projects, education, and professional experience.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modular Architecture**: Clean separation of concerns with ES6 modules
- **Modern UI**: Glassmorphism effects with gradient backgrounds
- **Dynamic Navigation**: Smooth page transitions without page reloads
- **Professional Layout**: Well-organized sections for projects, skills, and experience

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main HTML file
├── css/
│   └── styles.css            # All styling
├── js/
│   ├── main.js               # Application entry point
│   ├── components/           # UI components
│   │   ├── navigation.js     # Navigation bar component
│   │   ├── homePage.js       # Home page component
│   │   └── aboutPage.js      # About page component
│   ├── data/                 # Data modules
│   │   ├── projects.js       # Project information
│   │   ├── skills.js         # Technical skills
│   │   └── education.js      # Education & certifications
│   └── utils/                # Utility functions
│       └── icons.js          # SVG icon definitions
└── README.md                 # This file
```

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Modular architecture with classes and modules
- **No frameworks**: Pure vanilla JavaScript for maximum performance

## 📦 Setup Instructions

### Local Development

1. **Clone or download the project**
   ```bash
   git clone https://github.com/YOUR-USERNAME/portfolio.git
   cd portfolio
   ```

2. **Open with a local server**
   
   Since the project uses ES6 modules, you need to run it through a web server (not by opening index.html directly).

   **Option A: Using VS Code Live Server**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html`
   - Select "Open with Live Server"

   **Option B: Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then open: http://localhost:8000
   ```

   **Option C: Using Node.js**
   ```bash
   npx http-server
   ```

### Deploy to GitHub Pages

1. **Create a new repository on GitHub**
   - Go to GitHub and create a new repository
   - Name it whatever you like (e.g., `portfolio`)

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Professional portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Select **/ (root)** folder
   - Click **Save**
   - Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## 🎨 Customization

### Adding New Projects

Edit `js/data/projects.js`:
```javascript
{
    name: 'Project Name',
    description: 'Project description...',
    focus: 'Technologies used',
    link: 'https://project-url.com',
    featured: true  // Set to true to show on home page
}
```

### Updating Skills

Edit `js/data/skills.js`:
```javascript
{
    category: 'Category Name',
    items: ['Skill 1', 'Skill 2', 'Skill 3']
}
```

### Modifying Education

Edit `js/data/education.js` to update education, certifications, or professional highlights.

### Changing Colors

Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #7c3aed;
    --secondary-color: #2563eb;
    /* ... other colors */
}
```

## 📄 Pages

- **Home**: Hero section, quick stats, featured projects, and call-to-action
- **About**: Professional summary, education, skills, highlights, certifications, and contact info
- **Portfolio**: Coming soon
- **Certificates**: Coming soon
- **Testimonials**: Coming soon

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available for personal use.

## 👤 Contact

**Nyantakyi Francis**
- Email: nyantakyifrancis54@gmail.com
- GitHub: [@Nyantakyi-Francis](https://github.com/Nyantakyi-Francis)
- LinkedIn: [Nyantakyi Francis](https://www.linkedin.com/in/nyantakyi-francis-603497278)

---

Built with ❤️ by Nyantakyi Francis