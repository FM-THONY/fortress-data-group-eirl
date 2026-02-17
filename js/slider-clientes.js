document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DEL CARRUSEL DE TESTIMONIOS ---
    const slides = document.querySelectorAll('.testimonial-slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentSlide = 0;

    function showSlide(index) {
        // Remover clase active de todos
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Calcular índice circular
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        // Mostrar el slide actual
        slides[currentSlide].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    // Cambio automático cada 5 segundos
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);

});