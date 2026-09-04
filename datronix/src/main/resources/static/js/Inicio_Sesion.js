function validarUsuario() {
    // obtenemos los valores del formulario

    const correoUsuario = document.getElementById('correoUsuario').value.trim();
    const contrasenaUsuario = document.getElementById('contrasenaUsuario').value.trim();

    //validamos que no esten vacion 
    if (!correoUsuario || !contrasenaUsuario) {
        alert('Por favor, Complete los campos!');
        return;

    }

    // creamos un objeto json para enviarselo al   UsuarioController y pueda procesarlo
    const DatosLogin = {

        correoUsuario: correoUsuario,
        contrasenaUsuario: contrasenaUsuario


    }


    //Emviamos los datos al bakend mediante una peticion htpp de tipo Posth 
    fetch('http://localhost:8080/api/usuarios/login', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(DatosLogin)

    }).then(response => {

        if (response.ok) {


            return response.json  //Si los datos se procesaron coreectamente convertimos la respuesta a tipo Json y asi los mostramos en el html


        } else {


            return response.text().then(text => {
                throw new Error(text);
            });
        }


    }).then(data => {


        alert('Bienvenidos ' + data.correoUsuario + '!');
                window.location.href = '/src/main/resources/static/html/inicio.html';


    }).catch(error => {


        alert('Error ' + error.message);


    });




}

