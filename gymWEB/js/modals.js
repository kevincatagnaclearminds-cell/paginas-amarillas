// Funciones para modales del sistema

// Modal de Cargo
function abrirModalCargo() {
  const modal = document.createElement('div');
  modal.id = 'modalCargo';
  modal.className = 'modal';
  modal.style.display = 'flex';
  
  modal.innerHTML = `
    <div class="modal-content">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1.3rem; font-weight: 700;">Nuevo Cargo</h3>
        <button onclick="cerrarModalCargo()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>

      <form id="formCargo">
        <div style="margin-bottom: 1rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Fecha</label>
          <div style="display: flex; align-items: center; gap: 0.5rem">
            <input type="datetime-local" id="cargoFecha" style="flex: 1; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
            <button type="button" style="background: var(--panel); border: 1px solid var(--muted); border-radius: 6px; padding: 0.8rem; cursor: pointer;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H21V7H3V3ZM3 9H21V21H3V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div style="margin-bottom: 1rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Detalle</label>
          <input type="text" id="cargoDetalle" placeholder="Ingrese los detalles del Cargo..." style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
        </div>

        <div style="margin-bottom: 1rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Monto</label>
          <div style="display: flex; align-items: center">
            <button type="button" style="background: var(--panel); border: 1px solid var(--muted); border-right: none; border-radius: 6px 0 0 6px; padding: 0.8rem; font-weight: 600; color: var(--text);">$</button>
            <input type="number" id="cargoMonto" placeholder="Ingrese el monto..." step="0.01" style="flex: 1; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 0 6px 6px 0; background: white;" />
          </div>
        </div>

        <div style="margin-bottom: 1rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Sucursal</label>
          <select id="cargoSucursal" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;">
            <option value="Matriz">Matriz</option>
            <option value="Ponciano">Ponciano</option>
            <option value="QT">QT</option>
          </select>
        </div>

        <div style="margin-bottom: 1.5rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Notas</label>
          <textarea id="cargoNotas" placeholder="Detalle del Cargo" rows="3" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white; resize: vertical;"></textarea>
        </div>

        <div style="margin-bottom: 1.5rem">
          <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
            <input type="checkbox" id="cargoRegistrarPago" style="margin: 0" />
            <span style="color: var(--text)">Registrar un pago por el mismo monto.</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: var(--sub);">
              <path d="M9.09 9C9.3251 8.33167 9.78918 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.30197 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </label>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 1rem">
          <button type="button" onclick="cerrarModalCargo()" style="background: var(--panel); color: var(--text); border: 1px solid var(--muted); padding: 0.8rem 1.5rem; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Cancelar
          </button>
          <button type="submit" style="background: var(--ok); color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Guardar
          </button>
        </div>
      </form>
    </div>
  `;
  
  EL('#modals-container').appendChild(modal);
  
  // Configurar fecha actual
  const fechaInput = modal.querySelector('#cargoFecha');
  const now = new Date();
  const localDateTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  fechaInput.value = localDateTime;
  
  // Evento submit del formulario
  modal.querySelector('#formCargo').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí iría la lógica para guardar el cargo
    alert('Cargo guardado exitosamente');
    cerrarModalCargo();
  });
}

function cerrarModalCargo() {
  const modal = EL('#modalCargo');
  if (modal) {
    modal.remove();
  }
}

// Modal de Pago
function abrirModalPago() {
  const modal = document.createElement('div');
  modal.id = 'modalPago';
  modal.className = 'modal';
  modal.style.display = 'flex';
  
  modal.innerHTML = `
    <div class="modal-content">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1.3rem; font-weight: 700;">Nuevo Pago</h3>
        <button onclick="cerrarModalPago()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>

      <form id="formPago">
        <div style="margin-bottom: 1rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Fecha</label>
          <div style="display: flex; align-items: center; gap: 0.5rem">
            <input type="datetime-local" id="pagoFecha" style="flex: 1; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
            <button type="button" style="background: var(--panel); border: 1px solid var(--muted); border-radius: 6px; padding: 0.8rem; cursor: pointer;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H21V7H3V3ZM3 9H21V21H3V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div style="margin-bottom: 1rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Detalle</label>
          <input type="text" id="pagoDetalle" placeholder="Ingrese los detalles del Pago..." style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
        </div>

        <div style="margin-bottom: 1rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Monto</label>
          <div style="display: flex; align-items: center">
            <button type="button" style="background: var(--panel); border: 1px solid var(--muted); border-right: none; border-radius: 6px 0 0 6px; padding: 0.8rem; font-weight: 600; color: var(--text);">$</button>
            <input type="number" id="pagoMonto" placeholder="Ingrese el monto..." step="0.01" style="flex: 1; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 0 6px 6px 0; background: white;" />
          </div>
        </div>

        <div style="margin-bottom: 1rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Método de Pago</label>
          <select id="pagoMetodo" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;">
            <option value="Efectivo">Efectivo</option>
            <option value="Tarjeta">Tarjeta</option>
            <option value="Transferencia">Transferencia</option>
            <option value="Depósito">Depósito</option>
          </select>
        </div>

        <div style="margin-bottom: 1rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Sucursal</label>
          <select id="pagoSucursal" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;">
            <option value="Matriz">Matriz</option>
            <option value="Ponciano">Ponciano</option>
            <option value="QT">QT</option>
          </select>
        </div>

        <div style="margin-bottom: 1rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Notas</label>
          <textarea id="pagoNotas" placeholder="Detalle del Pago" rows="3" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white; resize: vertical;"></textarea>
        </div>

        <div style="margin-bottom: 1.5rem">
          <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
            <input type="checkbox" id="pagoEsProducto" style="width: 16px; height: 16px" />
            <span style="color: var(--text); font-weight: 500">Es el pago de un producto ?</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: var(--sub);">
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </label>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 1rem">
          <button type="button" onclick="cerrarModalPago()" style="background: var(--panel); color: var(--text); border: 1px solid var(--muted); padding: 0.8rem 1.5rem; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Cancelar
          </button>
          <button type="submit" style="background: var(--ok); color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Guardar
          </button>
        </div>
      </form>
    </div>
  `;
  
  EL('#modals-container').appendChild(modal);
  
  // Configurar fecha actual
  const fechaInput = modal.querySelector('#pagoFecha');
  const now = new Date();
  const localDateTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  fechaInput.value = localDateTime;
  
  // Evento submit del formulario
  modal.querySelector('#formPago').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí iría la lógica para guardar el pago
    alert('Pago guardado exitosamente');
    cerrarModalPago();
  });
}

