const burger = document.querySelector('.header-burger');
const closebtn = document.querySelector('.nav-close');
const nav = document.querySelector('.nav');

const toggeNav = () => {
  nav?.classList.toggle('nav-show');
};

burger?.addEventListener('click', toggeNav);
closebtn?.addEventListener('click', toggeNav);
