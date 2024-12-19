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
