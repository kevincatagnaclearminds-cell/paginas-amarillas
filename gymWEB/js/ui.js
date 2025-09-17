// Funciones de interfaz de usuario
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  
  if (sidebar.classList.contains('closed')) {
    sidebar.classList.remove('closed');
    sidebar.classList.add('open');
    overlay.classList.add('open');
  } else {
    sidebar.classList.remove('open');
    sidebar.classList.add('closed');
    overlay.classList.remove('open');
  }
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  
  sidebar.classList.remove('open');
  sidebar.classList.add('closed');
  overlay.classList.remove('open');
}

function toggleSucursalDropdown() {
  const dropdown = EL("#sucursalDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function cambiarSucursal(sucursal) {
  DB.settings.sucursal = sucursal;
  EL("#sucursalActual").textContent = sucursal;
  EL("#sucursalDropdown").style.display = "none";
  save();
}

// Inicializar menú de navegación
function initMenu() {
  const nav = EL("#menu");
  nav.innerHTML = "";
  
  SECTIONS.forEach((s) => {
    if (s.submenu) {
      // Crear menú con submenús
      const menuGroup = document.createElement("div");
      menuGroup.className = "menu-group";
      menuGroup.style.cssText = "margin-bottom: 1rem;";

      // Botón principal del grupo
      const mainBtn = document.createElement("button");
      mainBtn.className = "btn menu-group-btn";
      mainBtn.style.cssText =
        "width: 100%; text-align: left; justify-content: space-between; margin-bottom: 0.5rem;";
      mainBtn.innerHTML = `
        <span>${s.label}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="menu-arrow">
          <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;

      // Submenú
      const submenu = document.createElement("div");
      submenu.className = "submenu";
      submenu.style.cssText = "display: none;";

      s.submenu.forEach((subItem) => {
        const subBtn = document.createElement("button");
        subBtn.className =
          "btn submenu-btn" + (active === subItem.id ? " primary" : "");
        subBtn.style.cssText =
          "width: 100%; text-align: left; font-size: 0.8rem; padding: 0.5rem 1rem; margin-bottom: 0.2rem; justify-content: flex-start;";
        subBtn.textContent = subItem.label;
        subBtn.onclick = () => {
          active = subItem.id;
          // Remover clase primary de todos los botones
          document
            .querySelectorAll(".btn")
            .forEach((x) => x.classList.remove("primary"));
          subBtn.classList.add("primary");
          render();
          closeSidebar();
        };
        submenu.appendChild(subBtn);
      });

      // Toggle del submenú
      mainBtn.onclick = () => {
        const isOpen = submenu.style.display === "block";
        submenu.style.display = isOpen ? "none" : "block";
        mainBtn.querySelector(".menu-arrow").style.transform = isOpen
          ? "rotate(0deg)"
          : "rotate(180deg)";
      };

      menuGroup.appendChild(mainBtn);
      menuGroup.appendChild(submenu);
      nav.appendChild(menuGroup);
    } else {
      // Menú normal sin submenús
      const b = document.createElement("button");
      b.className = "btn" + (active === s.id ? " primary" : "");
      b.textContent = s.label;
      b.onclick = () => {
        active = s.id;
        [...nav.children].forEach((x) => x.classList.remove("primary"));
        b.classList.add("primary");
        render();
        closeSidebar();
      };
      nav.appendChild(b);
    }
  });
}
