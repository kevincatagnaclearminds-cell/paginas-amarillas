// Funciones de renderizado de vistas
function render() {
  const root = EL("#viewRoot");
  root.innerHTML = "";
  
  if (active === "cliente-detalle" && currentClientDetail)
    return renderClienteDetalle(root, currentClientDetail);
  if (active === "ingreso") return renderIngreso(root);
  if (active === "todos-clientes") return renderClientes(root);
  if (active === "membresias-caducar") return renderCaducar(root);
  if (active === "nuevos") return renderNuevos(root);
  if (active === "inactivos") return renderInactivos(root);
  if (active === "deudores") return renderDeudores(root);
  if (active === "cumples") return renderCumples(root);
  if (active === "registro") return renderRegistro(root);
  if (active === "asistencias") return renderAsistencias(root);
  if (active === "asignacion-entrenamiento") return renderAsignacionEntrenamiento(root);
  if (active === "plantillas-whatsapp") return renderPlantillasWhatsApp(root);
  if (active === "descuentos") return renderDescuentos(root);
  if (active === "export") return renderExport(root);
  if (active === "membresias") return renderMembresias(root);
  if (active === "pagos") return renderPagos(root);
  if (active === "facturacion") return renderFacturacion(root);
}

// Vista de Ingreso
function renderIngreso(root) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3 class="section-title">🍽️ Nuestros Clientes Comparten sus Comidas</h3>
    <div style="color: var(--sub); font-size: 0.9rem; margin-bottom: 1.5rem; text-align: center;">
      Mira qué están comiendo nuestros miembros del gym hoy
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
      <!-- Cliente 1 -->
      <div style="
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
      " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 25px rgba(0, 0, 0, 0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(0, 0, 0, 0.1)'" onclick="abrirModalComida('maria', 'María González', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBPUEHAaQVVhClqHP9xitwyamwL7FqARYNw&s', 'Hola coach! Esto comí en la mañana 🥗 Ensalada fresca con pollo a la plancha y quinoa. ¡Me siento súper energizada para el entrenamiento de hoy! 💪', 'saludable')">
        <div style="position: relative; height: 200px; overflow: hidden;">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBPUEHAaQVVhClqHP9xitwyamwL7FqARYNw&s" 
            alt="Comida de María"
            style="width: 100%; height: 100%; object-fit: cover;"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div style="
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
          ">🍽️</div>
        </div>
        <div style="padding: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 0.8rem;">
            <div style="
              width: 40px;
              height: 40px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: 600;
              font-size: 1.1rem;
            ">M</div>
            <div>
              <div style="font-weight: 600; color: var(--text); font-size: 1rem;">María González</div>
              <div style="font-size: 0.8rem; color: var(--sub);">Hace 2 horas</div>
            </div>
          </div>
          <div style="
            background: #f8f9fa;
            border-radius: 8px;
            padding: 0.8rem;
            border-left: 3px solid #667eea;
            font-style: italic;
            color: var(--text);
            font-size: 0.9rem;
            line-height: 1.4;
          ">
            "Hola coach! Esto comí en la mañana 🥗 Ensalada fresca con pollo a la plancha y quinoa. ¡Me siento súper energizada para el entrenamiento de hoy! 💪"
          </div>
        </div>
    </div>
    
      <!-- Cliente 2 -->
      <div style="
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
      " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 25px rgba(0, 0, 0, 0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(0, 0, 0, 0.1)'" onclick="abrirModalComida('carlos', 'Carlos Mendoza', 'https://content.clara.es/medio/2023/01/12/recetas-saludables_32d84f1c_1200x630.jpg', 'Hola coach! Esto comí en la mañana 🍳 Huevos revueltos con espinacas, aguacate y pan integral. ¡Perfecto para ganar masa muscular! 💪', 'saludable')">
        <div style="position: relative; height: 200px; overflow: hidden;">
          <img 
            src="https://content.clara.es/medio/2023/01/12/recetas-saludables_32d84f1c_1200x630.jpg" 
            alt="Comida de Carlos"
            style="width: 100%; height: 100%; object-fit: cover;"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div style="
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
          ">🥗</div>
        </div>
        <div style="padding: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 0.8rem;">
            <div style="
              width: 40px;
              height: 40px;
              background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: 600;
              font-size: 1.1rem;
            ">C</div>
            <div>
              <div style="font-weight: 600; color: var(--text); font-size: 1rem;">Carlos Mendoza</div>
              <div style="font-size: 0.8rem; color: var(--sub);">Hace 4 horas</div>
            </div>
          </div>
          <div style="
            background: #f8f9fa;
            border-radius: 8px;
            padding: 0.8rem;
            border-left: 3px solid #f093fb;
            font-style: italic;
            color: var(--text);
            font-size: 0.9rem;
            line-height: 1.4;
          ">
            "Hola coach! Esto comí en la mañana 🍳 Huevos revueltos con espinacas, aguacate y pan integral. ¡Perfecto para ganar masa muscular! 💪"
          </div>
        </div>
      </div>
      
      <!-- Cliente 3 -->
      <div style="
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
      " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 25px rgba(0, 0, 0, 0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(0, 0, 0, 0.1)'" onclick="abrirModalComida('ana', 'Ana Rodríguez', 'https://comedera.com/wp-content/uploads/sites/9/2021/07/salchipapas.jpg', 'Hola coach! Esto comí en la mañana 🍟 Salchipapas con salsas. ¡Día de cheat meal pero con moderación! Todo es equilibrio 😊', 'tacharra')">
        <div style="position: relative; height: 200px; overflow: hidden;">
          <img 
            src="https://comedera.com/wp-content/uploads/sites/9/2021/07/salchipapas.jpg" 
            alt="Comida de Ana"
            style="width: 100%; height: 100%; object-fit: cover;"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div style="
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
          ">🍟</div>
    </div>
        <div style="padding: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 0.8rem;">
            <div style="
              width: 40px;
              height: 40px;
              background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: 600;
              font-size: 1.1rem;
            ">A</div>
            <div>
              <div style="font-weight: 600; color: var(--text); font-size: 1rem;">Ana Rodríguez</div>
              <div style="font-size: 0.8rem; color: var(--sub);">Hace 6 horas</div>
            </div>
          </div>
          <div style="
            background: #f8f9fa;
            border-radius: 8px;
            padding: 0.8rem;
            border-left: 3px solid #4facfe;
            font-style: italic;
            color: var(--text);
            font-size: 0.9rem;
            line-height: 1.4;
          ">
            "Hola coach! Esto comí en la mañana 🍟 Salchipapas con salsas. ¡Día de cheat meal pero con moderación! Todo es equilibrio 😊"
          </div>
        </div>
      </div>
    </div>
    
    <div style="
      background: linear-gradient(135deg, rgba(102, 187, 106, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%);
      border: 1px solid rgba(102, 187, 106, 0.3);
      border-radius: 8px;
      padding: 1rem;
      margin-top: 1.5rem;
      text-align: center;
    ">
      <div style="color: var(--ok); font-weight: 600; margin-bottom: 0.5rem;">💬 ¡Comparte tu comida!</div>
      <div style="color: var(--sub); font-size: 0.9rem;">
        ¿Qué comiste hoy? Comparte tu foto con el coach y motiva a otros miembros del gym.
      </div>
    </div>
  `;

  root.appendChild(card);
}

// Vista de Clientes
function renderClientes(root) {
  const wrap = document.createElement("div");
  wrap.className = "grid cols-1";
  
  const card = document.createElement("div");
  card.className = "card";
  
  const toolbar = document.createElement("div");
  toolbar.className = "toolbar";
  toolbar.style.marginBottom = "1rem";
  toolbar.innerHTML = `
    <div style="
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 100%;
      max-width: 400px;
    ">
      <div style="
        position: relative;
        flex: 1;
      ">
        <input 
          type="text" 
          id="buscarCedula" 
          placeholder="Buscar por cédula..." 
          style="
            width: 100%;
            padding: 0.8rem 1rem 0.8rem 2.5rem;
            border: 1px solid var(--muted);
            border-radius: 8px;
            font-size: 1rem;
            background: white;
            outline: none;
            transition: border-color 0.2s ease;
          "
          oninput="filtrarPorCedula(this.value)"
        />
        <div style="
          position: absolute;
          left: 0.8rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--sub);
          font-size: 1.1rem;
        ">🔍</div>
      </div>
    </div>
  `;
  
  card.appendChild(toolbar);
  
  // Tabla de clientes
  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Cliente</th>
        <th>Membresía</th>
        <th>Estado</th>
        <th>Último ingreso</th>
        <th>Saldo</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      ${DB.users.map(user => `
        <tr>
          <td>
            <div style="display: flex; align-items: center; gap: 1rem;">
              <div class="avatar" style="width: 40px; height: 40px; font-size: 0.8rem;">
                ${user.nombres.charAt(0)}${user.apellidos.charAt(0)}
              </div>
              <div>
                <div style="font-weight: 600;">${user.nombres} ${user.apellidos}</div>
                <div style="font-size: 0.8rem; color: var(--sub);">${user.cedula}</div>
              </div>
            </div>
          </td>
          <td>
            <div style="font-weight: 600;">${user.membresia}</div>
            <div style="font-size: 0.8rem; color: var(--sub);">Vence: ${fmtDate(user.membresiaFin)}</div>
          </td>
          <td>
            ${user.activo ? 
              '<span class="badge tag-success">Activo</span>' : 
              '<span class="badge tag-danger">Inactivo</span>'
            }
          </td>
          <td>${fmtDate(user.ultimoIngreso)}</td>
          <td>
            ${user.saldo > 0 ? 
              `<span class="badge tag-danger">$${user.saldo}</span>` : 
              '<span class="badge tag-success">$0</span>'
            }
          </td>
          <td>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn mini" onclick="verPagosCliente('${user.id}')">Ver Pagos</button>
              <button class="btn mini ghost" onclick="abrirModalWhatsApp('${user.saldo > 0 ? 'deudores' : 'general'}', '${user.id}')">📱</button>
            </div>
          </td>
        </tr>
      `).join('')}
    </tbody>
  `;
  
  card.appendChild(table);
  wrap.appendChild(card);
  root.appendChild(wrap);
}

// Vista de Membresías a Caducar
function renderCaducar(root) {
  const wrap = document.createElement("div");
  wrap.className = "grid cols-1";
  
  const card = document.createElement("div");
  card.className = "card";
  
  const now = NOW();
  const clientesCaducando = DB.users.filter(user => {
    const diasRestantes = daysDiff(user.membresiaFin, now);
    return diasRestantes <= 5 && diasRestantes >= 0;
  });
  
  card.innerHTML = `
    <h3 class="section-title">Membresías a caducar (≤5 días)</h3>
    <div style="margin-bottom: 1rem; color: var(--sub);">
      Se encontraron ${clientesCaducando.length} clientes con membresías próximas a vencer
    </div>
  `;
  
  if (clientesCaducando.length > 0) {
    const table = document.createElement("table");
    table.innerHTML = `
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Membresía</th>
          <th>Días restantes</th>
          <th>Saldo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${clientesCaducando.map(user => {
          const diasRestantes = daysDiff(user.membresiaFin, now);
          return `
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <div class="avatar" style="width: 40px; height: 40px; font-size: 0.8rem;">
                    ${user.nombres.charAt(0)}${user.apellidos.charAt(0)}
                  </div>
                  <div>
                    <div style="font-weight: 600;">${user.nombres} ${user.apellidos}</div>
                    <div style="font-size: 0.8rem; color: var(--sub);">${user.telefono}</div>
                  </div>
                </div>
              </td>
              <td>
                <div style="font-weight: 600;">${user.membresia}</div>
                <div style="font-size: 0.8rem; color: var(--sub);">Vence: ${fmtDate(user.membresiaFin)}</div>
              </td>
              <td>
                <span class="badge ${diasRestantes === 0 ? 'tag-danger' : 'tag-warn'}">
                  ${diasRestantes === 0 ? 'Vence hoy' : `${diasRestantes} días`}
                </span>
              </td>
              <td>
                ${user.saldo > 0 ? 
                  `<span class="badge tag-danger">$${user.saldo}</span>` : 
                  '<span class="badge tag-success">$0</span>'
                }
              </td>
              <td>
                <div style="display: flex; gap: 0.5rem;">
                  <button class="btn mini primary" onclick="abrirModalRenovarMembresia(${JSON.stringify(user)})">Renovar</button>
                  <button class="btn mini ghost" onclick="abrirModalWhatsApp('membresia_vencer', '${user.id}')">📱</button>
                </div>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    `;
    
    card.appendChild(table);
  } else {
    card.innerHTML += `
      <div style="text-align: center; padding: 2rem; color: var(--sub);">
        No hay membresías próximas a vencer
      </div>
    `;
  }
  
  wrap.appendChild(card);
  root.appendChild(wrap);
}

// Vista de Deudores
function renderDeudores(root) {
  const wrap = document.createElement("div");
  wrap.className = "grid cols-1";
  
  const card = document.createElement("div");
  card.className = "card";
  
  const deudores = DB.users.filter(user => user.saldo > 0);
  
  card.innerHTML = `
    <h3 class="section-title">Clientes con saldo pendiente</h3>
    <div style="margin-bottom: 1rem; color: var(--sub);">
      Se encontraron ${deudores.length} clientes con saldo pendiente
    </div>
  `;
  
  if (deudores.length > 0) {
    const table = document.createElement("table");
    table.innerHTML = `
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Saldo pendiente</th>
          <th>Último ingreso</th>
          <th>Membresía</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${deudores.map(user => `
          <tr>
            <td>
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div class="avatar" style="width: 40px; height: 40px; font-size: 0.8rem;">
                  ${user.nombres.charAt(0)}${user.apellidos.charAt(0)}
                </div>
                <div>
                  <div style="font-weight: 600;">${user.nombres} ${user.apellidos}</div>
                  <div style="font-size: 0.8rem; color: var(--sub);">${user.telefono}</div>
                </div>
              </div>
            </td>
            <td>
              <span class="badge tag-danger" style="font-size: 1rem;">$${user.saldo}</span>
            </td>
            <td>${fmtDate(user.ultimoIngreso)}</td>
            <td>
              <div style="font-weight: 600;">${user.membresia}</div>
              <div style="font-size: 0.8rem; color: var(--sub);">Vence: ${fmtDate(user.membresiaFin)}</div>
            </td>
            <td>
              <div style="display: flex; gap: 0.5rem;">
                <button class="btn mini success" onclick="abrirModalPago()">💳 Pagar</button>
                <button class="btn mini ghost" onclick="abrirModalWhatsApp('deudores', '${user.id}')">📱 WhatsApp</button>
              </div>
            </td>
          </tr>
        `).join('')}
      </tbody>
    `;
    
    card.appendChild(table);
  } else {
    card.innerHTML += `
      <div style="text-align: center; padding: 2rem; color: var(--sub);">
        No hay clientes con saldo pendiente
      </div>
    `;
  }
  
  wrap.appendChild(card);
  root.appendChild(wrap);
}

// Vista de Plantillas WhatsApp
function renderPlantillasWhatsApp(root) {
  const wrap = document.createElement("div");
  wrap.className = "grid cols-1";
  
  const card = document.createElement("div");
  card.className = "card";
  
  card.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <h3 class="section-title" style="margin: 0;">Plantillas de WhatsApp</h3>
      <button class="btn primary" onclick="abrirModalNuevaPlantilla()" style="
        background: var(--brand);
        color: white;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      ">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        + Nueva Plantilla
      </button>
    </div>
    
    <!-- Filtros de búsqueda -->
    <div style="display: flex; gap: 1rem; margin-bottom: 2rem; align-items: end;">
      <div style="flex: 1;">
        <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Categoría</label>
        <select 
          id="categoriaPlantilla" 
          style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
          onchange="filtrarPlantillas()"
        >
          <option value="">Todas las categorías</option>
          <option value="recordatorio">Recordatorio</option>
          <option value="bienvenida">Bienvenida</option>
          <option value="pago">Pago</option>
          <option value="cumpleanos">Cumpleaños</option>
          <option value="general">General</option>
        </select>
      </div>
      <div style="flex: 1;">
        <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Estado</label>
        <select 
          id="estadoPlantilla" 
          style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
          onchange="filtrarPlantillas()"
        >
          <option value="">Todos los estados</option>
          <option value="activa">Activa</option>
          <option value="inactiva">Inactiva</option>
        </select>
      </div>
      <div style="flex: 2;">
        <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Buscar plantilla</label>
        <input 
          type="text" 
          id="buscarPlantilla" 
          placeholder="Buscar plantilla..." 
          style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
          oninput="filtrarPlantillas()"
        />
      </div>
    </div>
    
    <!-- Lista de plantillas -->
    <div style="display: grid; gap: 1.5rem;">
      <!-- Plantilla: Recordatorio de Pago -->
      <div style="
        background: white;
        border: 1px solid var(--muted);
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      ">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
          <div style="flex: 1;">
            <h4 style="margin: 0 0 0.5rem 0; color: var(--text); font-size: 1.2rem; font-weight: 600;">Recordatorio de Pago</h4>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span style="
                background: var(--ok);
                color: white;
                padding: 0.3rem 0.8rem;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 600;
              ">Activa</span>
              <span style="
                background: var(--brand);
                color: white;
                padding: 0.3rem 0.8rem;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 600;
              ">recordatorio</span>
              <span style="
                background: var(--panel);
                color: var(--text);
                padding: 0.3rem 0.8rem;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 600;
              ">Creada: 1/9/2025</span>
            </div>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn" onclick="abrirModalEditarPlantilla('p1', 'Recordatorio de Pago', 'recordatorio', 'Hola {nombre}, tu membresía vence el {fecha}. Renueva ahora y mantén tu rutina de ejercicios activa. ¡Te esperamos en el gimnasio!', true)" style="
              background: var(--text);
              color: white;
              border: none;
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
            " title="Editar plantilla">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="btn danger" onclick="toggleEstadoPlantilla('p1')" style="
              background: var(--danger);
              color: white;
              border: none;
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
            " title="Pausar/Activar plantilla" id="toggle-p1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="4" width="4" height="16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="14" y="4" width="4" height="16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="btn danger" onclick="eliminarPlantilla('p1')" style="
              background: var(--danger);
              color: white;
              border: none;
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
            " title="Eliminar plantilla">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H5H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Contenido del mensaje -->
        <div style="
          background: var(--panel);
          border-radius: 8px;
          padding: 1rem;
          border: 1px solid var(--muted);
          margin-bottom: 1rem;
        ">
          <div style="font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Mensaje:</div>
          <div style="color: var(--sub); font-size: 0.9rem; line-height: 1.5;">
            Hola {nombre}, tu membresía vence el {fecha}. Renueva ahora y mantén tu rutina de ejercicios activa. ¡Te esperamos en el gimnasio!
          </div>
        </div>
        
        <!-- Botones de acción -->
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn" onclick="copiarPlantilla('p1')" style="
              background: var(--text);
              color: white;
              border: none;
              padding: 0.5rem 1rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
              display: flex;
              align-items: center;
              gap: 0.5rem;
            ">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4V2C8 1.46957 8.21071 0.96086 8.58579 0.58579C8.96086 0.21071 9.46957 0 10 0H18C18.5304 0 19.0391 0.21071 19.4142 0.58579C19.7893 0.96086 20 1.46957 20 2V4M8 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H16C16.5304 22 17.0391 21.7893 17.4142 21.4142C17.7893 21.0391 18 20.5304 18 20V6C18 5.46957 17.7893 4.96086 17.4142 4.58579C17.0391 4.21071 16.5304 4 16 4H8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Copiar
            </button>
            <button class="btn success" onclick="usarPlantilla('p1')" style="
              background: var(--ok);
              color: white;
              border: none;
              padding: 0.5rem 1rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
              display: flex;
              align-items: center;
              gap: 0.5rem;
            ">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Usar
            </button>
          </div>
        </div>
      </div>
      
      <!-- Plantilla: Bienvenida -->
      <div style="
        background: white;
        border: 1px solid var(--muted);
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      ">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
          <div style="flex: 1;">
            <h4 style="margin: 0 0 0.5rem 0; color: var(--text); font-size: 1.2rem; font-weight: 600;">Bienvenida</h4>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span style="
                background: var(--ok);
                color: white;
                padding: 0.3rem 0.8rem;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 600;
              ">Activa</span>
              <span style="
                background: var(--brand);
                color: white;
                padding: 0.3rem 0.8rem;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 600;
              ">bienvenida</span>
              <span style="
                background: var(--panel);
                color: var(--text);
                padding: 0.3rem 0.8rem;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 600;
              ">Creada: 1/9/2025</span>
            </div>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn" onclick="abrirModalEditarPlantilla('p2', 'Bienvenida', 'bienvenida', '¡Bienvenido/a {nombre} al gimnasio! Tu membresía está activa desde hoy. Disfruta de todas nuestras instalaciones y clases.', true)" style="
              background: var(--text);
              color: white;
              border: none;
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
            " title="Editar plantilla">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="btn danger" onclick="toggleEstadoPlantilla('p2')" style="
              background: var(--danger);
              color: white;
              border: none;
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
            " title="Pausar/Activar plantilla" id="toggle-p2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="4" width="4" height="16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="14" y="4" width="4" height="16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="btn danger" onclick="eliminarPlantilla('p2')" style="
              background: var(--danger);
              color: white;
              border: none;
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
            " title="Eliminar plantilla">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H5H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Contenido del mensaje -->
        <div style="
          background: var(--panel);
          border-radius: 8px;
          padding: 1rem;
          border: 1px solid var(--muted);
          margin-bottom: 1rem;
        ">
          <div style="font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Mensaje:</div>
          <div style="color: var(--sub); font-size: 0.9rem; line-height: 1.5;">
            ¡Bienvenido/a {nombre} al gimnasio! Tu membresía está activa desde hoy. Disfruta de todas nuestras instalaciones y clases.
          </div>
        </div>
        
        <!-- Botones de acción -->
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn" onclick="copiarPlantilla('p2')" style="
              background: var(--text);
              color: white;
              border: none;
              padding: 0.5rem 1rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
              display: flex;
              align-items: center;
              gap: 0.5rem;
            ">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4V2C8 1.46957 8.21071 0.96086 8.58579 0.58579C8.96086 0.21071 9.46957 0 10 0H18C18.5304 0 19.0391 0.21071 19.4142 0.58579C19.7893 0.96086 20 1.46957 20 2V4M8 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H16C16.5304 22 17.0391 21.7893 17.4142 21.4142C17.7893 21.0391 18 20.5304 18 20V6C18 5.46957 17.7893 4.96086 17.4142 4.58579C17.0391 4.21071 16.5304 4 16 4H8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Copiar
            </button>
            <button class="btn success" onclick="usarPlantilla('p2')" style="
              background: var(--ok);
              color: white;
              border: none;
              padding: 0.5rem 1rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
              display: flex;
              align-items: center;
              gap: 0.5rem;
            ">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Usar
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  wrap.appendChild(card);
  root.appendChild(wrap);
}

// Vista de Descuentos
function renderDescuentos(root) {
  const wrap = document.createElement("div");
  wrap.className = "grid cols-1";
  
  const card = document.createElement("div");
  card.className = "card";
  
  card.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <h3 class="section-title" style="margin: 0;">Gestión de Descuentos</h3>
      <button class="btn primary" onclick="abrirModalNuevoDescuento()" style="
        background: var(--brand);
        color: white;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      ">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        + Agregar Descuento
      </button>
    </div>
    
    <!-- Filtros de búsqueda -->
    <div style="display: flex; gap: 1rem; margin-bottom: 2rem; align-items: end;">
      <div style="flex: 1;">
        <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Estado</label>
        <select 
          id="estadoDescuento" 
          style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
          onchange="filtrarDescuentos()"
        >
          <option value="">Todos los estados</option>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
      </div>
      <div style="flex: 2;">
        <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Buscar descuento</label>
        <input 
          type="text" 
          id="buscarDescuento" 
          placeholder="Buscar descuento..." 
          style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
          oninput="filtrarDescuentos()"
        />
      </div>
    </div>
    
    <!-- Lista de descuentos -->
    <div style="display: grid; gap: 1rem;">
      <!-- Descuento Anual -->
      <div style="
        background: white;
        border: 1px solid var(--muted);
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      ">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <div style="flex: 1;">
            <h4 style="margin: 0; color: var(--text); font-size: 1.2rem; font-weight: 600;">Descuento Anual</h4>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="
              background: var(--ok);
              color: white;
              padding: 0.3rem 0.8rem;
              border-radius: 20px;
              font-size: 0.8rem;
              font-weight: 600;
            ">Activo</span>
            <span style="
              background: var(--brand);
              color: white;
              padding: 0.3rem 0.8rem;
              border-radius: 20px;
              font-size: 0.8rem;
              font-weight: 600;
            ">20%</span>
            <span style="
              background: var(--panel);
              color: var(--text);
              padding: 0.3rem 0.8rem;
              border-radius: 20px;
              font-size: 0.8rem;
              font-weight: 600;
            ">Creado: 1/9/2025</span>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn" onclick="abrirModalEditarDescuento('d1', 'Descuento Anual', 20, true)" style="
              background: var(--text);
              color: white;
              border: none;
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
            " title="Editar descuento">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="btn" onclick="toggleEstadoDescuento('d1')" style="
              background: var(--ok);
              color: white;
              border: none;
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
            " title="Cambiar estado (verde = activo, rojo = inactivo)" id="semaforo-d1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="6" fill="currentColor"/>
              </svg>
            </button>
            <button class="btn danger" onclick="eliminarDescuento('d1')" style="
              background: var(--danger);
              color: white;
              border: none;
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
            " title="Eliminar descuento">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H5H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Detalles expandidos -->
        <div style="
          background: var(--panel);
          border-radius: 8px;
          padding: 1rem;
          border: 1px solid var(--muted);
        ">
          <h5 style="margin: 0 0 0.5rem 0; color: var(--text); font-size: 1rem; font-weight: 600;">Detalles del descuento:</h5>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; font-size: 0.9rem;">
            <div><strong>Nombre:</strong> Descuento Anual</div>
            <div><strong>Porcentaje:</strong> 20%</div>
            <div><strong>Estado:</strong> Activo</div>
            <div><strong>Fecha de creación:</strong> 1/9/2025</div>
          </div>
        </div>
      </div>
      
      <!-- Descuento Estudiantil -->
      <div style="
        background: white;
        border: 1px solid var(--muted);
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      ">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <div style="flex: 1;">
            <h4 style="margin: 0; color: var(--text); font-size: 1.2rem; font-weight: 600;">Descuento Estudiantil</h4>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="
              background: var(--ok);
              color: white;
              padding: 0.3rem 0.8rem;
              border-radius: 20px;
              font-size: 0.8rem;
              font-weight: 600;
            ">Activo</span>
            <span style="
              background: var(--brand);
              color: white;
              padding: 0.3rem 0.8rem;
              border-radius: 20px;
              font-size: 0.8rem;
              font-weight: 600;
            ">15%</span>
            <span style="
              background: var(--panel);
              color: var(--text);
              padding: 0.3rem 0.8rem;
              border-radius: 20px;
              font-size: 0.8rem;
              font-weight: 600;
            ">Creado: 1/9/2025</span>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn" onclick="abrirModalEditarDescuento('d2', 'Descuento Estudiantil', 15, true)" style="
              background: var(--text);
              color: white;
              border: none;
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
            " title="Editar descuento">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="btn" onclick="toggleEstadoDescuento('d2')" style="
              background: var(--ok);
              color: white;
              border: none;
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
            " title="Cambiar estado (verde = activo, rojo = inactivo)" id="semaforo-d2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="6" fill="currentColor"/>
              </svg>
            </button>
            <button class="btn danger" onclick="eliminarDescuento('d2')" style="
              background: var(--danger);
              color: white;
              border: none;
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              cursor: pointer;
              font-size: 0.8rem;
              font-weight: 600;
            " title="Eliminar descuento">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H5H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Detalles expandidos -->
        <div style="
          background: var(--panel);
          border-radius: 8px;
          padding: 1rem;
          border: 1px solid var(--muted);
        ">
          <h5 style="margin: 0 0 0.5rem 0; color: var(--text); font-size: 1rem; font-weight: 600;">Detalles del descuento:</h5>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; font-size: 0.9rem;">
            <div><strong>Nombre:</strong> Descuento Estudiantil</div>
            <div><strong>Porcentaje:</strong> 15%</div>
            <div><strong>Estado:</strong> Activo</div>
            <div><strong>Fecha de creación:</strong> 1/9/2025</div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  wrap.appendChild(card);
  root.appendChild(wrap);
}

// Vista de Exportar
function renderExport(root) {
  const wrap = document.createElement("div");
  wrap.className = "grid cols-1";
  
  const card = document.createElement("div");
  card.className = "card";
  
  card.innerHTML = `
    <h3 class="section-title">Exportar datos</h3>
    
    <div style="display: grid; gap: 1rem;">
      <div style="border: 1px solid var(--muted); border-radius: 8px; padding: 1rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: var(--text);">Clientes</h4>
        <p style="margin: 0; color: var(--sub); font-size: 0.9rem;">
          Exporta la lista completa de clientes con sus datos y membresías
        </p>
        <button class="btn" style="margin-top: 0.5rem;" onclick="exportarClientes()">
          📊 Exportar CSV
        </button>
      </div>
      
      <div style="border: 1px solid var(--muted); border-radius: 8px; padding: 1rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: var(--text);">Pagos</h4>
        <p style="margin: 0; color: var(--sub); font-size: 0.9rem;">
          Exporta el historial de pagos y cargos
        </p>
        <button class="btn" style="margin-top: 0.5rem;" onclick="exportarPagos()">
          💰 Exportar CSV
        </button>
      </div>
      
      <div style="border: 1px solid var(--muted); border-radius: 8px; padding: 1rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: var(--text);">Asistencia</h4>
        <p style="margin: 0; color: var(--sub); font-size: 0.9rem;">
          Exporta el registro de asistencia de los clientes
        </p>
        <button class="btn" style="margin-top: 0.5rem;" onclick="exportarAsistencia()">
          📅 Exportar CSV
        </button>
      </div>
    </div>
  `;
  
  wrap.appendChild(card);
  root.appendChild(wrap);
}

// Funciones de exportación
function exportarClientes() {
  const csvContent = "data:text/csv;charset=utf-8," + 
    "ID,Nombres,Apellidos,Cédula,Email,Teléfono,Membresía,Vence,Saldo,Estado\n" +
    DB.users.map(user => 
      `${user.id},${user.nombres},${user.apellidos},${user.cedula},${user.email},${user.telefono},${user.membresia},${fmtDate(user.membresiaFin)},${user.saldo},${user.activo ? 'Activo' : 'Inactivo'}`
    ).join("\n");
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "clientes_gym.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportarPagos() {
  const csvContent = "data:text/csv;charset=utf-8," + 
    "ID,Cliente,Monto,Fecha,Notas\n" +
    DB.payments.map(payment => 
      `${payment.id},${payment.clientId},${payment.amount},${fmtDate(payment.at)},${payment.note}`
    ).join("\n");
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "pagos_gym.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportarAsistencia() {
  const csvContent = "data:text/csv;charset=utf-8," + 
    "ID,Cliente,Tipo,Fecha\n" +
    DB.attendance.map(att => 
      `${att.id},${att.clientId},${att.type},${fmtDate(att.at)}`
    ).join("\n");
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "asistencia_gym.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Funciones auxiliares
function verCliente(userId) {
  const user = DB.users.find(u => u.id === userId);
  if (user) {
    currentClientDetail = user;
    active = "cliente-detalle";
    render();
  }
}

function validarCedula(cedula) {
  // Implementar validación de cédula ecuatoriana
  if (cedula.length === 10) {
    // Aquí iría la lógica de validación
    console.log("Cédula válida:", cedula);
  }
}

function limpiarCedula() {
  EL("#searchCedula").value = "";
  EL("#resultCedula").innerHTML = "";
}


// SECCIÓN: NUEVOS CLIENTES
function renderNuevos(root) {
  const arr = [...DB.users].sort(
    (a, b) => new Date(b.creadoAt) - new Date(a.creadoAt)
  );
  const rows = arr
    .map(
      (u) => `<tr style="cursor: pointer;" onclick="verClienteDetalle('${
        u.id
      }')">
<td><b>${u.nombres} ${u.apellidos}</b><div class="muted mini">${
        u.cedula
      }</div></td>
<td>${fmtDate(u.creadoAt)} ${fmtTime(u.creadoAt)}</td>
<td>${DB.memberships.find((m) => m.id === u.membresia)?.nombre || "-"}</td>
<td>${DB.settings.sucursal}</td>
<td>
  <div style="display: flex; gap: 0.5rem;">
    <button class="btn" onclick="event.stopPropagation(); visualizarCliente('${
      u.id
    }')" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">
      👁️ Ver Info
    </button>
    <button class="btn success" onclick="event.stopPropagation(); editarClientePerfil('${
      u.id
    }')" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">
      ✏️ Editar
    </button>
    <button class="btn" onclick="event.stopPropagation(); abrirModalWhatsApp('nuevos_clientes', '${
      u.id
    }')" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">
      📱 WhatsApp
    </button>
  </div>
