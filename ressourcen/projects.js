import { openModal } from './modal.js'

//const content = require('./projects.json')
// const getData = async(url) => {
//     const response = await fetch(url);
//     console.log(response);
//     return response.json()
// }

// const saveJSONContent = async() => {
//     const data = await getData('./projects.json');
//     console.log(data)
// }
// saveJSONContent();

export let content = {"projects" : [
    { "no": 1 , "title": "some title 1" , "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsam voluptatibus! Quibusdam, aliquid expedita! Officia nam cumque itaque blanditiis reprehenderit.", "images": [
        {"src": "ressourcen/img/spacecat1.jpg"}
    ]},
    { "no": 2 , "title": "some title 2" , "description": "Lorem ipsum tetur adipisicing elit. At, ipsam voluptatibus! Quibusdam, aliquid expedita! Officia nam cumque itaque blanditiis reprehenderit.", "images": [
        {"src": "ressourcen/img/spacecat2.jpg"}
    ]},
    { "no": 3 , "title": "some title 3" , "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.ibus! Quibusdam, aliquid expedita! Officia nam cumque itaque blanditiis reprehenderit.", "images": []},
    { "no": 4 , "title": "some title 4" , "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsam voluptatficia nam cumque itaque blanditiis reprehenderit.", "images": []},
    { "no": 5 , "title": "some title 5" , "description": "Lorem ipsum dolor sit amet cOfficia nam cumque itaque blanditiis reprehenderit.", "images": []},
    { "no": 6 , "title": "some title 6" , "description": "Lorem ipsum dolor sit amet consectetur adipisicing evoluptatibus! Quibusdam, aliquid expedita! Officia nam cumque itaque blanditiis reprehenderit.", "images": []},
    { "no": 7 , "title": "some title 7" , "description": "ctetur adipisicing elit. At, ipsam voluptatibus! Quibusdam, aliquid expedita! Officia nam cumque itaque blanditiis reprehenderit.", "images": []},
    { "no": 8 , "title": "some title 8" , "description": "Lorem ipsum dur adipisicing elit. At, ipsam voluptatibus! Quibusdam, aliquid expedita! Officia nam cumque itaque blanditiis reprehenderit.", "images": []},
    { "no": 9 , "title": "some title 9" , "description": "Lorem ipsum dolor sit amet consectetur adipisic! Quibusdam, aliquid expedita! Officia nam cumque itaque blanditiis reprehenderit.", "images": []},
    { "no": 10 , "title": "some title 10" , "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsam vol", "images": []}
    ]};
    console.log(content);

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
title.innerHTML = content.projects[num -1].title;
project.appendChild(title);

file.appendChild(project);

};

let firstPic = true;

for (let num of projects) {
    newProject(num);
}