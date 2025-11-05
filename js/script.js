// Aguarda o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona os elementos do DOM
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const navCta = document.getElementById('nav-cta');
    const topo = document.querySelector('.topo'); // O header em si

    // Adiciona o "escutador" de clique ao botão hamburger
    menuToggle.addEventListener('click', () => {
        
        // 1. Adiciona/Remove a classe 'active' no botão (para animar o X)
        menuToggle.classList.toggle('active');
        
        // 2. Adiciona/Remove a classe 'active' na lista do menu (para exibir/esconder)
        navList.classList.toggle('active');
        
        // 3. Adiciona/Remove a classe 'active' no CTA (para exibir/esconder)
        navCta.classList.toggle('active');

        // 4. Adiciona/Remove classe no header (para o fundo do menu)
        topo.classList.toggle('menu-open');
    });
});