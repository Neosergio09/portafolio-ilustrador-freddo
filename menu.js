// Renombrar este archivo a script.js
document.addEventListener("DOMContentLoaded", function () {
    // 1. Lógica del Menú Hamburguesa
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu"); // Asegúrate de que el ul tenga id="menu"

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            // Alterna la clase 'active' en la lista (<ul>) para mostrar/ocultar el menú
            menu.classList.toggle("active");
        });
    }

    // 2. Lógica del botón "Ver más"
    const verMasButton = document.getElementById("ver-mas");
    
    if (verMasButton) {
        // Añadimos el listener de forma no intrusiva (sin usar onclick en el HTML)
        verMasButton.addEventListener('click', function() {
            // Reemplaza 'URL_A_TU_PAGINA' con la URL real
            window.open('URL_A_TU_PAGINA', '_blank'); 
        });
    }

    // 3. Puedes agregar más lógica de la página aquí (ej. carruseles, interactividad de la galería, etc.)

});