// Menú hamburguesa simple y funcional
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando menú simple...');
    
    // Función para abrir/cerrar menú
    function toggleMenu() {
        const menu = document.getElementById('sideMenu');
        if (menu) {
            menu.classList.toggle('active');
            console.log('Menú toggled, estado:', menu.classList.contains('active'));
            
            // Forzar el estilo si es necesario
            if (menu.classList.contains('active')) {
                menu.style.left = '0';
                menu.style.display = 'block';
            } else {
                menu.style.left = '-300px';
            }
        }
    }
    
    // Función para mostrar vista de cliente
    function showClientView() {
        const advertiserView = document.getElementById('advertiserView');
        const contentWrapper = document.querySelector('.content-wrapper');
        
        if (advertiserView) advertiserView.style.display = 'none';
        if (contentWrapper) contentWrapper.style.display = 'block';
        console.log('Vista Cliente mostrada');
    }
    
    // Función para mostrar vista de anunciante
    function showAdvertiserView() {
        const advertiserView = document.getElementById('advertiserView');
        const contentWrapper = document.querySelector('.content-wrapper');
        
        if (advertiserView) advertiserView.style.display = 'block';
        if (contentWrapper) contentWrapper.style.display = 'none';
        console.log('Vista Anunciante mostrada');
    }
    
    // Event listeners
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', toggleMenu);
        console.log('Evento hamburger agregado');
    }
    
    const closeMenu = document.querySelector('.close-menu');
    if (closeMenu) {
        closeMenu.addEventListener('click', toggleMenu);
        console.log('Evento cerrar agregado');
    }
    
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            console.log('Menú clickeado:', action);
            
            if (action === 'client') {
                showClientView();
                toggleMenu();
            } else if (action === 'advertiser') {
                showAdvertiserView();
                toggleMenu();
            }
        });
    });
    
    // Hacer funciones globales
    window.toggleMenu = toggleMenu;
    window.showClientView = showClientView;
    window.showAdvertiserView = showAdvertiserView;
    
    console.log('Menú simple inicializado correctamente');
});