</td>
</tr>`
    )
    .join("");
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
  <h3 class="section-title" style="margin: 0;">Nuevos clientes</h3>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <input
      type="text"
      id="buscarNuevosClientes"
      placeholder="Buscar por nombre o cédula..."
      style="
        padding: 0.5rem 0.8rem;
        border: 1px solid var(--muted);
        border-radius: 6px;
        background: white;
        width: 250px;
      "
      oninput="filtrarNuevosClientes()"
    />
    <button
      onclick="limpiarBusquedaNuevos()"
      style="
        background: var(--panel);
        color: var(--text);
        border: 1px solid var(--muted);
        padding: 0.5rem 1rem;
        border-radius: 6px;
        cursor: pointer;
      "
    >
      Limpiar
    </button>
  </div>
</div>
<table>
  <thead>
    <tr>
      <th>Cliente</th>
      <th>Fecha de registro</th>
      <th>Membresía</th>
      <th>Sucursal</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody id="tablaNuevosClientes">${rows}</tbody>
</table>`;
  root.append(card);
}

// Función para filtrar clientes por cédula en la vista principal
function filtrarPorCedula(valor) {
  const tabla = document.querySelector('table tbody');
  if (!tabla) return;
  
  const filas = tabla.querySelectorAll('tr');
  const valorBusqueda = valor.toLowerCase().trim();
  
  filas.forEach(fila => {
    const cedula = fila.querySelector('td:nth-child(1) .muted.mini')?.textContent.toLowerCase() || '';
    const nombre = fila.querySelector('td:nth-child(1) b')?.textContent.toLowerCase() || '';
    
    if (cedula.includes(valorBusqueda) || nombre.includes(valorBusqueda)) {
      fila.style.display = '';
    } else {
      fila.style.display = 'none';
    }
  });
}

// Función para generar pagos simulados para un cliente
function generarPagosSimulados(cliente) {
  const pagosSimulados = [];
  const metodosPago = ['efectivo', 'tarjeta', 'transferencia', 'deposito'];
  const conceptos = [
    'Pago de membresía mensual',
    'Pago de membresía trimestral', 
    'Pago de membresía anual',
    'Pago por servicios adicionales',
    'Pago por equipamiento',
    'Pago por clases especiales',
    'Pago por personal trainer',
    'Pago por suplementos'
  ];
  
  // Generar pagos de los últimos 12 meses
  const fechaActual = new Date();
  for (let i = 0; i < 8; i++) {
    const fechaPago = new Date(fechaActual);
    fechaPago.setMonth(fechaPago.getMonth() - i);
    
    // Generar fecha aleatoria dentro del mes
    const diaAleatorio = Math.floor(Math.random() * 28) + 1;
    fechaPago.setDate(diaAleatorio);
    
    // Generar hora aleatoria
    const horaAleatoria = Math.floor(Math.random() * 12) + 8; // Entre 8 AM y 8 PM
    const minutoAleatorio = Math.floor(Math.random() * 60);
    fechaPago.setHours(horaAleatoria, minutoAleatorio, 0);
    
    // Generar monto aleatorio según el tipo de membresía
    let montoBase;
    switch(cliente.membresia.toLowerCase()) {
      case 'mensual':
        montoBase = 25 + Math.random() * 15; // $25-$40
        break;
      case 'trimestral':
        montoBase = 60 + Math.random() * 20; // $60-$80
        break;
      case 'anual':
        montoBase = 200 + Math.random() * 50; // $200-$250
        break;
      default:
        montoBase = 30 + Math.random() * 20; // $30-$50
    }
    
    const monto = Math.round(montoBase * 100) / 100; // Redondear a 2 decimales
    
    // Seleccionar método y concepto aleatorio
    const metodoPago = metodosPago[Math.floor(Math.random() * metodosPago.length)];
    const concepto = conceptos[Math.floor(Math.random() * conceptos.length)];
    
    pagosSimulados.push({
      id: `simulado_${cliente.id}_${i}`,
      clienteId: cliente.id,
      clienteNombre: `${cliente.nombres} ${cliente.apellidos}`,
      clienteIdentificacion: cliente.cedula,
      fechaPago: fechaPago.toISOString(),
      monto: monto,
      metodoPago: metodoPago,
      concepto: concepto,
      esSimulado: true
    });
  }
  
  // Ordenar por fecha (más reciente primero)
  return pagosSimulados.sort((a, b) => new Date(b.fechaPago) - new Date(a.fechaPago));
}

// Función para generar membresías simuladas para un cliente
function generarMembresiasSimuladas(cliente) {
  const membresiasSimuladas = [];
  const tiposMembresia = [
    { nombre: 'Plan Diario', duracion: 1, precio: 5 },
    { nombre: 'Plan Semanal', duracion: 7, precio: 25 },
    { nombre: 'Plan Mensual', duracion: 30, precio: 80 },
    { nombre: 'Plan Trimestral', duracion: 90, precio: 200 },
    { nombre: 'Plan Anual', duracion: 365, precio: 600 }
  ];
  
  // Generar membresías de los últimos 2 años
  const fechaActual = new Date();
  for (let i = 0; i < 5; i++) {
    const fechaInicio = new Date(fechaActual);
    fechaInicio.setMonth(fechaInicio.getMonth() - (i * 3)); // Cada 3 meses
    
    const tipoMembresia = tiposMembresia[i];
    const fechaVencimiento = new Date(fechaInicio);
    fechaVencimiento.setDate(fechaVencimiento.getDate() + tipoMembresia.duracion);
    
    // Calcular estado y días restantes
    const diasRestantes = Math.ceil((fechaVencimiento - fechaActual) / (1000 * 60 * 60 * 24));
    const estado = diasRestantes > 0 ? 'activa' : 'vencida';
    const mesesRestantes = Math.ceil(diasRestantes / 30);
    
    // Generar número de membresía aleatorio
    const numeroMembresia = Math.floor(Math.random() * 90000) + 10000;
    
    // Generar descuento aleatorio (0%, 10%, 15%, 20%)
    const descuentos = [0, 10, 15, 20];
    const descuento = descuentos[Math.floor(Math.random() * descuentos.length)];
    
    // Auto-renovación aleatoria
    const autoRenovacion = Math.random() > 0.5;
    
    membresiasSimuladas.push({
      id: `membresia_${cliente.id}_${i}`,
      numero: numeroMembresia,
      nombre: tipoMembresia.nombre,
      descuento: descuento,
      inicio: fechaInicio.toISOString(),
      vencimiento: fechaVencimiento.toISOString(),
      estado: estado,
      diasRestantes: diasRestantes,
      mesesRestantes: mesesRestantes,
      autoRenovacion: autoRenovacion,
      precio: tipoMembresia.precio,
      esSimulado: true
    });
  }
  
  // Ordenar por fecha de inicio (más reciente primero)
  return membresiasSimuladas.sort((a, b) => new Date(b.inicio) - new Date(a.inicio));
}

// Función para ver todos los pagos de un cliente
function verPagosCliente(clienteId) {
  console.log('Función verPagosCliente llamada con ID:', clienteId);
  
  const cliente = DB.users.find(u => u.id === clienteId);
  if (!cliente) {
    console.error('Cliente no encontrado con ID:', clienteId);
    return;
  }
  
  console.log('Cliente encontrado:', cliente);
  
  // Generar pagos simulados para el cliente
  const pagosSimulados = generarPagosSimulados(cliente);
  console.log('Pagos simulados generados:', pagosSimulados.length);
  
  // Obtener pagos reales del cliente desde DB.pagosInformados
  const pagosReales = (DB.pagosInformados || []).filter(pago => 
    pago.clienteId === clienteId || 
    pago.clienteIdentificacion === cliente.cedula ||
    pago.clienteNombre.toLowerCase().includes(cliente.nombres.toLowerCase()) ||
    pago.clienteNombre.toLowerCase().includes(cliente.apellidos.toLowerCase())
  );
  
  // Combinar pagos reales y simulados
  const pagosCliente = [...pagosReales, ...pagosSimulados];
  
  // Generar membresías simuladas para el cliente
  const membresiasCliente = generarMembresiasSimuladas(cliente);
  console.log('Membresías simuladas generadas:', membresiasCliente.length);
  
  // Buscar el contenedor principal - usar el mismo que usa la función render
  let mainContent = document.querySelector('#app');
  if (!mainContent) {
    // Si no encuentra #app, buscar en el DOM actual
    const currentView = document.querySelector('.grid.cols-1');
    if (currentView && currentView.parentElement) {
      mainContent = currentView.parentElement;
    }
  }
  if (!mainContent) {
    mainContent = document.body;
  }
  
  console.log('Main content encontrado:', mainContent);
  
  if (mainContent) {
    mainContent.innerHTML = '';
    console.log('Contenido principal limpiado');
  }
  
  // Crear la vista completa del cliente
  const clienteView = document.createElement('div');
  clienteView.id = 'clienteView';
  clienteView.className = 'grid cols-1';
  
  clienteView.innerHTML = `
    <div class="card">
      <!-- Header con botón de regreso -->
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--muted);
      ">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <button onclick="volverATodosLosClientes()" style="
            background: var(--panel);
            color: var(--text);
            border: 1px solid var(--muted);
            padding: 0.5rem 1rem;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          ">
            ← Volver
          </button>
          <h2 style="margin: 0; color: var(--text); font-size: 1.5rem;">
            👤 ${cliente.nombres} ${cliente.apellidos}
          </h2>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <button onclick="editarCliente('${cliente.id}')" style="
            background: var(--primary);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          ">
            ✏️ Editar
          </button>
          <button onclick="verDetalleCliente('${cliente.id}')" style="
            background: var(--ok);
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          ">
            👁️ Ver Detalles
          </button>
        </div>
      </div>

      <!-- Información del Cliente -->
      <div style="
        background: var(--panel);
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid var(--muted);
        margin-bottom: 1.5rem;
      ">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
          <div>
            <strong>Nombre:</strong> ${cliente.nombres} ${cliente.apellidos}
          </div>
          <div>
            <strong>Cédula:</strong> ${cliente.cedula}
          </div>
          <div>
            <strong>Membresía:</strong> ${cliente.membresia}
          </div>
          <div>
            <strong>Saldo Actual:</strong> 
            <span style="
              color: ${cliente.saldo > 0 ? 'var(--danger)' : 'var(--ok)'};
              font-weight: 600;
            ">$${cliente.saldo.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <!-- Pestañas -->
      <div style="margin-bottom: 1.5rem;">
        <div style="
          display: flex;
          border-bottom: 1px solid var(--muted);
          gap: 0;
        ">
          <button id="tabPagos" onclick="cambiarTab('pagos')" style="
            background: var(--primary);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            cursor: pointer;
            border-radius: 8px 8px 0 0;
            font-weight: 600;
          ">
            <span style="color: #6f42c1;">💰 Pagos</span>
          </button>
          <button id="tabMembresias" onclick="cambiarTab('membresias')" style="
            background: var(--panel);
            color: var(--text);
            border: none;
            padding: 0.8rem 1.5rem;
            cursor: pointer;
            border-radius: 8px 8px 0 0;
            font-weight: 600;
          ">
            <span style="color: #6f42c1;">🏋️ Membresías</span>
          </button>
        </div>
      </div>

      <!-- Contenido de Pestaña Pagos -->
      <div id="contenidoPagos" style="display: block;">
        <div style="
          background: rgba(111, 66, 193, 0.1);
          border: 1px solid rgba(111, 66, 193, 0.3);
          border-radius: 6px;
          padding: 0.8rem;
          margin-bottom: 1rem;
          color: #6f42c1;
          font-size: 0.9rem;
          text-align: center;
        ">
          💡 Se muestran pagos simulados para demostrar la funcionalidad. Los pagos reales aparecerán cuando se registren en el sistema.
        </div>
        
        ${pagosCliente.length > 0 ? `
          <div style="
            background: var(--panel);
            border-radius: 8px;
            border: 1px solid var(--muted);
            overflow: hidden;
          ">
            <div style="
              background: var(--primary);
              color: white;
              padding: 0.8rem 1rem;
              font-weight: 600;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr auto;
              gap: 1rem;
              align-items: center;
            ">
              <div style="color: black;">Fecha</div>
              <div style="color: black;">Monto</div>
              <div style="color: black;">Método</div>
              <div style="color: black;">Concepto</div>
              <div style="color: black;">Acciones</div>
            </div>
            ${pagosCliente.map(pago => `
              <div style="
                padding: 0.8rem 1rem;
                border-bottom: 1px solid var(--muted);
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr auto;
                gap: 1rem;
                align-items: center;
              ">
                <div style="font-size: 0.9rem;">
                  ${new Date(pago.fechaPago).toLocaleDateString('es-EC')}
                  <div style="color: var(--sub); font-size: 0.8rem;">
                    ${new Date(pago.fechaPago).toLocaleTimeString('es-EC', {hour12: true})}
                  </div>
                </div>
                <div style="font-weight: 600; color: var(--ok);">
                  $${pago.monto.toFixed(2)}
                </div>
                <div style="font-size: 0.9rem;">
                  ${pago.metodoPago === 'efectivo' ? '💵 Efectivo' : 
                    pago.metodoPago === 'tarjeta' ? '💳 Tarjeta' : 
                    pago.metodoPago === 'transferencia' ? '🏦 Transferencia' : 
                    pago.metodoPago === 'deposito' ? '📥 Depósito' : 
                    pago.metodoPago}
                  }
                </div>
                <div style="font-size: 0.9rem;">
                  ${pago.concepto || 'Pago de membresía'}
                  ${pago.esSimulado ? '<span style="color: var(--sub); font-size: 0.8rem;"> (simulado)</span>' : ''}
                </div>
                <button onclick="verDetallePagoCliente('${pago.id}')" style="
                  background: var(--primary);
                  color: white;
                  border: none;
                  border-radius: 50%;
                  width: 32px;
                  height: 32px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  font-size: 1rem;
                " title="Ver detalle">👁️</button>
              </div>
            `).join('')}
          </div>
        ` : `
          <div style="
            border: 2px dashed var(--muted);
            border-radius: 8px;
            padding: 2rem;
            text-align: center;
            color: var(--sub);
          ">
            <div style="font-size: 3rem; margin-bottom: 1rem;">💰</div>
            <div style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text);">
              No hay pagos registrados
            </div>
            <div style="font-size: 0.9rem;">
              Este cliente aún no tiene pagos registrados en el sistema
            </div>
          </div>
        `}
      </div>

      <!-- Contenido de Pestaña Membresías -->
      <div id="contenidoMembresias" style="display: none;">
        <div style="
          background: rgba(111, 66, 193, 0.1);
          border: 1px solid rgba(111, 66, 193, 0.3);
          border-radius: 6px;
          padding: 0.8rem;
          margin-bottom: 1rem;
          color: #6f42c1;
          font-size: 0.9rem;
          text-align: center;
        ">
          💡 Se muestran membresías simuladas para demostrar la funcionalidad.
        </div>
        
        <div style="
          background: var(--panel);
          border-radius: 8px;
          border: 1px solid var(--muted);
          overflow: hidden;
        ">
          <div style="
            background: var(--primary);
            color: white;
            padding: 0.8rem 1rem;
            font-weight: 600;
            display: grid;
            grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
            gap: 1rem;
            align-items: center;
          ">
            <div style="color: black;">#</div>
            <div style="color: black;">Membresía</div>
            <div style="color: black;">Descuento</div>
            <div style="color: black;">Inicio</div>
            <div style="color: black;">Vencimiento</div>
            <div style="color: black;">Auto-Renovación</div>
          </div>
          ${membresiasCliente.map((membresia, index) => `
            <div style="
              padding: 0.8rem 1rem;
              border-bottom: 1px solid var(--muted);
              display: grid;
              grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
              gap: 1rem;
              align-items: center;
            ">
              <div style="font-weight: 600; color: var(--text);">
                ${membresia.numero}
              </div>
              <div style="font-weight: 600; color: var(--primary);">
                ${membresia.nombre}
              </div>
              <div style="font-size: 0.9rem;">
                ${membresia.descuento}%
              </div>
              <div style="font-size: 0.9rem;">
                ${new Date(membresia.inicio).toLocaleDateString('es-EC')}
              </div>
              <div style="
                font-size: 0.9rem;
                color: ${membresia.estado === 'activa' ? 'var(--ok)' : 'var(--danger)'};
                font-weight: 600;
              ">
                ${membresia.estado === 'activa' ? `VENCE EN ${membresia.diasRestantes} MESES` : 'VENCIDO'}
              </div>
              <div style="font-size: 0.9rem; color: var(--sub);">
                ${membresia.autoRenovacion ? 'SÍ' : 'NO'}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  // Agregar la vista al contenido principal
  if (mainContent) {
    mainContent.appendChild(clienteView);
    console.log('✅ Vista del cliente agregada exitosamente');
  } else {
    console.error('❌ No se pudo encontrar el contenedor principal');
    // Fallback: agregar al body si no se encuentra el contenedor
    document.body.appendChild(clienteView);
    console.log('✅ Vista agregada al body como fallback');
  }
  
  // Verificar que se haya agregado
  setTimeout(() => {
    const vistaAgregada = document.getElementById('clienteView');
    if (vistaAgregada) {
      console.log('✅ Vista del cliente confirmada en el DOM');
    } else {
      console.error('❌ La vista no se agregó al DOM');
    }
  }, 100);
}

// Función para cambiar entre pestañas
function cambiarTab(tab) {
  // Ocultar todos los contenidos
  document.getElementById('contenidoPagos').style.display = 'none';
  document.getElementById('contenidoMembresias').style.display = 'none';
  
  // Desactivar todos los tabs
  document.getElementById('tabPagos').style.background = 'var(--panel)';
  document.getElementById('tabPagos').style.color = 'var(--text)';
  document.getElementById('tabMembresias').style.background = 'var(--panel)';
  document.getElementById('tabMembresias').style.color = 'var(--text)';
  
  // Mostrar contenido seleccionado y activar tab
  if (tab === 'pagos') {
    document.getElementById('contenidoPagos').style.display = 'block';
    document.getElementById('tabPagos').style.background = 'var(--primary)';
    document.getElementById('tabPagos').style.color = 'white';
  } else if (tab === 'membresias') {
    document.getElementById('contenidoMembresias').style.display = 'block';
    document.getElementById('tabMembresias').style.background = 'var(--primary)';
    document.getElementById('tabMembresias').style.color = 'white';
  }
}

// Función para volver a la vista de todos los clientes
function volverATodosLosClientes() {
  console.log('Volviendo a todos los clientes...');
  
  // Buscar el contenedor principal
  let mainContent = document.querySelector('#app');
  if (!mainContent) {
    const currentView = document.querySelector('.grid.cols-1');
    if (currentView && currentView.parentElement) {
      mainContent = currentView.parentElement;
    }
  }
  if (!mainContent) {
    mainContent = document.body;
  }
  
  // Limpiar contenido actual
  if (mainContent) {
    mainContent.innerHTML = '';
  }
  
  // Llamar a la función render para mostrar todos los clientes
  if (typeof render === 'function') {
    render();
    console.log('✅ Vista de todos los clientes restaurada');
  } else {
    console.error('❌ Función render no encontrada');
    // Fallback: recargar la página
    location.reload();
  }
}

