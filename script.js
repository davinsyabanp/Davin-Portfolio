// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    // Get theme from localStorage or default to dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    // Toggle theme function
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }

    // Update theme icon
    function updateThemeIcon(theme) {
        if (themeIcon) {
            if (theme === 'light') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
    }

    // Add event listener to theme toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (window.scrollY / scrollTotal) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Typing Effect for Hero Title
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        typingElement.style.opacity = '1';
        
        let charIndex = 0;
        const typingSpeed = 100; // milliseconds per character
        
        function typeChar() {
            if (charIndex < text.length) {
                typingElement.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, typingSpeed);
            }
        }
        
        // Start typing after initial fade-in
        setTimeout(typeChar, 500);
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

// Variables for scroll detection
let lastScrollTop = 0;
let scrollThreshold = 5; // Minimum scroll amount to trigger hide/show

// Initialize navbar transparency on page load
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
    if (window.pageYOffset < heroHeight - 100) {
        navbar.classList.add('navbar-transparent');
    }
});

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Hide/Show navbar on scroll
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const hero = document.querySelector('.hero');
    const heroHeight = hero ? hero.offsetHeight : window.innerHeight;

    // Make navbar transparent when in hero section
    if (currentScroll < heroHeight - 100) {
        navbar.classList.add('navbar-transparent');
        navbar.style.boxShadow = 'none';
    } else {
        navbar.classList.remove('navbar-transparent');
    }

    // Don't hide navbar at the very top of the page
    if (currentScroll <= 100) {
        navbar.classList.remove('navbar-hidden');
        // Only add shadow if not in hero section
        if (currentScroll >= heroHeight - 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    } else {
        // Scrolling down
        if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
            navbar.classList.add('navbar-hidden');
        } 
        // Scrolling up
        else if (currentScroll < lastScrollTop) {
            navbar.classList.remove('navbar-hidden');
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

// Store target widths and initialize bars to 0
skillBars.forEach(bar => {
    const targetWidth = bar.style.width;
    bar.setAttribute('data-width', targetWidth);
    bar.style.width = '0';
});

const animateSkills = () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        // Only animate if not already animated
        if (barPosition < screenPosition && !bar.classList.contains('animated')) {
            const targetWidth = bar.getAttribute('data-width');
            bar.classList.add('animated');
            
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);
        }
    });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and skill categories
document.querySelectorAll('.project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact Form Handling (removed - no form in HTML)

// Type writer effect for hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;

    const typeWriter = () => {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    };

    // Start typewriter effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// Add scroll-to-top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1)';
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const heroContent = hero.querySelector('.hero-content');
        const heroShapes = hero.querySelector('.hero-shapes');
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
        
        if (heroShapes && scrolled < window.innerHeight) {
            heroShapes.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }
});

// Mouse Move Effect for Hero (Applied only to text, not buttons)
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    
    if (hero && heroTitle) {
        hero.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const moveX = (mouseX - 0.5) * 15;
            const moveY = (mouseY - 0.5) * 15;
            
            // Apply parallax only to text elements, not buttons
            if (heroTitle) heroTitle.style.transform = `translate(${moveX}px, ${moveY}px)`;
            if (heroSubtitle) heroSubtitle.style.transform = `translate(${moveX * 0.8}px, ${moveY * 0.8}px)`;
            if (heroDescription) heroDescription.style.transform = `translate(${moveX * 0.6}px, ${moveY * 0.6}px)`;
        });
        
        hero.addEventListener('mouseleave', () => {
            if (heroTitle) heroTitle.style.transform = 'translate(0, 0)';
            if (heroSubtitle) heroSubtitle.style.transform = 'translate(0, 0)';
            if (heroDescription) heroDescription.style.transform = 'translate(0, 0)';
        });
    }
});
