package uniminuto.datronix.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import uniminuto.datronix.entity.Producto;
import uniminuto.datronix.service.ProductoService;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {

        this.productoService = productoService;

    }

    @GetMapping
    public List<Producto> listarProducto() {

        return productoService.listarProductos();

    }

    @GetMapping("/{id}")
    public Producto BuscarProductoPorId(@PathVariable Long id) {

        return productoService.buscarProductoPorId(id);

    }

    @PostMapping
    public Producto guardarProducto(@RequestBody Producto producto) {

        return productoService.guardarProducto(producto);

    }

    @DeleteMapping("/{id}")
    public void eliminarProducto(@PathVariable Long id) {

        productoService.eliminarProducto(id);

    }

}
