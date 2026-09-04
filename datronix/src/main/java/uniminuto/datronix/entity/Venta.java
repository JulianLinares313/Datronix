package uniminuto.datronix.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "venta")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Venta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_venta", nullable = false)
    private Long idVenta;

    @ManyToOne
    @JoinColumn(name = "id_cliente", referencedColumnName = "id_cliente")
    private Cliente cliente;

    @Column(name = "fecha_venta", nullable = false)
    private LocalDate fechaVenta;

    @Column(name = "total_venta", precision = 10, scale = 2, nullable = false)
    private BigDecimal totalVenta;

    @Column(name = "estado_pago", length = 20)
    private String estadoPago; // "CONTADO" o "CREDITO"

    @Column(name = "direccion_entrega", length = 255)
    private String direccionEntrega; // Nueva: dirección de despacho

    @OneToMany(mappedBy = "venta", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<DetalleVenta> detalleVentaList = new ArrayList<>();


    // Métodos helper para sincronizar la relación bidireccional
    public void addDetalle(DetalleVenta detalle) {
        detalleVentaList.add(detalle);
        detalle.setVenta(this);
    }

    public void removeDetalle(DetalleVenta detalle) {
        detalleVentaList.remove(detalle);
        detalle.setVenta(null);
    }
}