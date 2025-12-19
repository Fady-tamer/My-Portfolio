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
const headerName = document.querySelector('.header_name');
const about = document.querySelector('#aboutLink');
const projects = document.querySelector('#projectsLink');
const skills = document.querySelector('#skillsLink');
const contact = document.querySelector('#contactLink');

const navLinks = [about, projects, skills, contact];

const getScrollPositions = () => {
    const isMobile = window.innerWidth < 768;
    return {
        about: isMobile ? 1250 : 950,
        projects: isMobile ? 1750 : 1350,
        skills: isMobile ? 3000 : 2050
    };
};

headerName.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

about.addEventListener('click', () => {
    window.scrollTo({ top: getScrollPositions().about, behavior: 'smooth' });
});

projects.addEventListener('click', () => {
    window.scrollTo({ top: getScrollPositions().projects, behavior: 'smooth' });
});

skills.addEventListener('click', () => {
    window.scrollTo({ top: getScrollPositions().skills, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const pos = getScrollPositions();

    if (scrollY > 50) {
        header.style.borderBottom = '0.5px solid #7b8c9d36';
    } else {
        header.style.borderBottom = 'none';
    }
    navLinks.forEach(link => link.style.color = '');

    if (scrollY >= pos.about && scrollY < pos.projects) {
        about.style.color = 'var(--TC)';
    } else if (scrollY >= pos.projects && scrollY < pos.skills) {
        projects.style.color = 'var(--TC)';
    } else if (scrollY >= pos.skills && scrollY <= 2500) {
        skills.style.color = 'var(--TC)';
    }
});