const contactButton = document.getElementById('contact');
const aboutButton = document.getElementById('about');
const imprintButton = document.getElementById('imprint');
const likeButton = document.getElementById('like');

// const navModals = document.getElementsByClassName('navModal');
// const closeNavButtons = document.getElementsByClassName('closeNavBtn');
// const closeBtns = document.querySelectorAll('.closeNavButtons')
// console.log(closeNavButtons);
// console.log(closeBtns);

const contactModal = document.getElementById('contactModal');
const aboutModal = document.getElementById('aboutModal');
const imprintModal = document.getElementById('imprintModal');
const likeModal = document.getElementById('likeModal');

//eventhandlers for nav
const openNavModal = (modal) => {
  modal.style.display = 'block';
};

contactButton.onclick = function() {openNavModal(contactModal)};
aboutButton.onclick = function() {openNavModal(aboutModal)};
imprintButton.onclick = function() {openNavModal(imprintModal)};
likeButton.onclick = function() {openNavModal(likeModal)};

const closeNavModal = () => {
  console.log('click')
  //navModals.style.display = "none";
}
//WHYYYYYYYYYYYY
//closeNavButtons[0].onclick = function() {console.log('click')};
//closeBtns.forEach(button => button.addEventListener('click', closeNavModal))
//$('.closeNavButtons').on('click', function() {console.log('tio')});

//addEventListenerByClass('closeNavBtn', 'click', function(){console.log('tip')}); 
document.getElementById("navModals").addEventListener("click", function(e) {
  e.target.parentElement.style.display = 'none';
  //console.log(e.target.parentElement);
});