// Función para editar cliente
function editarCliente(clienteId) {
  console.log('Editando cliente ID:', clienteId);
  
  const cliente = DB.users.find(u => u.id === clienteId);
  if (!cliente) {
    alert('Cliente no encontrado');
    return;
  }
  
  // Crear modal de edición
  const modal = document.createElement('div');
  modal.id = 'modalEditarCliente';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  `;
  
  modal.innerHTML = `
    <div style="
      background: white;
      border-radius: 12px;
      padding: 2rem;
      max-width: 600px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      position: relative;
    ">
      <!-- Header -->
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--muted);
      ">
        <h2 style="margin: 0; color: var(--text); font-size: 1.5rem;">
          ✏️ Editar Cliente
        </h2>
        <button onclick="cerrarModalEditarCliente()" style="
          background: var(--danger);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
        ">✕</button>
      </div>
      
      <!-- Formulario de Edición -->
      <form id="formEditarCliente" onsubmit="guardarCambiosCliente(event, '${cliente.id}')">
        <div style="display: grid; gap: 1rem;">
          <!-- Nombres -->
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">
              Nombres:
            </label>
            <input 
              type="text" 
              id="editNombres" 
              value="${cliente.nombres}"
              required
              style="
                width: 100%;
                padding: 0.8rem;
                border: 1px solid var(--muted);
                border-radius: 6px;
                font-size: 1rem;
              "
            />
          </div>
          
          <!-- Apellidos -->
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">
              Apellidos:
            </label>
            <input 
              type="text" 
              id="editApellidos" 
              value="${cliente.apellidos}"
              required
              style="
                width: 100%;
                padding: 0.8rem;
                border: 1px solid var(--muted);
                border-radius: 6px;
                font-size: 1rem;
              "
            />
          </div>
          
          <!-- Cédula -->
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">
              Cédula:
            </label>
            <input 
              type="text" 
              id="editCedula" 
              value="${cliente.cedula}"
              required
              style="
                width: 100%;
                padding: 0.8rem;
                border: 1px solid var(--muted);
                border-radius: 6px;
                font-size: 1rem;
              "
            />
          </div>
          
          <!-- Teléfono -->
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">
              Teléfono:
            </label>
            <input 
              type="tel" 
              id="editTelefono" 
              value="${cliente.telefono || ''}"
              style="
                width: 100%;
                padding: 0.8rem;
                border: 1px solid var(--muted);
                border-radius: 6px;
                font-size: 1rem;
              "
            />
          </div>
          
          <!-- Email -->
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">
              Email:
            </label>
            <input 
              type="email" 
              id="editEmail" 
              value="${cliente.email || ''}"
              style="
                width: 100%;
                padding: 0.8rem;
                border: 1px solid var(--muted);
                border-radius: 6px;
                font-size: 1rem;
              "
            />
          </div>
          
          <!-- Membresía -->
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">
              Membresía:
            </label>
            <select 
              id="editMembresia" 
              required
              style="
                width: 100%;
                padding: 0.8rem;
                border: 1px solid var(--muted);
                border-radius: 6px;
                font-size: 1rem;
                background: white;
              "
            >
              <option value="mensual" ${cliente.membresia === 'mensual' ? 'selected' : ''}>Mensual</option>
              <option value="trimestral" ${cliente.membresia === 'trimestral' ? 'selected' : ''}>Trimestral</option>
              <option value="anual" ${cliente.membresia === 'anual' ? 'selected' : ''}>Anual</option>
              <option value="diario" ${cliente.membresia === 'diario' ? 'selected' : ''}>Diario</option>
              <option value="semanal" ${cliente.membresia === 'semanal' ? 'selected' : ''}>Semanal</option>
            </select>
          </div>
          
          <!-- Fecha de Vencimiento -->
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">
              Fecha de Vencimiento:
            </label>
            <input 
              type="date" 
              id="editMembresiaFin" 
              value="${cliente.membresiaFin ? new Date(cliente.membresiaFin).toISOString().split('T')[0] : ''}"
              required
              style="
                width: 100%;
                padding: 0.8rem;
                border: 1px solid var(--muted);
                border-radius: 6px;
                font-size: 1rem;
              "
            />
          </div>
          
          <!-- Saldo -->
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">
              Saldo Pendiente:
            </label>
            <input 
              type="number" 
              id="editSaldo" 
              value="${cliente.saldo || 0}"
              step="0.01"
              min="0"
              style="
                width: 100%;
                padding: 0.8rem;
                border: 1px solid var(--muted);
                border-radius: 6px;
                font-size: 1rem;
              "
            />
          </div>
          
          <!-- Estado -->
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">
              Estado:
            </label>
            <select 
              id="editActivo" 
              required
              style="
                width: 100%;
                padding: 0.8rem;
                border: 1px solid var(--muted);
                border-radius: 6px;
                font-size: 1rem;
                background: white;
              "
            >
              <option value="true" ${cliente.activo ? 'selected' : ''}>Activo</option>
              <option value="false" ${!cliente.activo ? 'selected' : ''}>Inactivo</option>
            </select>
          </div>
          
          <!-- Botones -->
          <div style="
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
            padding-top: 1rem;
            border-top: 1px solid var(--muted);
          ">
            <button 
              type="button"
              onclick="cerrarModalEditarCliente()"
              style="
                flex: 1;
                background: var(--panel);
                color: var(--text);
                border: 1px solid var(--muted);
                padding: 0.8rem;
                border-radius: 6px;
                cursor: pointer;
                font-size: 1rem;
              "
            >
              Cancelar
            </button>
            <button 
              type="submit"
              style="
                flex: 1;
                background: var(--primary);
                color: white;
                border: none;
                padding: 0.8rem;
                border-radius: 6px;
                cursor: pointer;
                font-size: 1rem;
                font-weight: 600;
              "
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      </form>
    </div>
  `;
  
  document.body.appendChild(modal);
}

// Cerrar modal de edición
function cerrarModalEditarCliente() {
  const modal = document.getElementById('modalEditarCliente');
  if (modal) {
    modal.remove();
  }
}

// Guardar cambios del cliente
function guardarCambiosCliente(event, clienteId) {
  event.preventDefault();
  
  const cliente = DB.users.find(u => u.id === clienteId);
  if (!cliente) {
    alert('Cliente no encontrado');
    return;
  }
  
  // Obtener valores del formulario
  const nombres = document.getElementById('editNombres').value.trim();
  const apellidos = document.getElementById('editApellidos').value.trim();
  const cedula = document.getElementById('editCedula').value.trim();
  const telefono = document.getElementById('editTelefono').value.trim();
  const email = document.getElementById('editEmail').value.trim();
  const membresia = document.getElementById('editMembresia').value;
  const membresiaFin = document.getElementById('editMembresiaFin').value;
  const saldo = parseFloat(document.getElementById('editSaldo').value) || 0;
  const activo = document.getElementById('editActivo').value === 'true';
  
  // Validaciones básicas
  if (!nombres || !apellidos || !cedula) {
    alert('Por favor completa los campos obligatorios');
    return;
  }
  
  // Actualizar datos del cliente
  cliente.nombres = nombres;
  cliente.apellidos = apellidos;
  cliente.cedula = cedula;
  cliente.telefono = telefono;
  cliente.email = email;
  cliente.membresia = membresia;
  cliente.membresiaFin = membresiaFin;
  cliente.saldo = saldo;
  cliente.activo = activo;
  
  // Guardar en localStorage
  localStorage.setItem('gymDB', JSON.stringify(DB));
  
  // Cerrar modal
  cerrarModalEditarCliente();
  
  // Mostrar confirmación
  alert('Cliente actualizado exitosamente');
  
  // Actualizar la vista actual
  const clienteView = document.getElementById('clienteView');
  if (clienteView) {
    // Actualizar el nombre mostrado en el header
    const headerNombre = clienteView.querySelector('h2');
    if (headerNombre) {
      headerNombre.textContent = `👤 ${cliente.nombres} ${cliente.apellidos}`;
    }
    
    // Actualizar información del cliente
    const infoCliente = clienteView.querySelector('div[style*="background: var(--panel)"]');
    if (infoCliente) {
      infoCliente.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
          <div>
            <strong>Nombre:</strong> ${cliente.nombres} ${cliente.apellidos}
          </div>
          <div>
            <strong>Cédula:</strong> ${cliente.cedula}
          </div>
          <div>
            <strong>Membresía:</strong> ${cliente.membresia}
          </div>
          <div>
            <strong>Saldo Actual:</strong> 
            <span style="
              color: ${cliente.saldo > 0 ? 'var(--danger)' : 'var(--ok)'};
              font-weight: 600;
            ">$${cliente.saldo.toFixed(2)}</span>
          </div>
        </div>
      `;
    }
  }
}



// Función para ver detalles del cliente
function verDetalleCliente(clienteId) {
  console.log('Viendo detalles del cliente ID:', clienteId);
  
  const cliente = DB.users.find(u => u.id === clienteId);
  if (!cliente) {
    alert('Cliente no encontrado');
    return;
  }
  
  // Generar membresías simuladas para mostrar historial
  const membresiasCliente = generarMembresiasSimuladas(cliente);
  
  // Crear modal de detalles
  const modal = document.createElement('div');
  modal.id = 'modalDetalleCliente';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  `;
  
  modal.innerHTML = `
    <div style="
      background: white;
      border-radius: 12px;
      padding: 2rem;
      max-width: 800px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      position: relative;
    ">
      <!-- Header -->
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--muted);
      ">
        <h2 style="margin: 0; color: var(--text); font-size: 1.5rem;">
          👁️ Detalles Completos del Cliente
        </h2>
        <button onclick="cerrarModalDetalleCliente()" style="
          background: var(--danger);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
        ">✕</button>
      </div>
      
      <!-- Información Personal -->
      <div style="margin-bottom: 2rem;">
        <h3 style="color: var(--text); margin-bottom: 1rem; font-size: 1.2rem;">
          👤 Información Personal
        </h3>
        <div style="
          background: var(--panel);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--muted);
        ">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
            <div>
              <strong>Nombres:</strong> ${cliente.nombres}
            </div>
            <div>
              <strong>Apellidos:</strong> ${cliente.apellidos}
            </div>
            <div>
              <strong>Cédula:</strong> ${cliente.cedula}
            </div>
            <div>
              <strong>Teléfono:</strong> ${cliente.telefono || 'No especificado'}
            </div>
            <div>
              <strong>Email:</strong> ${cliente.email || 'No especificado'}
            </div>
            <div>
              <strong>Fecha de Registro:</strong> ${cliente.creadoAt ? new Date(cliente.creadoAt).toLocaleDateString('es-EC') : 'No especificada'}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Información de Membresía -->
      <div style="margin-bottom: 2rem;">
        <h3 style="color: var(--text); margin-bottom: 1rem; font-size: 1.2rem;">
          🏋️ Membresía Actual
        </h3>
        <div style="
          background: var(--panel);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--muted);
        ">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            <div>
              <strong>Tipo de Membresía:</strong> 
              <span style="
                background: var(--primary);
                color: white;
                padding: 0.3rem 0.6rem;
                border-radius: 12px;
                font-size: 0.8rem;
                font-weight: 600;
              ">${cliente.membresia}</span>
            </div>
            <div>
              <strong>Fecha de Inicio:</strong> ${cliente.creadoAt ? new Date(cliente.creadoAt).toLocaleDateString('es-EC') : 'No especificada'}
            </div>
            <div>
              <strong>Fecha de Vencimiento:</strong> ${cliente.membresiaFin ? new Date(cliente.membresiaFin).toLocaleDateString('es-EC') : 'No especificada'}
            </div>
            <div>
              <strong>Estado:</strong> 
              <span style="
                background: ${cliente.activo ? 'var(--ok)' : 'var(--danger)'};
                color: white;
                padding: 0.3rem 0.6rem;
                border-radius: 12px;
                font-size: 0.8rem;
                font-weight: 600;
              ">${cliente.activo ? 'ACTIVO' : 'INACTIVO'}</span>
            </div>
            <div>
              <strong>Último Ingreso:</strong> ${cliente.ultimoIngreso ? new Date(cliente.ultimoIngreso).toLocaleDateString('es-EC') : 'No registrado'}
            </div>
            <div>
              <strong>Saldo Pendiente:</strong> 
              <span style="
                color: ${cliente.saldo > 0 ? 'var(--danger)' : 'var(--ok)'};
                font-weight: 600;
                font-size: 1.1rem;
              ">$${cliente.saldo.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Historial de Membresías -->
      <div style="margin-bottom: 2rem;">
        <h3 style="color: var(--text); margin-bottom: 1rem; font-size: 1.2rem;">
          📋 Historial de Membresías
        </h3>
        <div style="
          background: var(--panel);
          border-radius: 8px;
          border: 1px solid var(--muted);
          overflow: hidden;
        ">
          <div style="
            background: var(--primary);
            color: white;
            padding: 0.8rem 1rem;
            font-weight: 600;
            display: grid;
            grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
            gap: 1rem;
            align-items: center;
          ">
            <div>#</div>
            <div>Membresía</div>
            <div>Descuento</div>
            <div>Inicio</div>
            <div>Vencimiento</div>
            <div>Auto-Renovación</div>
          </div>
          ${membresiasCliente.map((membresia, index) => `
            <div style="
              padding: 0.8rem 1rem;
              border-bottom: 1px solid var(--muted);
              display: grid;
              grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
              gap: 1rem;
              align-items: center;
            ">
              <div style="font-weight: 600; color: var(--text);">
                ${membresia.numero}
              </div>
              <div style="font-weight: 600; color: var(--primary);">
                ${membresia.nombre}
              </div>
              <div style="font-size: 0.9rem;">
                ${membresia.descuento}%
              </div>
              <div style="font-size: 0.9rem;">
                ${new Date(membresia.inicio).toLocaleDateString('es-EC')}
              </div>
              <div style="
                font-size: 0.9rem;
                color: ${membresia.estado === 'activa' ? 'var(--ok)' : 'var(--danger)'};
                font-weight: 600;
              ">
                ${membresia.estado === 'activa' ? `VENCE EN ${membresia.diasRestantes} MESES` : 'VENCIDO'}
              </div>
              <div style="font-size: 0.9rem; color: var(--sub);">
                ${membresia.autoRenovacion ? 'SÍ' : 'NO'}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Información Adicional -->
      <div style="
        background: rgba(111, 66, 193, 0.1);
        border: 1px solid rgba(111, 66, 193, 0.3);
        border-radius: 6px;
        padding: 1rem;
        color: #6f42c1;
        font-size: 0.9rem;
        text-align: center;
      ">
        💡 Esta información incluye datos simulados para demostrar la funcionalidad completa del sistema.
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
}

// Cerrar modal de detalles
function cerrarModalDetalleCliente() {
  const modal = document.getElementById('modalDetalleCliente');
  if (modal) {
    modal.remove();
  }
}



// SECCIÓN: INACTIVOS
function renderInactivos(root) {
  const cut = new Date();
  cut.setDate(cut.getDate() - 30);
  const arr = DB.users.filter(
    (u) =>
      (!u.ultimoIngreso || new Date(u.ultimoIngreso) < cut) &&
      new Date(u.membresiaFin) >= new Date()
  );
  const rows = arr
    .map(
      (u) => `<tr style="cursor: pointer;" onclick="verClienteDetalle('${
        u.id
      }')">
<td><b>${u.nombres} ${u.apellidos}</b><div class="muted mini">${
        u.cedula
      }</div></td>
<td>${DB.memberships.find((m) => m.id === u.membresia)?.nombre || "-"}</td>
<td>${u.ultimoIngreso ? fmtDate(u.ultimoIngreso) : "-"}</td>
<td>
  <div style="display: flex; gap: 0.5rem;">
    <button class="btn" onclick="event.stopPropagation(); abrirModalWhatsApp('inactivos', '${
      u.id
    }')" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">
      📱 WhatsApp
    </button>
  </div>
</td>
</tr>`
    )
    .join("");
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
  <h3 class="section-title" style="margin: 0;">Clientes inactivos (Mas de 30 días sin venir)</h3>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <input
      type="text"
      id="buscarInactivos"
      placeholder="Buscar por nombre o cédula..."
      style="
        padding: 0.5rem 0.8rem;
        border: 1px solid var(--muted);
        border-radius: 6px;
        background: white;
        width: 250px;
      "
      oninput="filtrarInactivos()"
    />
    <button
      onclick="limpiarBusquedaInactivos()"
      style="
        background: var(--panel);
        color: var(--text);
        border: 1px solid var(--muted);
        padding: 0.5rem 1rem;
        border-radius: 6px;
        cursor: pointer;
      "
    >
      Limpiar
    </button>
  </div>
</div>
<table>
  <thead>
    <tr>
      <th>Cliente</th>
      <th>Membresía</th>
      <th>Último ingreso</th>
      <th>Opciones</th>
    </tr>
  </thead>
  <tbody id="tablaInactivos">${
    rows || '<tr><td colspan=4 class="muted">No hay</td></tr>'
  }</tbody>
</table>`;
  root.append(card);
}

// SECCIÓN: CUMPLEAÑOS
function renderCumples(root) {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Agrupar clientes por mes de cumpleaños
  const clientesPorMes = {};

  // Inicializar todos los meses
  meses.forEach((mes, index) => {
    clientesPorMes[index] = [];
  });

  // Agrupar clientes por mes
  DB.users.forEach((u) => {
    const mesNacimiento = new Date(u.nacimiento).getMonth();
    clientesPorMes[mesNacimiento].push(u);
  });

  // Ordenar clientes por proximidad al cumpleaños (ya pasó vs falta por cumplir)
  Object.keys(clientesPorMes).forEach((mes) => {
    clientesPorMes[mes].sort((a, b) => {
      const hoy = new Date();
      const añoActual = hoy.getFullYear();
      
      // Calcular fecha del próximo cumpleaños para cada cliente
      const fechaCumpleA = new Date(añoActual, new Date(a.nacimiento).getMonth(), new Date(a.nacimiento).getDate());
      const fechaCumpleB = new Date(añoActual, new Date(b.nacimiento).getMonth(), new Date(b.nacimiento).getDate());
      
      // Si ya pasó el cumpleaños este año, calcular para el próximo año
      if (fechaCumpleA < hoy) {
        fechaCumpleA.setFullYear(añoActual + 1);
      }
      if (fechaCumpleB < hoy) {
        fechaCumpleB.setFullYear(añoActual + 1);
      }
      
      // Calcular días restantes
      const diasRestantesA = Math.ceil((fechaCumpleA - hoy) / (1000 * 60 * 60 * 24));
      const diasRestantesB = Math.ceil((fechaCumpleB - hoy) / (1000 * 60 * 60 * 24));
      
      // Determinar si ya cumplió años este año
      const yaCumplioA = fechaCumpleA.getFullYear() > añoActual;
      const yaCumplioB = fechaCumpleB.getFullYear() > añoActual;
      
      if (yaCumplioA && yaCumplioB) {
        // Ambos ya cumplieron, ordenar del más reciente al más antiguo
        return diasRestantesB - diasRestantesA;
      } else if (!yaCumplioA && !yaCumplioB) {
        // Ambos faltan por cumplir, ordenar del más próximo al más lejano
        return diasRestantesA - diasRestantesB;
      } else {
        // Uno ya cumplió y otro no, el que ya cumplió va primero
        return yaCumplioA ? -1 : 1;
      }
    });
  });

  const card = document.createElement("div");
  card.className = "card";

  let contenidoHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
      <h3 class="section-title" style="margin: 0;">Cumpleaños por Mes</h3>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <input
          type="text"
          id="buscarCumpleanos"
          placeholder="Buscar por nombre o cédula..."
          style="
            padding: 0.5rem 0.8rem;
            border: 1px solid var(--muted);
            border-radius: 6px;
            background: white;
            width: 250px;
          "
          oninput="filtrarCumpleanos()"
        />
        <button
          onclick="limpiarBusquedaCumpleanos()"
          style="
            background: var(--panel);
            color: var(--text);
            border: 1px solid var(--muted);
            padding: 0.5rem 1rem;
            border-radius: 6px;
            cursor: pointer;
          "
        >
          Limpiar
        </button>
      </div>
    </div>
  `;

  // Crear secciones por mes - ordenar para que el mes actual aparezca primero
    const mesActual = new Date().getMonth();
  
  // Crear array de meses ordenados: mes actual primero, luego los demás en orden cronológico
  const mesesOrdenados = [];
  for (let i = 0; i < 12; i++) {
    const mesIndex = (mesActual + i) % 12;
    mesesOrdenados.push({ nombre: meses[mesIndex], index: mesIndex });
  }
  
  mesesOrdenados.forEach(({ nombre: nombreMes, index }) => {
    const clientesDelMes = clientesPorMes[index];
    const esMesActual = index === mesActual;

    if (clientesDelMes.length > 0) {
      contenidoHTML += `
        <div style="
          background: ${
            esMesActual ? "rgba(218, 131, 224, 0.1)" : "var(--card)"
          };
          border: 1px solid ${
            esMesActual ? "var(--brand)" : "var(--muted)"
          };
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          ${
            esMesActual
              ? "box-shadow: 0 4px 12px rgba(218, 131, 224, 0.2);"
              : ""
          }
        ">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
            <div style="
              width: 12px;
              height: 12px;
              background: ${esMesActual ? "var(--brand)" : "var(--sub)"};
              border-radius: 50%;
            "></div>
            <h4 style="
              margin: 0;
              color: var(--text);
              font-size: 1.2rem;
              font-weight: 600;
              ${esMesActual ? "color: var(--brand);" : ""}
            ">${nombreMes} ${esMesActual ? "(Mes Actual)" : ""}</h4>
            <span style="
              background: ${
                esMesActual ? "var(--brand)" : "var(--panel)"
              };
              color: ${esMesActual ? "white" : "var(--text)"};
              padding: 0.2rem 0.6rem;
              border-radius: 12px;
              font-size: 0.75rem;
              font-weight: 600;
            ">${clientesDelMes.length} ${
        clientesDelMes.length === 1 ? "cumpleañero" : "cumpleañeros"
      }</span>
          </div>
          
          <div style="display: grid; gap: 0.8rem;">
            ${clientesDelMes
              .map((u) => {
                const fechaCumple = new Date(u.nacimiento);
                const dia = fechaCumple.getDate();
                const mes = fechaCumple.getMonth();
                const año = fechaCumple.getFullYear();
                const edad = new Date().getFullYear() - año;
                const proximoCumple = new Date(
                  new Date().getFullYear(),
                  mes,
                  dia
                );
                const hoy = new Date();

                // Si ya pasó el cumpleaños este año, calcular para el próximo año
                if (proximoCumple < hoy) {
                  proximoCumple.setFullYear(hoy.getFullYear() + 1);
                }

                const diasRestantes = Math.ceil(
                  (proximoCumple - hoy) / (1000 * 60 * 60 * 24)
                );
                const esHoy = diasRestantes === 0;
                const esProximo = diasRestantes <= 7 && diasRestantes > 0;

                return `
                <div style="
                  background: white;
                  border: 1px solid var(--muted);
                  border-radius: 8px;
                  padding: 1rem;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  ${
                    esHoy
                      ? "border-color: var(--ok); background: rgba(102, 187, 106, 0.1);"
                      : ""
                  }
                  ${
                    esProximo
                      ? "border-color: var(--warn); background: rgba(255, 167, 38, 0.1);"
                      : ""
                  }
                " onclick="verClienteDetalle('${u.id}')">
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="flex: 1;">
                      <div style="font-weight: 600; color: var(--text); font-size: 1rem;">
                        ${u.nombres} ${u.apellidos}
                      </div>
                      <div style="font-size: 0.85rem; color: var(--sub); margin-top: 0.2rem;">
                        Cédula: ${u.cedula}
                      </div>
                      <div style="font-size: 0.85rem; color: var(--sub);">
                        ${dia} de ${meses[mes]} de ${año} (${edad} años)
                      </div>
                    </div>
                    <div style="text-align: right;">
                      ${
                        esHoy
                          ? `
                        <span style="
                          background: var(--ok);
                          color: white;
                          padding: 0.3rem 0.8rem;
                          border-radius: 20px;
                          font-size: 0.75rem;
                          font-weight: 600;
                        ">¡HOY!</span>
                      `
                          : esProximo
                          ? `
                        <span style="
                          background: var(--warn);
                          color: white;
                          padding: 0.3rem 0.8rem;
                          border-radius: 20px;
                          font-size: 0.75rem;
                          font-weight: 600;
                        ">En ${diasRestantes} días</span>
                      `
                          : `
                        <span style="
                          background: var(--panel);
                          color: var(--text);
                          padding: 0.3rem 0.8rem;
                          border-radius: 20px;
                          font-size: 0.75rem;
                          font-weight: 600;
                        ">En ${diasRestantes} días</span>
                      `
                      }
                    </div>
                  </div>
                  <div style="display: flex; gap: 0.5rem; margin-top: 0.8rem;">
                    <button class="btn" onclick="event.stopPropagation(); abrirModalWhatsApp('cumpleanos', '${
                      u.id
                    }')" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;">
                      📱 WhatsApp
                    </button>
                    ${
                      esHoy || esProximo
                        ? `
                      <button class="btn success" onclick="event.stopPropagation(); enviarFelicitacion('${u.id}')" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;">
                        🎉 Felicitar
                      </button>
                    `
                        : ""
                    }
                  </div>
                </div>
              `;
              })
              .join("")}
          </div>
        </div>
      `;
    }
  });

  // Si no hay cumpleaños en ningún mes
  const totalCumpleanos = Object.values(clientesPorMes).reduce(
    (total, clientes) => total + clientes.length,
    0
  );
  if (totalCumpleanos === 0) {
    contenidoHTML += `
      <div style="
        text-align: center;
        padding: 3rem;
        color: var(--sub);
        background: var(--panel);
        border-radius: 12px;
      ">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🎂</div>
        <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">No hay cumpleaños registrados</div>
        <div style="font-size: 0.9rem;">Los cumpleaños aparecerán aquí cuando se registren clientes con fechas de nacimiento</div>
      </div>
    `;
  }

  card.innerHTML = contenidoHTML;
  root.append(card);
}

// SECCIÓN: REGISTRO
function renderRegistro(root) {
  const card = document.createElement("div");
  card.className = "card";
  const memOpts = DB.memberships
    .map(
      (m) => `<option value="${m.id}">${m.nombre} – $${m.monto}</option>`
    )
    .join("");
  card.innerHTML = `
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
  <h3 class="section-title" style="margin: 0;">Registrar un nuevo cliente</h3>
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <span style="color: var(--text); font-weight: 600;">* Campos obligatorios</span>
  </div>
    </div>

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
          <input id="r_nombres" class="input" placeholder="Ingrese nombres" style="width: 100%;" required />
</div>
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Apellidos *</label>
          <input id="r_apellidos" class="input" placeholder="Ingrese apellidos" style="width: 100%;" required />
</div>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Cédula *</label>
          <input id="r_cedula" class="input" placeholder="Ingrese cédula" style="width: 100%;" required />
        </div>
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Fecha de nacimiento</label>
          <input id="r_nac" class="date" type="date" style="width: 100%;" />
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Email</label>
          <input id="r_email" class="input" type="email" placeholder="ejemplo@email.com" style="width: 100%;" />
        </div>
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Teléfono</label>
          <input id="r_tel" class="input" placeholder="+593 99 123 4567" style="width: 100%;" />
        </div>
      </div>
      
      <div>
        <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Dirección</label>
        <input id="r_dir" class="input" placeholder="Ingrese dirección completa" style="width: 100%;" />
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Género</label>
          <select id="r_gen" class="select" style="width: 100%;">
            <option value="">Seleccionar género</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
          </select>
        </div>
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Obra Social</label>
          <input id="r_obra" class="input" placeholder="IESS, Privada, etc." style="width: 100%;" />
        </div>
      </div>
    </div>
  </div>
  
  <!-- Columna derecha: Foto y configuración -->
  <div>
    <h4 style="margin: 0 0 1.5rem 0; color: var(--text); font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="13" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Foto y Configuración
    </h4>
    
    <!-- Área de foto -->
    <div style="margin-bottom: 1.5rem;">
      <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Foto del cliente</label>
      <div id="fotoPreview" style="
        width: 150px;
        height: 150px;
        border: 2px dashed var(--muted);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        background: var(--panel);
        margin-bottom: 1rem;
      " onclick="document.getElementById('r_foto_file').click()">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: var(--sub); margin-bottom: 0.5rem;">
          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div style="color: var(--sub); font-size: 0.9rem; text-align: center;">
          <div>Haz clic para</div>
          <div>subir foto</div>
        </div>
      </div>
      <input id="r_foto_file" type="file" accept="image/*" style="display: none;" onchange="previewFoto(this)" />
      <input id="r_foto" type="hidden" />
      <div style="font-size: 0.8rem; color: var(--sub);">
        Formatos: JPG, PNG, GIF. Máximo 5MB
      </div>
    </div>
    
    <!-- Configuración de membresía -->
    <div style="margin-bottom: 1.5rem;">
      <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Tipo de membresía *</label>
      <select id="r_mem" class="select" style="width: 100%;" required>
        <option value="">Seleccionar membresía</option>
        ${memOpts}
      </select>
    </div>
    
    <!-- Tipo de usuario -->
    <div style="margin-bottom: 1.5rem;">
      <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Tipo de usuario</label>
      <select id="r_tipo" class="select" style="width: 100%;" onchange="toggleCreds()">
        <option value="Cliente">Cliente</option>
        <option value="Empleado">Empleado</option>
        <option value="Ingreso">Ingreso</option>
        <option value="Administrador">Administrador</option>
      </select>
    </div>
    
    <!-- Notas -->
    <div style="margin-bottom: 1.5rem;">
      <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Notas adicionales</label>
      <textarea id="r_notas" class="input" placeholder="Información adicional del cliente..." rows="3" style="width: 100%; resize: vertical;"></textarea>
    </div>
    
    <!-- Credenciales (solo para empleados) -->
    <div id="credBox" style="display:none; background: var(--panel); border-radius: 8px; padding: 1rem; border: 1px solid var(--muted);">
      <h5 style="margin: 0 0 1rem 0; color: var(--text); font-size: 1rem; font-weight: 600;">Credenciales de acceso</h5>
      <div style="display: grid; gap: 1rem;">
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Contraseña</label>
          <input id="r_clave" class="input" type="password" placeholder="Ingrese contraseña" style="width: 100%;" />
        </div>
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Estado</label>
          <select id="r_activo" class="select" style="width: 100%;">
            <option value="si">Activo</option>
            <option value="no">Inactivo</option>
          </select>
        </div>
      </div>
      <p class="muted mini" style="margin: 1rem 0 0 0;">Solo para roles: Empleado, Ingreso, Administrador</p>
    </div>
  </div>
