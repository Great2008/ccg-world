// Get the "Watch Live" button
const liveButton = document.querySelector('.live-service-btn');

// Function to check if today is Saturday
function isSaturday() {
    const today = new Date();
    // Sunday = 0, Saturday = 6
    return today.getDay() === 6;
}

// Update the button's appearance based on the day
function updateLiveButton() {
    if (isSaturday()) {
        liveButton.classList.add('active');
        liveButton.textContent = '🔴 Watch Live';
    } else {
        liveButton.classList.remove('active');
        liveButton.textContent = '🔴 Watch Live (Inactive)';
    }
}

// Run the function when the page loads
updateLiveButton();