function cerrarModalPago() {
  const modal = EL('#modalPago');
  if (modal) {
    modal.remove();
  }
}

// Modal de Membresía
function abrirModalMembresia() {
  const modal = document.createElement('div');
  modal.id = 'modalMembresia';
  modal.className = 'modal';
  modal.style.display = 'flex';
  
  modal.innerHTML = `
    <div class="modal-content">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1.3rem; font-weight: 700;">Nueva Membresía</h3>
        <button onclick="cerrarModalMembresia()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>

      <form id="formMembresia">
        <div style="margin-bottom: 1rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Actividad</label>
          <select id="membresiaActividad" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;">
            <option value="">Seleccionar actividad...</option>
            <option value="Plan Anual">Plan Anual</option>
            <option value="Plan Mensual">Plan Mensual</option>
            <option value="Plan Trimestral">Plan Trimestral</option>
            <option value="Plan Semanal">Plan Semanal</option>
            <option value="Plan Diario">Plan Diario</option>
          </select>
        </div>

        <div style="margin-bottom: 1rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Fecha de Inicio</label>
          <input type="date" id="membresiaFechaInicio" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
        </div>

        <div style="margin-bottom: 1rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Descuento</label>
          <select id="membresiaDescuento" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;">
            <option value="">Seleccionar descuento...</option>
            <option value="Todas">Todas</option>
            <option value="Sin descuento">Sin descuento</option>
            <option value="10%">10%</option>
            <option value="20%">20%</option>
            <option value="30%">30%</option>
          </select>
        </div>

        <div style="margin-bottom: 1.5rem">
          <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; color: var(--text); font-weight: 600;">
            <input type="checkbox" id="membresiaCambioApp" style="width: 18px; height: 18px; margin: 0; cursor: pointer" />
            Cambio en la app
          </label>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 1rem">
          <button type="button" onclick="cerrarModalMembresia()" style="background: var(--panel); color: var(--text); border: 1px solid var(--muted); padding: 0.8rem 1.5rem; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Cancelar
          </button>
          <button type="submit" style="background: var(--ok); color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Agregar
          </button>
        </div>
      </form>
    </div>
  `;
  
  EL('#modals-container').appendChild(modal);
  
  // Configurar fecha actual
  const fechaInput = modal.querySelector('#membresiaFechaInicio');
  const today = new Date().toISOString().split('T')[0];
  fechaInput.value = today;
  
  // Evento submit del formulario
  modal.querySelector('#formMembresia').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí iría la lógica para guardar la membresía
    alert('Membresía agregada exitosamente');
    cerrarModalMembresia();
  });
}

function cerrarModalMembresia() {
  const modal = EL('#modalMembresia');
  if (modal) {
    modal.remove();
  }
}

