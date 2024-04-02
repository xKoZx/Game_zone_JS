// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for background video
window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    let backgroundVideo = document.getElementById('background-video');
    backgroundVideo.style.transform = 'translateY(' + offset * 0.5 + 'px)';
});

// Play features video fullscreen
window.addEventListener('scroll', function() {
    var featuresSection = document.getElementById('features');
    var featuresVideo = document.getElementById('features-video');
    var rect = featuresSection.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        featuresVideo.play();
        document.getElementById('background-video').style.display = 'none';
    } else {
        featuresVideo.pause();
        document.getElementById('background-video').style.display = 'block';
    }
    featuresVideo.style.width = '100%';
    featuresVideo.style.height = '100%';
});

// Toggle menu on mobile
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', function() {
        toggleButton.classList.toggle('active');
        menu.classList.toggle('active'); // Toggle the active class for the menu
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const viewDownloadsBtn = document.querySelector('.view-downloads-btn');
    const hiddenDownloadsSection = document.getElementById('hidden-downloads');
    const closeDownloadsBtn = document.querySelector('.close-downloads');
    const sectionsToHide = document.querySelectorAll('section:not(#hidden-downloads)');
    const footer = document.querySelector('footer');

    viewDownloadsBtn.addEventListener('click', function () {
        // Hide all sections except the navbar and the hidden downloads section
        sectionsToHide.forEach(section => {
            section.style.display = 'none';
        });

        // Display the hidden downloads section
        hiddenDownloadsSection.style.display = 'block';
        hiddenDownloadsSection.style.position = 'relative'; // Ensure it's positioned relative to the parent

        // Adjust positioning to appear below the navbar
        const navbarHeight = document.querySelector('header').offsetHeight;
        hiddenDownloadsSection.style.top = navbarHeight + 'px';

        // Hide the footer
        footer.style.display = 'none';
    });

    closeDownloadsBtn.addEventListener('click', function () {
        // Show all sections
        sectionsToHide.forEach(section => {
            section.style.display = 'block';
        });

        // Hide the hidden downloads section
        hiddenDownloadsSection.style.display = 'none';

        // Show the footer
        footer.style.display = 'block';
    });
});