</div>

<!-- Botones de acción -->
<div style="display: flex; justify-content: center; gap: 1rem; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--muted);">
  <button class="btn" onclick="limpiarFormulario()" style="
    background: var(--panel);
    color: var(--text);
    border: 1px solid var(--muted);
    padding: 0.8rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    display: flex; align-items: center; gap: 0.5rem;
  ">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6H5H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Limpiar
  </button>
  <button class="btn success" onclick="saveNuevo()" style="
    background: var(--ok);
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    display: flex; align-items: center; gap: 0.5rem;
  ">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16L21 8V19C21 20.1046 20.1046 21 19 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="17,21 17,13 7,13 7,21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="7,3 7,8 15,8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Guardar Cliente
  </button>
</div>`;
  root.append(card);
}

// SECCIÓN: ASISTENCIAS
function renderAsistencias(root) {
  const card = document.createElement("div");
  card.className = "card";
  
  // Generar asistencias simuladas para demostrar la funcionalidad
  const asistenciasSimuladas = generarAsistenciasSimuladas();
  
  card.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
      <h3 class="section-title" style="margin: 0;">📹 Asistencias a Reuniones Virtuales</h3>
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <input
          type="text"
          id="buscarAsistencias"
          placeholder="Buscar por nombre o cédula..."
          style="
            padding: 0.5rem 0.8rem;
            border: 1px solid var(--muted);
            border-radius: 6px;
            background: white;
            width: 250px;
          "
          oninput="filtrarAsistencias()"
        />
        <button
          onclick="limpiarBusquedaAsistencias()"
          style="
            background: var(--panel);
            color: var(--text);
            border: 1px solid var(--muted);
            padding: 0.5rem 1rem;
            border-radius: 6px;
            cursor: pointer;
          "
        >
          Limpiar
        </button>
      </div>
    </div>

    <!-- Información importante -->
    <div style="
      background: rgba(111, 66, 193, 0.1);
      border: 1px solid rgba(111, 66, 193, 0.3);
      border-radius: 6px;
      padding: 0.8rem;
      margin-bottom: 1rem;
      color: #6f42c1;
      font-size: 0.9rem;
      text-align: center;
    ">
      💡 Se muestran asistencias simuladas a reuniones de Zoom/Meet para demostrar la funcionalidad.
    </div>


    <!-- Secciones por días -->
    ${generarSeccionesPorDias(asistenciasSimuladas)}
  `;
  
  root.append(card);
}

// Función para generar asistencias simuladas
function generarAsistenciasSimuladas() {
  const asistencias = [];
  const tiposReunion = ['Zoom', 'Google Meet', 'Microsoft Teams'];
  const temas = [
    'Clase de Yoga Matutina',
    'Entrenamiento Funcional',
    'Sesión de Nutrición',
    'Clase de Pilates',
    'Entrenamiento de Fuerza',
    'Sesión de Motivación',
    'Clase de Cardio',
    'Taller de Bienestar'
  ];
  const estados = ['ingreso', 'no_ingreso'];
  const duraciones = ['45 min', '60 min', '30 min', '90 min', '120 min'];
  const horasClase = [8, 10, 14, 16, 18]; // Horas fijas para las clases
  
  // Obtener algunos clientes para generar asistencias
  const clientes = DB.users.slice(0, 15); // Tomar los primeros 15 clientes
  
  // Generar asistencias por día con la misma actividad
  for (let dia = 0; dia < 7; dia++) {
    const fechaHora = new Date();
    fechaHora.setDate(fechaHora.getDate() - dia);
    
    // Seleccionar una actividad específica para este día
    const tema = temas[Math.floor(Math.random() * temas.length)];
    const tipoReunion = tiposReunion[Math.floor(Math.random() * tiposReunion.length)];
    const duracion = duraciones[Math.floor(Math.random() * duraciones.length)];
    const horaClase = horasClase[Math.floor(Math.random() * horasClase.length)];
    
    // Establecer la hora de la clase
    fechaHora.setHours(horaClase, 0, 0, 0);
    
    // Generar asistencias para esta clase (3-8 personas)
    const numAsistencias = 3 + Math.floor(Math.random() * 6);
    const clientesClase = clientes.sort(() => 0.5 - Math.random()).slice(0, numAsistencias);
    
    clientesClase.forEach((cliente, index) => {
      const estado = estados[Math.floor(Math.random() * estados.length)];
      
      asistencias.push({
        id: `asistencia_${dia}_${index}`,
        clienteId: cliente.id,
        cliente: cliente,
        tipoReunion: tipoReunion,
        tema: tema,
        fechaHora: fechaHora.toISOString(),
        duracion: duracion,
        estado: estado
      });
    });
  }
  
  // Ordenar por fecha más reciente
  return asistencias.sort((a, b) => new Date(b.fechaHora) - new Date(a.fechaHora));
}

// Función para generar secciones por días
function generarSeccionesPorDias(asistencias) {
  const hoy = new Date();
  const ayer = new Date(hoy);
  ayer.setDate(ayer.getDate() - 1);
  const anteayer = new Date(hoy);
  anteayer.setDate(anteayer.getDate() - 2);
  
  const secciones = [
    { fecha: hoy, titulo: 'Hoy', icono: '📅' },
    { fecha: ayer, titulo: 'Ayer', icono: '📆' },
    { fecha: anteayer, titulo: 'Anteayer', icono: '📋' }
  ];
  
  return secciones.map(seccion => {
    const asistenciasDelDia = asistencias.filter(a => {
      const fechaAsistencia = new Date(a.fechaHora);
      return fechaAsistencia.toDateString() === seccion.fecha.toDateString();
    });
    
    if (asistenciasDelDia.length === 0) {
      return `
        <div style="margin-bottom: 2rem;">
          <div style="
            background: var(--panel);
            border-radius: 8px;
            border: 1px solid var(--muted);
            padding: 1rem;
            margin-bottom: 1rem;
          ">
            <h4 style="
              margin: 0 0 1rem 0; 
              color: var(--text); 
              font-size: 1.1rem; 
              font-weight: 600;
              display: flex;
              align-items: center;
              gap: 0.5rem;
            ">
              ${seccion.icono} ${seccion.titulo} (${seccion.fecha.toLocaleDateString('es-EC')})
            </h4>
            <div style="
              text-align: center;
              padding: 2rem;
              color: var(--sub);
              font-style: italic;
            ">
              No hay asistencias registradas para este día
            </div>
          </div>
        </div>
      `;
    }
    
    return `
      <div style="margin-bottom: 2rem;">
        <div style="
          background: var(--panel);
          border-radius: 8px;
          border: 1px solid var(--muted);
          overflow: hidden;
        ">
          <div style="
            background: var(--primary);
            color: white;
            padding: 0.8rem 1rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          ">
            <span style="color: black;">${seccion.icono} ${seccion.titulo} (${seccion.fecha.toLocaleDateString('es-EC')}) - ${asistenciasDelDia.length} asistencias</span>
          </div>
          
          <div style="
            background: var(--primary);
            color: white;
            padding: 0.8rem 1rem;
            font-weight: 600;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            gap: 1rem;
            align-items: center;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
          ">
            <div style="color: black;">Cliente</div>
            <div style="color: black;">Reunión</div>
            <div style="color: black;">Hora</div>
            <div style="color: black;">Duración</div>
            <div style="color: black;">Estado</div>
          </div>
          
          ${asistenciasDelDia.map(asistencia => `
            <div style="
              padding: 0.8rem 1rem;
              border-bottom: 1px solid var(--muted);
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              gap: 1rem;
              align-items: center;
            ">
              <div>
                <div style="display: flex; align-items: center; gap: 0.8rem;">
                  <div class="avatar" style="width: 32px; height: 32px; font-size: 0.7rem;">
                    ${asistencia.cliente.nombres.charAt(0)}${asistencia.cliente.apellidos.charAt(0)}
                  </div>
                  <div>
                    <div style="font-weight: 600; font-size: 0.9rem;">${asistencia.cliente.nombres} ${asistencia.cliente.apellidos}</div>
                    <div style="font-size: 0.8rem; color: var(--sub);">${asistencia.cliente.cedula}</div>
                  </div>
                </div>
              </div>
              <div>
                <div style="font-weight: 600; font-size: 0.9rem;">${asistencia.tipoReunion}</div>
                <div style="font-size: 0.8rem; color: var(--sub);">${asistencia.tema}</div>
              </div>
              <div style="font-size: 0.9rem; font-weight: 600;">
                ${new Date(asistencia.fechaHora).toLocaleTimeString('es-EC', {hour12: true})}
              </div>
              <div style="font-size: 0.9rem; color: var(--text);">
                ${asistencia.duracion}
              </div>
              <div>
                <span class="badge ${asistencia.estado === 'ingreso' ? 'tag-success' : 'tag-danger'}">
                  ${asistencia.estado === 'ingreso' ? '✅ Ingreso' : '❌ No Ingreso'}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Función para filtrar asistencias
function filtrarAsistencias() {
  const busqueda = document.getElementById('buscarAsistencias').value.toLowerCase();
  const filas = document.querySelectorAll('#viewRoot .card > div:last-child > div:not(:first-child)');
  
  filas.forEach(fila => {
    const texto = fila.textContent.toLowerCase();
    if (texto.includes(busqueda)) {
      fila.style.display = 'grid';
    } else {
      fila.style.display = 'none';
    }
  });
}

// Función para limpiar búsqueda de asistencias
function limpiarBusquedaAsistencias() {
  document.getElementById('buscarAsistencias').value = '';
  const filas = document.querySelectorAll('#viewRoot .card > div:last-child > div:not(:first-child)');
  filas.forEach(fila => {
    fila.style.display = 'grid';
  });
}

// SECCIÓN: ASIGNACIÓN DE ENTRENAMIENTO
function renderAsignacionEntrenamiento(root) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3 class="section-title">Asignación de Entrenamiento</h3>
    
    <!-- Paso 1: Búsqueda por cédula -->
    <div style="background: var(--card); border: 1px solid var(--muted); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
      <h4 style="margin: 0 0 1rem 0; color: var(--text); font-size: 1.1rem; font-weight: 600;">Paso 1: Buscar Cliente</h4>
      <div style="display: flex; gap: 1rem; align-items: center;">
        <input 
          type="text" 
          id="cedulaBusqueda" 
          placeholder="Ingrese cédula del cliente (10 dígitos)" 
          maxlength="10"
          style="flex: 1; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
          oninput="validarCedulaBusqueda(this.value)"
        />
        <button class="btn primary" onclick="buscarClienteEntrenamiento()" style="padding: 0.8rem 1.5rem;">
          Buscar Cliente
        </button>
        <button class="btn" onclick="limpiarBusquedaEntrenamiento()" style="padding: 0.8rem 1.5rem;">
          Limpiar
        </button>
      </div>
      <div id="resultadoBusqueda" style="margin-top: 1rem;"></div>
    </div>

    <!-- Paso 2: Selección de género (solo si se encontró cliente) -->
    <div id="pasoGenero" style="display: none; background: var(--card); border: 1px solid var(--muted); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
      <h4 style="margin: 0 0 1rem 0; color: var(--text); font-size: 1.1rem; font-weight: 600;">Paso 2: Seleccionar Género</h4>
      <div style="display: flex; gap: 1rem;">
        <button class="btn" onclick="seleccionarGenero('Hombre')" id="btnHombre" style="padding: 1rem 2rem; font-size: 1rem;">
          Hombre
        </button>
        <button class="btn" onclick="seleccionarGenero('Mujer')" id="btnMujer" style="padding: 1rem 2rem; font-size: 1rem;">
          Mujer
        </button>
      </div>
    </div>

    <!-- Paso 3: Configuración de entrenamiento -->
    <div id="pasoEntrenamiento" style="display: none;">
      <div style="background: var(--card); border: 1px solid var(--muted); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 1rem 0; color: var(--text); font-size: 1.1rem; font-weight: 600;">Paso 3: Configurar Entrenamiento</h4>
        
        <!-- Información del cliente -->
        <div style="background: rgba(218, 131, 224, 0.1); border: 1px solid var(--brand); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
          <div style="font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">Cliente Seleccionado:</div>
          <div id="infoClienteEntrenamiento" style="color: var(--sub);"></div>
        </div>

        <!-- Secciones de entrenamiento -->
        <div id="seccionesEntrenamiento">
          <!-- Las secciones se generarán dinámicamente -->
        </div>

        <!-- Botones para agregar/quitar secciones -->
        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
          <button class="btn success" onclick="agregarSeccion()" style="padding: 0.8rem 1.5rem;">
            ➕ Agregar Sección
          </button>
          <button class="btn danger" onclick="quitarSeccion()" style="padding: 0.8rem 1.5rem;">
            ➖ Quitar Sección
          </button>
        </div>
      </div>

      <!-- Paso 4: Resumen y asignación -->
      <div id="pasoResumen" style="background: var(--card); border: 1px solid var(--muted); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 1rem 0; color: var(--text); font-size: 1.1rem; font-weight: 600;">Paso 4: Resumen del Entrenamiento</h4>
        <div id="resumenEntrenamiento" style="background: rgba(102, 187, 106, 0.1); border: 1px solid var(--ok); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
          <!-- El resumen se generará dinámicamente -->
        </div>
        <div style="display: flex; gap: 1rem;">
          <button class="btn primary" onclick="asignarEntrenamiento()" style="padding: 1rem 2rem; font-size: 1.1rem;">
            ✅ Asignar Entrenamiento
          </button>
          <button class="btn" onclick="limpiarEntrenamiento()" style="padding: 1rem 2rem; font-size: 1.1rem;">
            🔄 Nuevo Entrenamiento
          </button>
        </div>
      </div>
    </div>
  `;
  root.append(card);
}

// SECCIÓN: MEMBRESÍAS
function renderMembresias(root) {
  const card = document.createElement("div");
  card.className = "card";

  // Calcular estadísticas
  const totalMembresias = DB.memberships.length;
  const totalClientes = DB.users.length;
  const membresiaMasPopular = DB.memberships.reduce((prev, current) => {
    const prevCount = DB.users.filter(
      (u) => u.membresia === prev.id
    ).length;
    const currentCount = DB.users.filter(
      (u) => u.membresia === current.id
    ).length;
    return currentCount > prevCount ? current : prev;
  }, DB.memberships[0]);

  card.innerHTML = `
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
  <h3 class="section-title" style="margin: 0;">Gestión de Membresías</h3>
  <button class="btn success" onclick="abrirModalNuevaMembresia()" style="
    background: var(--ok);
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  ">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Nueva Membresía
  </button>
</div>

<!-- Estadísticas -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
  <div style="background: var(--panel); border-radius: 8px; padding: 1.5rem; border: 1px solid var(--muted);">
    <div style="display: flex; align-items: center; gap: 1rem;">
      <div style="
        width: 50px;
        height: 50px;
        background: var(--brand);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 700;
        font-size: 1.2rem;
      ">${totalMembresias}</div>
      <div>
        <div style="font-weight: 600; color: var(--text);">Total Membresías</div>
        <div style="font-size: 0.9rem; color: var(--sub);">Tipos disponibles</div>
      </div>
    </div>
  </div>
  
  <div style="background: var(--panel); border-radius: 8px; padding: 1.5rem; border: 1px solid var(--muted);">
    <div style="display: flex; align-items: center; gap: 1rem;">
      <div style="
        width: 50px;
        height: 50px;
        background: var(--ok);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 700;
        font-size: 1.2rem;
      ">${totalClientes}</div>
      <div>
        <div style="font-weight: 600; color: var(--text);">Total Clientes</div>
        <div style="font-size: 0.9rem; color: var(--sub);">Registrados</div>
      </div>
    </div>
  </div>
  
  <div style="background: var(--panel); border-radius: 8px; padding: 1.5rem; border: 1px solid var(--muted);">
    <div style="display: flex; align-items: center; gap: 1rem;">
      <div style="
        width: 50px;
        height: 50px;
        background: var(--warn);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 700;
        font-size: 1.2rem;
      ">${
        membresiaMasPopular
          ? DB.users.filter((u) => u.membresia === membresiaMasPopular.id)
              .length
          : 0
      }</div>
      <div>
        <div style="font-weight: 600; color: var(--text);">Más Popular</div>
        <div style="font-size: 0.9rem; color: var(--sub);">${
          membresiaMasPopular ? membresiaMasPopular.nombre : "N/A"
        }</div>
      </div>
    </div>
  </div>
</div>

<!-- Tabla de membresías -->
<div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
  <table style="width: 100%; border-collapse: collapse;">
    <thead>
      <tr style="background: var(--panel);">
        <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text); border-bottom: 2px solid var(--muted);">Membresía</th>
        <th style="padding: 1rem; text-align: left; font-weight: 600; color: var(--text); border-bottom: 2px solid var(--muted);">Detalle</th>
        <th style="padding: 1rem; text-align: center; font-weight: 600; color: var(--text); border-bottom: 2px solid var(--muted);">Clientes</th>
        <th style="padding: 1rem; text-align: center; font-weight: 600; color: var(--text); border-bottom: 2px solid var(--muted);">Duración</th>
        <th style="padding: 1rem; text-align: center; font-weight: 600; color: var(--text); border-bottom: 2px solid var(--muted);">Sucursal</th>
        <th style="padding: 1rem; text-align: center; font-weight: 600; color: var(--text); border-bottom: 2px solid var(--muted);">Precio</th>
        <th style="padding: 1rem; text-align: center; font-weight: 600; color: var(--text); border-bottom: 2px solid var(--muted);">Acciones</th>
      </tr>
    </thead>
    <tbody>
      ${
        DB.memberships.length === 0
          ? `
        <tr>
          <td colspan="7" style="text-align: center; padding: 3rem; color: var(--sub);">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🏋️</div>
            <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">No hay membresías registradas</div>
            <div style="font-size: 0.9rem;">Haz clic en "Nueva Membresía" para crear la primera</div>
          </td>
        </tr>
      `
          : DB.memberships
              .map((m) => {
                const clientes = DB.users.filter(
                  (u) => u.membresia === m.id
                ).length;
                const porcentaje =
                  totalClientes > 0
                    ? Math.round((clientes / totalClientes) * 100)
                    : 0;
                return `
          <tr style="border-bottom: 1px solid var(--muted);">
            <td style="padding: 1rem;">
              <div style="font-weight: 600; color: var(--text); font-size: 1rem;">${
                m.nombre
              }</div>
              <div style="font-size: 0.8rem; color: var(--sub);">ID: ${
                m.id
              }</div>
            </td>
            <td style="padding: 1rem; color: var(--text);">${
              m.detalle || "Sin descripción"
            }</td>
            <td style="padding: 1rem; text-align: center;">
              <div style="font-weight: 600; color: var(--text);">${clientes}</div>
              <div style="font-size: 0.8rem; color: var(--sub);">${porcentaje}% del total</div>
            </td>
            <td style="padding: 1rem; text-align: center;">
              <span style="
                background: var(--panel);
                color: var(--text);
                padding: 0.3rem 0.8rem;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 600;
              ">${m.frecuencia}</span>
            </td>
            <td style="padding: 1rem; text-align: center;">
              <span style="
                background: var(--brand);
                color: white;
                padding: 0.3rem 0.8rem;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 600;
              ">${m.sucursal}</span>
            </td>
            <td style="padding: 1rem; text-align: center;">
              <div style="font-weight: 700; color: var(--text); font-size: 1.1rem;">$ ${m.monto.toFixed(
                2
              )}</div>
            </td>
            <td style="padding: 1rem; text-align: center;">
              <div style="display: flex; gap: 0.5rem; justify-content: center;">
                <button class="btn" onclick="editarMembresia('${
                  m.id
                }')" style="
                  background: var(--brand);
                  color: white;
                  border: none;
                  padding: 0.4rem 0.8rem;
                  border-radius: 6px;
                  cursor: pointer;
                  font-size: 0.8rem;
                  font-weight: 600;
                " title="Editar membresía">
                  ✏️ Editar
                </button>
                <button class="btn danger" onclick="eliminarMembresia('${
                  m.id
                }')" style="
                  background: var(--danger);
                  color: white;
                  border: none;
                  padding: 0.4rem 0.8rem;
                  border-radius: 6px;
                  cursor: pointer;
                  font-size: 0.8rem;
                  font-weight: 600;
                " title="Eliminar membresía">
                  🗑️ Eliminar
                </button>
              </div>
            </td>
          </tr>
        `;
              })
              .join("")
      }
    </tbody>
  </table>
</div>`;
  root.append(card);
}

// SECCIÓN: PAGOS
function renderPagos(root) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div style="display: grid; gap: 2rem;">
      <!-- Sección Superior -->
      <div style="display: grid; gap: 1.5rem;">
        <!-- Creado por -->
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Creado por</label>
          <input 
            type="text" 
            value="Admin" 
            readonly 
            style="
              width: 100%; 
              padding: 0.8rem; 
              border: 1px solid var(--muted); 
              border-radius: 6px; 
              background: #f8f9fa; 
              color: var(--sub);
              font-size: 1rem;
            "
          />
        </div>
        
        <!-- Información importante -->
        <div style="
          background: rgba(13, 110, 253, 0.1);
          border: 1px solid rgba(13, 110, 253, 0.3);
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        ">
          <div style="
            width: 24px;
            height: 24px;
            background: rgba(13, 110, 253, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #0d6efd;
          ">⏰</div>
          <div style="color: #0d6efd; font-size: 0.9rem;">
            La actualización de su cuenta puede demorar hasta 3 días hábiles dependiendo de su banco.
          </div>
        </div>
        
        <!-- Botón Informar Pago -->
        <div style="display: flex; justify-content: center;">
          <button onclick="abrirModalInformarPago()" style="
            background: var(--ok);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            box-shadow: 0 4px 12px rgba(102, 187, 106, 0.3);
            transition: all 0.3s ease;
          " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 187, 106, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(102, 187, 106, 0.3)'">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Informar Pago
          </button>
        </div>
      </div>
      
      <!-- Línea separadora -->
      <div style="
        height: 2px;
        background: linear-gradient(90deg, transparent, #6f42c1, transparent);
        margin: 1rem 0;
      "></div>
      
      <!-- Sección Inferior - Pagos informados -->
      <div>
        <h3 style="
          margin: 0 0 2rem 0; 
          color: var(--text); 
          font-size: 1.5rem; 
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        ">
          <div style="
            width: 4px;
            height: 24px;
            background: #6f42c1;
            border-radius: 2px;
          "></div>
          Pagos informados
        </h3>
        
        ${!DB.pagosInformados || DB.pagosInformados.length === 0 ? `
          <!-- Estado vacío -->
          <div style="
            text-align: center;
            padding: 4rem 2rem;
            color: var(--sub);
          ">
            <div style="
              font-size: 4rem;
              margin-bottom: 1.5rem;
              filter: grayscale(0.3);
            ">💳</div>
            <div style="
              font-size: 1.3rem;
              margin-bottom: 0.8rem;
              color: var(--text);
              font-weight: 600;
            ">No hay pagos registrados</div>
            <div style="
              font-size: 1rem;
              color: var(--sub);
            ">Los pagos informados aparecerán aquí</div>
          </div>
        ` : `
          <!-- Lista de pagos informados -->
          <div style="display: grid; gap: 1rem;">
            ${DB.pagosInformados.map(pago => `
              <div style="
                background: white;
                border: 1px solid var(--muted);
                border-radius: 8px;
                padding: 1.5rem;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              ">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                  <div style="flex: 1;">
                    <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 0.5rem;">
                      <div style="
                        background: var(--ok);
                        color: white;
                        padding: 0.3rem 0.8rem;
                        border-radius: 20px;
                        font-size: 0.8rem;
                        font-weight: 600;
                      ">Pago Informado</div>
                      <div style="
                        background: var(--panel);
                        color: var(--sub);
                        padding: 0.3rem 0.8rem;
                        border-radius: 20px;
                        font-size: 0.8rem;
                      ">${pago.banco.replace('banco-', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
                    </div>
                    <div style="font-size: 1.2rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">
                      $${pago.monto.toFixed(2)}
                    </div>
                    <div style="font-size: 0.9rem; color: var(--sub);">
                      Fecha: ${pago.fecha} • Creado por: ${pago.creadoPor}
                    </div>
                  </div>
                  <button onclick="verDetallePago('${pago.id}')" style="
                    background: var(--brand);
                    color: white;
                    border: none;
                    padding: 0.6rem;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    transition: all 0.3s ease;
                  " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" title="Ver detalle completo">
                    👁️
                  </button>
                </div>
                
                ${pago.detalle || pago.detalleAdicional ? `
                  <div style="
                    background: var(--panel);
                    border-radius: 6px;
                    padding: 1rem;
                    border-left: 3px solid var(--ok);
                  ">
                    ${pago.detalle ? `<div style="margin-bottom: 0.5rem;"><strong>Detalle:</strong> ${pago.detalle}</div>` : ''}
                    ${pago.detalleAdicional ? `<div><strong>Detalle adicional:</strong> ${pago.detalleAdicional}</div>` : ''}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
  
  root.appendChild(card);
}

// SECCIÓN: FACTURACIÓN
function renderFacturacion(root) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; min-height: 80vh;">
      
      <!-- COLUMNA IZQUIERDA - FORMULARIO DE FACTURACIÓN -->
      <div style="display: grid; gap: 1.5rem;">
        
        <!-- Encabezado del Sistema -->
        <div style="
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        ">
          <div style="
            width: 80px;
            height: 80px;
            background: #6f42c1;
            border-radius: 50%;
            margin: 0 auto 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
          ">📄✏️</div>
          <h2 style="
            margin: 0 0 0.5rem 0;
            color: #6f42c1;
            font-size: 1.5rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
          ">Sistema de Facturación</h2>
          <p style="
            margin: 0;
            color: var(--sub);
            font-size: 1rem;
          ">Gestión profesional de documentos comerciales</p>
        </div>
        
        <!-- Información del Documento -->
        <div style="
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        ">
          <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1.5rem;">
            <div style="
              width: 24px;
              height: 24px;
              background: #6f42c1;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 0.8rem;
            ">📅</div>
            <h3 style="margin: 0; color: var(--text); font-size: 1.2rem; font-weight: 600;">Información del Documento</h3>
          </div>
          
          <div style="display: grid; gap: 1rem;">
            <div>
              <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">TIPO</label>
              <div style="position: relative;">
                <select id="tipoDocumento" style="
                  width: 100%; 
                  padding: 0.8rem; 
                  padding-right: 3rem;
                  border: 1px solid var(--muted); 
                  border-radius: 6px; 
                  background: white; 
                  font-size: 1rem;
                  appearance: none;
                ">
                  <option value="factura">📄 FACTURA</option>
                  <option value="nota-credito">📝 Nota de Crédito</option>
                  <option value="nota-debito">📋 Nota de Débito</option>
                  <option value="guia-remision">🚚 Guía de Remisión</option>
                </select>
                <div style="
                  position: absolute;
                  right: 1rem;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--sub);
                  pointer-events: none;
                ">▼</div>
              </div>
            </div>
            
            <div>
              <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">FECHA</label>
              <div style="position: relative;">
                <input 
                  type="text" 
                  id="fechaDocumento" 
                  value="${new Date().toLocaleDateString('es-EC', {day: '2-digit', month: '2-digit', year: 'numeric'})} ${new Date().toLocaleTimeString('es-EC', {hour: '2-digit', minute: '2-digit'})}" 
                  readonly
                  style="
                    width: 100%; 
                    padding: 0.8rem; 
                    padding-right: 3rem;
                    border: 1px solid var(--muted); 
                    border-radius: 6px; 
                    background: white; 
                    font-size: 1rem;
                    cursor: pointer;
                  "
                  onclick="abrirSelectorFechaFactura()"
                  title="Haz clic para cambiar fecha y hora"
                />
                <div style="
                  position: absolute;
                  right: 1rem;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--sub);
                  cursor: pointer;
                " onclick="abrirSelectorFechaFactura()">📅</div>
              </div>
            </div>
            
            <div>
              <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">SUCURSAL</label>
              <div style="position: relative;">
                <select id="sucursalDocumento" style="
                  width: 100%; 
                  padding: 0.8rem; 
                  padding-right: 3rem;
                  border: 1px solid var(--muted); 
                  border-radius: 6px; 
                  background: white; 
                  font-size: 1rem;
                  appearance: none;
                ">
                  <option value="matriz">🏢 Matriz</option>
                  <option value="norte">🏢 Norte</option>
                  <option value="sur">🏢 Sur</option>
                  <option value="este">🏢 Este</option>
                  <option value="oeste">🏢 Oeste</option>
                </select>
                <div style="
                  position: absolute;
                  right: 1rem;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--sub);
                  pointer-events: none;
                ">▼</div>
              </div>
            </div>
            
            <div>
              <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">PAGO</label>
              <div style="position: relative;">
                <select id="tipoPagoDocumento" style="
                  width: 100%; 
                  padding: 0.8rem; 
                  padding-right: 3rem;
                  border: 1px solid var(--muted); 
                  border-radius: 6px; 
                  background: white; 
                  font-size: 1rem;
                  appearance: none;
                ">
                  <option value="efectivo">💵 Efectivo</option>
                  <option value="tarjeta">💳 Tarjeta</option>
                  <option value="transferencia">🏦 Transferencia</option>
                  <option value="cheque">📋 Cheque</option>
                  <option value="crypto">₿ Criptomonedas</option>
                </select>
                <div style="
                  position: absolute;
                  right: 1rem;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--sub);
                  pointer-events: none;
                ">▼</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Datos del Cliente -->
        <div style="
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        ">
          <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1.5rem;">
            <div style="
              width: 24px;
              height: 24px;
              background: #6f42c1;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 0.8rem;
            ">👤</div>
            <h3 style="margin: 0; color: var(--text); font-size: 1.2rem; font-weight: 600;">Datos del Cliente</h3>
          </div>
          
          <div style="display: grid; gap: 1rem;">
            <div>
              <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">CLIENTE</label>
              <input 
                type="text" 
                id="nombreCliente" 
                placeholder="Nombre del cliente o Consumidor Final" 
                style="
                  width: 100%; 
                  padding: 0.8rem; 
                  border: 1px solid var(--muted); 
                  border-radius: 6px; 
                  background: white; 
                  font-size: 1rem;
                "
              />
            </div>
            
            <div>
              <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">IDENTIFICACIÓN</label>
              <div style="position: relative;">
                <input 
                  type="text" 
                  id="identificacionCliente" 
                  placeholder="Cédula/RUC" 
                  style="
                    width: 100%; 
                    padding: 0.8rem; 
                    padding-right: 3rem;
                    border: 1px solid var(--muted); 
                    border-radius: 6px; 
                    background: white; 
                    font-size: 1rem;
                  "
                />
                <div style="
                  position: absolute;
                  right: 1rem;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--sub);
                ">🆔</div>
              </div>
            </div>
            
            <div>
              <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">EMAIL</label>
              <div style="position: relative;">
                <input 
                  type="email" 
                  id="emailCliente" 
                  placeholder="Email del cliente" 
                  style="
                    width: 100%; 
                    padding: 0.8rem; 
                    padding-right: 3rem;
                    border: 1px solid var(--muted); 
                    border-radius: 6px; 
                    background: white; 
                    font-size: 1rem;
                  "
                />
                <div style="
                  position: absolute;
                  right: 1rem;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--sub);
                ">✉️</div>
              </div>
            </div>
            
            <div>
              <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">NOTAS</label>
              <textarea 
                id="notasCliente" 
                placeholder="Observaciones adicionales" 
                rows="3"
                style="
                  width: 100%; 
                  padding: 0.8rem; 
                  border: 1px solid var(--muted); 
                  border-radius: 6px; 
                  background: white; 
                  font-size: 1rem;
                  resize: vertical;
                "
              ></textarea>
            </div>
          </div>
        </div>
        
        <!-- Productos y Servicios -->
        <div style="
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        ">
          <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1.5rem;">
            <div style="
              width: 24px;
              height: 24px;
              background: #6f42c1;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 0.8rem;
            ">✅</div>
            <h3 style="margin: 0; color: var(--text); font-size: 1.2rem; font-weight: 600;">Productos y Servicios</h3>
          </div>
          
          <div id="listaProductos" style="
            border: 2px dashed var(--muted);
            border-radius: 8px;
            padding: 2rem;
            text-align: center;
            margin-bottom: 1rem;
            min-height: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              font-size: 3rem;
              margin-bottom: 1rem;
              filter: grayscale(0.3);
            ">✅</div>
            <div style="
              font-size: 1.1rem;
              margin-bottom: 0.5rem;
              color: var(--text);
              font-weight: 600;
            ">No hay productos agregados</div>
            <div style="
              font-size: 0.9rem;
              color: var(--sub);
            ">Haz clic en 'Agregar Producto/Servicio' para comenzar</div>
          </div>
          
          <button onclick="agregarProductoServicio()" style="
            background: #6f42c1;
            color: white;
            border: none;
            padding: 1rem;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
          " onmouseover="this.style.background='#5a32a3'" onmouseout="this.style.background='#6f42c1'">
            ➕ Agregar Producto/Servicio
          </button>
        </div>
        
        <!-- Acciones -->
        <div style="
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        ">
          <h3 style="margin: 0 0 1.5rem 0; color: var(--text); font-size: 1.2rem; font-weight: 600;">Acciones</h3>
          
          <div style="display: flex; gap: 1rem;">
            <button onclick="limpiarFormularioFactura()" style="
              background: white;
              color: var(--text);
              border: 1px solid var(--muted);
              padding: 1rem 1.5rem;
              border-radius: 8px;
              cursor: pointer;
              font-weight: 600;
              font-size: 1rem;
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
            ">
              ✅ Limpiar
            </button>
            <button onclick="generarFactura()" style="
              background: #6f42c1;
              color: white;
              border: none;
              padding: 1rem 1.5rem;
              border-radius: 8px;
              cursor: pointer;
              font-weight: 600;
              font-size: 1rem;
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              transition: all 0.3s ease;
            " onmouseover="this.style.background='#5a32a3'" onmouseout="this.style.background='#6f42c1'">
              ⭐ Generar Factura
            </button>
          </div>
        </div>
      </div>
      
      <!-- COLUMNA DERECHA - RESUMEN E HISTORIAL -->
      <div style="display: grid; gap: 1.5rem;">
        
        <!-- Resumen de Facturación -->
        <div style="
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        ">
          <div style="
            width: 80px;
            height: 80px;
            background: var(--ok);
            border-radius: 50%;
            margin: 0 auto 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
          ">✅</div>
          <h3 style="
            margin: 0 0 0.5rem 0;
            color: var(--text);
            font-size: 1.3rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
          ">Resumen de Facturación</h3>
          <p style="
            margin: 0 0 1.5rem 0;
            color: var(--sub);
            font-size: 0.9rem;
          ">Cálculos automáticos en tiempo real</p>
          
          <div id="resumenFactura" style="
            border: 2px dashed var(--muted);
            border-radius: 8px;
            padding: 2rem;
            text-align: center;
            min-height: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              font-size: 3rem;
              margin-bottom: 1rem;
              filter: grayscale(0.3);
            ">✅</div>
            <div style="
              font-size: 1.1rem;
              margin-bottom: 0.5rem;
              color: var(--text);
              font-weight: 600;
            ">Resumen no disponible</div>
            <div style="
              font-size: 0.9rem;
              color: var(--sub);
            ">Complete el formulario para ver el resumen</div>
          </div>
        </div>
        
        <!-- Historial Reciente -->
        <div style="
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        ">
          <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1.5rem;">
            <div style="
              width: 24px;
              height: 24px;
              background: #6f42c1;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 0.8rem;
            ">⏰</div>
            <h3 style="margin: 0; color: var(--text); font-size: 1.2rem; font-weight: 600;">Historial Reciente</h3>
          </div>
          
          <div id="historialFacturas" style="
            border: 2px dashed var(--muted);
            border-radius: 8px;
            padding: 2rem;
            text-align: center;
            min-height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              font-size: 3rem;
              margin-bottom: 1rem;
              filter: grayscale(0.3);
            ">⏰</div>
            <div style="
              font-size: 1.1rem;
              margin-bottom: 0.5rem;
              color: var(--text);
              font-weight: 600;
            ">No hay facturas recientes</div>
            <div style="
              font-size: 0.9rem;
              color: var(--sub);
            ">Las facturas generadas aparecerán aquí</div>
          </div>
        </div>
        
        <!-- Nota informativa -->

      </div>
    </div>
  `;
  
  root.appendChild(card);
}

// ===== FUNCIONES PARA FACTURACIÓN =====

// Abrir selector de fecha para factura
function abrirSelectorFechaFactura() {
  const modal = document.createElement('div');
  modal.id = 'modalFechaFactura';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;
  
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();
  
  modal.innerHTML = `
    <div style="
      background: white;
      border-radius: 12px;
      padding: 2rem;
      width: 90%;
      max-width: 400px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    ">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1.3rem; font-weight: 600;">📅 Seleccionar Fecha y Hora</h3>
        <button onclick="cerrarModalFechaFactura()" style="
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--sub);
          padding: 0.5rem;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">✕</button>
      </div>
      
      <div style="display: grid; gap: 1.2rem;">
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Día:</label>
          <select id="diaSelectFactura" style="
            width: 100%; 
            padding: 0.8rem; 
            border: 1px solid var(--muted); 
            border-radius: 6px;
            background: white;
            font-size: 1rem;
            cursor: pointer;
          ">
            ${Array.from({length: 31}, (_, i) => i + 1).map(dia => 
              `<option value="${dia}" ${dia === fechaActual.getDate() ? 'selected' : ''}>${dia}</option>`
            ).join('')}
          </select>
        </div>
        
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Mes:</label>
          <select id="mesSelectFactura" style="
            width: 100%; 
            padding: 0.8rem; 
            border: 1px solid var(--muted); 
            border-radius: 6px;
            background: white;
            font-size: 1rem;
            cursor: pointer;
          ">
            ${[
              'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
              'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ].map((mes, i) => 
              `<option value="${i + 1}" ${i === fechaActual.getMonth() ? 'selected' : ''}>${mes}</option>`
            ).join('')}
          </select>
        </div>
        
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Año:</label>
          <select id="añoSelectFactura" style="
            width: 100%; 
            padding: 0.8rem; 
            border: 1px solid var(--muted); 
            border-radius: 6px;
            background: white;
            font-size: 1rem;
            cursor: pointer;
          ">
            ${Array.from({length: 5}, (_, i) => añoActual - 2 + i).map(año => 
              `<option value="${año}" ${año === añoActual ? 'selected' : ''}>${año}</option>`
            ).join('')}
          </select>
        </div>
        
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Hora:</label>
          <select id="horaSelectFactura" style="
            width: 100%; 
            padding: 0.8rem; 
            border: 1px solid var(--muted); 
            border-radius: 6px;
            background: white;
            font-size: 1rem;
            cursor: pointer;
          ">
            ${Array.from({length: 24}, (_, i) => i).map(hora => 
              `<option value="${hora}" ${hora === fechaActual.getHours() ? 'selected' : ''}>${hora.toString().padStart(2, '0')}</option>`
            ).join('')}
          </select>
        </div>
        
        <div>
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Minuto:</label>
          <select id="minutoSelectFactura" style="
            width: 100%; 
            padding: 0.8rem; 
            border: 1px solid var(--muted); 
            border-radius: 6px;
            background: white;
            font-size: 1rem;
            cursor: pointer;
          ">
            ${Array.from({length: 60}, (_, i) => i).map(minuto => 
              `<option value="${minuto}" ${minuto === fechaActual.getMinutes() ? 'selected' : ''}>${minuto.toString().padStart(2, '0')}</option>`
            ).join('')}
          </select>
        </div>
      </div>
      
      <div style="
        background: var(--panel);
        border-radius: 8px;
        padding: 1rem;
        margin: 1.5rem 0;
        text-align: center;
        border: 1px solid var(--muted);
      ">
        <div style="font-size: 0.9rem; color: var(--sub); margin-bottom: 0.5rem;">Fecha y hora seleccionada:</div>
        <div id="fechaHoraPreviewFactura" style="font-size: 1.2rem; font-weight: 600; color: var(--text);">
          ${fechaActual.getDate().toString().padStart(2, '0')}/${(fechaActual.getMonth() + 1).toString().padStart(2, '0')}/${añoActual} ${fechaActual.getHours().toString().padStart(2, '0')}:${fechaActual.getMinutes().toString().padStart(2, '0')}
        </div>
      </div>
      
      <div style="display: flex; gap: 1rem; justify-content: center;">
        <button onclick="cerrarModalFechaFactura()" style="
          background: var(--panel);
          color: var(--text);
          border: 1px solid var(--muted);
          padding: 0.8rem 1.5rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          min-width: 100px;
        ">Cancelar</button>
        <button onclick="confirmarFechaHoraFactura()" style="
          background: var(--ok);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          min-width: 100px;
        ">Confirmar</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Agregar event listeners para actualizar la vista previa
  const diaSelect = document.getElementById('diaSelectFactura');
  const mesSelect = document.getElementById('mesSelectFactura');
  const añoSelect = document.getElementById('añoSelectFactura');
  const horaSelect = document.getElementById('horaSelectFactura');
  const minutoSelect = document.getElementById('minutoSelectFactura');
  const fechaHoraPreview = document.getElementById('fechaHoraPreviewFactura');
  
  function actualizarVistaPrevia() {
    const dia = diaSelect.value;
    const mes = mesSelect.value;
    const año = añoSelect.value;
    const hora = horaSelect.value;
    const minuto = minutoSelect.value;
    fechaHoraPreview.textContent = `${dia.padStart(2, '0')}/${mes.padStart(2, '0')}/${año} ${hora.padStart(2, '0')}:${minuto.padStart(2, '0')}`;
  }
  
  diaSelect.addEventListener('change', actualizarVistaPrevia);
  mesSelect.addEventListener('change', actualizarVistaPrevia);
  añoSelect.addEventListener('change', actualizarVistaPrevia);
  horaSelect.addEventListener('change', actualizarVistaPrevia);
  minutoSelect.addEventListener('change', actualizarVistaPrevia);
}

