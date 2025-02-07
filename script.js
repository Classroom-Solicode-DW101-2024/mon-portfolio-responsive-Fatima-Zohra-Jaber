const burgerMenu = document.getElementById('burgerMenu');
const nav = document.getElementById('nav');


burgerMenu.addEventListener('click', () => {
    
    nav.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !burgerMenu.contains(event.target)) {
        nav.classList.remove('open'); 
    }
});

let info ;

async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();
    info = data;
    skills();
    experiences();
    education();
    projects();
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

// Skills Section
function skills(){
    const skills = document.getElementById('skills');
    info.skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.classList.add('skill');
    skillElement.innerHTML =  `<div class="skillBlock">
                                    <img src=${skill.image} alt="">
                                </div>
                                <p>${skill.name}</p>`;
    skills.appendChild(skillElement);
});
}

// Experiences Section
function experiences(){
    const experiences = document.getElementById('experiences');
    info.experiences.forEach(experience => {
    const experienceElement = document.createElement('div');
    experienceElement.classList.add('Experience');
    experienceElement.innerHTML =  `<p class="date">${experience.date}</p>
                                    <h4>${experience.title}</h4>
                                    <p class="place">${experience.place}</p>`;
    experiences.appendChild(experienceElement);
});
}

// Education Section
function education(){
    const education = document.getElementById('education');
    info.education.forEach(diplom => {
    const diplomElement = document.createElement('div');
    diplomElement.classList.add('diplom');
    diplomElement.innerHTML =  `<p class="date">${diplom.date}</p>
                                    <h4>${diplom.title}</h4>
                                    <p class="place">${diplom.place}</p>`;
    education.appendChild(diplomElement);
});
}

// Projects Section
function projects(){
    const projects = document.getElementById('projects');
    info.projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.innerHTML =  `<img src=${project.image} alt="">
                                <div class="projectInfo">
                                <h4>${project.title}</h4>
                                <p>
                                 ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}  
                                </p>
                                </div>
                                <a href=${project.github} target="_blank"><img src="images/github.svg" alt=""></a>`;
    projects.appendChild(projectElement);
});
}