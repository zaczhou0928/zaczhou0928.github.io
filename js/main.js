// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.add('scroll-down');
        navbar.style.transform = 'translateY(-100%)';
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = Object.fromEntries(formData);
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message (you can customize this)
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

// Optional: Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Optional: Dynamic typing effect for the hero section
function typeEffect(element, text, speed = 20) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Initialize typing effect
const tagline = document.querySelector('.tagline');
if (tagline) {
    const originalText = tagline.textContent;
    tagline.textContent = '';
    typeEffect(tagline, originalText);
}