// Cerrar modal de fecha de factura
function cerrarModalFechaFactura() {
  const modal = document.getElementById('modalFechaFactura');
  if (modal) {
    modal.remove();
  }
}

// Confirmar fecha y hora de factura
function confirmarFechaHoraFactura() {
  const dia = document.getElementById('diaSelectFactura').value;
  const mes = document.getElementById('mesSelectFactura').value;
  const año = document.getElementById('añoSelectFactura').value;
  const hora = document.getElementById('horaSelectFactura').value;
  const minuto = document.getElementById('minutoSelectFactura').value;
  
  const inputFecha = document.getElementById('fechaDocumento');
  if (inputFecha) {
    const fechaFormateada = `${dia.padStart(2, '0')}/${mes.padStart(2, '0')}/${año} ${hora.padStart(2, '0')}:${minuto.padStart(2, '0')}`;
    inputFecha.value = fechaFormateada;
  }
  
  cerrarModalFechaFactura();
}

// Agregar producto o servicio
function agregarProductoServicio() {
  // Crear una nueva fila de producto directamente en la lista
  const listaProductos = document.getElementById('listaProductos');
  if (!listaProductos) return;
  
  // Si es el primer producto, limpiar el mensaje de "No hay productos agregados"
  if (window.productosFactura && window.productosFactura.length === 0) {
    listaProductos.innerHTML = '';
  }
  
  // Crear ID único para el producto
  const productoId = Date.now().toString();
  
  // Crear la fila de producto
  const filaProducto = document.createElement('div');
  filaProducto.id = `producto-${productoId}`;
  filaProducto.style.cssText = `
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border: 1px solid var(--muted);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `;
  
  filaProducto.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr auto auto; gap: 1rem; align-items: center;">
      <!-- DESCRIPCIÓN -->
      <div>
        <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600; font-size: 0.9rem;">
          📄 DESCRIPCIÓN
        </label>
        <input 
          type="text" 
          id="descripcion-${productoId}" 
          placeholder="Ej: Membresía mensual..." 
          style="width: 100%; padding: 0.6rem; border: 1px solid var(--muted); border-radius: 6px; background: white; font-size: 0.9rem;"
          oninput="actualizarCalculosProducto('${productoId}')"
        />
      </div>
      
      <!-- CANTIDAD -->
      <div>
        <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600; font-size: 0.9rem;">
          🔲 CANTIDAD
        </label>
        <input 
          type="number" 
          id="cantidad-${productoId}" 
          placeholder="1" 
          min="1"
          value="1"
          style="width: 100%; padding: 0.6rem; border: 1px solid var(--muted); border-radius: 6px; background: white; font-size: 0.9rem;"
          oninput="actualizarCalculosProducto('${productoId}')"
        />
      </div>
      
      <!-- PRECIO -->
      <div>
        <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600; font-size: 0.9rem;">
          💰 PRECIO
        </label>
        <input 
          type="number" 
          id="precio-${productoId}" 
          placeholder="0.00" 
          min="0.01"
          step="0.01"
          style="width: 100%; padding: 0.6rem; border: 1px solid var(--muted); border-radius: 6px; background: white; font-size: 0.9rem;"
          oninput="actualizarCalculosProducto('${productoId}')"
        />
      </div>
      
      <!-- DESCUENTO -->
      <div>
        <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600; font-size: 0.9rem;">
          🏷️ DESCUENTO
        </label>
        <input 
          type="number" 
          id="descuento-${productoId}" 
          placeholder="0" 
          min="0"
          max="100"
          value="0"
          style="width: 100%; padding: 0.6rem; border: 1px solid var(--muted); border-radius: 6px; background: white; font-size: 0.9rem;"
          oninput="actualizarCalculosProducto('${productoId}')"
        />
      </div>
      
      <!-- IVA -->
      <div style="display: flex; align-items: center; justify-content: center;">
        <label style="display: flex; align-items: center; gap: 0.5rem; color: var(--text); font-weight: 600; font-size: 0.9rem; cursor: pointer;">
          <input 
            type="checkbox" 
            id="iva-${productoId}" 
            checked
            style="width: 18px; height: 18px; accent-color: #6f42c1;"
            onchange="actualizarCalculosProducto('${productoId}')"
          />
          IVA
        </label>
      </div>
      
      <!-- BOTÓN ELIMINAR -->
      <div>
        <button onclick="eliminarProducto('${productoId}')" style="
          background: var(--danger);
          color: white;
          border: none;
          padding: 0.6rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        " title="Eliminar producto">✕</button>
      </div>
    </div>
  `;
  
  // Agregar la fila a la lista
  listaProductos.appendChild(filaProducto);
  
  // Crear objeto del producto y agregarlo a la lista global
  if (!window.productosFactura) {
    window.productosFactura = [];
  }
  
  const nuevoProducto = {
    id: productoId,
    descripcion: '',
    cantidad: 1,
    precio: 0,
    descuento: 0,
    iva: true,
    subtotal: 0,
    subtotalConDescuento: 0,
    subtotalConIva: 0
  };
  
  window.productosFactura.push(nuevoProducto);
  
  // Actualizar el resumen
  actualizarResumenFactura();
  
  // Enfocar el campo de descripción
  setTimeout(() => {
    document.getElementById(`descripcion-${productoId}`).focus();
  }, 100);
}

// Actualizar cálculos del producto en tiempo real
function actualizarCalculosProducto(productoId) {
  const descripcion = document.getElementById(`descripcion-${productoId}`).value;
  const cantidad = parseInt(document.getElementById(`cantidad-${productoId}`).value) || 0;
  const precio = parseFloat(document.getElementById(`precio-${productoId}`).value) || 0;
  const descuento = parseFloat(document.getElementById(`descuento-${productoId}`).value) || 0;
  const iva = document.getElementById(`iva-${productoId}`).checked;
  
  // Calcular subtotal
  const subtotal = cantidad * precio;
  
  // Calcular descuento en dinero
  const descuentoEnDinero = subtotal * (descuento / 100);
  const subtotalConDescuento = subtotal - descuentoEnDinero;
  
  // Calcular IVA si está marcado
  const ivaCalculado = iva ? subtotalConDescuento * 0.12 : 0;
  const subtotalConIva = subtotalConDescuento + ivaCalculado;
  
  // Actualizar el objeto del producto en la lista global
  const producto = window.productosFactura.find(p => p.id === productoId);
  if (producto) {
    producto.descripcion = descripcion;
    producto.cantidad = cantidad;
    producto.precio = precio;
    producto.descuento = descuento;
    producto.iva = iva;
    producto.subtotal = subtotal;
    producto.subtotalConDescuento = subtotalConDescuento;
    producto.subtotalConIva = subtotalConIva;
  }
  
  // Actualizar el resumen de facturación
  actualizarResumenFactura();
}

// Cerrar modal de producto/servicio (ya no se usa, pero mantenemos la función por compatibilidad)
function cerrarModalProductoServicio() {
  const modal = document.getElementById('modalProductoServicio');
  if (modal) {
    modal.remove();
  }
}

// Guardar producto/servicio
function guardarProductoServicio() {
  const descripcion = document.getElementById('descripcionProducto').value;
  const cantidad = parseInt(document.getElementById('cantidadProducto').value);
  const precioUnitario = parseFloat(document.getElementById('precioUnitarioProducto').value);
  
  if (!descripcion || !cantidad || !precioUnitario) {
    alert('Por favor completa todos los campos');
    return;
  }
  
  const subtotal = cantidad * precioUnitario;
  
  // Crear objeto del producto
  const producto = {
    id: Date.now().toString(),
    descripcion: descripcion,
    cantidad: cantidad,
    precioUnitario: precioUnitario,
    subtotal: subtotal
  };
  
  // Agregar a la lista de productos
  if (!window.productosFactura) {
    window.productosFactura = [];
  }
  window.productosFactura.push(producto);
  
  // Actualizar la vista
  actualizarListaProductos();
  actualizarResumenFactura();
  
  // Cerrar modal
  cerrarModalProductoServicio();
  
  // Limpiar campos
  document.getElementById('descripcionProducto').value = '';
  document.getElementById('cantidadProducto').value = '1';
  document.getElementById('precioUnitarioProducto').value = '';
}

// Actualizar lista de productos
function actualizarListaProductos() {
  const listaProductos = document.getElementById('listaProductos');
  if (!listaProductos) return;
  
  if (!window.productosFactura || window.productosFactura.length === 0) {
    listaProductos.innerHTML = `
      <div style="
        font-size: 3rem;
        margin-bottom: 1rem;
        filter: grayscale(0.3);
      ">✅</div>
      <div style="
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        color: var(--text);
        font-weight: 600;
      ">No hay productos agregados</div>
      <div style="
        font-size: 0.9rem;
        color: var(--sub);
      ">Haz clic en 'Agregar Producto/Servicio' para comenzar</div>
    `;
    return;
  }
  
  let html = '';
  window.productosFactura.forEach((producto, index) => {
    html += `
      <div style="
        background: var(--panel);
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 0.8rem;
        border: 1px solid var(--muted);
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <div style="flex: 1;">
          <div style="font-weight: 600; color: var(--text); margin-bottom: 0.3rem;">
            ${producto.descripcion}
          </div>
          <div style="font-size: 0.9rem; color: var(--sub);">
            ${producto.cantidad} x $${producto.precioUnitario.toFixed(2)} = $${producto.subtotal.toFixed(2)}
          </div>
        </div>
        <button onclick="eliminarProducto(${index})" style="
          background: var(--danger);
          color: white;
          border: none;
          padding: 0.5rem;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          cursor: pointer;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        " title="Eliminar producto">✕</button>
      </div>
    `;
  });
  
  listaProductos.innerHTML = html;
}

// Eliminar producto
function eliminarProducto(productoId) {
  // Remover de la lista global
  window.productosFactura = window.productosFactura.filter(p => p.id !== productoId);
  
  // Remover del DOM
  const filaProducto = document.getElementById(`producto-${productoId}`);
  if (filaProducto) {
    filaProducto.remove();
  }
  
  // Si no quedan productos, mostrar el mensaje de "No hay productos agregados"
  if (window.productosFactura.length === 0) {
    const listaProductos = document.getElementById('listaProductos');
    if (listaProductos) {
      listaProductos.innerHTML = `
        <div style="
          border: 2px dashed var(--muted);
          border-radius: 8px;
          padding: 2rem;
          text-align: center;
          margin-bottom: 1rem;
          min-height: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            font-size: 3rem;
            margin-bottom: 1rem;
            filter: grayscale(0.3);
          ">✅</div>
          <div style="
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            color: var(--text);
            font-weight: 600;
          ">No hay productos agregados</div>
          <div style="
            font-size: 0.9rem;
            color: var(--sub);
          ">Haz clic en 'Agregar Producto/Servicio' para comenzar</div>
        </div>
      `;
    }
  }
  
  // Actualizar el resumen
  actualizarResumenFactura();
}

// Actualizar resumen de factura
function actualizarResumenFactura() {
  const resumenFactura = document.getElementById('resumenFactura');
  if (!resumenFactura) return;
  
  if (!window.productosFactura || window.productosFactura.length === 0) {
    resumenFactura.innerHTML = `
      <div style="
        font-size: 3rem;
        margin-bottom: 1rem;
        filter: grayscale(0.3);
      ">✅</div>
      <div style="
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        color: var(--text);
        font-weight: 600;
      ">Resumen no disponible</div>
      <div style="
        font-size: 0.9rem;
        color: var(--sub);
      ">Complete el formulario para ver el resumen</div>
    `;
    return;
  }
  
  // Calcular totales
  const subtotal0 = window.productosFactura.reduce((sum, p) => {
    return sum + (p.iva ? 0 : p.subtotalConDescuento);
  }, 0);
  
  const subtotalIva = window.productosFactura.reduce((sum, p) => {
    return sum + (p.iva ? p.subtotalConDescuento : 0);
  }, 0);
  
  const totalDescuentos = window.productosFactura.reduce((sum, p) => {
    return sum + (p.subtotal - p.subtotalConDescuento);
  }, 0);
  
  const totalIva = window.productosFactura.reduce((sum, p) => {
    return sum + (p.iva ? p.subtotalConDescuento * 0.12 : 0);
  }, 0);
  
  const totalAPagar = subtotal0 + subtotalIva + totalIva;
  
  resumenFactura.innerHTML = `
    <div style="display: grid; gap: 1.2rem; text-align: left;">
      <!-- Subtotal 0% -->
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.8rem 0;">
        <div style="display: flex; align-items: center; gap: 0.8rem;">
          <div style="
            width: 24px;
            height: 24px;
            background: #28a745;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.8rem;
          ">🏢</div>
          <span style="color: var(--text); font-size: 0.95rem; font-weight: 600;">Subtotal 0%:</span>
        </div>
        <span style="font-weight: 700; color: var(--text); font-size: 1rem;">$${subtotal0.toFixed(2)}</span>
      </div>
      
      <!-- Subtotal IVA -->
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.8rem 0;">
        <div style="display: flex; align-items: center; gap: 0.8rem;">
          <div style="
            width: 24px;
            height: 24px;
            background: #ffc107;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.8rem;
          ">💰</div>
          <span style="color: var(--text); font-size: 0.95rem; font-weight: 600;">Subtotal IVA:</span>
        </div>
        <span style="font-weight: 700; color: var(--text); font-size: 1rem;">$${subtotalIva.toFixed(2)}</span>
      </div>
      
      <!-- Descuentos -->
      <div style="
        display: flex; 
        justify-content: space-between; 
        align-items: center;
        background: rgba(255, 193, 7, 0.1);
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid rgba(255, 193, 7, 0.3);
      ">
        <div style="display: flex; align-items: center; gap: 0.8rem;">
          <div style="
            width: 24px;
            height: 24px;
            background: #fd7e14;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.8rem;
          ">🏷️</div>
          <span style="color: #856404; font-size: 0.95rem; font-weight: 600;">Descuentos:</span>
        </div>
        <span style="font-weight: 700; color: #856404; font-size: 1rem;">$${totalDescuentos.toFixed(2)}</span>
      </div>
      
      <!-- IVA -->
      <div style="
        display: flex; 
        justify-content: space-between; 
        align-items: center;
        background: rgba(220, 53, 69, 0.1);
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid rgba(220, 53, 69, 0.3);
      ">
        <div style="display: flex; align-items: center; gap: 0.8rem;">
          <div style="
            width: 24px;
            height: 24px;
            background: #dc3545;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.8rem;
          ">📄</div>
          <span style="color: #721c24; font-size: 0.95rem; font-weight: 600;">IVA (12%):</span>
        </div>
        <span style="font-weight: 700; color: #721c24; font-size: 1rem;">$${totalIva.toFixed(2)}</span>
      </div>
      
      <!-- TOTAL A PAGAR -->
      <div style="
        background: #6f42c1;
        color: white;
        padding: 1.5rem;
        border-radius: 12px;
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
        font-size: 1.3rem;
        box-shadow: 0 4px 12px rgba(111, 66, 193, 0.3);
      ">
        <span style="text-transform: uppercase; letter-spacing: 0.5px;">TOTAL A PAGAR:</span>
        <span style="font-size: 1.5rem;">$${totalAPagar.toFixed(2)}</span>
      </div>
    </div>
  `;
}

// Limpiar formulario de factura
function limpiarFormularioFactura() {
  if (confirm('¿Estás seguro de que quieres limpiar el formulario? Se perderán todos los datos.')) {
    // Limpiar campos del cliente
    document.getElementById('nombreCliente').value = '';
    document.getElementById('identificacionCliente').value = '';
    document.getElementById('emailCliente').value = '';
    document.getElementById('notasCliente').value = '';
    
    // Limpiar productos del DOM
    const listaProductos = document.getElementById('listaProductos');
    if (listaProductos) {
      // Mantener solo el mensaje de "No hay productos agregados"
      listaProductos.innerHTML = `
        <div style="
          border: 2px dashed var(--muted);
          border-radius: 8px;
          padding: 2rem;
          text-align: center;
          margin-bottom: 1rem;
          min-height: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            font-size: 3rem;
            margin-bottom: 1rem;
            filter: grayscale(0.3);
          ">✅</div>
          <div style="
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            color: var(--text);
            font-weight: 600;
          ">No hay productos agregados</div>
          <div style="
            font-size: 0.9rem;
            color: var(--sub);
          ">Haz clic en 'Agregar Producto/Servicio' para comenzar</div>
        </div>
      `;
    }
    
    // Limpiar lista global de productos
    window.productosFactura = [];
    
    // Restablecer fecha actual
    const fechaActual = new Date();
    document.getElementById('fechaDocumento').value = fechaActual.toLocaleDateString('es-EC', {day: '2-digit', month: '2-digit', year: 'numeric'}) + ' ' + fechaActual.toLocaleTimeString('es-EC', {hour: '2-digit', minute: '2-digit'});
    
    // Restablecer selecciones por defecto
    document.getElementById('tipoDocumento').value = 'factura';
    document.getElementById('sucursalDocumento').value = 'matriz';
    document.getElementById('tipoPagoDocumento').value = 'efectivo';
    
    // Actualizar resumen
    actualizarResumenFactura();
    
    alert('Formulario limpiado exitosamente');
  }
}

// Generar factura
function generarFactura() {
  // Validar campos obligatorios
  const nombreCliente = document.getElementById('nombreCliente').value;
  const identificacionCliente = document.getElementById('identificacionCliente').value;
  
  if (!nombreCliente.trim()) {
    alert('Por favor ingresa el nombre del cliente');
    return;
  }
  
  if (!window.productosFactura || window.productosFactura.length === 0) {
    alert('Por favor agrega al menos un producto o servicio');
    return;
  }
  
  // Validar que todos los productos tengan descripción y precio
  const productosIncompletos = window.productosFactura.filter(p => !p.descripcion.trim() || p.precio <= 0);
  if (productosIncompletos.length > 0) {
    alert('Por favor completa la descripción y precio de todos los productos');
    return;
  }
  
  // Calcular totales finales
  const subtotal0 = window.productosFactura.reduce((sum, p) => {
    return sum + (p.iva ? 0 : p.subtotalConDescuento);
  }, 0);
  
  const subtotalIva = window.productosFactura.reduce((sum, p) => {
    return sum + (p.iva ? p.subtotalConDescuento : 0);
  }, 0);
  
  const totalDescuentos = window.productosFactura.reduce((sum, p) => {
    return sum + (p.subtotal - p.subtotalConDescuento);
  }, 0);
  
  const totalIva = window.productosFactura.reduce((sum, p) => {
    return sum + (p.iva ? p.subtotalConDescuento * 0.12 : 0);
  }, 0);
  
  const totalAPagar = subtotal0 + subtotalIva + totalIva;
  
  // Crear objeto de factura
  const factura = {
    id: Date.now().toString(),
    numero: 'FAC-' + Date.now().toString().slice(-6),
    fecha: document.getElementById('fechaDocumento').value,
    tipo: document.getElementById('tipoDocumento').value,
    sucursal: document.getElementById('sucursalDocumento').value,
    tipoPago: document.getElementById('tipoPagoDocumento').value,
    cliente: {
      nombre: nombreCliente,
      identificacion: identificacionCliente,
      email: document.getElementById('emailCliente').value,
      notas: document.getElementById('notasCliente').value
    },
    productos: [...window.productosFactura],
    subtotal0: subtotal0,
    subtotalIva: subtotalIva,
    totalDescuentos: totalDescuentos,
    totalIva: totalIva,
    total: totalAPagar,
    estado: 'generada',
    fechaCreacion: new Date().toISOString()
  };
  
  // Guardar en la base de datos
  if (!DB.facturas) {
    DB.facturas = [];
  }
  DB.facturas.push(factura);
  
  // Guardar en localStorage
  localStorage.setItem('gymDB', JSON.stringify(DB));
  
  // Mostrar confirmación
  alert(`Factura generada exitosamente!\nNúmero: ${factura.numero}\nTotal: $${factura.total.toFixed(2)}`);
  
  // Limpiar formulario
  limpiarFormularioFactura();
  
  // Actualizar historial
  actualizarHistorialFacturas();
}

// Actualizar historial de facturas
function actualizarHistorialFacturas() {
  const historialFacturas = document.getElementById('historialFacturas');
  if (!historialFacturas) return;
  
  if (!DB.facturas || DB.facturas.length === 0) {
    historialFacturas.innerHTML = `
      <div style="
        border: 2px dashed var(--muted);
        border-radius: 8px;
        padding: 2rem;
        text-align: center;
        margin-bottom: 1rem;
        min-height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          font-size: 3rem;
          margin-bottom: 1rem;
          filter: grayscale(0.3);
        ">📄</div>
        <div style="
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--text);
          font-weight: 600;
        ">No hay facturas generadas</div>
        <div style="
          font-size: 0.9rem;
          color: var(--sub);
        ">Las facturas generadas aparecerán aquí</div>
      </div>
    `;
    return;
  }
  
  // Mostrar las 5 facturas más recientes
  const facturasRecientes = DB.facturas.slice(-5).reverse();
  
  historialFacturas.innerHTML = facturasRecientes.map(factura => `
    <div style="
      background: white;
      border: 2px solid rgba(111, 66, 193, 0.3);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    ">
      <!-- Lado izquierdo - Información de la factura -->
      <div style="flex: 1;">
        <div style="
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.8rem;
        ">
          <div style="
            width: 8px;
            height: 8px;
            background: #6f42c1;
            border-radius: 50%;
          "></div>
          <span style="
            color: #6f42c1;
            font-weight: 600;
            font-size: 0.9rem;
          ">FACTURA</span>
          <span style="
            color: var(--text);
            font-weight: 600;
            font-size: 0.9rem;
          ">•</span>
          <span style="
            color: var(--text);
            font-weight: 600;
            font-size: 0.9rem;
          ">Matriz</span>
        </div>
        
        <div style="
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.8rem;
          color: var(--sub);
          font-size: 0.9rem;
        ">
          📅 ${new Date(factura.fechaCreacion).toLocaleString('es-EC', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
          })}
        </div>
        
        <div style="
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--sub);
          font-size: 0.9rem;
        ">
          👤 ${factura.cliente.nombre || 'Consumidor final'}
        </div>
      </div>
      
      <!-- Lado derecho - Estado y monto -->
      <div style="
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.8rem;
        margin-right: 1rem;
      ">
        <div style="
          background: rgba(40, 167, 69, 0.1);
          color: #28a745;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(40, 167, 69, 0.3);
        ">
          ${factura.estado.toUpperCase()}
        </div>
        
        <div style="
          color: #6f42c1;
          font-weight: 700;
          font-size: 1.2rem;
        ">
          $${factura.total.toFixed(2)}
        </div>
      </div>
      
      <!-- Icono del ojo al final -->
      <button onclick="verDetalleFactura('${factura.id}')" style="
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 1.2rem;
        transition: all 0.2s ease;
      " title="Ver detalles">👁️</button>
    </div>
  `).join('');
}

// Ver detalle de factura
function verDetalleFactura(facturaId) {
  const factura = DB.facturas.find(f => f.id === facturaId);
  if (!factura) return;

  // Crear modal de detalle
  const modal = document.createElement('div');
  modal.id = 'modalDetalleFactura';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  `;

  modal.innerHTML = `
    <div style="
      background: white;
      border-radius: 12px;
      padding: 2rem;
      max-width: 600px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      position: relative;
    ">
      <!-- Header -->
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--muted);
      ">
        <h2 style="margin: 0; color: var(--text); font-size: 1.5rem;">
          Detalle de Factura #${factura.numero}
        </h2>
        <button onclick="cerrarDetalleFactura()" style="
          background: var(--danger);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
        ">✕</button>
      </div>

      <!-- Información del Cliente -->
      <div style="margin-bottom: 2rem;">
        <h3 style="color: var(--text); margin-bottom: 1rem; font-size: 1.2rem;">
          📋 Información del Cliente
        </h3>
        <div style="
          background: var(--panel);
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid var(--muted);
        ">
          <div style="margin-bottom: 0.5rem;">
            <strong>Nombre:</strong> ${factura.cliente.nombre}
          </div>
          <div style="margin-bottom: 0.5rem;">
            <strong>Identificación:</strong> ${factura.cliente.identificacion}
          </div>
          <div style="margin-bottom: 0.5rem;">
            <strong>Email:</strong> ${factura.cliente.email || 'No especificado'}
          </div>
          ${factura.cliente.notas ? `<div><strong>Notas:</strong> ${factura.cliente.notas}</div>` : ''}
        </div>
      </div>

      <!-- Productos -->
      <div style="margin-bottom: 2rem;">
        <h3 style="color: var(--text); margin-bottom: 1rem; font-size: 1.2rem;">
          🛍️ Productos y Servicios
        </h3>
        <div style="
          background: var(--panel);
          border-radius: 8px;
          border: 1px solid var(--muted);
          overflow: hidden;
        ">
          <div style="
            background: var(--primary);
            color: white;
            padding: 0.8rem 1rem;
            font-weight: 600;
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
            gap: 1rem;
            align-items: center;
          ">
            <div>Descripción</div>
            <div>Cantidad</div>
            <div>Precio</div>
            <div>Descuento</div>
            <div>Total</div>
          </div>
          ${factura.productos.map(producto => `
            <div style="
              padding: 0.8rem 1rem;
              border-bottom: 1px solid var(--muted);
              display: grid;
              grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
              gap: 1rem;
              align-items: center;
            ">
              <div style="font-weight: 500;">${producto.descripcion}</div>
              <div>${producto.cantidad}</div>
              <div>$${producto.precio.toFixed(2)}</div>
              <div>${producto.descuento}%</div>
              <div style="font-weight: 600; color: var(--ok);">
                $${producto.subtotalConDescuento.toFixed(2)}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Resumen de Facturación -->
      <div style="margin-bottom: 2rem;">
        <h3 style="color: var(--text); margin-bottom: 1rem; font-size: 1.2rem;">
          💰 Resumen de Facturación
        </h3>
        <div style="
          background: var(--panel);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--muted);
        ">
          <div style="display: grid; gap: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: var(--text); font-weight: 600;">Subtotal 0%:</span>
              <span style="font-weight: 700; color: var(--text);">$${factura.subtotal0.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="color: var(--text); font-weight: 600;">Subtotal IVA:</span>
              <span style="font-weight: 700; color: var(--text);">$${factura.subtotalIva.toFixed(2)}</span>
            </div>
            <div style="
              display: flex; 
              justify-content: space-between; 
              align-items: center;
              background: rgba(255, 193, 7, 0.1);
              padding: 0.8rem;
              border-radius: 6px;
              border: 1px solid rgba(255, 193, 7, 0.3);
            ">
              <span style="color: #856404; font-weight: 600;">Descuentos:</span>
              <span style="font-weight: 700; color: #856404;">$${factura.totalDescuentos.toFixed(2)}</span>
            </div>
            <div style="
              display: flex; 
              justify-content: space-between; 
              align-items: center;
              background: rgba(220, 53, 69, 0.1);
              padding: 0.8rem;
              border-radius: 6px;
              border: 1px solid rgba(220, 53, 69, 0.3);
            ">
              <span style="color: #721c24; font-weight: 600;">IVA (12%):</span>
              <span style="font-weight: 700; color: #721c24;">$${factura.totalIva.toFixed(2)}</span>
            </div>
            <div style="
              background: #6f42c1;
              color: white;
              padding: 1rem;
              border-radius: 8px;
              margin-top: 0.5rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-weight: 700;
              font-size: 1.2rem;
            ">
              <span>TOTAL A PAGAR:</span>
              <span>$${factura.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Información Adicional -->
      <div style="
        background: var(--panel);
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid var(--muted);
        text-align: center;
        color: var(--sub);
        font-size: 0.9rem;
      ">
        <div style="margin-bottom: 0.5rem;">
          <strong>Fecha de Creación:</strong> ${new Date(factura.fechaCreacion).toLocaleString('es-EC')}
        </div>
        <div>
          <strong>Estado:</strong> 
          <span style="
            background: var(--ok);
            color: white;
            padding: 0.2rem 0.6rem;
            border-radius: 12px;
            font-size: 0.8rem;
            font-weight: 600;
          ">${factura.estado}</span>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

// Cerrar modal de detalle de factura
function cerrarDetalleFactura() {
  const modal = document.getElementById('modalDetalleFactura');
  if (modal) {
    modal.remove();
  }
}

// FUNCIONES PARA ASIGNACIÓN DE ENTRENAMIENTO

// Variables globales para el entrenamiento
let clienteSeleccionado = null;
let generoSeleccionado = null;
let seccionesEntrenamiento = [];
let contadorSecciones = 0;

// Base de datos de ejercicios por tipo y género
const ejerciciosDB = {
  Hombros: {
    Hombre: [
      "Press militar con barra",
      "Press militar con mancuernas",
      "Elevaciones laterales",
      "Elevaciones frontales",
      "Elevaciones posteriores",
      "Remo vertical",
      "Press Arnold",
      "Elevaciones en Y",
      "Rotaciones externas",
      "Shrugs con barra"
    ],
    Mujer: [
      "Press militar con mancuernas",
      "Elevaciones laterales",
      "Elevaciones frontales",
      "Elevaciones posteriores",
      "Remo vertical",
      "Press Arnold",
      "Elevaciones en Y",
      "Rotaciones externas",
      "Shrugs con mancuernas"
    ]
  },
  Pecho: {
    Hombre: [
      "Press de banca con barra",
      "Press de banca con mancuernas",
      "Press inclinado",
      "Press declinado",
      "Aperturas con mancuernas",
      "Fondos en paralelas",
      "Flexiones de pecho",
      "Pullover con mancuerna"
    ],
    Mujer: [
      "Press de banca con mancuernas",
      "Press inclinado con mancuernas",
      "Aperturas con mancuernas",
      "Fondos en paralelas",
      "Flexiones de pecho",
      "Pullover con mancuerna"
    ]
  },
  Espalda: {
    Hombre: [
      "Dominadas",
      "Remo con barra",
      "Remo con mancuernas",
      "Pulldown en polea",
      "Remo en polea",
      "Pullover en polea",
      "Hiperextensiones",
      "Remo invertido"
    ],
    Mujer: [
      "Remo con mancuernas",
      "Pulldown en polea",
      "Remo en polea",
      "Pullover en polea",
      "Hiperextensiones",
      "Remo invertido"
    ]
  },
  Bíceps: {
    Hombre: [
      "Curl con barra",
      "Curl con mancuernas",
      "Curl martillo",
      "Curl concentrado",
      "Curl en polea",
      "Curl predicador",
      "Curl 21s"
    ],
    Mujer: [
      "Curl con mancuernas",
      "Curl martillo",
      "Curl concentrado",
      "Curl en polea",
      "Curl predicador"
    ]
  },
  Tríceps: {
    Hombre: [
      "Press francés",
      "Extensiones en polea",
      "Fondos en paralelas",
      "Extensiones con mancuerna",
      "Press cerrado",
      "Patada de burro",
      "Extensiones tras nuca"
    ],
    Mujer: [
      "Extensiones en polea",
      "Extensiones con mancuerna",
      "Press cerrado",
      "Patada de burro",
      "Extensiones tras nuca"
    ]
  },
  Piernas: {
    Hombre: [
      "Sentadillas con barra",
      "Sentadillas con mancuernas",
      "Prensa de piernas",
      "Extensiones de cuádriceps",
      "Curl de isquiotibiales",
      "Peso muerto",
      "Zancadas",
      "Elevaciones de gemelos"
    ],
    Mujer: [
      "Sentadillas con mancuernas",
      "Prensa de piernas",
      "Extensiones de cuádriceps",
      "Curl de isquiotibiales",
      "Zancadas",
      "Elevaciones de gemelos"
    ]
  },
  Abdominales: {
    Hombre: [
      "Crunches",
      "Plancha",
      "Elevaciones de piernas",
      "Russian twists",
      "Abdominales bicicleta",
      "Mountain climbers",
      "Leg raises"
    ],
    Mujer: [
      "Crunches",
      "Plancha",
      "Elevaciones de piernas",
      "Russian twists",
      "Abdominales bicicleta",
      "Mountain climbers"
    ]
  }
};

// Función para validar cédula
function validarCedulaBusqueda(valor) {
  const cedula = valor.replace(/\D/g, '');
  if (cedula.length > 10) {
    EL('#cedulaBusqueda').value = cedula.substring(0, 10);
  }
}

// Función para buscar cliente
function buscarClienteEntrenamiento() {
  const cedula = EL('#cedulaBusqueda').value.trim();
  const resultadoDiv = EL('#resultadoBusqueda');
  
  if (cedula.length !== 10) {
    resultadoDiv.innerHTML = `
      <div style="color: #dc3545; background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 6px; padding: 1rem;">
        ❌ Por favor ingrese una cédula válida de 10 dígitos
      </div>
    `;
    return;
  }
  
  const cliente = DB.users.find(u => u.cedula === cedula);
  
  if (cliente) {
    clienteSeleccionado = cliente;
    resultadoDiv.innerHTML = `
      <div style="color: #155724; background: #d4edda; border: 1px solid #c3e6cb; border-radius: 6px; padding: 1rem;">
        ✅ Cliente encontrado: ${cliente.nombres} ${cliente.apellidos} (${cliente.genero || 'No especificado'})
      </div>
    `;
    
    // Mostrar paso 2
    EL('#pasoGenero').style.display = 'block';
    
    // Configurar género automáticamente si está disponible
    if (cliente.genero) {
      generoSeleccionado = cliente.genero;
      setTimeout(() => seleccionarGenero(cliente.genero), 500);
    }
  } else {
    resultadoDiv.innerHTML = `
      <div style="color: #721c24; background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 6px; padding: 1rem;">
        ❌ Cliente no encontrado. Verifique la cédula ingresada.
      </div>
    `;
  }
}

// Función para limpiar búsqueda
function limpiarBusquedaEntrenamiento() {
  EL('#cedulaBusqueda').value = '';
  EL('#resultadoBusqueda').innerHTML = '';
  EL('#pasoGenero').style.display = 'none';
  EL('#pasoEntrenamiento').style.display = 'none';
  clienteSeleccionado = null;
  generoSeleccionado = null;
  seccionesEntrenamiento = [];
  contadorSecciones = 0;
}

// Función para seleccionar género
function seleccionarGenero(genero) {
  generoSeleccionado = genero;
  
  // Actualizar botones
  EL('#btnHombre').classList.remove('primary');
  EL('#btnMujer').classList.remove('primary');
  EL(`#btn${genero}`).classList.add('primary');
  
  // Mostrar información del cliente
  EL('#infoClienteEntrenamiento').innerHTML = `
    <div><strong>${clienteSeleccionado.nombres} ${clienteSeleccionado.apellidos}</strong></div>
    <div>Cédula: ${clienteSeleccionado.cedula}</div>
    <div>Género: ${genero}</div>
  `;
  
  // Mostrar paso 3
  EL('#pasoEntrenamiento').style.display = 'block';
  
  // Generar primera sección
  agregarSeccion();
}

// Función para agregar sección
function agregarSeccion() {
  contadorSecciones++;
  const letraSeccion = String.fromCharCode(64 + contadorSecciones); // A, B, C, etc.
  
  const seccion = {
    id: contadorSecciones,
    letra: letraSeccion,
    tipos: [], // Cambiar de 'tipo' a 'tipos' para permitir múltiples
    ejercicios: []
  };
  
  seccionesEntrenamiento.push(seccion);
  renderizarSecciones();
  actualizarResumen();
}

// Función para quitar sección
function quitarSeccion() {
  if (seccionesEntrenamiento.length > 1) {
    seccionesEntrenamiento.pop();
    contadorSecciones--;
    renderizarSecciones();
    actualizarResumen();
  }
}

// Función para renderizar secciones
function renderizarSecciones() {
  const container = EL('#seccionesEntrenamiento');
  container.innerHTML = '';
  
  seccionesEntrenamiento.forEach((seccion, index) => {
    const tiposEjercicio = Object.keys(ejerciciosDB);
    
    // Obtener todos los ejercicios de los tipos seleccionados
    const ejerciciosDisponibles = [];
    seccion.tipos.forEach(tipo => {
      const ejerciciosDelTipo = ejerciciosDB[tipo][generoSeleccionado] || [];
      ejerciciosDelTipo.forEach(ejercicio => {
        if (!ejerciciosDisponibles.find(e => e.nombre === ejercicio)) {
          ejerciciosDisponibles.push({
            nombre: ejercicio,
            tipo: tipo
          });
        }
      });
    });
    
    const seccionHTML = `
      <div style="background: white; border: 1px solid var(--muted); border-radius: 8px; padding: 1.5rem; margin-bottom: 1rem;">
        <h5 style="margin: 0 0 1rem 0; color: var(--text); font-size: 1rem; font-weight: 600;">
          Sección ${seccion.letra}
        </h5>
        
        <div style="display: grid; gap: 1rem;">
          <!-- Tipos de ejercicios disponibles -->
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">
              Seleccionar Tipos de Ejercicios:
            </label>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
              ${tiposEjercicio.map(tipo => `
                <button 
                  onclick="${seccion.tipos.includes(tipo) ? `quitarTipoDirecto(${index}, '${tipo}')` : `agregarTipoDirecto(${index}, '${tipo}')`}"
                  style="
                    background: ${seccion.tipos.includes(tipo) ? 'var(--brand)' : 'var(--panel)'}; 
                    color: ${seccion.tipos.includes(tipo) ? 'white' : 'var(--text)'}; 
                    border: 1px solid ${seccion.tipos.includes(tipo) ? 'var(--brand)' : 'var(--muted)'}; 
                    padding: 0.5rem 1rem; 
                    border-radius: 20px; 
                    cursor: pointer;
                    font-size: 0.8rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                  "
                >
                  ${seccion.tipos.includes(tipo) ? '✓ ' : ''}${tipo}
                </button>
              `).join('')}
            </div>
          </div>
          
          ${seccion.tipos.length > 0 ? `
            <!-- Tipos agregados -->
            <div>
              <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">
                Tipos agregados (${seccion.tipos.length}):
              </label>
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${seccion.tipos.map((tipo, tipoIndex) => `
                  <span style="background: var(--brand); color: white; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; display: flex; align-items: center; gap: 0.5rem;">
                    ${tipo}
                    <button onclick="quitarTipoEjercicio(${index}, ${tipoIndex})" style="background: none; border: none; color: white; cursor: pointer; font-size: 1rem;">✕</button>
                  </span>
                `).join('')}
              </div>
            </div>
            
            <!-- Ejercicios por tipo -->
            ${seccion.tipos.map(tipo => {
              const ejerciciosDelTipo = ejerciciosDB[tipo][generoSeleccionado] || [];
              return `
                <div style="margin-bottom: 1rem;">
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600; font-size: 0.9rem;">
                    Ejercicios de ${tipo}:
                  </label>
                  <div style="max-height: 150px; overflow-y: auto; border: 1px solid var(--muted); border-radius: 6px; padding: 0.5rem; background: rgba(111, 66, 193, 0.05);">
                    ${ejerciciosDelTipo.map(ejercicio => `
                      <label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.3rem; cursor: pointer;">
                        <input 
                          type="checkbox" 
                          value="${ejercicio}"
                          ${seccion.ejercicios.includes(ejercicio) ? 'checked' : ''}
                          onchange="toggleEjercicio(${index}, '${ejercicio}', this.checked)"
                        />
                        <span style="color: var(--text); font-size: 0.9rem;">${ejercicio}</span>
                      </label>
                    `).join('')}
                  </div>
                </div>
              `;
            }).join('')}
            
            <!-- Ejercicios seleccionados -->
            ${seccion.ejercicios.length > 0 ? `
              <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">
                  Ejercicios seleccionados (${seccion.ejercicios.length}):
                </label>
                <div style="background: rgba(102, 187, 106, 0.1); border: 1px solid var(--ok); border-radius: 6px; padding: 0.8rem;">
                  ${seccion.ejercicios.map(ejercicio => `
                    <div style="color: var(--text); margin-bottom: 0.3rem;">• ${ejercicio}</div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          ` : ''}
        </div>
      </div>
    `;
    
    container.innerHTML += seccionHTML;
  });
}


// Función para agregar tipo directamente desde los botones
function agregarTipoDirecto(indexSeccion, tipo) {
  if (!seccionesEntrenamiento[indexSeccion].tipos.includes(tipo)) {
    seccionesEntrenamiento[indexSeccion].tipos.push(tipo);
    renderizarSecciones();
    actualizarResumen();
  }
}

// Función para quitar tipo de ejercicio
function quitarTipoEjercicio(indexSeccion, tipoIndex) {
  const tipo = seccionesEntrenamiento[indexSeccion].tipos[tipoIndex];
  seccionesEntrenamiento[indexSeccion].tipos.splice(tipoIndex, 1);
  
  // Limpiar solo los ejercicios de ese tipo específico
  const ejerciciosDelTipo = ejerciciosDB[tipo][generoSeleccionado] || [];
  seccionesEntrenamiento[indexSeccion].ejercicios = seccionesEntrenamiento[indexSeccion].ejercicios.filter(
    ejercicio => !ejerciciosDelTipo.includes(ejercicio)
  );
  
  renderizarSecciones();
  actualizarResumen();
}

// Función para quitar tipo directamente desde los botones
function quitarTipoDirecto(indexSeccion, tipo) {
  const tipoIndex = seccionesEntrenamiento[indexSeccion].tipos.indexOf(tipo);
  if (tipoIndex > -1) {
    seccionesEntrenamiento[indexSeccion].tipos.splice(tipoIndex, 1);
    
    // Limpiar solo los ejercicios de ese tipo específico
    const ejerciciosDelTipo = ejerciciosDB[tipo][generoSeleccionado] || [];
    seccionesEntrenamiento[indexSeccion].ejercicios = seccionesEntrenamiento[indexSeccion].ejercicios.filter(
      ejercicio => !ejerciciosDelTipo.includes(ejercicio)
    );
    
    renderizarSecciones();
    actualizarResumen();
  }
}

// Función para toggle ejercicio
function toggleEjercicio(indexSeccion, ejercicio, checked) {
  if (checked) {
    seccionesEntrenamiento[indexSeccion].ejercicios.push(ejercicio);
  } else {
    const index = seccionesEntrenamiento[indexSeccion].ejercicios.indexOf(ejercicio);
    if (index > -1) {
      seccionesEntrenamiento[indexSeccion].ejercicios.splice(index, 1);
    }
  }
  actualizarResumen();
}

// Función para actualizar resumen
function actualizarResumen() {
  const resumenDiv = EL('#resumenEntrenamiento');
  const totalEjercicios = seccionesEntrenamiento.reduce((total, seccion) => total + seccion.ejercicios.length, 0);
  
  let resumenHTML = `
    <div style="margin-bottom: 1rem;">
      <div><strong>Cliente:</strong> ${clienteSeleccionado.nombres} ${clienteSeleccionado.apellidos}</div>
      <div><strong>Cédula:</strong> ${clienteSeleccionado.cedula}</div>
      <div><strong>Género:</strong> ${generoSeleccionado}</div>
      <div><strong>Secciones:</strong> ${seccionesEntrenamiento.length}</div>
      <div><strong>Total ejercicios:</strong> ${totalEjercicios}</div>
    </div>
  `;
  
  seccionesEntrenamiento.forEach(seccion => {
    if (seccion.tipos.length > 0 && seccion.ejercicios.length > 0) {
      resumenHTML += `
        <div style="margin-bottom: 1rem; padding: 0.8rem; background: white; border-radius: 6px;">
          <div style="font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">
            Sección ${seccion.letra} - ${seccion.tipos.join(', ')}
          </div>
          ${seccion.ejercicios.map(ejercicio => `
            <div style="color: var(--text); margin-bottom: 0.2rem;">• ${ejercicio}</div>
          `).join('')}
        </div>
      `;
    }
  });
  
  resumenDiv.innerHTML = resumenHTML;
}

// Función para asignar entrenamiento
function asignarEntrenamiento() {
  const totalEjercicios = seccionesEntrenamiento.reduce((total, seccion) => total + seccion.ejercicios.length, 0);
  
  if (totalEjercicios === 0) {
    alert('❌ Debe seleccionar al menos un ejercicio para asignar el entrenamiento');
    return;
  }
  
  const entrenamiento = {
    id: Date.now().toString(),
    clienteId: clienteSeleccionado.id,
    cedula: clienteSeleccionado.cedula,
    genero: generoSeleccionado,
    secciones: seccionesEntrenamiento,
    fechaAsignacion: new Date().toISOString(),
    sucursal: DB.settings.sucursal
  };
  
  // Guardar en la base de datos
  DB.entrenamientos.push(entrenamiento);
  localStorage.setItem('gymdb_v1', JSON.stringify(DB));
  
  alert(`✅ Entrenamiento asignado exitosamente a ${clienteSeleccionado.nombres} ${clienteSeleccionado.apellidos}\n\nSecciones: ${seccionesEntrenamiento.length}\nTotal ejercicios: ${totalEjercicios}`);
  
  // Limpiar formulario
  limpiarEntrenamiento();
}

// Función para limpiar entrenamiento
function limpiarEntrenamiento() {
  limpiarBusquedaEntrenamiento();
}

// FUNCIONES PARA PLANTILLAS DE WHATSAPP

// Función para usar plantilla
function usarPlantilla(plantillaId) {
  const plantilla = DB.plantillasWhatsApp.find(p => p.id === plantillaId);
  if (!plantilla) {
    alert('Plantilla no encontrada');
    return;
  }
  
  abrirModalUsarPlantilla(plantilla);
}

// Función para abrir modal de usar plantilla
function abrirModalUsarPlantilla(plantilla) {
  const modal = document.createElement('div');
  modal.id = 'modalUsarPlantilla';
  modal.className = 'modal';
  modal.style.display = 'flex';
  
  // Procesar variables en el mensaje
  const mensajeConVariables = plantilla.mensaje;
  
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 350px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1.1rem; font-weight: 700;">Enviar Mensaje por WhatsApp</h3>
        <button onclick="cerrarModalUsarPlantilla()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Plantilla:</label>
        <div style="background: var(--panel); border: 1px solid var(--muted); border-radius: 6px; padding: 1rem; font-weight: 600; color: var(--text);">
          ${plantilla.titulo}
        </div>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Número de teléfono:</label>
        <input 
          type="text" 
          id="telefonoPlantilla" 
          placeholder="Ej: 593991234567 (sin + ni espacios)" 
          style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
        />
        <div style="font-size: 0.8rem; color: var(--sub); margin-top: 0.3rem;">
          Formato: código de país + número (ej: 593991234567)
        </div>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
        <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Mensaje personalizado:</label>
        <textarea 
          id="mensajePlantilla" 
          rows="6" 
          style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white; resize: vertical;"
        >${mensajeConVariables}</textarea>
      </div>
      
      <div style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 6px; padding: 1rem; margin-bottom: 1.5rem;">
        <div style="font-weight: 600; color: var(--text); margin-bottom: 0.5rem;">💡 Variables disponibles:</div>
        <div style="font-size: 0.9rem; color: var(--sub); line-height: 1.6;">
          <div><strong>{nombre}</strong> - Nombre del cliente</div>
          <div><strong>{monto}</strong> - Monto de pago/deuda</div>
          <div><strong>{fecha}</strong> - Fecha de vencimiento</div>
          <div><strong>{dias}</strong> - Días restantes</div>
          <div><strong>{sucursal}</strong> - Nombre de la sucursal</div>
        </div>
      </div>
      
      <div style="display: flex; justify-content: flex-end; gap: 1rem;">
        <button onclick="cerrarModalUsarPlantilla()" style="
          background: var(--panel); 
          color: var(--text); 
          border: 1px solid var(--muted); 
          padding: 0.8rem 1.5rem; 
          border-radius: 6px; 
          cursor: pointer;
          font-weight: 600;
        ">
          Cancelar
        </button>
        <button onclick="enviarPlantillaWhatsApp()" style="
          background: #25d366; 
          color: white; 
          border: none; 
          padding: 0.8rem 1.5rem; 
          border-radius: 6px; 
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        ">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          📱 Enviar por WhatsApp
        </button>
      </div>
    </div>
  `;
  
  EL('#modals-container').appendChild(modal);
}

// Función para cerrar modal de usar plantilla
function cerrarModalUsarPlantilla() {
  const modal = EL('#modalUsarPlantilla');
  if (modal) {
    modal.remove();
  }
}

// Función para enviar plantilla por WhatsApp
function enviarPlantillaWhatsApp() {
  const telefono = EL('#telefonoPlantilla').value.trim();
  const mensaje = EL('#mensajePlantilla').value.trim();
  
  if (!telefono) {
    alert('❌ Por favor ingrese un número de teléfono');
    return;
  }
  
  if (!mensaje) {
    alert('❌ Por favor ingrese un mensaje');
    return;
  }
  
  // Validar formato del teléfono
  const telefonoLimpio = telefono.replace(/\D/g, '');
  if (telefonoLimpio.length < 10) {
    alert('❌ El número de teléfono debe tener al menos 10 dígitos');
    return;
  }
  
  // Abrir WhatsApp
  const url = `https://wa.me/${telefonoLimpio}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
  
  // Cerrar modal
  cerrarModalUsarPlantilla();
  
  // Mostrar confirmación
  alert('✅ WhatsApp abierto con el mensaje preparado');
}

// Función para copiar plantilla
function copiarPlantilla(plantillaId) {
  const plantilla = DB.plantillasWhatsApp.find(p => p.id === plantillaId);
  if (!plantilla) {
    alert('Plantilla no encontrada');
    return;
  }
  
  navigator.clipboard.writeText(plantilla.mensaje).then(() => {
    alert('✅ Plantilla copiada al portapapeles');
  }).catch(() => {
    alert('❌ Error al copiar la plantilla');
  });
}

// Función para eliminar plantilla
function eliminarPlantilla(plantillaId) {
  if (!confirm('¿Está seguro de que desea eliminar esta plantilla? Esta acción no se puede deshacer.')) {
    return;
  }
  
  const index = DB.plantillasWhatsApp.findIndex(p => p.id === plantillaId);
  if (index !== -1) {
    DB.plantillasWhatsApp.splice(index, 1);
    localStorage.setItem('gymdb_v1', JSON.stringify(DB));
    alert('✅ Plantilla eliminada exitosamente');
    render();
  } else {
    alert('❌ Error al eliminar la plantilla');
  }
}

// FUNCIONES PARA GESTIÓN DE DESCUENTOS

// Función para abrir modal de nuevo descuento
function abrirModalNuevoDescuento() {
  const modal = document.createElement('div');
  modal.id = 'modalNuevoDescuento';
  modal.className = 'modal';
  modal.style.display = 'flex';
  
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 350px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1.1rem; font-weight: 700;">Nuevo Descuento</h3>
        <button onclick="cerrarModalNuevoDescuento()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>
      
      <form id="formNuevoDescuento">
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Nombre del descuento:</label>
          <input 
            type="text" 
            id="nombreDescuento" 
            placeholder="Ej: Descuento Estudiantil" 
            style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
            required
          />
        </div>
        
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Porcentaje de descuento (%):</label>
          <input 
            type="number" 
            id="porcentajeDescuento" 
            placeholder="Ej: 15" 
            min="1" 
            max="100"
            style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
            required
          />
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
            <input 
              type="checkbox" 
              id="activoDescuento" 
              checked
              style="margin: 0;"
            />
            <span style="color: var(--text); font-weight: 600;">Descuento activo</span>
          </label>
        </div>
        
        <div style="display: flex; justify-content: flex-end; gap: 1rem;">
          <button type="button" onclick="cerrarModalNuevoDescuento()" style="
            background: var(--panel); 
            color: var(--text); 
            border: 1px solid var(--muted); 
            padding: 0.8rem 1.5rem; 
            border-radius: 6px; 
            cursor: pointer;
            font-weight: 600;
          ">
            Cancelar
          </button>
          <button type="submit" style="
            background: var(--ok); 
            color: white; 
            border: none; 
            padding: 0.8rem 1.5rem; 
            border-radius: 6px; 
            cursor: pointer;
            font-weight: 600;
          ">
            Guardar Descuento
          </button>
        </div>
      </form>
    </div>
  `;
  
  EL('#modals-container').appendChild(modal);
  
  // Evento submit del formulario
  modal.querySelector('#formNuevoDescuento').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = EL('#nombreDescuento').value.trim();
    const porcentaje = parseInt(EL('#porcentajeDescuento').value);
    const activo = EL('#activoDescuento').checked;
    
    if (!nombre || !porcentaje || porcentaje < 1 || porcentaje > 100) {
      alert('❌ Por favor complete todos los campos correctamente');
      return;
    }
    
    const nuevoDescuento = {
      id: 'd' + Date.now(),
      nombre: nombre,
      monto: porcentaje,
      activo: activo,
      fechaCreacion: new Date().toISOString()
    };
    
    // Guardar en la base de datos
    DB.descuentos.push(nuevoDescuento);
    localStorage.setItem('gymdb_v1', JSON.stringify(DB));
    
    alert('✅ Descuento creado exitosamente');
    cerrarModalNuevoDescuento();
    
    // Recargar la vista
    render();
  });
}

// Función para cerrar modal de nuevo descuento
function cerrarModalNuevoDescuento() {
  const modal = EL('#modalNuevoDescuento');
  if (modal) {
    modal.remove();
  }
}

// Función para abrir modal de editar descuento
function abrirModalEditarDescuento(id, nombre, porcentaje, activo) {
  const modal = document.createElement('div');
  modal.id = 'modalEditarDescuento';
  modal.className = 'modal';
  modal.style.display = 'flex';
  
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 350px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1.1rem; font-weight: 700;">Editar Descuento</h3>
        <button onclick="cerrarModalEditarDescuento()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>
      
      <form id="formEditarDescuento">
        <input type="hidden" id="editIdDescuento" value="${id}" />
        
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Nombre del descuento:</label>
          <input 
            type="text" 
            id="editNombreDescuento" 
            value="${nombre}"
            style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
            required
          />
        </div>
        
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Porcentaje de descuento (%):</label>
          <input 
            type="number" 
            id="editPorcentajeDescuento" 
            value="${porcentaje}"
            min="1" 
            max="100"
            style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
            required
          />
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
            <input 
              type="checkbox" 
              id="editActivoDescuento" 
              ${activo ? 'checked' : ''}
              style="margin: 0;"
            />
            <span style="color: var(--text); font-weight: 600;">Descuento activo</span>
          </label>
        </div>
        
        <div style="display: flex; justify-content: flex-end; gap: 1rem;">
          <button type="button" onclick="cerrarModalEditarDescuento()" style="
            background: var(--panel); 
            color: var(--text); 
            border: 1px solid var(--muted); 
            padding: 0.8rem 1.5rem; 
            border-radius: 6px; 
            cursor: pointer;
            font-weight: 600;
          ">
            Cancelar
          </button>
          <button type="submit" style="
            background: var(--ok); 
            color: white; 
            border: none; 
            padding: 0.8rem 1.5rem; 
            border-radius: 6px; 
            cursor: pointer;
            font-weight: 600;
          ">
            Actualizar Descuento
          </button>
        </div>
      </form>
    </div>
  `;
  
  EL('#modals-container').appendChild(modal);
  
  // Evento submit del formulario
  modal.querySelector('#formEditarDescuento').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = EL('#editIdDescuento').value;
    const nombre = EL('#editNombreDescuento').value.trim();
    const porcentaje = parseInt(EL('#editPorcentajeDescuento').value);
    const activo = EL('#editActivoDescuento').checked;
    
    if (!nombre || !porcentaje || porcentaje < 1 || porcentaje > 100) {
      alert('❌ Por favor complete todos los campos correctamente');
      return;
    }
    
    // Actualizar descuento en la base de datos
    const index = DB.descuentos.findIndex(d => d.id === id);
    if (index !== -1) {
      DB.descuentos[index] = {
        ...DB.descuentos[index],
        nombre: nombre,
        monto: porcentaje,
        activo: activo
      };
      
      localStorage.setItem('gymdb_v1', JSON.stringify(DB));
      alert('✅ Descuento actualizado exitosamente');
      cerrarModalEditarDescuento();
      render();
    } else {
      alert('❌ Error al actualizar el descuento');
    }
  });
}

// Función para cerrar modal de editar descuento
function cerrarModalEditarDescuento() {
  const modal = EL('#modalEditarDescuento');
  if (modal) {
    modal.remove();
  }
}

// Función para toggle estado de descuento
function toggleEstadoDescuento(descuentoId) {
  const descuento = DB.descuentos.find(d => d.id === descuentoId);
  if (!descuento) {
    alert('Descuento no encontrado');
    return;
  }
  
  descuento.activo = !descuento.activo;
  localStorage.setItem('gymdb_v1', JSON.stringify(DB));
  
  // Actualizar botón visualmente
  const boton = EL(`#semaforo-${descuentoId}`);
  if (boton) {
    if (descuento.activo) {
      boton.style.background = 'var(--ok)';
      boton.title = 'Cambiar a inactivo';
    } else {
      boton.style.background = 'var(--danger)';
      boton.title = 'Cambiar a activo';
    }
  }
  
  alert(descuento.activo ? '✅ Descuento activado' : '⏸️ Descuento desactivado');
}

// Función para eliminar descuento
function eliminarDescuento(descuentoId) {
  if (!confirm('¿Está seguro de que desea eliminar este descuento? Esta acción no se puede deshacer.')) {
    return;
  }
  
  const index = DB.descuentos.findIndex(d => d.id === descuentoId);
  if (index !== -1) {
    DB.descuentos.splice(index, 1);
    localStorage.setItem('gymdb_v1', JSON.stringify(DB));
    alert('✅ Descuento eliminado exitosamente');
    render();
  } else {
    alert('❌ Error al eliminar el descuento');
  }
}

// FUNCIONES PARA GESTIÓN DE MEMBRESÍAS

// Función para abrir modal de nueva membresía
function abrirModalNuevaMembresia() {
  const modal = document.createElement('div');
  modal.id = 'modalNuevaMembresia';
  modal.className = 'modal';
  modal.style.display = 'flex';
  
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 350px; max-height: 90vh; overflow-y: auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1.1rem; font-weight: 700;">Crear Nueva Membresía</h3>
        <button onclick="cerrarModalNuevaMembresia()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>
      
      <form id="formNuevaMembresia">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Nombre de la membresía *</label>
            <input 
              type="text" 
              id="nombreMembresia" 
              placeholder="Ej: Plan Mensual, Plan Anual, Plan Premium" 
              style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
              required
            />
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Precio *</label>
            <div style="position: relative;">
              <span style="position: absolute; left: 0.8rem; top: 50%; transform: translateY(-50%); color: var(--sub);">$</span>
              <input 
                type="number" 
                id="precioMembresia" 
                placeholder="0.00" 
                min="0" 
                step="0.01"
                style="width: 100%; padding: 0.8rem; padding-left: 1.5rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
                required
              />
            </div>
          </div>
        </div>
        
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Descripción</label>
          <textarea 
            id="descripcionMembresia" 
            placeholder="Describe los beneficios y características de esta membresía..." 
            rows="3"
            style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white; resize: vertical;"
          ></textarea>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Duración *</label>
            <select 
              id="duracionMembresia" 
              style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
              required
            >
              <option value="">Seleccionar duración</option>
              <option value="7 días">7 días</option>
              <option value="15 días">15 días</option>
              <option value="30 días">30 días</option>
              <option value="60 días">60 días</option>
              <option value="90 días">90 días</option>
              <option value="180 días">180 días</option>
              <option value="365 días">365 días</option>
            </select>
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Sucursal *</label>
            <select 
              id="sucursalMembresia" 
              style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
              required
            >
              <option value="">Seleccionar sucursal</option>
              <option value="Matriz">Matriz</option>
              <option value="Norte">Norte</option>
              <option value="Sur">Sur</option>
              <option value="Este">Este</option>
              <option value="Oeste">Oeste</option>
            </select>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Estado</label>
            <select 
              id="estadoMembresia" 
              style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
            >
              <option value="activa">Activa</option>
              <option value="inactiva">Inactiva</option>
            </select>
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Tipo de membresía</label>
            <select 
              id="tipoMembresia" 
              style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
            >
              <option value="Regular">Regular</option>
              <option value="Premium">Premium</option>
              <option value="VIP">VIP</option>
              <option value="Estudiante">Estudiante</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Características especiales</label>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="checkbox" id="acceso24h" style="margin: 0;" />
              <span style="color: var(--text); font-size: 0.9rem;">Acceso 24/7</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="checkbox" id="clasesGrupales" style="margin: 0;" />
              <span style="color: var(--text); font-size: 0.9rem;">Clases grupales incluidas</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="checkbox" id="entrenadorPersonal" style="margin: 0;" />
              <span style="color: var(--text); font-size: 0.9rem;">Entrenador personal</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="checkbox" id="estacionamiento" style="margin: 0;" />
              <span style="color: var(--text); font-size: 0.9rem;">Estacionamiento gratuito</span>
            </label>
          </div>
        </div>
        
        <div style="display: flex; justify-content: flex-end; gap: 1rem;">
          <button type="button" onclick="cerrarModalNuevaMembresia()" style="
            background: var(--panel); 
            color: var(--text); 
            border: 1px solid var(--muted); 
            padding: 0.8rem 1.5rem; 
            border-radius: 6px; 
            cursor: pointer;
            font-weight: 600;
          ">
            Cancelar
          </button>
          <button type="submit" style="
            background: var(--ok); 
            color: white; 
            border: none; 
            padding: 0.8rem 1.5rem; 
            border-radius: 6px; 
            cursor: pointer;
            font-weight: 600;
          ">
            Crear Membresía
          </button>
        </div>
      </form>
    </div>
  `;
  
  EL('#modals-container').appendChild(modal);
  
  // Evento submit del formulario
  modal.querySelector('#formNuevaMembresia').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = EL('#nombreMembresia').value.trim();
    const precio = parseFloat(EL('#precioMembresia').value);
    const descripcion = EL('#descripcionMembresia').value.trim();
    const duracion = EL('#duracionMembresia').value;
    const sucursal = EL('#sucursalMembresia').value;
    const estado = EL('#estadoMembresia').value;
    const tipo = EL('#tipoMembresia').value;
    
    if (!nombre || !precio || !duracion || !sucursal) {
      alert('❌ Por favor complete todos los campos obligatorios');
      return;
    }
    
    // Obtener características especiales
    const caracteristicas = [];
    if (EL('#acceso24h').checked) caracteristicas.push('Acceso 24/7');
    if (EL('#clasesGrupales').checked) caracteristicas.push('Clases grupales incluidas');
    if (EL('#entrenadorPersonal').checked) caracteristicas.push('Entrenador personal');
    if (EL('#estacionamiento').checked) caracteristicas.push('Estacionamiento gratuito');
    
    const nuevaMembresia = {
      id: 'm' + Date.now(),
      nombre: nombre,
      frecuencia: duracion,
      monto: precio,
      sucursal: sucursal,
      detalle: descripcion,
      estado: estado,
      tipo: tipo,
      caracteristicas: caracteristicas,
      fechaCreacion: new Date().toISOString()
    };
    
    // Guardar en la base de datos
    DB.memberships.push(nuevaMembresia);
    localStorage.setItem('gymdb_v1', JSON.stringify(DB));
    
    alert('✅ Membresía creada exitosamente');
    cerrarModalNuevaMembresia();
    
    // Recargar la vista
    render();
  });
}

// Función para cerrar modal de nueva membresía
function cerrarModalNuevaMembresia() {
  const modal = EL('#modalNuevaMembresia');
  if (modal) {
    modal.remove();
  }
}

// Función para editar membresía
function editarMembresia(membresiaId) {
  const membresia = DB.memberships.find(m => m.id === membresiaId);
  if (!membresia) {
    alert('Membresía no encontrada');
    return;
  }
  
  abrirModalEditarMembresia(membresia);
}

// Función para abrir modal de editar membresía
function abrirModalEditarMembresia(membresia) {
  const modal = document.createElement('div');
  modal.id = 'modalEditarMembresia';
  modal.className = 'modal';
  modal.style.display = 'flex';
  
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 350px; max-height: 90vh; overflow-y: auto;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1.1rem; font-weight: 700;">Editar Membresía</h3>
        <button onclick="cerrarModalEditarMembresia()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>
      
      <form id="formEditarMembresia">
        <input type="hidden" id="editIdMembresia" value="${membresia.id}" />
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Nombre de la membresía *</label>
            <input 
              type="text" 
              id="editNombreMembresia" 
              value="${membresia.nombre}"
              style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
              required
            />
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Precio *</label>
            <div style="position: relative;">
              <span style="position: absolute; left: 0.8rem; top: 50%; transform: translateY(-50%); color: var(--sub);">$</span>
              <input 
                type="number" 
                id="editPrecioMembresia" 
                value="${membresia.monto}"
                min="0" 
                step="0.01"
                style="width: 100%; padding: 0.8rem; padding-left: 1.5rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
                required
              />
            </div>
          </div>
        </div>
        
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Descripción</label>
          <textarea 
            id="editDescripcionMembresia" 
            rows="3"
            style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white; resize: vertical;"
          >${membresia.detalle || ''}</textarea>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Duración *</label>
            <select 
              id="editDuracionMembresia" 
              style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
              required
            >
              <option value="7 días" ${membresia.frecuencia === '7 días' ? 'selected' : ''}>7 días</option>
              <option value="15 días" ${membresia.frecuencia === '15 días' ? 'selected' : ''}>15 días</option>
              <option value="30 días" ${membresia.frecuencia === '30 días' ? 'selected' : ''}>30 días</option>
              <option value="60 días" ${membresia.frecuencia === '60 días' ? 'selected' : ''}>60 días</option>
              <option value="90 días" ${membresia.frecuencia === '90 días' ? 'selected' : ''}>90 días</option>
              <option value="180 días" ${membresia.frecuencia === '180 días' ? 'selected' : ''}>180 días</option>
              <option value="365 días" ${membresia.frecuencia === '365 días' ? 'selected' : ''}>365 días</option>
            </select>
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Sucursal *</label>
            <select 
              id="editSucursalMembresia" 
              style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
              required
            >
              <option value="Matriz" ${membresia.sucursal === 'Matriz' ? 'selected' : ''}>Matriz</option>
              <option value="Norte" ${membresia.sucursal === 'Norte' ? 'selected' : ''}>Norte</option>
              <option value="Sur" ${membresia.sucursal === 'Sur' ? 'selected' : ''}>Sur</option>
              <option value="Este" ${membresia.sucursal === 'Este' ? 'selected' : ''}>Este</option>
              <option value="Oeste" ${membresia.sucursal === 'Oeste' ? 'selected' : ''}>Oeste</option>
            </select>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Estado</label>
            <select 
              id="editEstadoMembresia" 
              style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
            >
              <option value="activa" ${membresia.estado === 'activa' ? 'selected' : ''}>Activa</option>
              <option value="inactiva" ${membresia.estado === 'inactiva' ? 'selected' : ''}>Inactiva</option>
            </select>
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Tipo de membresía</label>
            <select 
              id="editTipoMembresia" 
              style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
            >
              <option value="Regular" ${membresia.tipo === 'Regular' ? 'selected' : ''}>Regular</option>
              <option value="Premium" ${membresia.tipo === 'Premium' ? 'selected' : ''}>Premium</option>
              <option value="VIP" ${membresia.tipo === 'VIP' ? 'selected' : ''}>VIP</option>
              <option value="Estudiante" ${membresia.tipo === 'Estudiante' ? 'selected' : ''}>Estudiante</option>
              <option value="Senior" ${membresia.tipo === 'Senior' ? 'selected' : ''}>Senior</option>
            </select>
          </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Características especiales</label>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="checkbox" id="editAcceso24h" ${membresia.caracteristicas && membresia.caracteristicas.includes('Acceso 24/7') ? 'checked' : ''} style="margin: 0;" />
              <span style="color: var(--text); font-size: 0.9rem;">Acceso 24/7</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="checkbox" id="editClasesGrupales" ${membresia.caracteristicas && membresia.caracteristicas.includes('Clases grupales incluidas') ? 'checked' : ''} style="margin: 0;" />
              <span style="color: var(--text); font-size: 0.9rem;">Clases grupales incluidas</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="checkbox" id="editEntrenadorPersonal" ${membresia.caracteristicas && membresia.caracteristicas.includes('Entrenador personal') ? 'checked' : ''} style="margin: 0;" />
              <span style="color: var(--text); font-size: 0.9rem;">Entrenador personal</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="checkbox" id="editEstacionamiento" ${membresia.caracteristicas && membresia.caracteristicas.includes('Estacionamiento gratuito') ? 'checked' : ''} style="margin: 0;" />
              <span style="color: var(--text); font-size: 0.9rem;">Estacionamiento gratuito</span>
            </label>
          </div>
        </div>
        
        <div style="display: flex; justify-content: flex-end; gap: 1rem;">
          <button type="button" onclick="cerrarModalEditarMembresia()" style="
            background: var(--panel); 
            color: var(--text); 
            border: 1px solid var(--muted); 
            padding: 0.8rem 1.5rem; 
            border-radius: 6px; 
            cursor: pointer;
            font-weight: 600;
          ">
            Cancelar
          </button>
          <button type="submit" style="
            background: var(--ok); 
            color: white; 
            border: none; 
            padding: 0.8rem 1.5rem; 
            border-radius: 6px; 
            cursor: pointer;
            font-weight: 600;
          ">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  `;
  
  EL('#modals-container').appendChild(modal);
  
  // Evento submit del formulario
  modal.querySelector('#formEditarMembresia').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = EL('#editIdMembresia').value;
    const nombre = EL('#editNombreMembresia').value.trim();
    const precio = parseFloat(EL('#editPrecioMembresia').value);
    const descripcion = EL('#editDescripcionMembresia').value.trim();
    const duracion = EL('#editDuracionMembresia').value;
    const sucursal = EL('#editSucursalMembresia').value;
    const estado = EL('#editEstadoMembresia').value;
    const tipo = EL('#editTipoMembresia').value;
    
    if (!nombre || !precio || !duracion || !sucursal) {
      alert('❌ Por favor complete todos los campos obligatorios');
      return;
    }
    
    // Obtener características especiales
    const caracteristicas = [];
    if (EL('#editAcceso24h').checked) caracteristicas.push('Acceso 24/7');
    if (EL('#editClasesGrupales').checked) caracteristicas.push('Clases grupales incluidas');
    if (EL('#editEntrenadorPersonal').checked) caracteristicas.push('Entrenador personal');
    if (EL('#editEstacionamiento').checked) caracteristicas.push('Estacionamiento gratuito');
    
    // Actualizar membresía en la base de datos
    const index = DB.memberships.findIndex(m => m.id === id);
    if (index !== -1) {
      DB.memberships[index] = {
        ...DB.memberships[index],
        nombre: nombre,
        frecuencia: duracion,
        monto: precio,
        sucursal: sucursal,
        detalle: descripcion,
        estado: estado,
        tipo: tipo,
        caracteristicas: caracteristicas
      };
      
      localStorage.setItem('gymdb_v1', JSON.stringify(DB));
      alert('✅ Membresía actualizada exitosamente');
      cerrarModalEditarMembresia();
      render();
    } else {
      alert('❌ Error al actualizar la membresía');
    }
  });
}

