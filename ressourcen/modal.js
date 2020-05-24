const modal = document.getElementById("modal");
const modalBtn = document.getElementsByClassName("project");
const closeBtn = document.getElementById('closeBtn');

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
    let project = content.projects[num]
        let pic = [];
        for (let i=0; i < project.images.length; i++){
            pic[i] = document.createElement('img');
            pic[i].src = project.images[i].src;
            modalContent.appendChild(pic[i]);
        }

    let title = document.createElement('h2');
    title.innerHTML = content.projects[num -1].title;
    let description = document.createElement('p');
    description.innerHTML = content.projects[num -1].description;
    modalContent.appendChild(title);
    modalContent.appendChild(description);

    modal.appendChild(modalContent);
}

insideModal(1);
