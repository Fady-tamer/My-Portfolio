const setupHoverEffect = (selector, childSelector, activeStyles, inactiveStyles) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
        const target = el.querySelector(childSelector);
        
        el.addEventListener('mouseenter', () => {
            Object.assign(target.style, activeStyles);
            if(el.classList.contains('skill')) el.querySelector('p').style.color = '#fff';
        });
        
        el.addEventListener('mouseleave', () => {
            Object.assign(target.style, inactiveStyles);
            if(el.classList.contains('skill')) el.querySelector('p').style.color = '#7b8c9d';
        });
    });
};

// Initialize hover effects without the buggy setTimeouts
setupHoverEffect('.card', '.cardLink', { display: 'flex' }, { display: 'none' });
setupHoverEffect('.skill', 'img', { transform: 'scale(1.2)' }, { transform: 'scale(1)' });

const header = document.querySelector('header');
const headerName = document.querySelector('.header_name');

const navMap = [
    { link: document.querySelector('#aboutLink'), section: document.querySelector('#about') },
    { link: document.querySelector('#projectsLink'), section: document.querySelector('#projects') },
    { link: document.querySelector('#skillsLink'), section: document.querySelector('#skills') },
    { link: document.querySelector('#contactLink'), section: document.querySelector('#contact') }
];

// Smooth scroll to top
headerName.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic Click Handling
navMap.forEach(({ link, section }) => {
    if (!link || !section) return;
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const offset = window.innerWidth <= 768 ? 120 : 20;
        const top = section.offsetTop - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});

// 3. Scroll & Active State Logic
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    header.style.borderBottom = scrollY > 50 ? '0.5px solid #7b8c9d36' : 'none';

    const offset = window.innerWidth <= 768 ? 130 : 30;

    navMap.forEach(({ link, section }) => {
        if (!link || !section) return;
        
        const sectionTop = section.offsetTop - offset;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            link.style.color = 'var(--TC)';
            link.style.textShadow = '0px 0px 30px var(--TC)';
        } else {
            link.style.color = '';
            link.style.textShadow = '';
        }
    });
});

const contactForm = document.querySelector('.contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const button = contactForm.querySelector('button');
        const data = new FormData(contactForm);
        
        button.innerText = 'Sending...';
        button.disabled = true;

        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            button.innerText = 'Message Sent!';
            button.style.backgroundColor = '#28a745';
            contactForm.reset();
            setTimeout(() => {
                button.innerText = 'Send Message';
                button.style.backgroundColor = '';
                button.disabled = false;
            }, 3000);
        } else {
            button.innerText = 'Error! Try again.';
            button.style.backgroundColor = '#dc3545';
            button.disabled = false;
        }
    });
}

const toast = document.getElementById('toast-notification');
const toastMsg = document.getElementById('toast-message');

function showToast(message, isError = false) {
    toastMsg.innerText = message;
    toast.style.borderColor = isError ? '#dc3545' : 'var(--TC)';
    toast.style.color = isError ? '#dc3545' : 'var(--TC)';
    toast.className = "toast show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const button = contactForm.querySelector('button');
        const data = new FormData(contactForm);
        
        button.innerText = 'Sending...';
        button.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                showToast("Success! I'll get back to you soon.");
                contactForm.reset();
            } else {
                showToast("Something went wrong. Please try again.", true);
            }
        } catch (error) {
            showToast("Network error. Check your connection.", true);
        } finally {
            button.innerText = 'Send Message';
            button.disabled = false;
        }
    });
}