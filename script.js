// Initialize Swiper for main slider
const mainSlider = new Swiper('.main-slider', {
    loop: true,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
});

// Initialize Swiper for testimonials
const testimonialsSlider = new Swiper('.testimonials-slider', {
    loop: true,
    spaceBetween: 50,
    pagination: {
        el: '.testimonials-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

// Hamburger Menu
const hamburgerBtn = document.querySelector('.menu-hamb');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerOverlay = document.querySelector('.hamburger-overlay');
const hamburgerClose = document.querySelector('.hamburger-close');

hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.classList.add('active');
    hamburgerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

hamburgerClose.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    hamburgerOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

hamburgerOverlay.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    hamburgerOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate cards on scroll
document.querySelectorAll('.service-card, .disease-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
