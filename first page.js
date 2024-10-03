document.addEventListener("DOMContentLoaded", function() {
    const redirectBtn = document.getElementById("redirect-btn");
    redirectBtn.addEventListener("click", function() {
        window.location.href = "profile.html";
    });
});

// Add this script to your first page.js file
const viewProfileBtn = document.getElementById('view-profile-btn');

viewProfileBtn.addEventListener('click', () => {
    window.location.href = 'profile.html'; // replace 'profile.html' with the actual path to your profile page
});

document.getElementById('login-btn').addEventListener('click', function() {
    window.location.href = 'login.html';
});