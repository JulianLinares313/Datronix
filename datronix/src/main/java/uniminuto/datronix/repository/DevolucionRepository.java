package uniminuto.datronix.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import uniminuto.datronix.entity.Devolucion;

public interface DevolucionRepository extends JpaRepository<Devolucion,Long>{
    
}
