import { openModal } from './modal.js'

//const content = require('./projects.json')
async function getData(url) {
    const response = await fetch(url);
    console.log(response);
    return response.json()
}

async function main() {
    const data = await getData('./projects.json');
    console.log(data)
}
main();

//get number of projects / create shuffled array

let numberOfProjects = 10;
let projects = [];
for(let i=1; i < numberOfProjects+1; i++){
    projects.push(i);
};

projects.sort(() => Math.random() - 0.5);

// add titles and pics to main

let newProject = (num) => {
let file = document.getElementById('projects');
let project = document.createElement('div');
project.classList.add('project');


let img = document.createElement('img');
img.src = 'ressourcen/img/spacecat' + num + '.jpg';
if(firstPic) {
    img.id = 'mainPic';
    project.id = 'mainPro'
    firstPic = false;
}

project.appendChild(img);
project.addEventListener("click", openModal);

let title = document.createElement('h2');
title.innerHTML = 'Project no: ' + num ;
project.appendChild(title);

file.appendChild(project);

};

let firstPic = true;

for (let num of projects) {
    newProject(num);
}