/*'use strict';

(function () {
  const writeUsModalOpen = document.querySelector('.contacts__form-link');
  const writeUsModal = document.querySelector('.modal-write-us');
  const writeUsModalClose = writeUsModal.querySelector('.modal__close-button');
  const writeUsModalForm = writeUsModal.querySelector('.modal-write-us__form');
  const writeUsModalInputs = writeUsModal.querySelectorAll('.modal-write-us__input');

  writeUsModalOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    writeUsModal.classList.add('modal-show');
  });

  writeUsModalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    writeUsModal.classList.remove('modal-show');
    writeUsModal.classList.remove('modal-error');
  });

  writeUsModalForm.addEventListener('submit', function (evt) {
    for (let writeUsModalInput of writeUsModalInputs) {
      if (!writeUsModalInput.value) {
        evt.preventDefault();
        writeUsModal.classList.remove('modal-error');
        writeUsModal.offsetWidth; // хак для отработки анимации
        writeUsModal.classList.add('modal-error');
        break;
      }
    }
  });
})();*/
