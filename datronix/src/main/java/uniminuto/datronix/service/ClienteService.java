package uniminuto.datronix.service;

import java.util.List;

import org.springframework.stereotype.Service;

import uniminuto.datronix.entity.Cliente;
import uniminuto.datronix.repository.ClienteRepository;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository) {

        this.clienteRepository = clienteRepository;

    }

    public List<Cliente> listarClientes() {

        return clienteRepository.findAll();

    }

    public Cliente buscarClientePorId(String id) {

        return clienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente no encotrado"));

    }

    public Cliente guardarCliente(Cliente cliente) {

        return clienteRepository.save(cliente);

    }

    public void eliminarCliente(String id) {

        if (!clienteRepository.existsById(id)) {
            throw new RuntimeException("Cliente no encontrado");
        } else {
            
            clienteRepository.deleteById(id);

        }

    }

}
