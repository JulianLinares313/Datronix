package uniminuto.datronix.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import uniminuto.datronix.dto.LoginRequest;
import uniminuto.datronix.entity.Usuario;
import uniminuto.datronix.service.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")  //  Permite peticiones desde cualquier origen
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {

        this.usuarioService = usuarioService;

    }

    @GetMapping
    public List<Usuario> listarUsuarios() {

        return usuarioService.listarUsuarios();

    }

    @GetMapping("/{id}")
    public Usuario buscarUsuarioPorId(@PathVariable String id) {

        return usuarioService.buscarUsuarioPorId(id);

    }

    @PostMapping
    public Usuario guardarUsuario(@RequestBody Usuario usuario) {

        return usuarioService.guardarUsuario(usuario);
    }

    @DeleteMapping
    public void eliminarUsuario(@PathVariable String id) {

        usuarioService.eliminarUsuario(id);

    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {

        Usuario usuario = usuarioService.autenticar(loginRequest.getCorreoUsuario(),
                loginRequest.getContrasenaUsuario());

        if (usuario != null) {

            return ResponseEntity.ok(usuario);

        } else {

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Correo o contraseña incorrecta");

        }

    }

}
