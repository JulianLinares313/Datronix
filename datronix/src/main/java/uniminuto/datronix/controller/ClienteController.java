    package uniminuto.datronix.controller;

    import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.PathVariable;
    import org.springframework.web.bind.annotation.PostMapping;
    import org.springframework.web.bind.annotation.RequestBody;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;

    import uniminuto.datronix.entity.Cliente;
    import uniminuto.datronix.service.ClienteService;

    @RestController
    @RequestMapping("/api/clientes")
    public class ClienteController {

        private final ClienteService clienteService;

        public ClienteController(ClienteService clienteService) {
            this.clienteService = clienteService;

        }

        @GetMapping
        public List<Cliente> listarClientes() {

            return clienteService.listarClientes();

        }

        @GetMapping("/{id}")
        public Cliente buscarPorId(@PathVariable String id) {

            return clienteService.buscarClientePorId(id);

        }

        @PostMapping
        public Cliente guardarCliente(@RequestBody Cliente cliente) {

            return clienteService.guardarCliente(cliente);

        }


        @DeleteMapping("/{id}")
        public void  eliminarCliente(@PathVariable String id){

        clienteService.eliminarCliente(id);

        }

    }
