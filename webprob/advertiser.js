// Funciones para la Vista de Anunciante
class AdvertiserView {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        // Event listeners para el menú hamburguesa
        document.addEventListener('DOMContentLoaded', () => {
            this.setupMenuEvents();
            console.log('AdvertiserView inicializado');
        });
    }

    setupMenuEvents() {
        // Menú hamburguesa
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        if (hamburgerMenu) {
            hamburgerMenu.addEventListener('click', () => this.toggleMenu());
        }

        // Cerrar menú
        const closeMenu = document.querySelector('.close-menu');
        if (closeMenu) {
            closeMenu.addEventListener('click', () => this.toggleMenu());
        }

        // Opciones del menú
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const action = e.currentTarget.getAttribute('data-action');
                console.log('Menú clickeado:', action);
                if (action === 'client') {
                    this.switchToClient();
                } else if (action === 'advertiser') {
                    this.switchToAdvertiser();
                }
            });
        });
    }

    toggleMenu() {
        const menu = document.getElementById('sideMenu');
        if (menu) {
            menu.classList.toggle('active');
        }
    }

    switchToClient() {
        console.log('Cambiando a vista Cliente');
        this.toggleMenu();
        this.showClientView();
    }

    switchToAdvertiser() {
        console.log('Cambiando a vista Anunciante');
        this.toggleMenu();
        this.showAdvertiserView();
    }

    showClientView() {
        console.log('Mostrando vista Cliente');
        const advertiserView = document.getElementById('advertiserView');
        const contentWrapper = document.querySelector('.content-wrapper');
        
        if (advertiserView) {
            advertiserView.style.display = 'none';
            console.log('Ocultando advertiserView');
        }
        if (contentWrapper) {
            contentWrapper.style.display = 'block';
            console.log('Mostrando contentWrapper');
        }
    }

    showAdvertiserView() {
        console.log('Mostrando vista Anunciante');
        const advertiserView = document.getElementById('advertiserView');
        const contentWrapper = document.querySelector('.content-wrapper');
        
        if (advertiserView) {
            advertiserView.style.display = 'block';
            console.log('Mostrando advertiserView');
        }
        if (contentWrapper) {
            contentWrapper.style.display = 'none';
            console.log('Ocultando contentWrapper');
        }
        
        // Inicializar el sistema de pasos si no está inicializado
        if (!window.stepsManager) {
            console.log('Inicializando StepsManager');
            window.stepsManager = new StepsManager();
        }
    }
}

// Inicializar la vista de anunciante cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, inicializando AdvertiserView');
    window.advertiserView = new AdvertiserView();
});

// Funciones globales para compatibilidad con onclick
function toggleMenu() {
    if (window.advertiserView) {
        window.advertiserView.toggleMenu();
    }
}

function switchToClient() {
    if (window.advertiserView) {
        window.advertiserView.switchToClient();
    }
}

function switchToAdvertiser() {
    if (window.advertiserView) {
        window.advertiserView.switchToAdvertiser();
    }
}

function showClientView() {
    if (window.advertiserView) {
        window.advertiserView.showClientView();
    }
}
