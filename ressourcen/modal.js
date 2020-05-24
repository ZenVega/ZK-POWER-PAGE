<<<<<<< HEAD
//import { content } from './projects.js'

=======
>>>>>>> 5823c0ec046e3a1269ca431d35e0077c3c38fccd
const modal = document.getElementById("modal");
const modalBtn = document.getElementsByClassName("project");
const closeBtn = document.getElementById('closeBtn');

<<<<<<< HEAD
let content = {"projects" : [
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

=======
>>>>>>> 5823c0ec046e3a1269ca431d35e0077c3c38fccd
export const openModal = () => {
    modal.style.display = "block";
    console.log(123);
}

const closeModal = () => {
    modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

let insideModal = (num) => {
    let modalContent = document.createElement('div');
    let project = content.procects[num;]
        let pic = [];
        for (let i=0; i < project.images.length; i++){
            pic[i] = document.createElement('img');
            pic[i].src = project.images[i].src;
            modalContent.appendChild(i);
        }}
        )


    let title = document.createElement('h2');
    title.innerHTML = content.projects[num -1].title;
    let description = document.createElement('p');
    description.innerHTML = content.projects[num -1].description;

}
