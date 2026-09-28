/* ==========================================================================
   Professional Student Portfolio - Dynamic Academic Projects Dataset
   ========================================================================== */

/**
 * Array holding project architectures, tags, and production repositories.
 * Loaded dynamically into projects.html to drive interactive filtering.
 */
const PROJECTS_DATA = [
    {
        id: "durga-puja-samiti",
        title: "आदिशक्ति नवयुवक संघ दुर्गा पूजा समिति",
        subtitle: "Patarihan, Sahar, Bhojpur - Cultural Web Portal",
        category: "development",
        tags: ["Web App", "Festive Portal", "HTML5", "CSS3", "JavaScript"],
        description: "A community web application built for Aadishakti Navyuvak Sangh Durga Puja Samiti, Patarihan (Sahar, Bhojpur)[cite: 4]. Features financial transparency reports, committee details, historical milestones, photo gallery, and event schedules[cite: 4].",
        githubUrl: "https://github.com/vishalchandravanshi16",
        liveUrl: "https://durga-puja-app-2026.onrender.com"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    renderProjectsGrid('all');
    initProjectFilters();
});

/**
 * Parses and updates the visual grid workspace according to filter choices
 */
function renderProjectsGrid(activeCategory) {
    const projectsGrid = document.getElementById('dynamic-projects-grid');
    if (!projectsGrid) return;

    const filteredProjects = activeCategory === 'all' 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(project => project.category === activeCategory);

    if (filteredProjects.length === 0) {
        projectsGrid.innerHTML = `<p class="no-projects text-center">No projects matched the active tracking parameters.</p>`;
        return;
    }

    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card card scroll-reveal active animate-fade-in" data-category="${project.category}">
            <div class="project-content">
                <span class="project-badge">${project.category.toUpperCase()}</span>
                <h3 class="project-card-title">${project.title}</h3>
                <h4 class="project-card-subtitle">${project.subtitle}</h4>
                <p class="project-card-text">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                        <i class="fab fa-github"></i> Source
                    </a>
                    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Attaches operational event listeners onto user sorting navigation buttons
 */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length === 0) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const selectedCategory = e.target.getAttribute('data-filter');
            renderProjectsGrid(selectedCategory);
        });
    });
}