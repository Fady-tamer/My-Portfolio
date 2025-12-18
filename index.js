card = document.querySelectorAll('.card');
cardLink = document.querySelectorAll('.cardLink');

card.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        cardLink[index].style.display = 'flex';
    });
    setTimeout(() => {
        card.addEventListener('mouseout', () => {
        cardLink[index].style.display = 'none';
    });
    }, 3000);
});

skill = document.querySelectorAll('.skill');
skillP = document.querySelectorAll('.skill p');
skillIMG = document.querySelectorAll('.skill img');

skill.forEach((skill, index) => {
    skill.addEventListener('mouseover', () => {
        skillIMG[index].style.transform = 'scale(1.2)';
        skillP[index].style.color = '#fff';
    });
    setTimeout(() => {
        skill.addEventListener('mouseout', () => {
        skillIMG[index].style.transform = 'scale(1)';
        skillP[index].style.color = '#7b8c9d';
    });
    }, 3000);
});

const header = document.querySelector('header');
const about = document.querySelector('#aboutLink');
const projects = document.querySelector('#projectsLink');
const skills = document.querySelector('#skillsLink');
const contact = document.querySelector('#contactLink');

about.addEventListener('click', () => {
    window.scrollTo({
        top: 950,
        behavior: 'smooth'
    });
});
projects.addEventListener('click', () => {
    window.scrollTo({
        top: 1350,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    about.style.color = '';
    projects.style.color = '';
    skills.style.color = '';
    contact.style.color = '';

    if (window.scrollY <= 50) {
        header.style.borderBottom = 'none';
    } else if (window.scrollY >= 950 && window.scrollY <= 1349 && window.innerWidth > 768) {
        header.style.borderBottom = '0.5px solid #7b8c9d36';
        about.style.color = 'var(--TC)';
    } else if (window.scrollY >= 1350 && window.scrollY <= 1999 && window.innerWidth > 768) {
        header.style.borderBottom = '0.5px solid #7b8c9d36';
        projects.style.color = 'var(--TC)';
    } else if (window.scrollY >= 2000 && window.scrollY <= 2500 && window.innerWidth > 768) {
        header.style.borderBottom = '0.5px solid #7b8c9d36';
        skills.style.color = 'var(--TC)';
    } else if (window.scrollY > 50 && window.innerWidth > 768) {
        header.style.borderBottom = '0.5px solid #7b8c9d36';
    }
});