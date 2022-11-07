import { Injectable } from '@nestjs/common';
import { Cliente } from './cliente';

@Injectable()
export class ClienteService {
    private clientes: Cliente[] = [
        {
            id: 1,
            data: new Cliente().data,
            nome: "admin1",
            telefone: "0000-0000",
            email: "admin1@gmail.com",
            cep: "0000-000",
            foto: []
        },
        {
            id: 2,
            data: new Cliente().data,
            nome: "admin2",
            telefone: "0000-0000",
            email: "admin2@gmail.com",
            cep: "0000-000",
            foto: []
        },
        {
            id: 3,
            data: new Cliente().data,
            nome: "admin3",
            telefone: "0000-0000",
            email: "admin3@gmail.com",
            cep: "0000-000",
            foto: [],
        },
    ];

    findAll(): Cliente[] {
        return this.clientes;
    }

    findById(id: number): Cliente {
        var dados = this.clientes.find(c => c.id == id);
        return dados;
    }

    save(cliente: Cliente): Cliente[] {
        cliente.id = this.clientes.length + 1,
        cliente.data = new Cliente().data;
        this.clientes.push(cliente);
        return this.clientes;
    }
}
