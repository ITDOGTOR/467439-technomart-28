'use strict';

(function () {
  const mapModalOpen = document.querySelector('.contacts__map-link');
  const mapModal = document.querySelector('.modal-map');
  const mapModalClose = mapModal.querySelector('.modal__close-button');

  mapModalOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapModal.classList.add('modal-show');
  });

  mapModalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapModal.classList.remove('modal-show');
  });
})();
