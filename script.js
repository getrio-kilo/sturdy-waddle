// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Shopping Cart Functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }
        
        // Add animation to button
        button.textContent = 'Added!';
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = '';
        }, 1500);
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (email) {
            // Show success message
            const submitButton = newsletterForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Subscribed!';
            submitButton.style.backgroundColor = '#28a745';
            
            emailInput.value = '';
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
            }, 2000);
        }
    });
}

// Product Card Hover Animation Enhancement
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Lazy Loading Images
const images = document.querySelectorAll('img');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            observer.unobserve(img);
        }
    });
});

images.forEach(img => {
    if (img.dataset.src) {
        imageObserver.observe(img);
    }
});

// Testimonial Auto-Scroll (Optional Feature)
const testimonialsGrid = document.querySelector('.testimonials-grid');
let testimonialScrollInterval;

function startTestimonialScroll() {
    testimonialScrollInterval = setInterval(() => {
        if (testimonialsGrid && window.innerWidth < 768) {
            testimonialsGrid.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    }, 3000);
}

function stopTestimonialScroll() {
    clearInterval(testimonialScrollInterval);
}

if (testimonialsGrid) {
    testimonialsGrid.addEventListener('mouseenter', stopTestimonialScroll);
    testimonialsGrid.addEventListener('mouseleave', startTestimonialScroll);
}

// Search Functionality (Mock)
const searchIcon = document.querySelector('.nav-icons .icon.fa-search');
if (searchIcon) {
    searchIcon.addEventListener('click', (e) => {
        e.preventDefault();
        const searchTerm = prompt('What are you looking for?');
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}\n(This is a demo - search functionality would be implemented with a backend)`);
        }
    });
}

// User Account Icon (Mock)
const userIcon = document.querySelector('.nav-icons .icon.fa-user');
if (userIcon) {
    userIcon.addEventListener('click', (e) => {
        e.preventDefault();
        alert('User account page would open here.\n(This is a demo)');
    });
}

// Cart Icon Click (Mock)
const cartIcon = document.querySelector('.nav-icons .icon.cart');
if (cartIcon) {
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        if (cartCount === 0) {
            alert('Your cart is empty!');
        } else {
            alert(`You have ${cartCount} item(s) in your cart.\n(This is a demo - checkout would be implemented with a backend)`);
        }
    });
}

// Category Cards Click Handler
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', function() {
        const categoryName = this.querySelector('h3').textContent;
        console.log(`Navigating to ${categoryName} category...`);
        // In a real application, this would navigate to the category page
    });
});

// Console welcome message
console.log('%c Welcome to SHARK E-commerce Demo! ', 'background: #0066cc; color: white; font-size: 16px; padding: 10px;');
console.log('This is a demonstration website inspired by shark.com');
console.log('Features include:');
console.log('- Responsive design');
console.log('- Product showcase');
console.log('- Shopping cart simulation');
console.log('- Newsletter subscription');
console.log('- And more!');
