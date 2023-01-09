// window.onload = window.alert(
//   'Добро пожаловать на домашнюю страницу сайта UberSweet//RepairDesign!'
// );

const buttons = document.querySelectorAll('.section-about__button');
const sectionAboutPhoto = document.querySelector('.section-about__photo');

const indicators = document.querySelectorAll('.indicator');

const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

let activeSlideIndex = 0;

function cardsPlugin(activeCard = 0) {
  buttons[activeCard].classList.add('active');
  indicators[activeCard].childNodes[1].classList.add('active');

  for (const btn of buttons) {
    btn.addEventListener('click', () => {
      clearActiveClasses();

      btn.classList.add('active');

      // Смена картинок
      changePhoto(btn.id);

      // Смена индекса фотографии
      activeSlideIndex = btn.id;

      indicatorPlugin(activeSlideIndex);
    });
  }

  for (const ind of indicators) {
    ind.addEventListener('click', () => {
      clearActiveClasses();

      ind.childNodes[1].classList.add('active');

      // Смена картинок
      changePhoto(ind.id);

      // Смена индекса фотографии
      activeSlideIndex = ind.id;

      linkPlugin(activeSlideIndex);
    });
  }
}

cardsPlugin();

function linkPlugin(activeCard = 0) {
  buttons[activeCard].classList.add('active');

  for (const btn of buttons) {
    btn.addEventListener('click', () => {
      clearActiveClasses();

      btn.classList.add('active');

      // Смена картинок
      changePhoto(btn.id);

      // Смена индекса фотографии
      activeSlideIndex = btn.id;
    });
  }
}

function indicatorPlugin(activeCard = 0) {
  indicators[activeCard].childNodes[1].classList.add('active');

  for (const ind of indicators) {
    ind.addEventListener('click', () => {
      clearActiveClasses();

      ind.childNodes[1].classList.add('active');

      // Смена картинок
      changePhoto(ind.id);

      // Смена индекса фотографии
      activeSlideIndex = ind.id;
    });
  }
}

// Очистка класса 'active'
function clearActiveClasses() {
  buttons.forEach((btn) => {
    btn.classList.remove('active');
  });

  indicators.forEach((indicator) => {
    indicator.childNodes[1].classList.remove('active');
  });
}

function changeSlides(direction) {
  if (direction === 'right') {
    activeSlideIndex++;

    if (activeSlideIndex === 3) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'left') {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = 2;
    }
  }

  clearActiveClasses();
  changePhoto(activeSlideIndex);
  cardsPlugin(activeSlideIndex);
}

function changePhoto(id) {
  switch (Number(id)) {
    case 0:
      sectionAboutPhoto.src = 'assets/images/main-bg-3.jpg';
      sectionAboutPhoto.alt = 'Moscow, Tverskaya';
      break;

    case 1:
      sectionAboutPhoto.src = 'assets/images/main-bg-2.jpg';
      sectionAboutPhoto.alt = 'Moscow, Arbat';
      break;

    case 2:
      sectionAboutPhoto.src = 'assets/images/main-bg-1.jpg';
      sectionAboutPhoto.alt = 'Moscow, Tagansky';
      break;
  }
}

leftButton.addEventListener('click', () => {
  changeSlides('left');
});

rightButton.addEventListener('click', () => {
  changeSlides('right');
});
