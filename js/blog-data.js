/* ==========================================================================
   Professional Student Portfolio - Dynamic Academic & Technical Blog Engine
   ========================================================================== */

/**
 * Array holding structural information, publication timelines, and short descriptions 
 * for educational and technical writing. Loaded dynamically into blog.html.
 */
const BLOG_DATA = [
    {
        id: "understanding-huygens-principle",
        title: "Demystifying Huygens' Principle & Wave Optics",
        date: "June 15, 2026",
        readTime: "6 min read",
        category: "Physics",
        summary: "A breakdown of wavefront geometry, secondary wavelets, and how to mathematically analyze constructive and destructive interference patterns in wave superposition setups.",
        link: "#"
    },
    {
        id: "debugging-gpu-hardware-artifacts",
        title: "System Troubleshooting: Resolving GPU Artifacting and Driver Crashes",
        date: "May 22, 2026",
        readTime: "8 min read",
        category: "Hardware",
        summary: "A comprehensive developer guide on identifying display artifacting, working within OS Safe Mode configurations, and cleanly performing full driver reinstallations.",
        link: "#"
    },
    {
        id: "clean-architecture-css-variables",
        title: "Structuring Clean Layouts with Native CSS Custom Variables",
        date: "April 08, 2026",
        readTime: "5 min read",
        category: "Frontend",
        summary: "Why relying on clean native CSS tokens improves system responsive management and dark theme sync logic compared to complex preprocessor utility libraries.",
        link: "#"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    renderBlogGrid();
});

/**
 * Parses and maps the BLOG_DATA array elements directly onto the container inside blog.html
 */
function renderBlogGrid() {
    const blogContainer = document.getElementById('dynamic-blog-grid');
    if (!blogContainer) return;

    blogContainer.innerHTML = BLOG_DATA.map(post => `
        <article class="blog-card card scroll-reveal">
            <div class="blog-meta">
                <span class="blog-category">${post.category}</span>
                <span class="blog-date-info">${post.date} • ${post.readTime}</span>
            </div>
            <h3 class="blog-card-title">${post.title}</h3>
            <p class="blog-card-text">${post.summary}</p>
            <a href="${post.link}" class="btn-text">
                Read Full Article <i class="fas fa-arrow-right"></i>
            </a>
        </article>
    `).join('');
}