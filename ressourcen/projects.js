import { openModal } from './modal.js'
//importing projects.JSON

const loadProjects = async(url) => {
  const response = await fetch(url);
  return response.json()
}

const renderProjects = content => {

  //get number of projects / create project array
  console.log(content);
  let numberOfProjects = content.projects.length;
  let projects = [];
  for(let i=1; i < numberOfProjects+1; i++){
    projects.push(i);
  };

  //pick random project and put it up front
  let randomProject = Math.floor(Math.random() *numberOfProjects);
  console.log(randomProject);
  let chosenOne = projects.slice(randomProject, 1);
  console.log(chosenOne);
  // add titles and pics to main

  let newProject = (num) => {
    let file = document.getElementById('projects');
    let project = document.createElement('div');
    project.classList.add('project');

    let img = document.createElement('img');
    img.src = 'ressourcen/img/spacecat' + num + '.jpg';


    //Sets the first chosen Project as main preview
    if(firstPic) {
      project.className = 'project mainPro'
      firstPic = false;
    }

      project.id = num;
      //Project specific content from JSON file as *.value to pass it to modal.js
      project.value = content.projects[num-1];


    project.appendChild(img);
    project.addEventListener("click", function(e){openModal(e.currentTarget)});

    let title = document.createElement('h2');
    title.innerHTML = content.projects[num -1].title;
    project.appendChild(title);

    file.appendChild(project);
  }

  let firstPic = true;

  for (let num of projects) {
    newProject(num);
  }
}
//passing promise to render Projects
loadProjects('./projects.json').then(renderProjects)
