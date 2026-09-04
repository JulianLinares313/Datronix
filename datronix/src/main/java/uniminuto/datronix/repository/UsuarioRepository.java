package uniminuto.datronix.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import uniminuto.datronix.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {
    Optional<Usuario> findByCorreoUsuario(String correoUsuario);

}
