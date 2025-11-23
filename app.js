document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.querySelector('.navbar__toggle');
  const navbarMenu = document.querySelector('.navbar__menu');
  const exploreMoreButton = document.querySelector('#explore-more');
  const popupOverlay = document.querySelector('.popup-overlay');
  const skipButton = document.querySelector('.skip-button');

  // Safe toggle handler only if elements exist
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => navbarMenu.classList.toggle('active'));
  }

  if (exploreMoreButton && navbarMenu) {
    exploreMoreButton.addEventListener('click', () => navbarMenu.classList.toggle('active'));
  }

  if (navbarMenu) {
    navbarMenu.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        navbarMenu.classList.remove('active');
      }
    });
  }

  // Close the navbar menu when the user taps outside of it on a mobile device
  document.addEventListener('touchstart', (event) => {
    if (navbarMenu && !navbarMenu.contains(event.target) && navbarMenu.classList.contains('active')) {
      navbarMenu.classList.remove('active');
    }
  });

  // Close the popup when the skip button is clicked (safe checks)
  if (skipButton && popupOverlay) {
    skipButton.addEventListener('click', () => popupOverlay.classList.add('hidden'));
  }
});

// Additional safe popup handler
(() => {
  const skipButton = document.querySelector('.skip-button');
  if (!skipButton) return;
  const popupOverlay = document.querySelector('.popup-overlay');
  const popupContainer = document.querySelector('.popup-container');
  const nelkad = document.querySelector('.nelkad');
  skipButton.addEventListener('click', () => {
    if (popupOverlay) popupOverlay.style.display = 'none';
    if (popupContainer) popupContainer.style.display = 'none';
    if (nelkad) nelkad.style.display = 'none';
  });
})();

