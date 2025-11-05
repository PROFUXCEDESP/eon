document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    // Evento para alternar o menu
    menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
            // Menu aberto
            navList.classList.add('active');
            hamburgerIcon.classList.add('open');
            document.body.style.overflow = 'hidden'; // Impede o scroll do body
        } else {
            // Menu fechado
            navList.classList.remove('active');
            hamburgerIcon.classList.remove('open');
            document.body.style.overflow = ''; // Restaura o scroll do body
        }
    });

    // Fechar o menu ao clicar em um link (melhoria de UX)
    navList.querySelectorAll('.nav-link, .button-cta-mobile').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Aplica apenas no mobile
                menuToggle.checked = false;
                navList.classList.remove('active');
                hamburgerIcon.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    });
});