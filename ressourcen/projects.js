import { openModal } from './modal.js';
let firstPic = true;

//importing projects.JSON
const loadProjects = async(url) => {
  const response = await fetch(url);
  return response.json()
}

const renderProjects = content => {

  //get number of projects / create project array
  let numberOfProjects = content.projects.length;
  let projects = content.projects;

  //pick random project and put it up front
  let randomProject = Math.floor(Math.random() *numberOfProjects);
  let chosenOne = projects.splice(randomProject, 1);
  projects.unshift(chosenOne[0]);
  
  // add titles and pics to main
  let newProject = (currentProject, index) => {
    let projectTitle = currentProject.title;
    let projectDescription = currentProject.description;
    let projectImages = currentProject.images;
    
    let file = document.getElementById('projects');
    let project = document.createElement('div');
    project.classList.add('project');

    let img = document.createElement('img');
    img.src = projectImages[0].src;

    //Sets the first chosen Project as main preview
    if(firstPic) {
      project.className = 'project mainPro'
      firstPic = false;
    }

    project.appendChild(img);
    project.addEventListener("click", function() { openModal(projectTitle, projectDescription, projectImages, projects, index) });

    let title = document.createElement('h2');
    title.innerHTML = projectTitle;
    project.appendChild(title);

    file.appendChild(project);
  }

  for (let index in projects) {
    let currentProject = projects[index];
    newProject(currentProject,index);
  }
}
//passing promise to render Projects
loadProjects('./projects.json').then(renderProjects)

