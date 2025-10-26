document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.querySelector('.navbar__toggle');
  const navbarMenu = document.querySelector('.navbar__menu');
  const exploreMoreButton = document.querySelector('#explore-more');
  const popupOverlay = document.querySelector('.popup-overlay');
  const skipButton = document.querySelector('.skip-button');

  function toggleMenu() {
    navbarMenu.classList.toggle('active');
  }

  navbarToggle.addEventListener('click', toggleMenu);
  exploreMoreButton.addEventListener('click', toggleMenu);

  // Close the navbar menu when a link is clicked
  navbarMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      navbarMenu.classList.remove('active');
    }
  });

  // Close the navbar menu when the user taps outside of it on a mobile device
  document.addEventListener('touchstart', (event) => {
    if (!navbarMenu.contains(event.target) && navbarMenu.classList.contains('active')) {
      navbarMenu.classList.remove('active');
    }
  });

  // Close the popup when the skip button is clicked
  skipButton.addEventListener('click', () => {
    popupOverlay.classList.add('hidden');
  });
});

const skipButton = document.querySelector('.skip-button');
const popupOverlay = document.querySelector('.popup-overlay');
const popupContainer = document.querySelector('.popup-container');
const nelkad = document.querySelector('.nelkad');

function hidePopup() {
  popupOverlay.style.display = 'none';
  popupContainer.style.display = 'none';
  nelkad.style.display = 'none';
}

skipButton.addEventListener('click', hidePopup);

