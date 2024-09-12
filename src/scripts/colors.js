console.log( "colors.js // loading...");

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const isDarkMode = body.classList.toggle('dark');
  localStorage.setItem('darkMode', isDarkMode);
  updateButtonText(isDarkMode);
}

// Function to set the initial dark mode state
function setInitialDarkMode() {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  document.body.classList.toggle('dark', savedDarkMode);
  updateButtonText(savedDarkMode);
}

// Function to update the button text
function updateButtonText(isDarkMode) {
  const button = document.getElementById('dark-mode-toggle');
  button.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

// Set initial dark mode state when the page loads
document.addEventListener('DOMContentLoaded', setInitialDarkMode);

// Add click event listener to the toggle button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);