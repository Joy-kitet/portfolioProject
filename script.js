// Enhanced JavaScript for improved interactivity

// Smooth sidebar animations
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    setTimeout(() => {
        sidebar.classList.add('active');
    }, 10);
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
    setTimeout(() => {
        sidebar.style.display = 'none';
    }, 300);
}

// Enhanced navigation scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Add fade-in class to cards
    const cards = document.querySelectorAll('.education-card, .project-card');
    cards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Add loading screen
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loading);

    // Hide loading screen after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loading.classList.add('hidden');
            setTimeout(() => {
                loading.remove();
            }, 500);
        }, 1000);
    });
});

// Enhanced form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const button = contactForm.querySelector('button');
        const originalText = button.textContent;
        
        // Animate button
        button.textContent = 'Sending...';
        button.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        
        // Simulate form submission
        setTimeout(() => {
            button.textContent = 'Message Sent!';
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = 'linear-gradient(135deg, #007bff, #0056b3)';
                contactForm.reset();
            }, 2000);
        }, 1500);
    });
}

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.body;
    const speed = scrolled * 0.5;
    parallax.style.backgroundPosition = `center ${speed}px`;
});

// Typing effect for home section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const homeTitle = document.querySelector('.home-content h2');
    if (homeTitle) {
        const originalText = homeTitle.textContent;
        setTimeout(() => {
            typeWriter(homeTitle, originalText, 150);
        }, 1500);
    }
});

// Add hover sound effects (optional)
function addHoverSounds() {
    const buttons = document.querySelectorAll('.btn, .download-btn, .project-link, .contact-form button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            // You can add audio here if desired
            button.style.transform = button.style.transform + ' scale(1.02)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = button.style.transform.replace(' scale(1.02)', '');
        });
    });
}

// Initialize hover effects
document.addEventListener('DOMContentLoaded', addHoverSounds);

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add particle effect to background (lightweight)
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 123, 255, 0.5);
            border-radius: 50%;
            animation: float ${Math.random() * 10 + 10}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        particleContainer.appendChild(particle);
    }
    
    document.body.appendChild(particleContainer);
}

// Add CSS for particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);