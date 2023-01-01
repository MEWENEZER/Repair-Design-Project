// window.onload = window.alert(
//   'Добро пожаловать на домашнюю страницу сайта UberSweet//RepairDesign!'
// );

let sectionAboutButtons = document.querySelector('.section-about__buttons');
let sectionAboutPhoto = document.querySelector('.section-about__photo');

let selectedActive = sectionAboutButtons.childNodes[1];

sectionAboutButtons.onclick = function (event) {
  let target = event.target; // Where was a click?

  highlight(target);
};

function highlight(btn) {
  if (selectedActive) {
    selectedActive.classList.remove('active');
  }
  selectedActive = btn;
  selectedActive.classList.add('active');

  changePhoto(btn.id);
}

function changePhoto(id) {
  switch (id) {
    case '1':
      sectionAboutPhoto.src = '/IC_Repair_Design_Project/images/main-bg-3.jpg';
      sectionAboutPhoto.alt = 'Moscow, Tverskaya';
      break;

    case '2':
      sectionAboutPhoto.src = '/IC_Repair_Design_Project/images/main-bg-2.jpg';
      sectionAboutPhoto.alt = 'Moscow, Arbat';
      break;

    case '3':
      sectionAboutPhoto.src = '/IC_Repair_Design_Project/images/main-bg-1.jpg';
      sectionAboutPhoto.alt = 'Moscow, Tagansky';
      break;
  }
}
