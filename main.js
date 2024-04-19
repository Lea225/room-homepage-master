document.addEventListener('DOMContentLoaded', () => {
  // Récupérer les éléments nécessaires
  const hamburgerIcon = document.getElementById('icon-hamburger');
  const closeIcon = document.getElementById('icon-close');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');
  const leftSlider = document.querySelector('.left-slider');
  const rightSlider = document.querySelector('.right-slider');
  const section1 = document.querySelector('.section-1');
  const section2 = document.querySelector('.section-2');
  const section3 = document.querySelector('.section-3');
  const section4 = document.querySelector('.section-4');

  // Écouter le clic sur l'icône hamburger pour afficher le menu mobile et l'overlay
  hamburgerIcon.addEventListener('click', function() {
      mobileMenu.classList.add('show');
      overlay.style.display = 'block';
  });

  // Écouter le clic sur l'icône close pour masquer le menu mobile et l'overlay
  closeIcon.addEventListener('click', function() {
      mobileMenu.classList.remove('show');
      overlay.style.display = 'none';
  });

  // Événement pour le clic sur la div left-slider
  leftSlider.addEventListener('click', function() {
      if (window.innerWidth <= 767) {
          section1.style.backgroundImage = 'url(images/mobile-image-hero-2.jpg)';
      } else {
          section1.style.backgroundImage = 'url(images/desktop-image-hero-2.jpg)';
      }
      section2.style.display = 'none';
      section3.style.display = 'block';
      section4.style.display = 'none';
  });

  // Événement pour le clic sur la div right-slider
  rightSlider.addEventListener('click', function() {
      if (window.innerWidth <= 767) {
          section1.style.backgroundImage = 'url(images/mobile-image-hero-3.jpg)';
      } else {
          section1.style.backgroundImage = 'url(images/desktop-image-hero-3.jpg)';
      }
      section2.style.display = 'none';
      section3.style.display = 'none';
      section4.style.display = 'block';
  });
});
