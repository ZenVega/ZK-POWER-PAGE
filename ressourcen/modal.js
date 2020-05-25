const modal = document.getElementById("modal");
const closeBtn = document.getElementById('closeBtn');

export const openModal = (data) => {
  insideModal(data);
  modal.style.display = "block";
}

const closeModal = () => {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

//generate individual content for each project modal
export const insideModal = data => {
  const content = document.getElementById('modalContent')
  const images = content.querySelector('.modalContentImages')

  images.innerHTML = "";

  content.querySelector('h3').innerHTML = data.title;
  content.querySelector('p').innerHTML = data.description;

  for (let i=0; i < data.images.length; i++) {
    let pic;
    pic = document.createElement('img');
    pic.src = data.images[i].src;
    images.appendChild(pic);
  }
}