// Modal de WhatsApp Contextual
function abrirModalWhatsApp(contexto = 'general', clienteId = null) {
  const modal = document.createElement('div');
  modal.id = 'modalWhatsApp';
  modal.className = 'modal';
  modal.style.display = 'flex';
  
  // Obtener información del cliente si se proporciona
  let cliente = null;
  if (clienteId) {
    cliente = DB.users.find(u => u.id === clienteId);
  }
  
  // Determinar las opciones según el contexto
  let opcionesPlantilla = [];
  let telefonoPredefinido = '';
  let mensajePredefinido = '';
  
  // Si hay cliente, verificar si tiene deuda para ajustar el contexto
  if (cliente && cliente.saldo > 0 && contexto === 'general') {
    contexto = 'deudores';
  }
  
  switch(contexto) {
    case 'cumpleanos':
      opcionesPlantilla = [
        { value: 'cumpleanos', text: '🎂 Felicitación de Cumpleaños' },
        { value: 'cumpleanos_descuento', text: '🎁 Cumpleaños con Descuento' },
        { value: 'cumpleanos_especial', text: '🎉 Cumpleaños Especial' }
      ];
      mensajePredefinido = '¡Feliz cumpleaños! Que este año esté lleno de salud y éxitos. ¡Disfruta tu día especial! 🎂🎉';
      break;
      
    case 'deudores':
      opcionesPlantilla = [
        { value: 'deudor_urgente', text: '⚠️ Recordatorio de Pago Urgente' },
        { value: 'deudor_vencido', text: '❌ Membresía Vencida' },
        { value: 'deudor_descuento', text: '💰 Oferta de Pago con Descuento' }
      ];
      mensajePredefinido = `Hola, tu membresía ha vencido y tienes un saldo pendiente de $${cliente ? cliente.saldo : '0'}. Renueva ahora para mantener acceso al gimnasio. ¡Te esperamos!`;
      break;
      
    case 'membresia_vencer':
      opcionesPlantilla = [
        { value: 'renovacion_proxima', text: '📅 Renovación Próxima' },
        { value: 'renovacion_descuento', text: '💎 Renovación con Descuento' },
        { value: 'renovacion_especial', text: '⭐ Renovación Especial' }
      ];
      mensajePredefinido = 'Tu membresía está por vencer. Renueva ahora y mantén tu rutina activa. ¡No pierdas el acceso a nuestras instalaciones!';
      break;
      
    case 'inactivos':
      opcionesPlantilla = [
        { value: 'reactivacion', text: '🔄 Reactivación de Membresía' },
        { value: 'inactivo_oferta', text: '🎯 Oferta para Cliente Inactivo' },
        { value: 'inactivo_bienvenida', text: '👋 Bienvenida de Regreso' }
      ];
      mensajePredefinido = '¡Te extrañamos! Hace tiempo que no te vemos en el gimnasio. ¿Todo bien? Te invitamos a reactivar tu membresía con una oferta especial.';
      break;
      
    case 'nuevos_clientes':
      opcionesPlantilla = [
        { value: 'bienvenida_nuevo', text: '👋 Bienvenida Nuevo Cliente' },
        { value: 'induccion', text: '🏋️ Información de Inducción' },
        { value: 'horarios', text: '⏰ Horarios y Servicios' }
      ];
      mensajePredefinido = '¡Bienvenido/a al gimnasio! Tu membresía está activa desde hoy. Disfruta de todas nuestras instalaciones y clases. ¡Nos vemos pronto!';
      break;
      
    case 'renovacion':
      opcionesPlantilla = [
        { value: 'renovacion_confirmacion', text: '✅ Confirmación de Renovación' },
        { value: 'renovacion_gracias', text: '🙏 Agradecimiento por Renovación' },
        { value: 'renovacion_beneficios', text: '🎁 Beneficios de Renovación' }
      ];
      mensajePredefinido = '¡Gracias por renovar tu membresía! Tu acceso está activo y listo para seguir entrenando. ¡Disfruta de todos nuestros servicios!';
      break;
      
    default:
      opcionesPlantilla = [
        { value: 'personalizado', text: '✏️ Mensaje Personalizado' },
        { value: 'recordatorio', text: '📝 Recordatorio General' },
        { value: 'informacion', text: 'ℹ️ Información General' }
      ];
      mensajePredefinido = '';
  }
  
  // Si hay cliente, predefinir el teléfono
  if (cliente && cliente.telefono) {
    telefonoPredefinido = cliente.telefono;
  }
  
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 300px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1rem; font-weight: 700;">
          ${cliente ? `Enviar WhatsApp a ${cliente.nombres}${cliente.saldo > 0 ? ` (Saldo: $${cliente.saldo})` : ''}` : 'Enviar WhatsApp'}
        </h3>
        <button onclick="cerrarModalWhatsApp()" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>

      <!-- Instrucciones -->
      <div style="background: #f8f9fa; border-radius: 4px; padding: 0.6rem; margin-bottom: 0.6rem; border: 1px solid #e9ecef;">
        <div style="font-weight: 600; margin-bottom: 0.3rem; color: var(--text); font-size: 0.8rem;">Instrucciones:</div>
        <div style="font-size: 0.7rem; color: var(--sub); margin-bottom: 0.1rem;">• Colocá siempre el código de país al inicio</div>
        <div style="font-size: 0.7rem; color: var(--sub); margin-bottom: 0.1rem;">• No te olvides de quitar el 0 y el 15.</div>
        <div style="font-size: 0.7rem; color: var(--sub); margin-bottom: 0.1rem;">• Ejemplos: Argentina (5493425672626), Chile (56945220978)</div>
        <a href="#" style="color: #007bff; text-decoration: none; font-size: 0.7rem;">Leer más</a>
      </div>

      <!-- Aviso importante -->
      <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px; padding: 0.6rem; margin-bottom: 0.6rem;">
        <div style="font-weight: 700; color: #856404; margin-bottom: 0.1rem; font-size: 0.8rem">Importante</div>
        <div style="font-size: 0.7rem; color: #856404">Por políticas de privacidad de WhatsApp recorda agendar a esta persona previamente para que pueda recibir correctamente los mensajes.</div>
      </div>

      <form id="formWhatsApp">
        <div style="margin-bottom: 0.6rem">
          <label style="display: block; font-weight: 600; color: var(--text); margin-bottom: 0.3rem; font-size: 0.8rem;">Teléfono:</label>
          <input type="text" id="whatsappTelefono" placeholder="Ej: 593991234567" value="${telefonoPredefinido}" style="width: 100%; padding: 0.5rem; border: 1px solid var(--muted); border-radius: 4px; background: white; font-size: 0.75rem;" />
        </div>

        <div style="margin-bottom: 0.6rem">
          <label style="display: block; font-weight: 600; color: var(--text); margin-bottom: 0.3rem; font-size: 0.8rem;">Plantilla:</label>
          <select id="whatsappPlantilla" style="width: 100%; padding: 0.5rem; border: 1px solid var(--muted); border-radius: 4px; background: white; font-size: 0.75rem;">
            ${opcionesPlantilla.map(opcion => `<option value="${opcion.value}">${opcion.text}</option>`).join('')}
          </select>
        </div>

        <div style="margin-bottom: 0.6rem">
          <label style="display: block; font-weight: 600; color: var(--text); margin-bottom: 0.3rem; font-size: 0.8rem;">Mensaje:</label>
          <textarea id="whatsappMensaje" rows="3" style="width: 100%; padding: 0.5rem; border: 1px solid var(--muted); border-radius: 4px; background: white; resize: vertical; font-size: 0.75rem;">${mensajePredefinido}</textarea>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 0.4rem">
          <button type="button" onclick="cerrarModalWhatsApp()" style="background: var(--panel); color: var(--text); border: 1px solid var(--muted); padding: 0.5rem 0.8rem; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 0.3rem; font-size: 0.75rem;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Cerrar
          </button>
          <button type="button" onclick="abrirWhatsApp()" style="background: #25d366; color: white; border: none; padding: 0.5rem 0.8rem; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 0.3rem; font-size: 0.75rem;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Abrir WhatsApp
          </button>
        </div>
      </form>
    </div>
  `;
  
  EL('#modals-container').appendChild(modal);
  
  // Evento para cambiar plantilla según el contexto
  modal.querySelector('#whatsappPlantilla').addEventListener('change', function(e) {
    const mensajeArea = modal.querySelector('#whatsappMensaje');
    const plantilla = e.target.value;
    
    let mensaje = '';
    
    switch(plantilla) {
      // Cumpleaños
      case 'cumpleanos':
        mensaje = '¡Feliz cumpleaños! Que este año esté lleno de salud y éxitos. ¡Disfruta tu día especial! 🎂🎉';
        break;
      case 'cumpleanos_descuento':
        mensaje = '¡Feliz cumpleaños! 🎂🎉 Por tu día especial, tienes un 20% de descuento en tu próxima renovación. ¡Aprovecha esta oferta única!';
        break;
      case 'cumpleanos_especial':
        mensaje = '¡Feliz cumpleaños! 🎂🎉 Te invitamos a celebrar tu día especial en el gimnasio. ¡Una clase gratis te espera!';
        break;
        
      // Deudores
      case 'deudor_urgente':
        mensaje = `⚠️ URGENTE: Tu membresía ha vencido y tienes un saldo pendiente de $${cliente ? cliente.saldo : '0'}. Renueva ahora para mantener acceso al gimnasio. ¡Te esperamos!`;
        break;
      case 'deudor_vencido':
        mensaje = `❌ Tu membresía ha vencido. Tienes un saldo pendiente de $${cliente ? cliente.saldo : '0'}. Renueva ahora para mantener acceso al gimnasio y evitar cargos adicionales.`;
        break;
      case 'deudor_descuento':
        mensaje = `💰 OFERTA ESPECIAL: Paga tu deuda pendiente de $${cliente ? cliente.saldo : '0'} con un 15% de descuento si renuevas hoy. ¡Aprovecha esta oportunidad!`;
        break;
        
      // Membresía por vencer
      case 'renovacion_proxima':
        mensaje = '📅 Tu membresía está por vencer. Renueva ahora y mantén tu rutina activa. ¡No pierdas el acceso a nuestras instalaciones!';
        break;
      case 'renovacion_descuento':
        mensaje = '💎 RENOVACIÓN CON DESCUENTO: Renueva tu membresía antes de que venza y obtén un 10% de descuento. ¡Oferta por tiempo limitado!';
        break;
      case 'renovacion_especial':
        mensaje = '⭐ RENOVACIÓN ESPECIAL: Renueva tu membresía y obtén 1 mes adicional gratis. ¡Solo por renovar a tiempo!';
        break;
        
      // Inactivos
      case 'reactivacion':
        mensaje = '🔄 ¡Te extrañamos! Hace tiempo que no te vemos en el gimnasio. ¿Todo bien? Te invitamos a reactivar tu membresía con una oferta especial.';
        break;
      case 'inactivo_oferta':
        mensaje = '🎯 OFERTA ESPECIAL: Reactiva tu membresía con un 25% de descuento. ¡Es momento de volver a entrenar!';
        break;
      case 'inactivo_bienvenida':
        mensaje = '👋 ¡Bienvenido de regreso! Te hemos extrañado en el gimnasio. Reactiva tu membresía y vuelve a tu rutina de ejercicios.';
        break;
        
      // Nuevos clientes
      case 'bienvenida_nuevo':
        mensaje = '👋 ¡Bienvenido/a al gimnasio! Tu membresía está activa desde hoy. Disfruta de todas nuestras instalaciones y clases. ¡Nos vemos pronto!';
        break;
      case 'induccion':
        mensaje = '🏋️ ¡Bienvenido/a! Te invitamos a tu sesión de inducción gratuita. Nuestros entrenadores te mostrarán todas las instalaciones y te ayudarán a crear tu rutina personalizada.';
        break;
      case 'horarios':
        mensaje = '⏰ HORARIOS DEL GIMNASIO:\nLunes a Viernes: 6:00 AM - 10:00 PM\nSábados: 7:00 AM - 8:00 PM\nDomingos: 8:00 AM - 6:00 PM\n\n¡Tu membresía está activa!';
        break;
        
      // Renovación
      case 'renovacion_confirmacion':
        mensaje = '✅ ¡Gracias por renovar tu membresía! Tu acceso está activo y listo para seguir entrenando. ¡Disfruta de todos nuestros servicios!';
        break;
      case 'renovacion_gracias':
        mensaje = '🙏 ¡Gracias por confiar en nosotros! Tu renovación ha sido procesada exitosamente. ¡Sigue entrenando y alcanzando tus metas!';
        break;
      case 'renovacion_beneficios':
        mensaje = '🎁 ¡Felicidades por renovar! Como cliente fiel, tienes acceso a:\n• Clases grupales gratuitas\n• Evaluación física mensual\n• Descuentos en suplementos\n\n¡Aprovecha todos los beneficios!';
        break;
        
      // General
      case 'personalizado':
        mensaje = '';
        break;
      case 'recordatorio':
        mensaje = '📝 Recordatorio: No olvides tu rutina de ejercicios. ¡Te esperamos en el gimnasio para ayudarte a alcanzar tus metas!';
        break;
      case 'informacion':
        mensaje = 'ℹ️ INFORMACIÓN IMPORTANTE:\n\nHorarios: Lunes a Domingo\nClases grupales incluidas\nEntrenadores disponibles\nEstacionamiento gratuito\n\n¡Cualquier consulta, no dudes en preguntarnos!';
        break;
        
      default:
        mensaje = '';
    }
    
    mensajeArea.value = mensaje;
  });
}

function cerrarModalWhatsApp() {
  const modal = EL('#modalWhatsApp');
  if (modal) {
    modal.remove();
  }
}

function abrirWhatsApp() {
  const telefono = EL('#whatsappTelefono').value;
  const mensaje = EL('#whatsappMensaje').value;
  
  if (!telefono || !mensaje) {
    alert('Por favor completa todos los campos');
    return;
  }
  
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

// Modal de Renovar Membresía
function abrirModalRenovarMembresia(cliente) {
  const modal = document.createElement('div');
  modal.id = 'modalRenovarMembresia';
  modal.className = 'modal';
  modal.style.display = 'flex';
  
  // Guardar el ID del cliente en el modal para usarlo después
  modal.setAttribute('data-cliente-id', cliente.id);
  
  modal.innerHTML = `
    <div class="modal-content">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1.3rem; font-weight: 700;">Renovar Membresía</h3>
        <button onclick="cerrarModalRenovarMembresia()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>

      <div id="contenidoModalRenovar">
        <div style="margin-bottom: 1rem">
          <strong>Cliente:</strong> ${cliente.nombres} ${cliente.apellidos}
        </div>
        <div style="margin-bottom: 1rem">
          <strong>Membresía actual:</strong> ${cliente.membresia}
        </div>
        <div style="margin-bottom: 1rem">
          <strong>Vence:</strong> ${fmtDate(cliente.membresiaFin)}
        </div>
        <div style="margin-bottom: 1rem">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Nueva fecha de vencimiento:</label>
          <input type="date" id="nuevaFechaFin" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem;">
        <button onclick="abrirModalWhatsApp('renovacion', '${cliente.id}')" style="background: #25d366; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          Enviar WhatsApp
        </button>
        
        <div style="display: flex; gap: 1rem;">
        <button onclick="cerrarModalRenovarMembresia()" style="background: var(--panel); color: var(--text); border: 1px solid var(--muted); padding: 0.8rem 1.5rem; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Cancelar
        </button>
        <button onclick="confirmarRenovacion()" style="background: var(--ok); color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Confirmar Renovación
        </button>
        </div>
      </div>
    </div>
  `;
  
  EL('#modals-container').appendChild(modal);
  
  // Configurar fecha mínima (hoy)
  const fechaInput = modal.querySelector('#nuevaFechaFin');
  const today = new Date().toISOString().split('T')[0];
  fechaInput.value = today;
  fechaInput.min = today;
}

function cerrarModalRenovarMembresia() {
  const modal = EL('#modalRenovarMembresia');
  if (modal) {
    modal.remove();
  }
}

function confirmarRenovacion() {
  const nuevaFecha = EL('#nuevaFechaFin').value;
  if (!nuevaFecha) {
    alert('Por favor selecciona una fecha');
    return;
  }
  
  // Obtener el ID del cliente del modal
  const modal = EL('#modalRenovarMembresia');
  if (!modal) return;
  
  const clienteId = modal.getAttribute('data-cliente-id');
  if (!clienteId) {
    alert('Error: No se pudo identificar al cliente');
    return;
  }
  
  // Buscar el cliente en la base de datos
  const cliente = DB.users.find(u => u.id === clienteId);
  if (!cliente) {
    alert('Cliente no encontrado en la base de datos');
    return;
  }
  
  // Actualizar la fecha de vencimiento de la membresía
  const fechaAnterior = cliente.membresiaFin;
  cliente.membresiaFin = nuevaFecha;
  
  // Guardar en localStorage
  localStorage.setItem('gymdb_v1', JSON.stringify(DB));
  
  // Mostrar confirmación con detalles
  alert(`✅ Membresía renovada exitosamente\n\nCliente: ${cliente.nombres} ${cliente.apellidos}\nFecha anterior: ${new Date(fechaAnterior).toLocaleDateString('es-EC')}\nNueva fecha: ${new Date(nuevaFecha).toLocaleDateString('es-EC')}`);
  
  // Cerrar modal y recargar vista
  cerrarModalRenovarMembresia();
  render();
}

// Función para enviar felicitación automática de cumpleaños
function enviarFelicitacion(clienteId) {
  const cliente = DB.users.find(u => u.id === clienteId);
  if (!cliente) {
    alert('Cliente no encontrado');
    return;
  }
  
  if (!cliente.telefono) {
    alert('El cliente no tiene número de teléfono registrado');
    return;
  }
  
  // Mensaje de felicitación automático
  const mensaje = `¡Feliz cumpleaños ${cliente.nombres}! 🎂🎉 Que este año esté lleno de salud, éxitos y mucha energía para seguir entrenando. ¡Disfruta tu día especial! 🎁✨`;
  
  // Abrir WhatsApp directamente con el mensaje
  const url = `https://wa.me/${cliente.telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
  
  // Mostrar confirmación
  alert(`¡Felicitación enviada a ${cliente.nombres}! 🎉`);
}

