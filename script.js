document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    menuIcon.onclick = function(event) {
        event.stopPropagation();
        navMenu.classList.toggle('active'); 
    };

    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            navMenu.classList.remove('active'); 
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');

    document.querySelectorAll('.projects a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            lightboxImage.src = e.currentTarget.href;
            lightbox.style.display = 'flex';
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
