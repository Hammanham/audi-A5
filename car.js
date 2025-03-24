// Navigation Menu Toggle for Mobile
function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Reveal Hidden Facts
function revealFacts() {
    const revealBtn = document.getElementById('reveal-btn');
    const hiddenFacts = document.getElementById('hidden-facts');
    
    revealBtn.addEventListener('click', () => {
        hiddenFacts.classList.toggle('hidden');
        setTimeout(() => {
            hiddenFacts.classList.toggle('show');
        }, 10);
        
        // Change button text
        if (revealBtn.textContent === 'Discover the Legacy') {
            revealBtn.textContent = 'Hide the Legacy';
        } else {
            revealBtn.textContent = 'Discover the Legacy';
            setTimeout(() => {
                hiddenFacts.classList.toggle('show');
                setTimeout(() => {
                    hiddenFacts.classList.toggle('hidden');
                }, 300);
            }, 10);
        }
        
        // Smooth scroll to hidden facts
        if (hiddenFacts.classList.contains('show')) {
            hiddenFacts.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Sticky Navigation
function stickyNav() {
    const navbar = document.getElementById('navbar');
    let scrollPosition = window.scrollY;
    
    window.addEventListener('scroll', () => {
        scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            navbar.style.padding = '10px 50px';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            navbar.style.padding = '20px 50px';
        }
    });
}

// Image Zoom Effect on Hover
function imageZoom() {
    const mainImage = document.getElementById('main-image');
    
    mainImage.addEventListener('mouseover', () => {
        mainImage.style.transform = 'scale(1.05)';
        mainImage.style.transition = 'transform 0.5s ease';
    });
    
    mainImage.addEventListener('mouseout', () => {
        mainImage.style.transform = 'scale(1)';
    }); 
}

// Social Media Links - Open in New Tab
function socialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = link.getAttribute('href');
            window.open(url, '_blank');
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    revealFacts();
    stickyNav();
    imageZoom();
    socialLinks();
});