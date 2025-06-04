// Selecciona el body para cambiar el fondo
const body = document.body;

// Observador de intersección para detectar cuando una sección está visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;

      // Cambia el color de fondo del body según la sección
            switch (sectionId) {
                case 'HOME':
                    body.style.background = 'linear-gradient( #ff7e00,#feb933,#ff7e00)';
                    break;
                case 'PRODUCT':
                    body.style.background = 'linear-gradient( #ff7e00,#fda618,#f9b648,#fbc355,#fdbc40)';
                    break;
                case 'ABOUT_US':
                    body.style.background = 'linear-gradient(#fdbc40,#fbc355,#f9b648,#fda618,#ff7e00)';
                    break;
                case 'CONTACT_SUPPORT':
                    body.style.background = 'linear-gradient(#fca622,#feb933,#ff7e00)';
                    break;
                default:
                    body.style.background = 'linear-gradient(#ff7e00,#feb933,#ff7e00)';
                }
        }
    });
}, { threshold: 0.5 }); // threshold: cuando al menos el 50% de la sección está visible

// Asigna el observador a cada sección
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});