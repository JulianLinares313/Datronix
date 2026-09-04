package uniminuto.datronix.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "cliente")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cliente {

    @Id
    @Column(name = "id_cliente", nullable = false)
    private String idCliente; // Cédula / RUC

    @Column(name = "nombre_cliente", length = 100, nullable = false)
    private String nombreCliente;

    @Column(name = "telefono_cliente", nullable = false)
    private Long telefonoCliente;

    @Column(name = "email_cliente", length = 100)
    private String emailCliente;

    @Column(name = "direccion_cliente", length = 150)
    private String direccionCliente;

    @Column(name = "tipo_cliente", length = 20)
    private String tipoCliente = "REGULAR";


}