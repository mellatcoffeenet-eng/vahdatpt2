// ==============================
// Main Slider
// ==============================
const mainSlider = new Swiper('.main-slider', {
    loop: true,
    autoHeight: true,
    pagination: {
        el: '.main-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.main-next',
        prevEl: '.main-prev',
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    effect: 'slide',
    direction: 'horizontal',
    speed: 600,
});

// ==============================
// Testimonials Slider - افقی و تک اسلاید
// ==============================
const testimonialsSlider = new Swiper('.testimonials-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    pagination: {
        el: '.testimonials-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    speed: 800,
    effect: 'slide',
    autoHeight: true,
    watchOverflow: false,
});

// ==============================
// Hamburger Menu (Mobile)
// ==============================
const hamburgerBtn = document.querySelector('.menu-hamb');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerOverlay = document.querySelector('.hamburger-overlay');
const hamburgerClose = document.querySelector('.hamburger-close');

function openMenu() {
    if (hamburgerMenu && hamburgerOverlay) {
        hamburgerMenu.classList.add('active');
        hamburgerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeMenu() {
    if (hamburgerMenu && hamburgerOverlay) {
        hamburgerMenu.classList.remove('active');
        hamburgerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', openMenu);
}

if (hamburgerClose) {
    hamburgerClose.addEventListener('click', closeMenu);
}

if (hamburgerOverlay) {
    hamburgerOverlay.addEventListener('click', closeMenu);
}

// Close menu on link click
document.querySelectorAll('.hamburger-list a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// ==============================
// Scroll Animations
// ==============================
const observerOptions = {
    threshold: 0.15,
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
document.querySelectorAll('.service-card, .disease-card, .testimonial-card, .quick-link').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==============================
// Dropdown Mobile Support
// ==============================
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const parent = this.parentElement;
            parent.classList.toggle('dropdown-active');
        }
    });
});
