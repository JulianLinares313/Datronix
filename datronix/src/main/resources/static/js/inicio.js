// js/inicio.js - Versión definitiva con rutas absolutas

const menuItems = document.querySelectorAll('.menu-item');
const btnSalir = document.getElementById('btnSalir');
const fechaSpan = document.getElementById('fechaActual');
const vistaContainer = document.getElementById('vistaContainer');

// ============ RUTAS DE MÓDULOS (ABSOLUTAS) ============
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

        console.log(`✅ Módulo ${vistaId} cargado. Esperando inicialización...`);

        // Inicializar módulo específico si tiene función global
        const initFnName = `inicializar${vistaId.charAt(0).toUpperCase() + vistaId.slice(1)}`;
        // Esperar un poco para que el script del módulo se cargue
        setTimeout(() => {
            if (typeof window[initFnName] === 'function') {
                console.log(`✅ Ejecutando ${initFnName}() desde inicio.js`);
                window[initFnName]();
            } else {
                console.warn(`⚠️ ${initFnName} no está definida.`);
                // Si no se definió, quizás el script no se cargó, intentamos cargarlo manualmente (solo para clientes)
                if (vistaId === 'clientes') {
                    console.log('⏳ Intentando cargar clientes.js manualmente...');
                    const script = document.createElement('script');
                    script.type = 'module';
                    script.src = '/js/clientes.js';
                    script.onload = () => {
                        console.log('✅ clientes.js cargado manualmente');
                        // Tras cargar, intentar ejecutar la inicialización
                        setTimeout(() => {
                            if (typeof window.inicializarClientes === 'function') {
                                window.inicializarClientes();
                            } else {
                                console.error('❌ window.inicializarClientes sigue sin definirse');
                            }
                        }, 200);
                    };
                    script.onerror = () => console.error('❌ Error al cargar clientes.js manualmente');
                    document.head.appendChild(script);
                }
            }
        }, 500);

    } catch (error) {
        vistaContainer.innerHTML = `<div class="placeholder"><p>Error al cargar la vista: ${error.message}</p></div>`;
        console.error('❌ Error cargando vista:', error);
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