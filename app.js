const menuContainer = document.querySelector('[data-nav-menu]');
const menuBtn = document.querySelector('[data-menu-btn]');
const links = document.querySelectorAll('[data-link]');

menuBtn.addEventListener('click', () => {
  menuContainer.classList.toggle('active');
});

for(let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    let current = document.getElementsByClassName('active');
    current[0].classList.remove('active');
  });
}