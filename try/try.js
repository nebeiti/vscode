// Function to toggle dark mode
function toggleDarkMode() {
    const darkModeEnabled = document.body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');
}

// Function to apply the saved preference
function applySavedPreference() {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

// Apply the saved preference when the page loads
applySavedPreference();

// Attach the toggle function to the button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
