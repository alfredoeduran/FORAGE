document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    // Función para mover la burbuja interactiva
    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.getElementById('nav-menu');
    
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    });
    

    // Mejorar la eficiencia del evento 'mousemove' con 'requestAnimationFrame'
    let mouseMoveScheduled = false;
    window.addEventListener('mousemove', (event) => {
        if (!mouseMoveScheduled) {
            mouseMoveScheduled = true;
            requestAnimationFrame(() => {
                tgX = event.clientX - window.innerWidth / 2;
                tgY = event.clientY - window.innerHeight / 2;
                mouseMoveScheduled = false;
            });
        }
    });

    move();

    const header = document.getElementById('main-header');

    // Función para manejar el scroll del encabezado
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // GSAP Animaciones
    gsap.registerPlugin(ScrollTrigger);

    // Animación de entrada para el encabezado
    gsap.from(header, { 
        duration: 1, 
        y: -100, 
        opacity: 0, 
        ease: 'power3.out' 
    });

    // Animación de entrada para la sección de héroe
    gsap.from('.hero-section .container', { 
        duration: 1.5, 
        y: 50, 
        opacity: 0, 
        ease: 'power3.out', 
        delay: 0.5 
    });

    // Animación de entrada para las secciones con ScrollTrigger
    gsap.utils.toArray('.section-title').forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%', // inicia la animación cuando el título esté al 80% de la ventana de visualización
                toggleActions: 'play none none none'
            },
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        });
    });

    gsap.utils.toArray('.bento-item').forEach((item) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%', // inicia la animación cuando el ítem esté al 80% de la ventana de visualización
                toggleActions: 'play none none none'
            },
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        });
    });
});
