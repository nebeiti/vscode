// Function to toggle dark mode
function toggleDarkMode() {
    const darkModeEnabled = document.body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');
    
    // Update button text based on current mode
    updateButtonText();
}

// Function to apply the saved preference
function applySavedPreference() {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
        document.body.classList.add('dark-mode');
    }
    
    // Update button text based on the saved preference
    updateButtonText();
}

// Function to update button text based on current mode
function updateButtonText() {
    const darkModeEnabled = document.body.classList.contains('dark-mode');
    const button = document.getElementById('dark-mode-toggle');
    button.innerText = darkModeEnabled ? 'Toggle to Light Mode' : 'Toggle to Dark Mode';
}

// Apply the saved preference when the page loads
applySavedPreference();

// Attach the toggle function to the button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
