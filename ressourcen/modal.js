const modal = document.getElementById("modal");
const closeBtn = document.getElementById('closeBtn');
let nextButton = document.getElementsByClassName('next');
let previousButton = document.getElementsByClassName('back');

//HERE WE ARE
nextButton.addEventListener('click', );
previousButton.addEventListener('click');

export const openModal = (projectTitle, projectDescription, projectImages) => {
  const content = document.getElementById('modalContent')
  const images = content.querySelector('.modalContentImages')

  images.innerHTML = "";

  content.querySelector('h3').innerHTML = projectTitle;
  content.querySelector('p').innerHTML = projectDescription;

  for (let i=0; i < projectImages.length; i++) {
    let pic;
    pic = document.createElement('img');
    pic.src = projectImages[i].src;
    images.appendChild(pic);
  }
  modal.style.display = "block";
}

const closeModal = () => {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
