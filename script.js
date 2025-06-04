document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const sideMenu = document.querySelector('.side-menu');
  const closeBtn = document.querySelector('.close-btn');
  
  // Abrir menú lateral
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      sideMenu.classList.add('open');
      menuBtn.style.display = 'none'; // Oculta el botón ☰
    });
  }
  
  // Cerrar menú lateral
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      sideMenu.classList.remove('open');
      menuBtn.style.display = 'block'; // Muestra el botón ☰ de nuevo
    });
  }
  
  // Cerrar menú al hacer clic en un enlace
  const menuLinks = document.querySelectorAll('.side-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      sideMenu.classList.remove('open');
      menuBtn.style.display = 'block';
    });
  });
});