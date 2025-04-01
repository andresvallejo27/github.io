document.addEventListener('DOMContentLoaded', function() {

    // --- Inicialización de Typed.js ---
    if (document.getElementById('typed-role')) {
        var typedOptions = {
            strings: [
                "Desarrollador FullStack",
                "Experto en .NET y Angular",
                "Creador de Soluciones Web",
                "Entusiasta de Java y Node.js",
                "Desarrollador Móvil Flutter"
            ],
            typeSpeed: 60,
            backSpeed: 35,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '_', // Cursor definido en CSS
        };
        var typed = new Typed('#typed-role', typedOptions);
    }

    // --- Inicialización de Particles.js ---
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js',
            {
                "particles": {
                    "number": {
                        "value": 60,
                        "density": { "enable": true, "value_area": 800 }
                    },
                    "color": {
                        "value": "#8892b0" // Color partículas: Gris azulado (secundario)
                    },
                    "shape": {
                        "type": "circle"
                    },
                    "opacity": {
                        "value": 0.4, "random": true,
                        "anim": { "enable": true, "speed": 0.5, "opacity_min": 0.1, "sync": false }
                    },
                    "size": {
                        "value": 3, "random": true
                    },
                    "line_linked": {
                        "enable": true, "distance": 150,
                        "color": "#8892b0", // Color líneas: Gris azulado
                        "opacity": 0.1, // Aún más sutiles
                        "width": 1
                    },
                    "move": {
                        "enable": true, "speed": 1.5, "direction": "none", "random": true,
                        "straight": false, "out_mode": "out", "bounce": false
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": { "enable": true, "mode": "grab" },
                        "onclick": { "enable": false, "mode": "push" }, // Desactivar push en clic
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": { "opacity": 0.3 } // Opacidad línea al interactuar
                        },
                         "push": { "particles_nb": 4 },
                         // Otros modos no usados se pueden omitir
                    }
                },
                "retina_detect": true
            }
        );
    }

    // --- Animación de Scroll Reveal ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opcional: dejar de observar una vez revelado
                // observer.unobserve(entry.target);
            } else {
                 // Opcional: quitar la clase si sale de la vista (para repetir animación)
                 // entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.1 // Revelar cuando el 10% del elemento sea visible
        // rootMargin: '0px 0px -50px 0px' // Ajustar margen si es necesario
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });


}); // Fin DOMContentLoaded