package uniminuto.datronix.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "proveedor")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Proveedor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_proveedor", nullable = false)
    private Long idProveedor;

    @Column(name = "nombre_empresa", length = 100, nullable = false)
    private String nombreEmpresa;

    @Column(name = "nombre_proveedor", length = 100)
    private String contactoProveedor;

    @Column(name = "telefono_proveedor", nullable = false)
    private Long telefonoProveedor;

    @Column(name = "email_proveedor", length = 100)
    private String emailProveedor;

    @Column(name = "direccion_proveedor", length = 150)
    private String direccionProveedor;
}