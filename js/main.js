 document.addEventListener('DOMContentLoaded', () => {

 // --- SCROLL SUAVE PARA LINKS DE NAVEGACIÓN ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- MANEJO DEL FORMULARIO (VISUAL) ---
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Gracias por contactar a Fortress Data Group. Hemos recibido tu mensaje.');
        contactForm.reset();
    });

});