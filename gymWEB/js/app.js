// Archivo principal de la aplicación
function initApp() {
  // Cargar base de datos
  DB.load();
  
  // Configurar información del día - Cambiado a mostrar "Matriz"
  EL("#todayInfo").textContent = "Matriz";
  
  // Configurar sucursal actual
  EL("#sucursalActual").textContent = DB.settings.sucursal;
  
  // Inicializar menú de navegación
  initMenu();
  
  // Renderizar vista inicial
  render();
}

// Función para renderizar vista de cliente detalle
function renderClienteDetalle(root, cliente) {
  const wrap = document.createElement("div");
  wrap.className = "grid cols-1";
  
  const card = document.createElement("div");
  card.className = "card";
  
  card.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
      <h3 class="section-title">Detalle del Cliente</h3>
      <button class="btn ghost" onclick="volverAClientes()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Volver
      </button>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
      <!-- Información personal -->
      <div>
        <h4 style="margin: 0 0 1rem 0; color: var(--text);">Información Personal</h4>
        <div style="display: grid; gap: 0.5rem;">
          <div><strong>Nombre:</strong> ${cliente.nombres} ${cliente.apellidos}</div>
          <div><strong>Cédula:</strong> ${cliente.cedula}</div>
          <div><strong>Email:</strong> ${cliente.email}</div>
          <div><strong>Teléfono:</strong> ${cliente.telefono}</div>
          <div><strong>Género:</strong> ${cliente.genero}</div>
          <div><strong>Fecha de nacimiento:</strong> ${fmtDate(cliente.nacimiento)}</div>
          <div><strong>Dirección:</strong> ${cliente.direccion}</div>
          <div><strong>Obra social:</strong> ${cliente.obraSocial || 'No especificada'}</div>
        </div>
      </div>
      
      <!-- Información de membresía -->
      <div>
        <h4 style="margin: 0 0 1rem 0; color: var(--text);">Membresía</h4>
        <div style="display: grid; gap: 0.5rem;">
          <div><strong>Plan:</strong> ${cliente.membresia}</div>
          <div><strong>Fecha de inicio:</strong> ${fmtDate(cliente.membresiaInicio)}</div>
          <div><strong>Fecha de vencimiento:</strong> ${fmtDate(cliente.membresiaFin)}</div>
          <div><strong>Primera inscripción:</strong> ${fmtDate(cliente.inscritoPrimera)}</div>
          <div><strong>Estado:</strong> 
            <span class="badge ${cliente.activo ? 'tag-success' : 'tag-danger'}">
              ${cliente.activo ? 'Activo' : 'Inactivo'}
            </span>
          </div>
          <div><strong>Saldo pendiente:</strong> 
            <span class="badge ${cliente.saldo > 0 ? 'tag-danger' : 'tag-success'}">
              $${cliente.saldo}
            </span>
          </div>
          <div><strong>Último ingreso:</strong> ${fmtDate(cliente.ultimoIngreso)}</div>
        </div>
      </div>
    </div>
    
    ${cliente.notas ? `
      <div style="margin-top: 1.5rem; padding: 1rem; background: var(--panel); border-radius: 8px;">
        <h4 style="margin: 0 0 0.5rem 0; color: var(--text);">Notas</h4>
        <p style="margin: 0; color: var(--sub);">${cliente.notas}</p>
      </div>
    ` : ''}
    
    <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <button class="btn primary" onclick="abrirModalRenovarMembresia(${JSON.stringify(cliente)})">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Renovar Membresía
      </button>
      
      <button class="btn" onclick="abrirModalPago()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Registrar Pago
      </button>
      
      <button class="btn" onclick="abrirModalCargo()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Nuevo Cargo
      </button>
      
      <button class="btn ghost" onclick="abrirModalWhatsApp('general', '${cliente.id}')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
        Enviar WhatsApp
      </button>
    </div>
  `;
  
  wrap.appendChild(card);
  root.appendChild(wrap);
}

// Función para volver a la vista de clientes
function volverAClientes() {
  currentClientDetail = null;
  active = "todos-clientes";
  render();
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  checkAuth();
});
