/* Loader */
window.addEventListener('load', () => {
  const contenedor = document.getElementById('cont_carga');
  if (contenedor) {
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
  }
});

/* Modal */
document.querySelectorAll('.contenedor-modal .overlay').forEach((el) => {
  el.addEventListener('click', function (ev) {
    ev.stopPropagation();
    this.parentNode.classList.add('active');
  });
});

/* Feather icons */
if (window.feather) {
  feather.replace();
}

/* Menú mobile */
const mobileButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileButton && mobileMenu) {
  mobileButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

/* Scroll genérico */
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  // Cierra menú mobile si está abierto
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }
}

