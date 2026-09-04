package uniminuto.datronix.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "detalle_venta")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DetalleVenta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_detalle_venta", nullable = false)
    private Long idDetalleVenta;

    @ManyToOne
    @JoinColumn(name = "id_venta", referencedColumnName = "id_venta")
    private Venta venta;

    @ManyToOne
    @JoinColumn(name = "id_producto", referencedColumnName = "id_producto")
    private Producto producto;

    @Column(name = "cantidad", nullable = false)
    private Long cantidad;

    @Column(name = "precio_unitario", precision = 10, scale = 2, nullable = false)
    private BigDecimal precioUnitario;

    @Column(name = "descuento_item", precision = 10, scale = 2)
    private BigDecimal descuentoItem = BigDecimal.ZERO;

    @Column(name = "subtotal_item", precision = 10, scale = 2, nullable = false)
    private BigDecimal subtotalItem = BigDecimal.ZERO;
}