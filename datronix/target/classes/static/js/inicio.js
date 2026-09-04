// js/inicio.js

const menuItems = document.querySelectorAll('.menu-item');
const btnSalir = document.getElementById('btnSalir');
const fechaSpan = document.getElementById('fechaActual');
const vistaContainer = document.getElementById('vistaContainer');

// Definición de módulos y sus archivos HTML
const modulos = {
    principal: { titulo: '📊 Panel de Control', archivo: '/src/main/resources/static/modulos/principal.html' },
    ventas: { titulo: '💰 Módulo de Ventas', archivo: '/src/main/resources/static/modulos/ventas.html' },
    productos: { titulo: '📦 Gestión de Productos', archivo: '/src/main/resources/static/modulos/productos.html' },
    clientes: { titulo: '👥 Gestión de Clientes', archivo: '/src/main/resources/static/modulos/clientes.html' },
    proveedores: { titulo: '🏢 Gestión de Proveedores', archivo: '/src/main/resources/static/modulos/proveedores.html' },
    empleados: { titulo: '👔 Gestión de Empleados', archivo: '/src/main/resources/static/modulos/empleados.html' },
    compras: { titulo: '🛒 Gestión de Compras', archivo: '/src/main/resources/static/modulos/compras.html' },
    nomina: { titulo: '📄 Nómina', archivo: '/src/main/resources/static/modulos/nomina.html' },
    devoluciones: { titulo: '↩️ Devoluciones', archivo: '/src/main/resources/static/modulos/devoluciones.html' },
    reportes: { titulo: '📈 Reportes y Estadísticas', archivo: '/src/main/resources/static/modulos/reportes.html' },
    historial: { titulo: '📋 Historial de Ventas', archivo: '/src/main/resources/static/modulos/historial.html' },
    soporte: { titulo: '🛠️ Soporte', archivo: '/src/main/resources/static/modulos/soporte.html' },
    ia: { titulo: '🤖 Asistente IA', archivo: '/src/main/resources/static/modulos/ia.html' }
};

function actualizarFecha() {
    const ahora = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    fechaSpan.textContent = 'Hoy es ' + ahora.toLocaleDateString('es-ES', opciones);
}

async function cargarVista(vistaId) {
    const modulo = modulos[vistaId];
    if (!modulo) {
        vistaContainer.innerHTML = `<div class="placeholder"><p>Módulo no encontrado</p></div>`;
        return;
    }
    try {
        const response = await fetch(modulo.archivo);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const html = await response.text();
        vistaContainer.innerHTML = html;

        // Actualizar clase activa en el menú
        document.querySelectorAll('.menu-item').forEach(btn => btn.classList.remove('active'));
        const menuBtn = document.querySelector(`.menu-item[data-vista="${vistaId}"]`);
        if (menuBtn) menuBtn.classList.add('active');

        // Inicializar el módulo si tiene función de inicialización
        const initFn = window[`inicializar${vistaId.charAt(0).toUpperCase() + vistaId.slice(1)}`];
        if (typeof initFn === 'function') {
            initFn();
        }
    } catch (error) {
        vistaContainer.innerHTML = `<div class="placeholder"><p>Error al cargar la vista: ${error.message}</p></div>`;
    }
}

// Eventos del menú
menuItems.forEach(btn => {
    btn.addEventListener('click', function () {
        cargarVista(this.dataset.vista);
    });
});

document.querySelector('.btn-ia')?.addEventListener('click', function () {
    cargarVista('ia');
});

btnSalir.addEventListener('click', function () {
    if (confirm('¿Estás seguro de que quieres salir de Datronix?')) {
        window.location.href = '/index.html';
    }
});

// Inicialización
document.addEventListener('DOMContentLoaded', function () {
    actualizarFecha();
    cargarVista('principal');
});

window.cargarVista = cargarVista;
window.actualizarFecha = actualizarFecha;