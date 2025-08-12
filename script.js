// Mobile navigation (Hamburger Menu)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const dropdowns = document.querySelectorAll('.dropdown');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Handle dropdowns on mobile for better UX
if (window.innerWidth <= 768) {
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        toggle.addEventListener('click', (e) => {
            if (dropdown.querySelector('.dropdown-menu')) {
                 e.preventDefault();
                 dropdown.classList.toggle('active');
            }
        });
    });
}

// PESE Sessions Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.pese-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.pese-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.pese-content').forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            
            const tabId = this.getAttribute('data-tab');
            const content = document.getElementById(`${tabId}-content`);
            if (content) {
                content.classList.add('active');
            }
        });
    });
});

// Pause skill animation on hover
const skillsTrack = document.querySelector('.skills-track');
if (skillsTrack) {
    skillsTrack.addEventListener('mouseenter', () => {
        const slide = document.querySelector('.skills-slide');
        if(slide) slide.style.animationPlayState = 'paused';
    });

    skillsTrack.addEventListener('mouseleave', () => {
        const slide = document.querySelector('.skills-slide');
        if(slide) slide.style.animationPlayState = 'running';
    });
}


// Video Modal Functions
function openVideoModal(videoSrc, modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    const videoPlayer = modal.querySelector('video');
    
    videoPlayer.src = videoSrc;
    modal.classList.add('active');
    videoPlayer.play();
}

function closeVideoModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    const videoPlayer = modal.querySelector('video');

    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    modal.classList.remove('active');
}

// Close modal when clicking outside the video content
window.onclick = function(event) {
    if (event.target.classList.contains('video-modal')) {
        closeVideoModal(event.target.id);
    }
}