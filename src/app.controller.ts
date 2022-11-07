import { Body, Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage, Multer } from 'multer';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor("files[]",20,{
      storage:diskStorage({
        destination:"./uploads",
        filename:(req,file,callback)=>{
           const filename = file.originalname
           callback(null,filename)
        }
      })
    })
  )
  save(@UploadedFiles() files: Express.Multer.File,@Body() cliente:any){
    console.log(files);
    console.log(cliente.nome);

  }
}
