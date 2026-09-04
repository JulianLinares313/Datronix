function validarUsuario() {
    // Obtener valores del formulario
    const correoUsuario = document.getElementById('correoUsuario').value.trim();
    const contrasenaUsuario = document.getElementById('contrasenaUsuario').value.trim();

    // Validar que no estén vacíos
    if (!correoUsuario || !contrasenaUsuario) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Crear objeto JSON para enviar al backend
    const DatosLogin = {
        correoUsuario: correoUsuario,
        contrasenaUsuario: contrasenaUsuario
    };

    // Enviar datos al backend mediante POST
    fetch('http://localhost:8080/api/usuarios/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(DatosLogin)
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // ✅ CORREGIDO: agregar paréntesis
        } else {
            // Si el login falla, leer el mensaje de error del backend
            return response.text().then(text => {
                throw new Error(text);
            });
        }
    })
    .then(data => {
        // Login exitoso: mostrar mensaje con el nombre del usuario (si existe)
        const nombreUsuario = data.nombreUsuario || data.correoUsuario || 'Usuario';
        alert('¡Bienvenido, ' + nombreUsuario + '!');
        
        // ✅ Redirigir a la página principal (ajusta la ruta según tu estructura)
        window.location.href = '/html/inicio.html';
    })
    .catch(error => {
        // Mostrar error al usuario
        alert('Error: ' + error.message);
    });
}