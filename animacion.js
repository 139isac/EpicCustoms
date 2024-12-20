// Función para verificar si el elemento está parcialmente en la pantalla
function isInViewport(el, offset = 150) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight - offset) && // Parte superior del elemento entra antes
        rect.bottom >= offset // Parte inferior no debe salir del todo
    );
}

// Función para añadir la clase que activa la animación
function checkSections() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('section-visible');
        }
    });
}

// Llamar a la función cuando se hace scroll
window.addEventListener('scroll', checkSections);

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', checkSections);





// Mostrar el banner si no se ha aceptado la política de cookies
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('cookies-accepted')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }

    // Aceptar las cookies
    document.getElementById('accept-cookies').addEventListener('click', () => {
        localStorage.setItem('cookies-accepted', 'true'); // Guardar la aceptación en el almacenamiento local
        document.getElementById('cookie-banner').style.display = 'none'; // Ocultar el banner
    });
});