// Modal para visualizar información completa del cliente
function visualizarCliente(clienteId) {
  const cliente = DB.users.find(u => u.id === clienteId);
  if (!cliente) {
    alert('Cliente no encontrado');
    return;
  }

  const modal = document.createElement('div');
  modal.id = 'modalVisualizarCliente';
  modal.className = 'modal';
  modal.style.display = 'flex';

  // Obtener información de la membresía
  const membresia = DB.memberships.find(m => m.id === cliente.membresia);
  
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 350px; max-height: 90vh; overflow-y: auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1.1rem; font-weight: 700;">
          Información del Cliente: ${cliente.nombres} ${cliente.apellidos}
        </h3>
        <button onclick="cerrarModalVisualizarCliente()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        <!-- Columna izquierda: Información personal -->
        <div>
          <h4 style="margin: 0 0 1rem 0; color: var(--text); font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Información Personal
          </h4>
          
          <div style="background: var(--panel); border-radius: 8px; padding: 1.5rem; border: 1px solid var(--muted);">
            <div style="display: grid; gap: 1rem;">
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Nombres</label>
                <div style="color: var(--text); font-weight: 500;">${cliente.nombres || 'No especificado'}</div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Apellidos</label>
                <div style="color: var(--text); font-weight: 500;">${cliente.apellidos || 'No especificado'}</div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Cédula</label>
                <div style="color: var(--text); font-weight: 500;">${cliente.cedula || 'No especificado'}</div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Fecha de Nacimiento</label>
                <div style="color: var(--text); font-weight: 500;">${cliente.nacimiento ? fmtDate(cliente.nacimiento) : 'No especificado'}</div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Email</label>
                <div style="color: var(--text); font-weight: 500;">${cliente.email || 'No especificado'}</div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Teléfono</label>
                <div style="color: var(--text); font-weight: 500;">${cliente.telefono || 'No especificado'}</div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Dirección</label>
                <div style="color: var(--text); font-weight: 500;">${cliente.direccion || 'No especificado'}</div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Género</label>
                <div style="color: var(--text); font-weight: 500;">${cliente.genero || 'No especificado'}</div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Obra Social</label>
                <div style="color: var(--text); font-weight: 500;">${cliente.obraSocial || 'No especificado'}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna derecha: Información de membresía y sistema -->
        <div>
          <h4 style="margin: 0 0 1rem 0; color: var(--text); font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Membresía y Sistema
          </h4>
          
          <div style="background: var(--panel); border-radius: 8px; padding: 1.5rem; border: 1px solid var(--muted);">
            <div style="display: grid; gap: 1rem;">
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Tipo de Membresía</label>
                <div style="color: var(--text); font-weight: 500;">${membresia ? membresia.nombre : 'No especificado'}</div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Fecha de Inicio</label>
                <div style="color: var(--text); font-weight: 500;">${cliente.membresiaInicio ? fmtDate(cliente.membresiaInicio) : 'No especificado'}</div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Fecha de Vencimiento</label>
                <div style="color: var(--text); font-weight: 500;">${cliente.membresiaFin ? fmtDate(cliente.membresiaFin) : 'No especificado'}</div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Estado</label>
                <div style="color: var(--text); font-weight: 500;">
                  ${cliente.activo ? 
                    '<span style="background: #d4edda; color: #155724; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">Activo</span>' : 
                    '<span style="background: #f8d7da; color: #721c24; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">Inactivo</span>'
                  }
                </div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Saldo Actual</label>
                <div style="color: var(--text); font-weight: 500;">
                  ${cliente.saldo > 0 ? 
                    `<span style="color: #dc3545; font-weight: 700;">$${cliente.saldo}</span>` : 
                    '<span style="color: #28a745; font-weight: 700;">$0</span>'
                  }
                </div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Último Ingreso</label>
                <div style="color: var(--text); font-weight: 500;">${cliente.ultimoIngreso ? fmtDate(cliente.ultimoIngreso) : 'Nunca ha ingresado'}</div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Fecha de Registro</label>
                <div style="color: var(--text); font-weight: 500;">${cliente.creadoAt ? fmtDate(cliente.creadoAt) : 'No especificado'}</div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.3rem; color: var(--sub); font-size: 0.9rem; font-weight: 600;">Tipo de Usuario</label>
                <div style="color: var(--text); font-weight: 500;">${cliente.tipo || 'Cliente'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Notas adicionales -->
      ${cliente.notas ? `
      <div style="margin-top: 1.5rem;">
        <h4 style="margin: 0 0 1rem 0; color: var(--text); font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Notas Adicionales
        </h4>
        <div style="background: var(--panel); border-radius: 8px; padding: 1.5rem; border: 1px solid var(--muted);">
          <div style="color: var(--text); line-height: 1.6;">${cliente.notas}</div>
        </div>
      </div>
      ` : ''}

             <!-- Botón de cerrar -->
       <div style="display: flex; justify-content: center; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--muted);">
         <button onclick="cerrarModalVisualizarCliente()" style="background: var(--panel); color: var(--text); border: 1px solid var(--muted); padding: 0.8rem 1.5rem; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
           </svg>
           Cerrar
         </button>
       </div>
    </div>
  `;

  EL('#modals-container').appendChild(modal);
}

function cerrarModalVisualizarCliente() {
  const modal = EL('#modalVisualizarCliente');
  if (modal) {
    modal.remove();
  }
}

// Modal para editar perfil del cliente
function editarClientePerfil(clienteId) {
  const cliente = DB.users.find(u => u.id === clienteId);
  if (!cliente) {
    alert('Cliente no encontrado');
    return;
  }

  const modal = document.createElement('div');
  modal.id = 'modalEditarCliente';
  modal.className = 'modal';
  modal.style.display = 'flex';

  // Obtener opciones de membresías
  const memOpts = DB.memberships
    .map(m => `<option value="${m.id}" ${cliente.membresia === m.id ? 'selected' : ''}>${m.nombre} – $${m.monto}</option>`)
    .join('');

  modal.innerHTML = `
    <div class="modal-content" style="max-width: 350px; max-height: 90vh; overflow-y: auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1.1rem; font-weight: 700;">
          Editar Cliente: ${cliente.nombres} ${cliente.apellidos}
        </h3>
        <button onclick="cerrarModalEditarCliente()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>

      <form id="formEditarCliente">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
          <!-- Columna izquierda: Información personal -->
          <div>
            <h4 style="margin: 0 0 1.5rem 0; color: var(--text); font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Información Personal
            </h4>
            
            <div style="display: grid; gap: 1rem;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Nombres *</label>
                  <input type="text" id="edit_nombres" value="${cliente.nombres || ''}" placeholder="Ingrese nombres" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" required />
                </div>
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Apellidos *</label>
                  <input type="text" id="edit_apellidos" value="${cliente.apellidos || ''}" placeholder="Ingrese apellidos" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" required />
                </div>
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Cédula *</label>
                  <input type="text" id="edit_cedula" value="${cliente.cedula || ''}" placeholder="Ingrese cédula" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
                </div>
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Fecha de nacimiento</label>
                  <input type="date" id="edit_nacimiento" value="${cliente.nacimiento || ''}" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
                </div>
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Email</label>
                  <input type="email" id="edit_email" value="${cliente.email || ''}" placeholder="ejemplo@email.com" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
                </div>
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Teléfono</label>
                  <input type="text" id="edit_telefono" value="${cliente.telefono || ''}" placeholder="+593 99 123 4567" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
                </div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Dirección</label>
                <input type="text" id="edit_direccion" value="${cliente.direccion || ''}" placeholder="Ingrese dirección completa" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Género</label>
                  <select id="edit_genero" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;">
                    <option value="">Seleccionar género</option>
                    <option value="Hombre" ${cliente.genero === 'Hombre' ? 'selected' : ''}>Hombre</option>
                    <option value="Mujer" ${cliente.genero === 'Mujer' ? 'selected' : ''}>Mujer</option>
                  </select>
                </div>
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Obra Social</label>
                  <input type="text" id="edit_obraSocial" value="${cliente.obraSocial || ''}" placeholder="IESS, Privada, etc." style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
                </div>
              </div>
            </div>
          </div>
          
          <!-- Columna derecha: Membresía y configuración -->
          <div>
            <h4 style="margin: 0 0 1.5rem 0; color: var(--text); font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Membresía y Configuración
            </h4>
            
            <div style="display: grid; gap: 1rem;">
              <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Tipo de membresía</label>
                <select id="edit_membresia" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;">
                  <option value="">Seleccionar membresía</option>
                  ${memOpts}
                </select>
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Fecha de inicio</label>
                  <input type="date" id="edit_membresiaInicio" value="${cliente.membresiaInicio || ''}" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
                </div>
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Fecha de vencimiento</label>
                  <input type="date" id="edit_membresiaFin" value="${cliente.membresiaFin || ''}" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
                </div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Saldo actual</label>
                <input type="number" id="edit_saldo" value="${cliente.saldo || 0}" step="0.01" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;" />
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Estado</label>
                <select id="edit_activo" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;">
                  <option value="true" ${cliente.activo ? 'selected' : ''}>Activo</option>
                  <option value="false" ${!cliente.activo ? 'selected' : ''}>Inactivo</option>
                </select>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Tipo de usuario</label>
                <select id="edit_tipo" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;">
                  <option value="Cliente" ${cliente.tipo === 'Cliente' ? 'selected' : ''}>Cliente</option>
                  <option value="Empleado" ${cliente.tipo === 'Empleado' ? 'selected' : ''}>Empleado</option>
                  <option value="Ingreso" ${cliente.tipo === 'Ingreso' ? 'selected' : ''}>Ingreso</option>
                  <option value="Administrador" ${cliente.tipo === 'Administrador' ? 'selected' : ''}>Administrador</option>
                </select>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Notas adicionales</label>
                <textarea id="edit_notas" placeholder="Información adicional del cliente..." rows="3" style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white; resize: vertical;">${cliente.notas || ''}</textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- Botones de acción -->
        <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--muted);">
          <button type="button" onclick="cerrarModalEditarCliente()" style="background: var(--panel); color: var(--text); border: 1px solid var(--muted); padding: 0.8rem 1.5rem; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Cancelar
          </button>
          
          <button type="submit" style="background: var(--ok); color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16L21 8V19C21 20.1046 20.1046 21 19 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <polyline points="17,21 17,13 7,13 7,21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <polyline points="7,3 7,8 15,8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  `;

  EL('#modals-container').appendChild(modal);

  // Evento submit del formulario
  modal.querySelector('#formEditarCliente').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Recopilar datos del formulario
    const datosActualizados = {
      nombres: EL('#edit_nombres').value,
      apellidos: EL('#edit_apellidos').value,
      cedula: EL('#edit_cedula').value,
      nacimiento: EL('#edit_nacimiento').value,
      email: EL('#edit_email').value,
      telefono: EL('#edit_telefono').value,
      direccion: EL('#edit_direccion').value,
      genero: EL('#edit_genero').value,
      obraSocial: EL('#edit_obraSocial').value,
      membresia: EL('#edit_membresia').value,
      membresiaInicio: EL('#edit_membresiaInicio').value,
      membresiaFin: EL('#edit_membresiaFin').value,
      saldo: parseFloat(EL('#edit_saldo').value) || 0,
      activo: EL('#edit_activo').value === 'true',
      tipo: EL('#edit_tipo').value,
      notas: EL('#edit_notas').value
    };

    // Validar campos obligatorios
    if (!datosActualizados.nombres || !datosActualizados.apellidos || !datosActualizados.cedula) {
      alert('Por favor completa los campos obligatorios (Nombres, Apellidos, Cédula)');
      return;
    }

    // Actualizar cliente en la base de datos
    const index = DB.users.findIndex(u => u.id === clienteId);
    if (index !== -1) {
      DB.users[index] = { ...DB.users[index], ...datosActualizados };
      
      // Guardar en localStorage
      localStorage.setItem('DB', JSON.stringify(DB));
      
      alert('Cliente actualizado exitosamente');
      cerrarModalEditarCliente();
      
      // Recargar la vista actual
      if (typeof render === 'function') {
        render();
      }
  } else {
      alert('Error al actualizar el cliente');
    }
  });
}

function cerrarModalEditarCliente() {
  const modal = EL('#modalEditarCliente');
  if (modal) {
    modal.remove();
  }
}
