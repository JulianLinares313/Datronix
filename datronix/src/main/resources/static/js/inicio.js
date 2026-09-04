// js/inicio.js - Versión para Spring Boot (rutas simples)

const menuItems = document.querySelectorAll('.menu-item');
const btnSalir = document.getElementById('btnSalir');
const fechaSpan = document.getElementById('fechaActual');
const vistaContainer = document.getElementById('vistaContainer');

// ============ RUTAS DE MÓDULOS (SIMPLE PARA SPRING BOOT) ============
const modulos = {
    principal: { titulo: '📊 Panel de Control', archivo: '/modulos/principal.html' },
    ventas: { titulo: '💰 Módulo de Ventas', archivo: '/modulos/ventas.html' },
    productos: { titulo: '📦 Gestión de Productos', archivo: '/modulos/productos.html' },
    clientes: { titulo: '👥 Gestión de Clientes', archivo: '/modulos/clientes.html' },
    proveedores: { titulo: '🏢 Gestión de Proveedores', archivo: '/modulos/proveedores.html' },
    empleados: { titulo: '👔 Gestión de Empleados', archivo: '/modulos/empleados.html' },
    compras: { titulo: '🛒 Gestión de Compras', archivo: '/modulos/compras.html' },
    nomina: { titulo: '📄 Nómina', archivo: '/modulos/nomina.html' },
    devoluciones: { titulo: '↩️ Devoluciones', archivo: '/modulos/devoluciones.html' },
    reportes: { titulo: '📈 Reportes y Estadísticas', archivo: '/modulos/reportes.html' },
    historial: { titulo: '📋 Historial de Ventas', archivo: '/modulos/historial.html' },
    soporte: { titulo: '🛠️ Soporte', archivo: '/modulos/soporte.html' },
    ia: { titulo: '🤖 Asistente IA', archivo: '/modulos/ia.html' }
};

// ============ ACTUALIZAR FECHA ============
function actualizarFecha() {
    const ahora = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    fechaSpan.textContent = 'Hoy es ' + ahora.toLocaleDateString('es-ES', opciones);
}

// ============ CARGAR VISTA ============
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

        console.log(`✅ Módulo ${vistaId} cargado. Esperando inicialización...`);

        // Para clientes, forzar un reintento después de 500ms
        if (vistaId === 'clientes') {
            setTimeout(() => {
                if (typeof window.inicializarClientes === 'function') {
                    console.log('✅ Forzando inicialización desde inicio.js');
                    window.inicializarClientes();
                } else {
                    console.warn('⚠️ window.inicializarClientes no está definida');
                }
            }, 600);
        }

    } catch (error) {
        vistaContainer.innerHTML = `<div class="placeholder"><p>Error al cargar la vista: ${error.message}</p></div>`;
        console.error('❌ Error cargando vista:', error);
    }
}

// ============ EVENTOS DEL MENÚ ============
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

// ============ INICIALIZACIÓN ============
document.addEventListener('DOMContentLoaded', function () {
    actualizarFecha();
    cargarVista('principal');
});

// Exponer funciones globalmente
window.cargarVista = cargarVista;
window.actualizarFecha = actualizarFecha;