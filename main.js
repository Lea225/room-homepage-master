document.addEventListener('DOMContentLoaded', () => {
  // Récupérer les éléments nécessaires
  const hamburgerIcons = document.querySelectorAll('.icon-hamburger');
  const closeIcon = document.getElementById('icon-close');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');
  const leftSliders = document.querySelectorAll('.left-slider');
  const rightSliders = document.querySelectorAll('.right-slider');
  const sections = document.querySelectorAll('.container-1, .container-2, .container-3');

  let currentSectionIndex = 0; // Index de la section actuellement affichée

  // Écouter le clic sur l'icône hamburger pour afficher le menu mobile et l'overlay
  hamburgerIcons.forEach((icon) => {
      icon.addEventListener('click', function() {
          mobileMenu.classList.add('show');
          overlay.style.display = 'block';
      });
  });

  // Écouter le clic sur l'icône close pour masquer le menu mobile et l'overlay
  closeIcon.addEventListener('click', function() {
      mobileMenu.classList.remove('show');
      overlay.style.display = 'none';
  });

  function showSection(index) {
      sections.forEach((section, i) => {
          if (i === index) {
              section.style.display = 'grid'; // Modification ici pour afficher en flex
          } else {
              section.style.display = 'none';
          }
      });
  }

  // Événement pour le clic sur la div left-slider
  leftSliders.forEach((slider) => {
      slider.addEventListener('click', function() {
          currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
          showSection(currentSectionIndex);
      });
  });

  // Événement pour le clic sur la div right-slider
  rightSliders.forEach((slider) => {
      slider.addEventListener('click', function() {
          currentSectionIndex = (currentSectionIndex + 1) % sections.length;
          showSection(currentSectionIndex);
      });
  });

  // Afficher la première section au chargement de la page
  showSection(currentSectionIndex);
});
