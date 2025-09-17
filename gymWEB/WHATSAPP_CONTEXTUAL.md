# Sistema de WhatsApp Contextual - Admin Gym

## 🎯 Descripción

Se ha implementado un sistema de mensajes de WhatsApp **contextual** que se adapta automáticamente según la pantalla desde donde se llama. En lugar de mostrar todas las opciones en todas las pantallas, ahora solo aparecen las opciones relevantes según el contexto específico.

## 📱 Contextos Implementados

### 1. **Cumpleaños** (`cumpleanos`)
**Ubicación:** Sección de Cumpleaños
**Opciones disponibles:**
- 🎂 Felicitación de Cumpleaños
- 🎁 Cumpleaños con Descuento  
- 🎉 Cumpleaños Especial

**Mensaje predefinido:** `¡Feliz cumpleaños! Que este año esté lleno de salud y éxitos. ¡Disfruta tu día especial! 🎂🎉`

### 2. **Deudores** (`deudores`)
**Ubicación:** Sección de Deudores
**Opciones disponibles:**
- ⚠️ Recordatorio de Pago Urgente
- ❌ Membresía Vencida
- 💰 Oferta de Pago con Descuento

**Mensaje predefinido:** `Hola, tu membresía ha vencido y tienes un saldo pendiente. Renueva ahora para mantener acceso al gimnasio. ¡Te esperamos!`

### 3. **Membresía por Vencer** (`membresia_vencer`)
**Ubicación:** Sección de Membresías a Caducar
**Opciones disponibles:**
- 📅 Renovación Próxima
- 💎 Renovación con Descuento
- ⭐ Renovación Especial

**Mensaje predefinido:** `Tu membresía está por vencer. Renueva ahora y mantén tu rutina activa. ¡No pierdas el acceso a nuestras instalaciones!`

### 4. **Inactivos** (`inactivos`)
**Ubicación:** Sección de Clientes Inactivos
**Opciones disponibles:**
- 🔄 Reactivación de Membresía
- 🎯 Oferta para Cliente Inactivo
- 👋 Bienvenida de Regreso

**Mensaje predefinido:** `¡Te extrañamos! Hace tiempo que no te vemos en el gimnasio. ¿Todo bien? Te invitamos a reactivar tu membresía con una oferta especial.`

### 5. **Nuevos Clientes** (`nuevos_clientes`)
**Ubicación:** Sección de Nuevos Clientes
**Opciones disponibles:**
- 👋 Bienvenida Nuevo Cliente
- 🏋️ Información de Inducción
- ⏰ Horarios y Servicios

**Mensaje predefinido:** `¡Bienvenido/a al gimnasio! Tu membresía está activa desde hoy. Disfruta de todas nuestras instalaciones y clases. ¡Nos vemos pronto!`

### 6. **Renovación** (`renovacion`)
**Ubicación:** Modal de Renovación de Membresía
**Opciones disponibles:**
- ✅ Confirmación de Renovación
- 🙏 Agradecimiento por Renovación
- 🎁 Beneficios de Renovación

**Mensaje predefinido:** `¡Gracias por renovar tu membresía! Tu acceso está activo y listo para seguir entrenando. ¡Disfruta de todos nuestros servicios!`

### 7. **General** (`general`)
**Ubicación:** Detalle de Cliente y sección "Ver todos los clientes"
**Opciones disponibles:**
- ✏️ Mensaje Personalizado
- 📝 Recordatorio General
- ℹ️ Información General

**Nota:** Si el cliente tiene saldo pendiente, automáticamente se cambia a contexto "deudores"

## 🚀 Funcionalidades Adicionales

### **Felicitación Automática de Cumpleaños**
- Botón "🎉 Felicitar" en la sección de cumpleaños
- Envía mensaje automático sin abrir modal
- Mensaje personalizado con el nombre del cliente

### **Teléfono Predefinido**
- Si el cliente tiene teléfono registrado, se predefine automáticamente
- Evita errores de tipeo

### **Detección Automática de Deuda**
- El sistema detecta automáticamente si el cliente tiene saldo pendiente
- Si hay deuda, cambia automáticamente a contexto "deudores"
- Muestra el monto específico de la deuda en los mensajes
- Aviso visual en el modal cuando hay saldo pendiente

### **Mensajes Contextuales**
- Cada contexto tiene mensajes específicos y relevantes
- Emojis y formato apropiado para cada situación
- Plantillas profesionales y amigables

## 🔧 Implementación Técnica

### **Función Principal**
```javascript
abrirModalWhatsApp(contexto = 'general', clienteId = null)
```

### **Parámetros**
- `contexto`: Define qué opciones mostrar
- `clienteId`: ID del cliente para predefinir teléfono

### **Ejemplos de Uso**
```javascript
// Desde sección de cumpleaños
abrirModalWhatsApp('cumpleanos', 'cliente123')

// Desde sección de deudores  
abrirModalWhatsApp('deudores', 'cliente456')

// Desde modal de renovación
abrirModalWhatsApp('renovacion', 'cliente789')
```

## 📋 Beneficios del Sistema

1. **Experiencia de Usuario Mejorada**
   - Solo opciones relevantes en cada pantalla
   - Menos confusión y más eficiencia

2. **Mensajes Profesionales**
   - Plantillas específicas para cada situación
   - Formato consistente y amigable

3. **Automatización**
   - Teléfono predefinido
   - Mensajes automáticos para cumpleaños

4. **Flexibilidad**
   - Opción de mensaje personalizado siempre disponible
   - Fácil personalización de plantillas

## 🎨 Características Visuales

- **Botones con emojis** para fácil identificación
- **Colores contextuales** (verde para WhatsApp, rojo para deudores, etc.)
- **Iconos descriptivos** en cada opción
- **Interfaz limpia** y profesional

## 🔄 Flujo de Trabajo

1. Usuario hace clic en botón WhatsApp desde cualquier sección
2. Sistema detecta el contexto automáticamente
3. Modal se abre con opciones específicas del contexto
4. Teléfono se predefine si está disponible
5. Mensaje se predefine según la plantilla seleccionada
6. Usuario puede personalizar y enviar

Este sistema hace que la comunicación con los clientes sea más eficiente, profesional y contextual, mejorando significativamente la experiencia tanto para el administrador como para los clientes del gimnasio.
