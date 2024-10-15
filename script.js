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
    const xbutton = document.getElementById('xbutton');
    const xbuttonImage = document.getElementById('xbutton-image');
    const xbuttonClose = document.getElementById('xbutton-close');

    document.querySelectorAll('.projects a, .Certifications a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            xbuttonImage.src = e.currentTarget.href;
            xbutton.style.display = 'flex';
        });
    });

    xbuttonClose.addEventListener('click', () => {
        xbutton.style.display = 'none';
    });

    xbutton.addEventListener('click', (e) => {
        if (e.target === xbutton) {
            xbutton.style.display = 'none';
        }
    });
});
// Get the close button element
const closeButton = document.getElementById('xbutton-close');

// Add an event listener for keydown events
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.key === 'Enter') {
        // Simulate a click on the close button
        closeButton.click();
    }
});

// Define what happens when the close button is clicked
closeButton.addEventListener('click', function() {
    // Hide the xbutton div or perform another action
    const xbuttonDiv = document.getElementById('xbutton');
    xbuttonDiv.style.display = 'none'; // Hides the div
});
