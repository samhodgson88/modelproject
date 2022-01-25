'use strict';

const Modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const OpenModal = function () {
    Modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    Modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click',
        OpenModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//* event listener for the press down of indovidual keys. in this example escape key
document.addEventListener('keydown', function (e) {
    console.log(e.key);
 if (e.key === 'Escape' && !Modal.classList.contains('hidden')) {
    closeModal();
 }  
});










