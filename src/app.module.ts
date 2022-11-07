import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './api/cliente/cliente.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ClienteModule,
    MulterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
