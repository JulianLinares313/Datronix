package uniminuto.datronix.service;

import java.util.List;

import org.springframework.stereotype.Service;

import uniminuto.datronix.entity.Producto;
import uniminuto.datronix.repository.ProductoRepository;

@Service
public class ProductoService {

    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;

    }

    public List<Producto> listarProductos() {

        return productoRepository.findAll();

    }

    public Producto buscarProductoPorId(Long id) {

        return productoRepository.findById(id).orElseThrow((() -> new RuntimeException("Producto no encontrado")));

    }

    public Producto guardarProducto(Producto producto) {

        return productoRepository.save(producto);

    }

    public void eliminarProducto(Long id) {

        if (!productoRepository.existsById(id)) {

            throw new RuntimeException("Producto no encontrado");

        } else {

            productoRepository.deleteById(id);
        }

    }

}
