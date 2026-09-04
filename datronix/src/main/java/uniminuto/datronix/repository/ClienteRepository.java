package uniminuto.datronix.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uniminuto.datronix.entity.Cliente;

public interface ClienteRepository  extends JpaRepository<Cliente,String> {

    
}