import { Body, Controller, Get, Param, Post, UploadedFile,
UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) { }

    @Get()
    async findAll(): Promise<Cliente[]> {
        return this.clienteService.findAll();
    }

    @Get(":id")
    async findById(@Param("id") id: number): Promise<Cliente> {
        return this.clienteService.findById(id);
    }

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination:"./uploads",
            filename: (req, file, callback) => {
                const ext = extname(file.originalname);
                const name = file.originalname;
                callback(null, name);
            },
        })
    }))
    async save(@Body() cliente:any,@UploadedFile() file: Express.Multer.File) {
       
        var cl = new Cliente()
        cl.nome = cliente.nome;
        cl.telefone = cliente.telefone;
        cl.email = cliente.email;
        cl.cep = cliente.cep;
        cl.foto.push(file.originalname)
        return await this.clienteService.save(cl);
    }
}
