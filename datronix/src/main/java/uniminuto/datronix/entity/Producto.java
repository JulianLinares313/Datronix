package uniminuto.datronix.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "producto")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto", nullable = false)
    private Long idProducto;

    @Column(name = "nombre_producto", length = 100, nullable = false)
    private String nombreProducto;

    @Column(name = "categoria_producto", length = 50)
    private String categoriaProducto;

    @Column(name = "marca_producto", length = 50)
    private String marcaProducto;

    @Column(name = "modelo_producto", length = 50)
    private String modeloProducto;

    @Column(name = "descripcion_producto", length = 255)
    private String descripcionProducto;

    @Column(name = "especificaciones_producto", length = 255)
    private String especificacionesProducto;

    @Column(name = "precio_costo_producto", precision = 10, scale = 2, nullable = false)
    private BigDecimal precioCostoProducto;

    @Column(name = "precio_venta_producto", precision = 10, scale = 2, nullable = false)
    private BigDecimal precioVentaProducto;

    @Column(name = "stock_producto", nullable = false)
    private Long stockProducto;

    @Column(name = "stock_minimo_producto", nullable = false)
    private Long stockMinimoProducto;

    @ManyToOne
    @JoinColumn(name = "id_proveedor", referencedColumnName = "id_proveedor")
    private Proveedor proveedor;

    @Column(name = "sku_producto", length = 50, unique = true)
    private String skuProducto;

  
}