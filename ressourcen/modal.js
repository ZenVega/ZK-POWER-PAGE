const modal = document.getElementById("modal");
const closeBtn = document.getElementById('closeBtn');

export const openModal = (projectTitle, projectDescription, projectImages, projects, index) => {
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

  // add functionality to modals preview and next buttons
  const nextButton = document.getElementsByClassName('next');
  nextButton[0].onclick =  function() {next(projects, parseInt(index))}; 
  const previousButton = document.getElementsByClassName('back');
  previousButton[0].onclick = function() {back(projects, parseInt(index))}; 
}

//create eventHandlers for previous and next buttons
const next = (projects,index) => {
  let nextProjectIndex = (index === projects.length - 1)? parseInt(0) : index + 1;
  let nextProjectTitle = projects[nextProjectIndex].title;
  let nextProjectDescription = projects[nextProjectIndex].description;
  let nextProjectImages = projects[nextProjectIndex].images;
openModal(nextProjectTitle, nextProjectDescription, nextProjectImages, projects, nextProjectIndex)
};

const back = (projects,index) => {
  let previousProjectIndex = (index === 0)? projects.length - 1 : index - 1;
  let previousProjectTitle = projects[previousProjectIndex].title;
  let previousProjectDescription = projects[previousProjectIndex].description;
  let previousProjectImages = projects[previousProjectIndex].images;
openModal(previousProjectTitle, previousProjectDescription, previousProjectImages, projects, previousProjectIndex)
};

//close button
const closeModal = () => {
  modal.style.display = "none";
}
closeBtn.addEventListener("click", closeModal);






