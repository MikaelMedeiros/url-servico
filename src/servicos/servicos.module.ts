import { Module } from '@nestjs/common';
import { ServicosController } from './servicos.controller';
import { ServicosService } from './servicos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicoSchema } from './schemas/servicos.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Servicos', schema: ServicoSchema}])],
  controllers: [ServicosController],
  providers: [ServicosService]
})
export class ServicosModule {}
