const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 10);
});


const menuIcon = document.querySelector('#menu__icon');
const headerLinks = document.querySelector('.header__links');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  headerLinks.classList.toggle('open');
}

const heartIcons = document.querySelectorAll('.heart__icon'); // Obtener todos los iconos de corazón

heartIcons.forEach( icon => {// Iterar sobre cada icono de corazón
  icon.addEventListener('click', () => { // Añadir un event listener para el clic
    // Cambiar las clases del icono al hacer clic
    icon.classList.toggle('bx-heart');
    icon.classList.toggle('bxs-heart');
    // Cambiar el color del icono a rojo
    icon.classList.toggle('heart__icon--red');
  });
});