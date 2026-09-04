package uniminuto.datronix.service;

import java.util.List;

import org.springframework.stereotype.Service;

import uniminuto.datronix.entity.Usuario;
import uniminuto.datronix.repository.UsuarioRepository;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {

        this.usuarioRepository = usuarioRepository;

    }

    public List<Usuario> listarUsuarios() {

        return usuarioRepository.findAll();

    }

    public Usuario buscarUsuarioPorId(String id) {

        return usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encotrado"));

    }

    public Usuario guardarUsuario(Usuario usuario) {

        return usuarioRepository.save(usuario);

    }

    public void eliminarUsuario(String id) {

        if (!usuarioRepository.existsById(id)) {

            throw new RuntimeException("Usuario no encontrado");

        } else {

            usuarioRepository.deleteById(id);

        }

    }

    public Usuario autenticar(String correoUsuario, String contrasenaUsuario) {

        return usuarioRepository.findByCorreoUsuario(correoUsuario)
                .filter(u -> u.getContrasenaUsuario() != null && u.getContrasenaUsuario().equals(contrasenaUsuario))
                .orElse(null);

    }

}