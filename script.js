'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonsShowModal = document.querySelectorAll('.show-modal');
const buttonCloseModal = document.querySelector('.close-modal');

// Making the Code Dry
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Showing the Modal Window
for (let i = 0; i < buttonsShowModal.length; i++) {
  buttonsShowModal[i].addEventListener('click', showModal);
}

// Closing the Modal Window using Close Button
buttonCloseModal.addEventListener('click', closeModal);

// Closing the Modal Window through Overlay
overlay.addEventListener('click', closeModal);

// Closing the Modal Window through Escape Key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
