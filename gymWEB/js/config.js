// Configuración del sistema
const SECTIONS = [
  { id: "ingreso", label: "Ingreso de clientes" },
  {
    id: "clientes",
    label: "Clientes",
    submenu: [
      { id: "todos-clientes", label: "Ver todos los clientes" },
      { id: "membresias-caducar", label: "Membresías a caducar" },
      { id: "nuevos", label: "Nuevos clientes" },
      { id: "inactivos", label: "Clientes inactivos" },
      { id: "deudores", label: "Deudores" },
      { id: "cumples", label: "Cumpleaños" },
      { id: "registro", label: "Registrar nuevo cliente" },
      { id: "asistencias", label: "Asistencias" },
    ],
  },
  {
    id: "asignacion-entrenamiento",
    label: "Asignación de Entrenamiento",
  },
  {
    id: "gestion",
    label: "Gestión",
    submenu: [
      { id: "plantillas-whatsapp", label: "Plantillas de WhatsApp" },
      { id: "descuentos", label: "Descuentos" },
    ],
  },
  { id: "export", label: "Exportar datos" },
  { id: "membresias", label: "Membresías" },
  { id: "pagos", label: "Informe de pago" },
  { id: "facturacion", label: "Facturación" },
];

// Variables globales
let active = "ingreso";
let currentClientDetail = null;

// Utilidades
const EL = (sel) => document.querySelector(sel);
const NOW = () => new Date();
const fmtDate = (d) =>
  new Date(d).toLocaleDateString("es-EC", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
const fmtTime = (d) =>
  new Date(d).toLocaleTimeString("es-EC", {
    hour: "2-digit",
    minute: "2-digit",
  });
const daysDiff = (a, b) =>
  Math.ceil((new Date(a) - new Date(b)) / (1000 * 60 * 60 * 24));
const uuid = () => crypto.randomUUID();
