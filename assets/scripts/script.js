// window.onload = window.alert(
//   'Добро пожаловать на домашнюю страницу сайта UberSweet//RepairDesign!'
// );

const buttons = document.querySelectorAll('.section-about__button');
const photo = document.querySelector('.section-about__photo');

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

      indicators[activeSlideIndex].childNodes[1].classList.add('active');
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

      buttons[activeSlideIndex].classList.add('active');
    });
  }
}

cardsPlugin();

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
      photo.src = 'assets/images/main-bg-3.jpg';
      photo.alt = 'Moscow, Tverskaya';
      break;

    case 1:
      photo.src = 'assets/images/main-bg-2.jpg';
      photo.alt = 'Moscow, Arbat';
      break;

    case 2:
      photo.src = 'assets/images/main-bg-1.jpg';
      photo.alt = 'Moscow, Tagansky';
      break;
  }
}

leftButton.addEventListener('click', () => {
  changeSlides('left');
});

rightButton.addEventListener('click', () => {
  changeSlides('right');
});
