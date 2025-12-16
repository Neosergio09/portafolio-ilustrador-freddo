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


// script.js

document.addEventListener("DOMContentLoaded", function () {
    // 1. Selección de elementos
    const eyeContainer = document.querySelector('.eye-container');
    const iris = document.querySelector('.iris');
    const pupil = document.querySelector('.pupil');
    const eyeball = document.querySelector('.eyeball');

    // 2. Función de seguimiento del cursor con Parallax
    function moveEye(event) {
        if (!iris || !pupil || !eyeball) return;

        // Obtener las coordenadas del ratón
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Obtener el centro del globo ocular
        const eyeRect = eyeball.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Calcular la distancia y el ángulo entre el centro del ojo y el ratón
        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX); // Ángulo en radianes

        // --- LÓGICA DEL MOVIMIENTO DEL IRIS ---
        // Radio máximo que el iris puede moverse dentro del globo ocular
        const maxIrisMove = (eyeRect.width / 2) - (iris.offsetWidth / 2) - 2; 
        // Calcular posición X e Y para el iris
        const irisX = Math.cos(angle) * maxIrisMove;
        const irisY = Math.sin(angle) * maxIrisMove;
        // Aplicar transformación al iris
        iris.style.transform = `translate(calc(-50% + ${irisX}px), calc(-50% + ${irisY}px))`;

        // --- LÓGICA DEL MOVIMIENTO DE LA PUPILA (Parallax) ---
        // La pupila se moverá un poco más en la misma dirección para simular profundidad
        const parallaxFactor = 0.3; // Cuánto más se mueve la pupila que el iris
        const pupilX = irisX * parallaxFactor;
        const pupilY = irisY * parallaxFactor;
        // Aplicar transformación a la pupila
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;

        // --- AÑADIDO: LÓGICA DE SOMBRA DINÁMICA ---
    // La sombra debe moverse en dirección opuesta a la pupila para simular el ángulo de luz.
    
    // 1. Usaremos la misma dirección de movimiento (irisX, irisY)
    // 2. Multiplicamos por un factor de sombra (ej. 0.5) para que no se mueva tanto como el iris.
    const shadowFactor = 0.5;
    const shadowOffsetX = -irisX * shadowFactor; // Inverso al movimiento X
    const shadowOffsetY = -irisY * shadowFactor; // Inverso al movimiento Y

    // 3. Aplicar el nuevo box-shadow dinámico al iris
    // Usamos el valor 'inset' y un desenfoque de 1rem.
    iris.style.boxShadow = `
        inset ${shadowOffsetX}px ${shadowOffsetY}px 1rem rgba(0, 0, 0, 0.8)
    `;
    
    // Nota: El 'translate' del iris debe seguir siendo el mismo que calculaste antes
    iris.style.transform = `translate(calc(-50% + ${irisX}px), calc(-50% + ${irisY}px))`;   
    }

    // 3. Lógica para activar/desactivar el seguimiento en el footer
    const footer = document.querySelector('footer');
    
    if (footer) {
        // Activar el seguimiento cuando el cursor entra en el footer
        footer.addEventListener('mousemove', moveEye);
        
        // Opcional: Restablecer el ojo al centro cuando el ratón sale del footer
        footer.addEventListener('mouseleave', function() {
            iris.style.transform = 'translate(-50%, -50%)';
            pupil.style.transform = 'translate(0, 0)';
        });
    }
    
    // ... (resto de tu JS: menú, botón ver más, etc.) ...
});