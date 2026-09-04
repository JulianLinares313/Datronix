package uniminuto.datronix.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import uniminuto.datronix.entity.Producto;

public interface ProductoRepository extends JpaRepository<Producto,Long>{
    
}
