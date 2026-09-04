package uniminuto.datronix.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import uniminuto.datronix.entity.Remision;

public interface RemisionRepository extends JpaRepository<Remision,Long> {
    
}
