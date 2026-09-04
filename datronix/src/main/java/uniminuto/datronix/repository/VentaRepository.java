package uniminuto.datronix.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import uniminuto.datronix.entity.Venta;

public interface VentaRepository extends JpaRepository<Venta,Long> {
    
}
