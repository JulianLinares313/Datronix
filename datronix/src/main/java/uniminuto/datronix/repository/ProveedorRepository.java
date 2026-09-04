package uniminuto.datronix.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import uniminuto.datronix.entity.Proveedor;

public interface ProveedorRepository extends JpaRepository<Proveedor,Long> {
    
}
