document.addEventListener('DOMContentLoaded', () => {
    // 1. Highly Optimized Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const hoverTargets = document.querySelectorAll('.hover-target');

    // Only run cursor logic if on desktop
    if (window.innerWidth > 768) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Direct assignment is vastly more efficient than element.animate()
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        });

        // Cursor Hover Effects for Aesthetic Feel
        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                cursorOutline.style.width = '55px';
                cursorOutline.style.height = '55px';
                cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                cursorOutline.style.borderColor = 'transparent';
            });
            
            target.addEventListener('mouseleave', () => {
                cursorOutline.style.width = '36px';
                cursorOutline.style.height = '36px';
                cursorOutline.style.backgroundColor = 'transparent';
                cursorOutline.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            });
        });
    }

    // 2. Smooth Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});