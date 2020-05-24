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
    content.projects.forEach(project => {
        for (let i=0; i < project.images.length; i++){
            let i = document.createElement('img');
            i.src = project.images[i].src;
        }}
        )


    let title = document.createElement('h2');
    let description = document.createElement('p');

}
