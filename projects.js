// Function to open the lightbox
function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}

// Function to close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Add click event listeners to all project images
document.querySelectorAll('.Project-tile').forEach(function(tile) {
    tile.addEventListener('click', function(event) {
        event.preventDefault();
        openLightbox(this.href);
    });
});
