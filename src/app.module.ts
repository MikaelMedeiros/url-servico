import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicosModule } from './servicos/servicos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://192.168.99.100/servicodb'), ServicosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
