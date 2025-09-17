# Admin Gym - Sistema de Administración de Gimnasio

## 📁 Estructura del Proyecto

El proyecto ha sido reorganizado en una estructura modular para mejor mantenimiento y organización:

```
gymWEB/
├── index.html              # Archivo HTML principal
├── css/
│   └── styles.css         # Todos los estilos CSS
├── js/
│   ├── config.js          # Configuración y constantes
│   ├── database.js        # Base de datos local y seed data
│   ├── auth.js            # Autenticación y login
│   ├── ui.js              # Funciones de interfaz (sidebar, menú)
│   ├── modals.js          # Todos los modales del sistema
│   ├── views.js           # Funciones de renderizado de vistas
│   └── app.js             # Archivo principal de la aplicación
└── README.md              # Este archivo
```

## 🚀 Características

- **Sistema de Login**: Autenticación con credenciales demo (admin@gym.com / admin123)
- **Dashboard Modular**: Diferentes secciones organizadas por funcionalidad
- **Gestión de Clientes**: CRUD completo de clientes del gimnasio
- **Membresías**: Control de planes y fechas de vencimiento
- **Pagos y Cargos**: Sistema de facturación y cobros
- **WhatsApp Integration**: Envío de mensajes con plantillas predefinidas
- **Exportación**: Exportación de datos en formato CSV
- **Responsive Design**: Interfaz adaptativa para diferentes dispositivos

## 🎯 Módulos Principales

### 1. **Ingreso de Clientes**
- Escáner QR (placeholder)
- Búsqueda por cédula
- Información del cliente en tiempo real

### 2. **Gestión de Clientes**
- Lista completa de clientes
- Membresías próximas a vencer
- Clientes inactivos y deudores
- Nuevos clientes y cumpleaños

### 3. **Membresías**
- Planes disponibles (Mensual, Trimestral, Anual)
- Renovación automática
- Control de fechas de vencimiento

### 4. **Pagos y Facturación**
- Registro de pagos
- Cargos y deudas
- Métodos de pago múltiples
- Historial de transacciones

### 5. **Comunicación**
- Plantillas de WhatsApp
- Envío de mensajes automáticos
- Recordatorios de pago

### 6. **Exportación**
- Exportación de clientes
- Exportación de pagos
- Exportación de asistencia

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS
- **JavaScript ES6+**: Funcionalidad modular
- **LocalStorage**: Base de datos local del navegador
- **Responsive Design**: Diseño adaptativo

## 📱 Funcionalidades del Sistema

### **Autenticación**
- Login seguro con validación
- Sesiones persistentes
- Logout automático

### **Navegación**
- Sidebar colapsable
- Menú con submenús
- Navegación por pestañas

### **Gestión de Datos**
- CRUD de clientes
- Control de membresías
- Historial de pagos
- Registro de asistencia

### **Interfaz de Usuario**
- Diseño moderno y limpio
- Modales interactivos
- Tablas responsivas
- Botones de acción contextuales

## 🔧 Instalación y Uso

1. **Clonar o descargar** el proyecto
2. **Abrir** `index.html` en un navegador web moderno
3. **Login** con las credenciales demo:
   - Email: `admin@gym.com`
   - Contraseña: `admin123`
4. **Navegar** por las diferentes secciones del sistema

## 📊 Datos de Prueba

El sistema incluye datos de ejemplo para demostrar las funcionalidades:
- 14 clientes con diferentes estados de membresía
- Planes de membresía variados
- Plantillas de WhatsApp predefinidas
- Descuentos configurados

## 🎨 Personalización

### **Colores y Temas**
Los colores se pueden modificar en `css/styles.css` usando las variables CSS:
```css
:root {
  --brand: #da83e0;        /* Color principal */
  --accent: #da83e0;       /* Color de acento */
  --ok: #66bb6a;           /* Color de éxito */
  --warn: #ffa726;         /* Color de advertencia */
  --danger: #ef5350;       /* Color de error */
}
```

### **Configuración**
Modificar `js/config.js` para cambiar:
- Secciones del menú
- Configuraciones del sistema
- Variables globales

## 🔮 Próximas Funcionalidades

- [ ] Escáner QR funcional
- [ ] Cámara para reconocimiento facial
- [ ] Base de datos real (MySQL/PostgreSQL)
- [ ] API REST para integración
- [ ] Sistema de notificaciones push
- [ ] Reportes avanzados y gráficos
- [ ] Multi-idioma
- [ ] Backup automático de datos

## 📝 Notas de Desarrollo

- **Modular**: Cada funcionalidad está en su propio archivo
- **Mantenible**: Código organizado y comentado
- **Escalable**: Fácil agregar nuevas características
- **Responsive**: Funciona en todos los dispositivos

## 🤝 Contribución

Para contribuir al proyecto:
1. Fork del repositorio
2. Crear rama para nueva funcionalidad
3. Commit de cambios
4. Pull Request con descripción detallada

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver archivo LICENSE para más detalles.

---

**Desarrollado con ❤️ para la gestión eficiente de gimnasios**
