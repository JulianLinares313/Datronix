package uniminuto.datronix.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import uniminuto.datronix.entity.Empleado;

public interface EmpleadoRepository extends JpaRepository<Empleado,String>{
    
}
