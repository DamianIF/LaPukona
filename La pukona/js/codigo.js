<script>
  // Espera a que el DOM esté listo
  document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const sideMenu = document.querySelector(".side-menu");
    const menuLinks = document.querySelectorAll(".side-menu a");

    // Mostrar menú
    menuBtn.addEventListener("click", () => {
      sideMenu.style.right = "0";
    });

    // Ocultar menú con botón de cerrar
    closeBtn.addEventListener("click", () => {
      sideMenu.style.right = "-250px";
    });

    // Ocultar menú al hacer clic en cualquier enlace del menú
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        sideMenu.style.right = "-250px";
      });
    });
  });
</script>
