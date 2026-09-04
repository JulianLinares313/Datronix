package uniminuto.datronix.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    @Id
    @Column(name = "idusuario", nullable = false)
    private String idUsuario; // Cédula / documento

    @Column(name = "nombreusuario", length = 255)
    private String nombreUsuario;

    @Column(name = "correousuario", length = 255)
    private String correoUsuario;

    @Column(name = "contrasenausuario", length = 255)
    private String contrasenaUsuario;

}