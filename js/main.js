const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  leftMenu.classList.toggle('openMenu');
  hamburger.classList.toggle('open');
});

document.addEventListener('click', e => {
  if (!e.target.closest('.left-menu')) {

    leftMenu.classList.remove('openMenu');
    hamburger.classList.remove('open');
  }
});

leftMenu.addEventListener('click', e => {

  const dropdown = e.target.closest('.dropdown');

  if (dropdown) {
    dropdown.classList.toggle('active');
    leftMenu.classList.add('openMenu');
    hamburger.classList.add('open');
  }
});