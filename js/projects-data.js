/* ==========================================================================
   Professional Student Portfolio - Dynamic Academic Projects Dataset
   ========================================================================== */

/**
 * Array holding project architectures, tags, and production repositories.
 * Loaded dynamically into projects.html to drive interactive filtering.
 */
const PROJECTS_DATA = [
    {
        id: "physics-sandbox",
        title: "Kinetic Physics Sandbox Engine",
        subtitle: "Educational Interactive Tool",
        category: "academic",
        tags: ["HTML5 Canvas", "JavaScript", "Kinetic Physics", "UI Customization"],
        description: "A complete 2D vector physics engine built using HTML5 Canvas. Designed to help science students visualize wave patterns, reflection thresholds, superposition parameters, and real-time coefficient adjustments seamlessly.",
        githubUrl: "https://github.com",
        liveUrl: "#"
    },
    {
        id: "retail-tracker",
        title: "Local Retail Inventory Platform",
        subtitle: "Commercial Management System",
        category: "development",
        tags: ["JavaScript", "JSON Data Models", "CSS Variables", "Local Storage"],
        description: "A high-performance stock management app engineered for small retail stores. Features modular JSON data structures, active threshold notifications for bulk stock monitoring, and fluid multi-tier item sorting.",
        githubUrl: "https://github.com",
        liveUrl: "#"
    },
    {
        id: "wave-simulation",
        title: "Huygens Wavelet Modeler",
        subtitle: "Scientific Visualization Rig",
        category: "academic",
        tags: ["Canvas API", "Wave Optics", "Vector Physics", "Math.js Integration"],
        description: "An interactive application modeling secondary wavelets and wavefront propagation according to Huygens' Principle. Provides accurate spatial mapping of constructive and destructive interference patterns.",
        githubUrl: "https://github.com",
        liveUrl: "#"
    },
    {
        id: "vlog-assets",
        title: "Creative Vlog Hub & Brand Site",
        subtitle: "Media Production Asset Portfolio",
        category: "creative",
        tags: ["Responsive Grid", "CSS Animations", "Asset Engineering", "UX Optimization"],
        description: "A highly visual front-end showcase engineered for multimedia content groups. Incorporates adaptive fluid grids and layout models customized for tracking content streams and video asset logs.",
        githubUrl: "https://github.com",
        liveUrl: "#"
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
                    <a href="${project.liveUrl}" class="btn btn-primary btn-sm">
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