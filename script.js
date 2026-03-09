// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Sticky Header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Reveal Animations
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
// Trigger reveal once on load
reveal();

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('formName').value;
        const phone = document.getElementById('formPhone').value;
        const interest = document.getElementById('formInterest').value;
        
        const formMessage = document.getElementById('formMessage');
        const submitBtn = document.getElementById('submitBtn');
        
        submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        
        setTimeout(() => {
            // Simulated Success Output 
            formMessage.textContent = 'Request received! We will call you shortly.';
            formMessage.style.display = 'block';
            submitBtn.innerHTML = 'Sent Successfully <i class="fas fa-check"></i>';
            submitBtn.style.backgroundColor = '#4ade80';
            submitBtn.style.color = '#0a0a0d';
            
            // Optional WhatsApp Integration
            // const waText = encodeURIComponent(`Hi Aikya Fitness, my name is ${name}. I am interested in ${interest}. My phone number is ${phone}. Please call me back!`);
            // window.open(`https://wa.me/918105982336?text=${waText}`, '_blank');
            
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = 'Send Request <i class="fas fa-arrow-right"></i>';
                submitBtn.style.backgroundColor = '';
                submitBtn.style.color = '';
                formMessage.style.display = 'none';
            }, 5000);
        }, 1500);
    });
}
