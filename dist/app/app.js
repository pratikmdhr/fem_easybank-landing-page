const body = document.querySelector('body');
const hamburger = document.querySelector('#btn-hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

const toggler = function () {
  header.classList.toggle('open');
  body.classList.toggle('no-scroll');
  console.log(header);
  if (header.classList.contains('open')) {
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
    fadeElements.forEach(function (element) {
      element.classList.remove('has-fade');
    });
  } else {
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    fadeElements.forEach(function (element) {
      element.classList.add('has-fade');
    });
  }
};

hamburger.addEventListener('click', toggler);
overlay.addEventListener('click', toggler);
