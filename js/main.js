document.addEventListener('DOMContentLoaded', () => {
    // --- Dynamic Gallery Rendering ---
    const galleryContainer = document.getElementById('gallery-container');

    // Only run if we are on the main page with a gallery
    if (galleryContainer && typeof portfolioData !== 'undefined') {
        // Filter projects that should be shown on main, and limit to 4
        const mainProjects = portfolioData.projects
            .filter(p => p.showOnMain)
            .slice(0, 4);

        let htmlContent = '';

        mainProjects.forEach(project => {
            // Colors based on category for tags and icons
            let bgClass = 'bg-surface-container-high';
            let tagClass = 'bg-primary text-on-primary';
            let arrowClass = 'text-primary';

            if (project.category === '3d-modeling') {
                bgClass = 'bg-secondary-container';
                tagClass = 'bg-secondary text-on-secondary';
                arrowClass = 'text-secondary';
            } else if (project.category === 'graphic-design') {
                bgClass = 'bg-surface-container-high';
                tagClass = 'bg-tertiary text-on-tertiary';
                arrowClass = 'text-tertiary';
            } else if (project.category === 'animation') {
                bgClass = 'bg-surface-container-highest';
                tagClass = 'bg-primary-container text-on-primary-container';
                arrowClass = 'text-primary';
            }

            // Image or Placeholder
            let imageContent = '';
            if (project.coverImage === 'brand_id_placeholder') {
                imageContent = `
                    <div class="w-full aspect-video bg-surface border-2 border-on-background flex items-center justify-center font-h1 text-primary italic cel-shadow group-hover:-translate-y-2 transition-transform">
                        Brand_ID
                    </div>
                `;
            } else {
                imageContent = `
                    <img class="w-full h-full object-cover ${ (project.category === 'illustration' && project.id !== 'HKPOSTER') ? 'grayscale group-hover:grayscale-0' : ''} ${project.category === 'animation' ? 'group-hover:scale-105' : ''} transition-all duration-500" src="${project.coverImage}" alt="${project.title}" />
                    ${project.category === 'animation' ? '<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20"><span class="material-symbols-outlined text-surface text-6xl">play_circle</span></div>' : ''}
                `;
            }

            // Build Card
            htmlContent += `
                <div class="${project.cardSpan} group cursor-pointer project-card transition-all duration-300" data-category="${project.category}" onclick="window.location.href='proyecto.html?id=${project.id}'">
                    <div class="${bgClass} h-full rounded-xl border-2 border-on-background overflow-hidden soft-glow-hover transition-all duration-300">
                        <div class="relative ${project.coverImage === 'brand_id_placeholder' ? 'h-[250px] p-md flex items-center justify-center' : (project.category === 'illustration' ? 'h-[500px]' : (project.category === 'animation' ? 'h-[300px] overflow-hidden' : 'h-[250px]'))}">
                            ${imageContent}
                            ${project.coverImage !== 'brand_id_placeholder' ? `<div class="absolute top-sm right-sm ${tagClass} px-sm py-xs rounded-lg font-label border-2 border-on-background">${project.categoryLabel}</div>` : ''}
                        </div>
                        <div class="p-md space-y-xs border-t-2 border-on-background flex justify-between items-center">
                            <div>
                                <h3 class="font-h3 text-h3 text-on-background">${project.title}</h3>
                                <p class="font-body-md text-on-surface-variant">${project.shortDescription}</p>
                            </div>
                            <span class="material-symbols-outlined ${arrowClass} text-3xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </div>
            `;
        });

        galleryContainer.innerHTML = htmlContent;
    }

    // --- Gallery Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const searchInput = document.getElementById('project-search');

    const filterProjects = () => {
        const activeBtn = document.querySelector('.filter-btn.active');
        const activeCategory = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
        const searchText = searchInput ? searchInput.value.toLowerCase().trim() : '';

        // We need to query again because cards might have been added dynamically
        const currentCards = document.querySelectorAll('.project-card');

        currentCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardText = card.innerText.toLowerCase();

            const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
            const matchesSearch = searchText === '' || cardText.includes(searchText);

            if (matchesCategory && matchesSearch) {
                card.style.display = '';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-primary', 'text-on-primary');
                b.classList.add('bg-surface', 'text-on-background');
            });

            btn.classList.remove('bg-surface', 'text-on-background');
            btn.classList.add('active', 'bg-primary', 'text-on-primary');

            filterProjects();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            filterProjects();
        });
    }

    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            const subject = encodeURIComponent(`Nuevo mensaje de ${name} desde tu Portafolio`);
            const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`);

            window.location.href = `mailto:yhonnyarb@gmail.com?subject=${subject}&body=${body}`;

            contactForm.reset();
        });
    }

    // --- Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const activeClasses = ['font-h3', 'text-h3', 'text-primary', 'border-b-2', 'border-primary', 'pb-1'];
    const inactiveClasses = ['font-body-md', 'text-on-surface-variant', 'font-medium', 'hover:bg-primary-container', 'transition-all', 'duration-200', 'px-sm', 'py-xs', 'rounded-lg'];

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the screen
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove(...activeClasses);
                    link.classList.add(...inactiveClasses);
                    
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.remove(...inactiveClasses);
                        link.classList.add(...activeClasses);
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
