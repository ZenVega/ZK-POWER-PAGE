import { openModal } from './modal.js'
//importing projects.JSON

const loadProjects = async(url) => {
  const response = await fetch(url);
  return response.json()
}

const renderProjects = content => {

console.log(content);
//let projectTitle = content.

  //get number of projects / create project array
  let numberOfProjects = content.projects.length;
  console.log(numberOfProjects);
  let projects = content.projects;

  //pick random project and put it up front
  let randomProject = Math.floor(Math.random() *numberOfProjects);
  let chosenOne = projects.splice(randomProject, 1);
  projects.unshift(chosenOne[0]);
  console.log(projects);

  // add titles and pics to main
  let newProject = (currentProject) => {
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
    project.addEventListener("click", function() { openModal(projectTitle, projectDescription, projectImages) });

    let title = document.createElement('h2');
    title.innerHTML = projectTitle;
    project.appendChild(title);

    file.appendChild(project);
  }

  let firstPic = true;

  for (let currentProject of projects) {
    newProject(currentProject);
  }
}
//passing promise to render Projects
loadProjects('./projects.json').then(renderProjects)