// Función para cerrar modal de editar membresía
function cerrarModalEditarMembresia() {
  const modal = EL('#modalEditarMembresia');
  if (modal) {
    modal.remove();
  }
}

// Función para eliminar membresía
function eliminarMembresia(membresiaId) {
  if (!confirm('¿Está seguro de que desea eliminar esta membresía? Esta acción no se puede deshacer.')) {
    return;
  }
  
  const index = DB.memberships.findIndex(m => m.id === membresiaId);
  if (index !== -1) {
    DB.memberships.splice(index, 1);
    localStorage.setItem('gymdb_v1', JSON.stringify(DB));
    alert('✅ Membresía eliminada exitosamente');
    render();
  } else {
    alert('❌ Error al eliminar la membresía');
  }
}

// FUNCIONES PARA INFORMAR PAGO

// Función para abrir modal de informar pago
function abrirModalInformarPago() {
  const modal = document.createElement('div');
  modal.id = 'modalInformarPago';
  modal.className = 'modal';
  modal.style.display = 'flex';
  
  // Obtener fecha actual
  const fechaActual = new Date().toISOString().split('T')[0];
  
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 350px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1.1rem; font-weight: 700;">Informar Pago</h3>
        <button onclick="cerrarModalInformarPago()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>
      
      <div style="margin-bottom: 1rem;">
        <div style="color: var(--sub); font-size: 0.9rem; margin-bottom: 1rem;">* Campos obligatorios</div>
      </div>
      
      <form id="formInformarPago">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Fecha de Pago *</label>
            <input 
              type="date" 
              id="fechaPago" 
              value="${fechaActual}"
              style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
              required
            />
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Banco *</label>
            <select 
              id="bancoPago" 
              style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
              required
            >
              <option value="">Seleccione</option>
              <option value="banco-pichincha">Banco Pichincha</option>
              <option value="banco-pacifico">Banco del Pacífico</option>
              <option value="banco-produbanco">Produbanco</option>
              <option value="banco-internacional">Banco Internacional</option>
              <option value="banco-guayaquil">Banco de Guayaquil</option>
              <option value="banco-bolivariano">Banco Bolivariano</option>
              <option value="banco-austro">Banco del Austro</option>
              <option value="banco-machala">Banco de Machala</option>
              <option value="efectivo">Efectivo</option>
              <option value="transferencia">Transferencia</option>
              <option value="otro">Otro</option>
            </select>
          </div>
        </div>
        
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Monto *</label>
          <div style="position: relative;">
            <span style="position: absolute; left: 0.8rem; top: 50%; transform: translateY(-50%); color: var(--sub);">$</span>
            <input 
              type="number" 
              id="montoPago" 
              placeholder="Ingrese el monto..." 
              min="0" 
              step="0.01"
              style="width: 100%; padding: 0.8rem; padding-left: 1.5rem; border: 1px solid var(--muted); border-radius: 6px; background: white;"
              required
            />
          </div>
        </div>
        
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Detalle (Opcional)</label>
          <textarea 
            id="detallePago" 
            placeholder="Detalle de tu pago. Ejemplo: Pago mes octubre" 
            rows="3"
            style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white; resize: vertical;"
          ></textarea>
        </div>
        
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Detalle adicional (Opcional)</label>
          <textarea 
            id="detalleAdicionalPago" 
            placeholder="Información adicional del pago" 
            rows="2"
            style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: white; resize: vertical;"
          ></textarea>
        </div>
        
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: var(--text); font-weight: 600;">Creado por</label>
          <input 
            type="text" 
            id="creadoPorPago" 
            value="Admin" 
            readonly 
            style="width: 100%; padding: 0.8rem; border: 1px solid var(--muted); border-radius: 6px; background: #f8f9fa; color: var(--sub);"
          />
        </div>
        
        <div style="
          background: rgba(13, 110, 253, 0.1);
          border: 1px solid rgba(13, 110, 253, 0.3);
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        ">
          <div style="
            width: 24px;
            height: 24px;
            background: rgba(13, 110, 253, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #0d6efd;
          ">⏰</div>
          <div style="color: #0d6efd; font-size: 0.9rem;">
            La actualización de su cuenta puede demorar hasta 3 días hábiles dependiendo de su banco.
          </div>
        </div>
        
        <div style="display: flex; justify-content: flex-end; gap: 1rem;">
          <button type="button" onclick="cerrarModalInformarPago()" style="
            background: var(--panel); 
            color: var(--text); 
            border: 1px solid var(--muted); 
            padding: 0.8rem 1.5rem; 
            border-radius: 6px; 
            cursor: pointer;
            font-weight: 600;
          ">
            Cancelar
          </button>
          <button type="submit" style="
            background: var(--ok); 
            color: white; 
            border: none; 
            padding: 0.8rem 1.5rem; 
            border-radius: 6px; 
            cursor: pointer;
            font-weight: 600;
          ">
            Informar Pago
          </button>
        </div>
      </form>
    </div>
  `;
  
  EL('#modals-container').appendChild(modal);
  
  // Evento submit del formulario
  modal.querySelector('#formInformarPago').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fecha = EL('#fechaPago').value;
    const banco = EL('#bancoPago').value;
    const monto = parseFloat(EL('#montoPago').value);
    const detalle = EL('#detallePago').value.trim();
    const detalleAdicional = EL('#detalleAdicionalPago').value.trim();
    const creadoPor = EL('#creadoPorPago').value;
    
    if (!fecha || !banco || !monto || monto <= 0) {
      alert('❌ Por favor complete todos los campos obligatorios correctamente');
      return;
    }
    
    const nuevoPago = {
      id: 'pago-' + Date.now(),
      fecha: fecha,
      banco: banco,
      monto: monto,
      detalle: detalle || null,
      detalleAdicional: detalleAdicional || null,
      creadoPor: creadoPor,
      fechaCreacion: new Date().toISOString(),
      estado: 'pendiente'
    };
    
    // Inicializar array de pagos si no existe
    if (!DB.pagosInformados) {
      DB.pagosInformados = [];
    }
    
    // Guardar en la base de datos
    DB.pagosInformados.push(nuevoPago);
    localStorage.setItem('gymdb_v1', JSON.stringify(DB));
    
    alert('✅ Pago informado exitosamente');
    cerrarModalInformarPago();
    
    // Recargar la vista
    render();
  });
}

// Función para cerrar modal de informar pago
function cerrarModalInformarPago() {
  const modal = EL('#modalInformarPago');
  if (modal) {
    modal.remove();
  }
}

// Función para ver detalle de pago
function verDetallePago(pagoId) {
  const pago = DB.pagosInformados.find(p => p.id === pagoId);
  if (!pago) {
    alert('Pago no encontrado');
    return;
  }
  
  const modal = document.createElement('div');
  modal.id = 'modalDetallePago';
  modal.className = 'modal';
  modal.style.display = 'flex';
  
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 350px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1.1rem; font-weight: 700;">Detalle del Pago</h3>
        <button onclick="cerrarModalDetallePago()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>
      
      <div style="background: white; border-radius: 8px; padding: 1.5rem; border: 1px solid var(--muted);">
        <div style="display: grid; gap: 1rem;">
          <div>
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.3rem;">Monto</div>
            <div style="font-size: 1.5rem; font-weight: 700; color: var(--ok);">$${pago.monto.toFixed(2)}</div>
          </div>
          
          <div>
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.3rem;">Banco</div>
            <div style="color: var(--sub);">${pago.banco.replace('banco-', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
          </div>
          
          <div>
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.3rem;">Fecha de Pago</div>
            <div style="color: var(--sub);">${pago.fecha}</div>
          </div>
          
          <div>
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.3rem;">Estado</div>
            <div style="
              background: ${pago.estado === 'aprobado' ? 'var(--ok)' : pago.estado === 'rechazado' ? 'var(--danger)' : 'var(--warn)'};
              color: white;
              padding: 0.3rem 0.8rem;
              border-radius: 20px;
              font-size: 0.8rem;
              font-weight: 600;
              display: inline-block;
            ">${pago.estado.charAt(0).toUpperCase() + pago.estado.slice(1)}</div>
          </div>
          
          <div>
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.3rem;">Creado por</div>
            <div style="color: var(--sub);">${pago.creadoPor}</div>
          </div>
          
          <div>
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.3rem;">Fecha de Creación</div>
            <div style="color: var(--sub);">${new Date(pago.fechaCreacion).toLocaleString('es-EC')}</div>
          </div>
          
          ${pago.detalle ? `
            <div>
              <div style="font-weight: 600; color: var(--text); margin-bottom: 0.3rem;">Detalle</div>
              <div style="color: var(--sub);">${pago.detalle}</div>
            </div>
          ` : ''}
          
          ${pago.detalleAdicional ? `
            <div>
              <div style="font-weight: 600; color: var(--text); margin-bottom: 0.3rem;">Detalle Adicional</div>
              <div style="color: var(--sub);">${pago.detalleAdicional}</div>
            </div>
          ` : ''}
        </div>
      </div>
      
      <div style="display: flex; justify-content: flex-end; margin-top: 1.5rem;">
        <button onclick="cerrarModalDetallePago()" style="
          background: var(--panel); 
          color: var(--text); 
          border: 1px solid var(--muted); 
          padding: 0.8rem 1.5rem; 
          border-radius: 6px; 
          cursor: pointer;
          font-weight: 600;
        ">
          Cerrar
        </button>
      </div>
    </div>
  `;
  
  EL('#modals-container').appendChild(modal);
}

// Función para cerrar modal de detalle de pago
function cerrarModalDetallePago() {
  const modal = EL('#modalDetallePago');
  if (modal) {
    modal.remove();
  }
}

// FUNCIONES PARA MODAL DE COMIDA

// Función para abrir modal de comida
function abrirModalComida(clienteId, nombreCliente, imagenUrl, mensaje, tipoComida) {
  const modal = document.createElement('div');
  modal.id = 'modalComida';
  modal.className = 'modal';
  modal.style.display = 'flex';
  
  // Analizar si la comida es saludable
  const analisisComida = analizarComida(tipoComida, mensaje);
  
  // Opciones de mensajes predeterminados basados en el tipo de comida
  const opcionesMensajes = obtenerOpcionesMensajesComida(tipoComida, analisisComida);
  
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 350px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
        <h3 style="margin: 0; color: var(--text); font-size: 1rem; font-weight: 700;">🍽️ Comida de ${nombreCliente}</h3>
        <button onclick="cerrarModalComida()" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: var(--sub);">&times;</button>
      </div>
      
      <!-- Imagen de la comida -->
      <div style="position: relative; height: 120px; overflow: hidden; border-radius: 4px; margin-bottom: 0.6rem;">
        <img 
          src="${imagenUrl}" 
          alt="Comida de ${nombreCliente}"
          style="width: 100%; height: 100%; object-fit: cover;"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div style="
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
        ">🍽️</div>
      </div>
      
      <!-- Información del cliente -->
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.6rem;">
        <div style="
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 0.8rem;
        ">${nombreCliente.charAt(0)}</div>
        <div>
          <div style="font-weight: 600; color: var(--text); font-size: 0.8rem;">${nombreCliente}</div>
          <div style="font-size: 0.7rem; color: var(--sub);">Miembro del gym</div>
        </div>
      </div>
      
      <!-- Mensaje del cliente -->
      <div style="
        background: #f8f9fa;
        border-radius: 4px;
        padding: 0.6rem;
        border-left: 2px solid #667eea;
        margin-bottom: 0.6rem;
      ">
        <div style="font-style: italic; color: var(--text); font-size: 0.75rem; line-height: 1.2;">
          "${mensaje}"
        </div>
      </div>
      
      <!-- Opciones de plantillas -->
      <div style="margin-bottom: 0.6rem">
        <label style="display: block; font-weight: 600; color: var(--text); margin-bottom: 0.3rem; font-size: 0.8rem;">Plantillas:</label>
        <select id="mensajeComida" onchange="actualizarMensajeComida('${nombreCliente}')" style="width: 100%; padding: 0.5rem; border: 1px solid var(--muted); border-radius: 4px; background: white; font-size: 0.75rem;">
          ${opcionesMensajes.map(opcion => `<option value="${opcion.value}">${opcion.text}</option>`).join('')}
        </select>
      </div>
      
      <!-- Caja de mensaje -->
      <div style="margin-bottom: 0.6rem">
        <label style="display: block; font-weight: 600; color: var(--text); margin-bottom: 0.3rem; font-size: 0.8rem;">Mensaje:</label>
        <textarea id="mensajeComidaTexto" rows="3" style="width: 100%; padding: 0.5rem; border: 1px solid var(--muted); border-radius: 4px; background: white; resize: vertical; font-size: 0.75rem;">${obtenerMensajeInicial(tipoComida, nombreCliente)}</textarea>
      </div>
      
      <!-- Botones de acción -->
      <div style="display: flex; justify-content: flex-end; gap: 0.4rem">
        <button type="button" onclick="cerrarModalComida()" style="background: var(--panel); color: var(--text); border: 1px solid var(--muted); padding: 0.5rem 0.8rem; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 0.3rem; font-size: 0.75rem;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Cerrar
        </button>
        <button type="button" onclick="enviarMensajeComidaSeleccionado('${clienteId}', '${nombreCliente}')" style="background: #25d366; color: white; border: none; padding: 0.5rem 0.8rem; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 0.3rem; font-size: 0.75rem;">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          Enviar WhatsApp
        </button>
      </div>
    </div>
  `;
  
  EL('#modals-container').appendChild(modal);
}

// Función para analizar la comida
function analizarComida(tipoComida, mensaje) {
  const mensajeLower = mensaje.toLowerCase();
  
  // Palabras clave para comida saludable
  const palabrasSaludables = ['ensalada', 'pollo', 'quinoa', 'huevos', 'espinacas', 'aguacate', 'pan integral', 'avena', 'frutas', 'vegetales', 'proteína'];
  
  // Palabras clave para comida no saludable
  const palabrasNoSaludables = ['salchipapas', 'frituras', 'grasa', 'azúcar', 'dulces', 'comida rápida', 'hamburguesa', 'pizza'];
  
  // Contar palabras saludables vs no saludables
  const saludables = palabrasSaludables.filter(palabra => mensajeLower.includes(palabra)).length;
  const noSaludables = palabrasNoSaludables.filter(palabra => mensajeLower.includes(palabra)).length;
  
  if (tipoComida === 'saludable' || saludables > noSaludables) {
    return {
      titulo: '¡Excelente elección!',
      descripcion: 'Esta comida es muy saludable y nutritiva. Contiene ingredientes balanceados que te ayudarán a mantener tu energía durante el entrenamiento.',
      icono: '✅',
      color: 'rgba(102, 187, 106, 0.1)',
      borderColor: 'rgba(102, 187, 106, 0.3)',
      mensaje: `Hola ${mensaje.split(' ')[0]}! Está muy bien lo que comes, es una excelente combinación de nutrientes. ¡Sigue así! 💪`
    };
  } else if (tipoComida === 'moderada') {
    return {
      titulo: 'Buena moderación',
      descripcion: 'Es importante mantener el equilibrio en la alimentación. Esta comida está bien para un día especial, pero recuerda mantener una dieta balanceada.',
      icono: '⚖️',
      color: 'rgba(255, 193, 7, 0.1)',
      borderColor: 'rgba(255, 193, 7, 0.3)',
      mensaje: `Hola ${mensaje.split(' ')[0]}! Me gusta que mantengas el equilibrio en tu alimentación. Recuerda que la moderación es clave. ¡Sigue así! 😊`
    };
  } else if (tipoComida === 'tacharra') {
    return {
      titulo: '¡Eso es tacharra!',
      descripcion: 'Las salchipapas son comida chatarra alta en grasas y calorías. Te recomiendo cambiar por opciones más saludables como ensaladas, proteínas magras o vegetales.',
      icono: '🚫',
      color: 'rgba(220, 53, 69, 0.1)',
      borderColor: 'rgba(220, 53, 69, 0.3)',
      mensaje: `Hola ${mensaje.split(' ')[0]}! No, eso es tacharra. Las salchipapas no son buenas para tu salud. Te recomiendo cambiar por ensaladas o proteínas magras. ¡Podemos mejorar juntos! 💪`
    };
  } else {
    return {
      titulo: 'Puedes mejorar',
      descripcion: 'Esta comida no es la más saludable. Te recomiendo incluir más vegetales, proteínas magras y carbohidratos complejos en tu dieta.',
      icono: '⚠️',
      color: 'rgba(220, 53, 69, 0.1)',
      borderColor: 'rgba(220, 53, 69, 0.3)',
      mensaje: `Hola ${mensaje.split(' ')[0]}! Te recomiendo incluir más vegetales y proteínas magras en tu dieta. ¡Podemos mejorar juntos! 💪`
    };
  }
}

// Función para enviar mensaje sobre la comida
function enviarMensajeComida(clienteId, nombreCliente, mensaje) {
  // Simular envío de mensaje
  alert(`📱 Mensaje enviado a ${nombreCliente}:\n\n"${mensaje}"`);
  
  // Cerrar modal
  cerrarModalComida();
}

// Función para obtener opciones de mensajes basadas en el tipo de comida
function obtenerOpcionesMensajesComida(tipoComida, analisisComida) {
  const opciones = [
    { value: 'personalizado', text: 'Mensaje personalizado' },
    { value: 'excelente_saludable', text: 'Excelente 🥗' },
    { value: 'perfecto_objetivo', text: 'Perfecto 💪' },
    { value: 'nutritiva_energia', text: 'Nutritiva 🎯' },
    { value: 'no_saludable', text: 'No sano ⚖️' },
    { value: 'moderacion', text: 'Moderación 😊' },
    { value: 'sugerencia_mejor', text: 'Mejor opción 🥗' },
    { value: 'gracias_compartir', text: 'Gracias 📸' },
    { value: 'sigue_compartiendo', text: 'Sigue 💪' }
  ];
  
  return opciones;
}

// Función para obtener mensaje inicial
function obtenerMensajeInicial(tipoComida, nombreCliente) {
  if (tipoComida === 'saludable') {
    return `¡Hola ${nombreCliente}! 🥗 Excelente elección! Esta comida es muy saludable y nutritiva. Veo que estás cuidando tu alimentación y eso es genial para tus objetivos. ¡Sigue así! 💪`;
  } else if (tipoComida === 'tacharra') {
    return `¡Hola ${nombreCliente}! ⚖️ Eso no es muy sano, recuerda el equilibrio. Un cheat meal de vez en cuando está bien, pero no olvides mantener una alimentación balanceada. ¡Tú puedes! 💪`;
  } else {
    return `¡Hola ${nombreCliente}! 📸 ¡Gracias por compartir tu comida! Me encanta ver que estás activo en la comunidad del gym. ¡Sigue así! 💪`;
  }
}

// Función para actualizar el mensaje cuando cambia la selección
function actualizarMensajeComida(nombreCliente) {
  const mensajeSeleccionado = EL('#mensajeComida').value;
  const textarea = EL('#mensajeComidaTexto');
  
  let mensajeFinal = '';
  
  switch(mensajeSeleccionado) {
    case 'excelente_saludable':
      mensajeFinal = `¡Hola ${nombreCliente}! 🥗 Excelente elección! Esta comida es muy saludable y nutritiva. Veo que estás cuidando tu alimentación y eso es genial para tus objetivos. ¡Sigue así! 💪`;
      break;
    case 'perfecto_objetivo':
      mensajeFinal = `¡Hola ${nombreCliente}! 💪 ¡Perfecto para tu objetivo! Esta comida te ayudará a mantener tu energía durante el entrenamiento. ¡Sigue así! 🎯`;
      break;
    case 'nutritiva_energia':
      mensajeFinal = `¡Hola ${nombreCliente}! 🎯 Muy nutritiva, te dará mucha energía para entrenar. Contiene ingredientes balanceados que te ayudarán a mantener tu rendimiento. ¡Excelente trabajo! 💪`;
      break;
    case 'no_saludable':
      mensajeFinal = `¡Hola ${nombreCliente}! ⚖️ Eso no es muy sano, recuerda el equilibrio. Un cheat meal de vez en cuando está bien, pero no olvides mantener una alimentación balanceada. ¡Tú puedes! 💪`;
      break;
    case 'moderacion':
      mensajeFinal = `¡Hola ${nombreCliente}! 😊 Todo con moderación, no abuses de la comida chatarra. Un día de indulgencia no arruina tu progreso, pero recuerda mantener el equilibrio. ¡Sigue enfocado! 💪`;
      break;
    case 'sugerencia_mejor':
      mensajeFinal = `¡Hola ${nombreCliente}! 🥗 ¿Qué tal si elegimos algo más saludable? Te puedo ayudar con algunas ideas deliciosas y nutritivas que te darán la energía que necesitas. ¡Juntos lograremos tus objetivos! 💪`;
      break;
    case 'gracias_compartir':
      mensajeFinal = `¡Hola ${nombreCliente}! 📸 ¡Gracias por compartir tu comida! Me encanta ver que estás activo en la comunidad del gym. ¡Sigue así! 💪`;
      break;
    case 'sigue_compartiendo':
      mensajeFinal = `¡Hola ${nombreCliente}! 💪 ¡Sigue compartiendo! La comunidad se motiva viendo el progreso de todos. ¡Excelente trabajo! 🎯`;
      break;
    default:
      mensajeFinal = `¡Hola ${nombreCliente}! Gracias por compartir tu comida. ¡Sigue así! 💪`;
  }
  
  if (textarea) {
    textarea.value = mensajeFinal;
  }
}

// Función para enviar mensaje seleccionado
function enviarMensajeComidaSeleccionado(clienteId, nombreCliente) {
  const mensajeFinal = EL('#mensajeComidaTexto').value;
  
  // Simular envío de WhatsApp
  const telefono = '593991234567'; // Número de ejemplo
  const mensajeCodificado = encodeURIComponent(mensajeFinal);
  const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
  
  window.open(urlWhatsApp, '_blank');
  
  // Cerrar modal
  cerrarModalComida();
}

// Función para cerrar modal de comida
function cerrarModalComida() {
  const modal = EL('#modalComida');
  if (modal) {
    modal.remove();
  }
}