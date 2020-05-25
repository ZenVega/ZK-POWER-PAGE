const modal = document.getElementById("modal");
const closeBtn = document.getElementById('closeBtn');


export const openModal = (t) => {
    console.log(t);
    insideModal(t)
    modal.style.display = "block";
}

const closeModal = () => {
    modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

//generate individual content for each project modal
export let insideModal = (projectContent) => {
    if(document.getElementById('modalContent')){
        document.getElementById('modalContent').remove();}
    console.log(projectContent);
    let modalContent = document.createElement('div');
    modalContent.id = 'modalContent';
    let project = projectContent.value;
        let pic = [];
        for (let i=0; i < project.images.length; i++){
            pic[i] = document.createElement('img');
            pic[i].src = project.images[i].src;
            modalContent.appendChild(pic[i]);
        }

    let title = document.createElement('h2');
    title.innerHTML = project.title;
    let description = document.createElement('p');
    description.innerHTML = project.description;
    modalContent.appendChild(title);
    modalContent.appendChild(description);

    modal.appendChild(modalContent);
}


