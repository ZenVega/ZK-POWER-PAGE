const modal = document.getElementById("modal");
const modalBtn = document.getElementsByClassName("project");
const closeBtn = document.getElementById('closeBtn');

// make modal appear
// modalBtn.addEventListener('click', openModal);

export const openModal = () => {
    modal.style.display = "block";
    console.log(123);
}

const closeModal = () => {
    modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);




