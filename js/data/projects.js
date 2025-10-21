// Projects data
export const projects = [
    {
        name: 'GeoSphere',
        description: 'A dynamic web application leveraging five third-party APIs to enable users to search for a location, retrieve current news for that area, and play a location-based trivia game.',
        focus: 'API Integration, JavaScript',
        link: 'https://nyantakyi-francis.github.io/GeoSphere/index.html',
        featured: true
    },
    {
        name: 'Study Hub',
        description: 'A smart study companion designed for students in Ghana, offering access to past exam questions, study planning tools, and essential educational resources to cultivate independent learning habits.',
        focus: 'Frontend, User Experience, Educational Tech',
        link: 'https://nyantakyi-francis.github.io/wdd131/study-hub/index.html',
        featured: true
    },
    {
        name: 'SIR FRANCIS QUIZ',
        description: 'Developed a responsive webpage for students to answer mathematics and science questions, utilizing a third-party form handler for data management and assessment.',
        focus: 'User Interface, External Tool Integration',
        link: 'https://nyantakyi-francis.github.io/SIR_FRANCIS_QUIZ/index.html',
        featured: false
    },
    {
        name: 'Anime Verse',
        description: 'Created a dynamic and responsive website using modern web technologies to effectively display and manage information about various anime and manga series.',
        focus: 'HTML/CSS/JS, Responsive Design',
        link: 'https://nyantakyi-francis.github.io/wdd231/final_project/index.html',
        featured: true
    },
    {
        name: 'MISA Website',
        description: 'Designed and launched the official website for the Mathematics and ICT Students Association during tenure as Association President.',
        focus: 'Leadership, Project Management, Web Design',
        link: 'https://nyantakyi-francis.github.io/misa_website/index.html',
        featured: false
    }
];

// Get all projects
export function getAllProjects() {
    return projects;
}

// Get featured projects only (shown on home page)
export function getFeaturedProjects() {
    return projects.filter(project => project.featured);
}

// Get a project by name
export function getProjectByName(name) {
    return projects.find(project => project.name.toLowerCase() === name.toLowerCase());
}

// Get total project count
export function getProjectCount() {
    return projects.length;
}