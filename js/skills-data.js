/* ==========================================================================
   Professional Student Portfolio - Dynamic Skills Analytics Dataset
   ========================================================================== */

/**
 * Array holding skill categorizations, proficiencies, and metrics.
 * Loaded asynchronously into about.html to dynamically render performance bars.
 */
const SKILLS_DATA = [
    {
        category: "Core Frontend Architecture",
        skills: [
            { name: "HTML5 / Semantic Layouts", level: 95 },
            { name: "CSS Custom Variables & Grid Architecture", level: 90 },
            { name: "JavaScript (ES6 Structuring)", level: 85 }
        ]
    },
    {
        category: "Web Interfaces & Optimization",
        skills: [
            { name: "Responsive Mobile UI Optimization", level: 92 },
            { name: "JSON Structured Data Interactivity", level: 88 },
            { name: "Cross-Browser Layout Engineering", level: 85 }
        ]
    },
    {
        category: "Developer Workflows & Tools",
        skills: [
            { name: "Git & Collaborative Version Control", level: 80 },
            { name: "Hardware Diagnostics & Technical Setup", level: 85 },
            { name: "Multimedia Asset Engineering", level: 75 }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    renderSkillsMatrix();
});

/**
 * Parses and maps the SKILLS_DATA array directly onto the grid elements inside about.html
 */
function renderSkillsMatrix() {
    const skillsContainer = document.getElementById('dynamic-skills-grid');
    if (!skillsContainer) return;

    let skillsHTML = '';

    SKILLS_DATA.forEach(group => {
        skillsHTML += `
            <div class="skills-category-card card scroll-reveal">
                <h3>${group.category}</h3>
                <div class="skills-bar-list">
        `;

        group.skills.forEach(skill => {
            skillsHTML += `
                <div class="skill-progress-item">
                    <div class="skill-info-labels">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-percentage">${skill.level}%</span>
                    </div>
                    <div class="progress-bar-track">
                        <div class="progress-bar-fill" style="width: ${skill.level}%"></div>
                    </div>
                </div>
            `;
        });

        skillsHTML += `
                </div>
            </div>
        `;
    });

    skillsContainer.innerHTML = skillsHTML;
}