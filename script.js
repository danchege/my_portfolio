
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .skill-category');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.querySelectorAll('.project-card, .skill-category').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Mobile menu toggle (you can add this if you want a mobile menu)
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = '☰';
    
    const navLinks = document.querySelector('.nav-links');
    
    menuButton.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    nav.insertBefore(menuButton, navLinks);
};

// Initialize mobile menu if screen width is small
if (window.innerWidth <= 768) {
    createMobileMenu();
}
// Form validation
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
        return;
    }});